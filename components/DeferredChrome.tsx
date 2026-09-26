"use client";

import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(
  () => import("@/components/FloatingWhatsApp").then((m) => m.FloatingWhatsApp),
  { ssr: false },
);
const MobileActionBar = dynamic(
  () => import("@/components/MobileActionBar").then((m) => m.MobileActionBar),
  { ssr: false },
);

export function DeferredChrome() {
  return (
    <>
      <div className="h-16 md:hidden" aria-hidden />
      <MobileActionBar />
      <FloatingWhatsApp />
    </>
  );
}
