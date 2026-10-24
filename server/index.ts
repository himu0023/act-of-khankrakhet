import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import Database from "better-sqlite3";
import { z } from "zod";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.API_PORT ?? 3001);

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const databasePath = path.join(currentDir, "data", "inquiries.sqlite");

const db = new Database(databasePath);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS inquiries (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    activity TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

const allowedActivities = [
  "general-enquiry",
  "trekking",
  "hiking",
  "rafting",
  "kayaking",
  "outdoor-rock-climbing",
  "heritage-tourism",
  "religious-tourism",
  "navigation",
  "survival-training",
  "route-marking",
  "shelter-making",
  "tent-pitching",
  "first-aid",
  "disaster-management-training",
  "basic-rock-climbing-bouldering",
  "fitness-camps",
  "recreation-team-building-games",
  "yoga",
  "meditation",
  "wildlife-photography",
] as const;

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z
    .string()
    .trim()
    .min(10)
    .max(18)
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }),
  email: z.union([
    z.literal(""),
    z.string().trim().email().max(254),
  ]).optional().default(""),
  activity: z.enum(allowedActivities),
  message: z.string().trim().min(10).max(1500),
});

app.disable("x-powered-by");
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN ?? "http://localhost:5173",
    methods: ["GET", "POST"],
  }),
);
app.use(express.json({ limit: "10kb" }));

const inquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    error: "Too many enquiries. Please try again later or call the team.",
  },
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/inquiries", inquiryLimiter, (req, res) => {
  const result = inquirySchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Please check the submitted fields.",
      details: result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  const inquiry = result.data;
  const id = randomUUID();

  try {
    const insert = db.prepare(`
      INSERT INTO inquiries (id, name, phone, email, activity, message)
      VALUES (@id, @name, @phone, @email, @activity, @message)
    `);

    insert.run({
      id,
      name: inquiry.name,
      phone: inquiry.phone,
      email: inquiry.email || null,
      activity: inquiry.activity,
      message: inquiry.message,
    });

    return res.status(201).json({
      message: "Your enquiry has been received.",
      reference: id,
    });
  } catch {
    return res.status(500).json({
      error: "We could not save your enquiry. Please call the team instead.",
    });
  }
});

app.listen(port, () => {
  console.log(`ACT OF KHANKRAKHET API running on http://localhost:${port}`);
});