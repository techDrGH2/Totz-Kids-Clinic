import { medicalDisclaimer } from "@/lib/clinic";

export function MedicalDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm leading-6 text-muted ${className}`}>
      {medicalDisclaimer}
    </p>
  );
}
