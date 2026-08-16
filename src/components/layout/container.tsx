import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  /** Full-width dashboard pages (trim/platform) vs. the narrower editorial
      width used by marketing pages (home, /models index). */
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-6 md:px-10 ${wide ? "max-w-[90rem]" : "max-w-5xl"} ${className}`}
    >
      {children}
    </div>
  );
}
