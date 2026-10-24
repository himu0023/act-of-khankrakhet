import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Phone,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { activities } from "../data/activities";
import { allLearningActivities } from "../data/outdoorLearning";
import { site } from "../data/site";

const allActivities = [...activities, ...allLearningActivities];

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid contact number.")
    .max(18, "Enter a valid contact number.")
    .refine(
      (value) => {
        const digits = value.replace(/\D/g, "");
        return digits.length >= 10 && digits.length <= 15;
      },
      "Enter a valid contact number.",
    ),
  email: z
    .string()
    .trim()
    .refine(
      (value) => value === "" || z.string().email().safeParse(value).success,
      "Enter a valid email address or leave this field blank.",
    ),
  activity: z.string().min(1, "Please select an activity."),
  message: z
    .string()
    .trim()
    .min(10, "Please enter at least 10 characters.")
    .max(1500, "Please keep your message under 1,500 characters."),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export default function Contact() {
  const [searchParams] = useSearchParams();

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const requestedActivity = searchParams.get("activity");
  const matchingActivity = allActivities.find(
    (activity) => activity.id === requestedActivity,
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      activity: matchingActivity?.id ?? "",
      message: "",
    },
  });

  async function handleInquiry(values: InquiryFormValues) {
    setSubmissionStatus("idle");
    setSubmissionMessage("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result: {
        message?: string;
        error?: string;
      } = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ??
            "We could not submit your enquiry. Please try again or call the team.",
        );
      }

      setSubmissionMessage(
        result.message ?? "Your enquiry has been received.",
      );
      setSubmissionStatus("success");
    } catch (error) {
      setSubmissionStatus("error");
      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : "Unable to reach the server. Please try again or call the team.",
      );
    }
  }

  return (
    <main className="bg-[#F4EFE4] text-[#292B26]">
      {/* Hero */}
      <section className="bg-[#203C2D] text-[#F4EFE4]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E6B49B]">
            Contact ACT OF KHANKRAKHET
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Let’s talk about your next experience.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Have a question about an adventure or outdoor learning activity?
            Explore the contact options below to get in touch with the team.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
        {/* Contact information */}
        <aside>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C84A23]">
            Get in touch
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#203C2D]">
            Start with a conversation.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#292B26]/80">
            Contact the team directly to ask about advertised activities and
            discuss arrangements.
          </p>

          <div className="mt-8 space-y-4">
            {site.phones.map((phone) => (
              <a
                key={phone.number}
                href={`tel:${phone.number}`}
                className="group flex items-start gap-4 border-t border-[#B5A58C]/60 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C84A23]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center bg-[#203C2D] text-[#F4EFE4]">
                  <Phone size={19} aria-hidden="true" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-[0.14em] text-[#817D63]">
                    {phone.label}
                  </span>
                  <span className="mt-1 block text-lg font-semibold text-[#203C2D] group-hover:text-[#C84A23]">
                    {phone.number}
                  </span>
                </span>

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="mt-1 text-[#817D63]"
                />
              </a>
            ))}

            <div className="flex items-start gap-4 border-t border-[#B5A58C]/60 py-5">
              <span className="flex size-11 shrink-0 items-center justify-center bg-[#203C2D] text-[#F4EFE4]">
                <MapPin size={19} aria-hidden="true" />
              </span>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#817D63]">
                  Location
                </p>
                <address className="mt-2 text-sm not-italic leading-7 text-[#203C2D]">
                  {site.location}
                </address>
              </div>
            </div>
          </div>

          <div className="mt-7 border-l-2 border-[#C84A23] bg-[#EEE6D8] p-5">
            <p className="text-sm font-semibold text-[#203C2D]">
              Prefer to call?
            </p>
            <p className="mt-2 text-sm leading-6 text-[#292B26]/80">
              Use either listed number to contact the team directly.
            </p>
          </div>
        </aside>

        {/* Inquiry form */}
        <div className="min-w-0 border border-[#B5A58C]/60 bg-white/40 p-5 sm:p-8 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C84A23]">
            Activity enquiry
          </p>

          <h2 className="mt-3 font-serif text-3xl text-[#203C2D] sm:text-4xl">
            What would you like to know?
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#292B26]/75">
            Fill in the details below to prepare your enquiry. Fields marked
            with an asterisk are required.
          </p>

          {matchingActivity && (
            <div className="mt-6 border-l-2 border-[#C84A23] bg-[#EEE6D8] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#817D63]">
                Selected activity
              </p>
              <p className="mt-1 font-serif text-xl text-[#203C2D]">
                {matchingActivity.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-[#292B26]/75">
                You can change this selection in the form.
              </p>
            </div>
          )}

          {requestedActivity && !matchingActivity && (
            <p className="mt-6 border-l-2 border-[#C84A23] bg-[#EEE6D8] p-4 text-sm leading-6 text-[#292B26]">
              The requested activity could not be identified. Please select
              an activity below or choose “General enquiry”.
            </p>
          )}

          <form
            className="mt-8 space-y-6"
            noValidate
            onSubmit={handleSubmit(handleInquiry)}
          >
            <div>
              <label
                htmlFor="inquiry-name"
                className="mb-2 block text-sm font-semibold text-[#203C2D]"
              >
                Your name *
              </label>
              <input
                id="inquiry-name"
                autoComplete="name"
                {...register("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "inquiry-name-error" : undefined}
                className="w-full border border-[#B5A58C] bg-[#F4EFE4] px-4 py-3 text-base text-[#292B26] outline-none focus:border-[#203C2D] focus:ring-2 focus:ring-[#203C2D]/20"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p
                  id="inquiry-name-error"
                  role="alert"
                  className="mt-2 text-sm text-red-800"
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="inquiry-phone"
                  className="mb-2 block text-sm font-semibold text-[#203C2D]"
                >
                  Contact number *
                </label>
                <input
                  id="inquiry-phone"
                  type="tel"
                  autoComplete="tel"
                  {...register("phone")}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? "inquiry-phone-error" : undefined
                  }
                  className="w-full border border-[#B5A58C] bg-[#F4EFE4] px-4 py-3 text-base text-[#292B26] outline-none focus:border-[#203C2D] focus:ring-2 focus:ring-[#203C2D]/20"
                  placeholder="Your phone number"
                />
                {errors.phone && (
                  <p
                    id="inquiry-phone-error"
                    role="alert"
                    className="mt-2 text-sm text-red-800"
                  >
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="inquiry-email"
                  className="mb-2 block text-sm font-semibold text-[#203C2D]"
                >
                  Email address
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "inquiry-email-error" : undefined
                  }
                  className="w-full border border-[#B5A58C] bg-[#F4EFE4] px-4 py-3 text-base text-[#292B26] outline-none focus:border-[#203C2D] focus:ring-2 focus:ring-[#203C2D]/20"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p
                    id="inquiry-email-error"
                    role="alert"
                    className="mt-2 text-sm text-red-800"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="inquiry-activity"
                className="mb-2 block text-sm font-semibold text-[#203C2D]"
              >
                Activity or enquiry type *
              </label>
              <select
                id="inquiry-activity"
                {...register("activity")}
                aria-invalid={Boolean(errors.activity)}
                aria-describedby={
                  errors.activity ? "inquiry-activity-error" : undefined
                }
                className="w-full border border-[#B5A58C] bg-[#F4EFE4] px-4 py-3 text-base text-[#292B26] outline-none focus:border-[#203C2D] focus:ring-2 focus:ring-[#203C2D]/20"
              >
                <option value="">Select an activity</option>
                <option value="general-enquiry">General enquiry</option>

                <optgroup label="Adventures">
                  {activities.map((activity) => (
                    <option key={activity.id} value={activity.id}>
                      {activity.title}
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Outdoor learning">
                  {allLearningActivities.map((activity) => (
                    <option key={activity.id} value={activity.id}>
                      {activity.title}
                    </option>
                  ))}
                </optgroup>
              </select>
              {errors.activity && (
                <p
                  id="inquiry-activity-error"
                  role="alert"
                  className="mt-2 text-sm text-red-800"
                >
                  {errors.activity.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="inquiry-message"
                className="mb-2 block text-sm font-semibold text-[#203C2D]"
              >
                Your message *
              </label>
              <textarea
                id="inquiry-message"
                rows={5}
                {...register("message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "inquiry-message-error" : undefined
                }
                className="w-full resize-y border border-[#B5A58C] bg-[#F4EFE4] px-4 py-3 text-base text-[#292B26] outline-none focus:border-[#203C2D] focus:ring-2 focus:ring-[#203C2D]/20"
                placeholder="Tell us what you would like to enquire about..."
              />
              {errors.message && (
                <p
                  id="inquiry-message-error"
                  role="alert"
                  className="mt-2 text-sm text-red-800"
                >
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-3 bg-[#203C2D] px-6 py-4 text-sm font-semibold text-[#F4EFE4] transition-colors hover:bg-[#C84A23] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C84A23] disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none sm:w-auto"
            >
              {isSubmitting ? "Sending enquiry..." : "Send enquiry"}
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>

            {submissionStatus !== "idle" && (
              <div
                role={submissionStatus === "error" ? "alert" : "status"}
                aria-live="polite"
                className={`border-l-4 p-5 ${
                  submissionStatus === "success"
                    ? "border-[#203C2D] bg-[#E5E9DF]"
                    : "border-[#C84A23] bg-[#EEE6D8]"
                }`}
              >
                <div className="flex items-start gap-3">
                  {submissionStatus === "success" ? (
                    <CheckCircle2
                      size={21}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#203C2D]"
                    />
                  ) : (
                    <AlertCircle
                      size={21}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#C84A23]"
                    />
                  )}

                  <div>
                    <p className="font-semibold text-[#203C2D]">
                      {submissionStatus === "success"
                        ? "Enquiry received"
                        : "Enquiry not confirmed"}
                    </p>

                    <p className="mt-2 text-sm leading-7 text-[#292B26]/85">
                      {submissionMessage}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}