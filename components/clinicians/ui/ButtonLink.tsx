import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "border-transparent bg-[#3d61cd] text-white hover:bg-[#2f42cb]",
  outline:
    "border-[#031974] bg-white text-[#031974] hover:bg-[#f1eefe]",
} as const;

export type ButtonLinkVariant = keyof typeof variants;

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[48px] items-center justify-center whitespace-nowrap rounded-[20px] border border-solid px-6 pb-[10.37px] pt-[8.63px] font-['Poppins',sans-serif] text-[15px] font-semibold leading-[24.75px] transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}