'use client'

// app/[locale]/page.tsx (Next.js App Router example)
// import { useTranslations } from "next-intl";
import { useIntl } from '@/intl/use-intl';
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Section3() {
//   const t = useTranslations("Banner");

const { fta: t } = useIntl();

  return (
    <div className="relative w-full h-[300px]">
    <svg
      width="100%"
      height="200"
      viewBox="0 0 800 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Background shape */}
      <rect width="800" height="200" fill="url(#grad)" rx="16" />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#4f46e5" }} />
          <stop offset="100%" style={{ stopColor: "#9333ea" }} />
        </linearGradient>
      </defs>

      {/* Localized title */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="32"
        fontWeight="bold"
      >
        {t({ id: "new.key" })}
      </text>

      {/* Localized subtitle */}
      <text
        x="50%"
        y="70%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="18"
      >
        {t({ id: "new.key.7" })}
      </text>
    </svg>
    </div>
  );
}