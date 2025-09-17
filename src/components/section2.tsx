'use client'

// app/[locale]/page.tsx (Next.js App Router example)
// import { useTranslations } from "next-intl";
import { useIntl } from '@/intl/use-intl';
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Banner() {
//   const t = useTranslations("Banner");

const { fta: t } = useIntl();

  return (
    <div className="relative w-full h-[300px]">
      <Image
        src="/images/banner-base.jpg"
        alt={t({ id: "alt" })} // localized alt text
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl font-bold">{t({ id: "new.key" })}</h1>
        <p className="text-lg mt-2">{t({ id: "new.key.7" })}</p>
      </div>
    </div>
  );
}