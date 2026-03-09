"use client";

import { track } from "@vercel/analytics";

type TrackedCTALinkProps = {
  href: string;
  product: string;
  location: string;
  className?: string;
  children: React.ReactNode;
};

export function TrackedCTALink({
  href,
  product,
  location,
  className,
  children,
}: TrackedCTALinkProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        track("cta_click", { product, location });
      }}
    >
      {children}
    </a>
  );
}
