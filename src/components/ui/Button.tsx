import type { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  to,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles = [
    "inline-flex items-center justify-center gap-2",
    "px-6 py-3 text-sm font-semibold",
    "transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-4",
    variant === "primary"
      ? "bg-[#C84A23] text-white hover:bg-[#A93B1B]"
      : "border border-[#203C2D] text-[#203C2D] hover:bg-[#203C2D] hover:text-white",
    className,
  ].join(" ");

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}