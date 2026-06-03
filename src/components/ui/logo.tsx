import * as React from "react";

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-10 w-10 ${className || ""}`}
      {...props}
    >
      {/* Background shape */}
      <rect width="48" height="48" rx="14" fill="#DDEFE0" />
      
      {/* Inner subtle glow / drop shadow simulation */}
      <rect x="2" y="2" width="44" height="44" rx="12" fill="white" fillOpacity="0.4" />
      
      {/* Outer C - Slate Gray */}
      <path
        d="M32 17C30.5 15 28 14 25 14C19.5 14 15 18.5 15 24C15 29.5 19.5 34 25 34C28 34 30.5 33 32 31"
        stroke="#2D3748"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Inner C / Connection - Muted Lavender */}
      <path
        d="M26 21C25 20 23.8 19.5 22.5 19.5C20 19.5 18 21.5 18 24C18 26.5 20 28.5 22.5 28.5C23.8 28.5 25 28 26 27"
        stroke="#E6E2F1"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Network connection dot */}
      <circle cx="32" cy="17" r="3.5" fill="#2D3748" />
      <circle cx="26" cy="21" r="2.5" fill="#E6E2F1" />
    </svg>
  );
}
