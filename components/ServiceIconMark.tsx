import {
  Activity,
  Apple,
  Baby,
  Brain,
  HeartPulse,
  Scale,
  Stethoscope,
  Syringe,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon } from "@/lib/services";

const icons: Record<ServiceIcon, LucideIcon> = {
  stethoscope: Stethoscope,
  syringe: Syringe,
  baby: Baby,
  heart: HeartPulse,
  apple: Apple,
  wind: Wind,
  scale: Scale,
  brain: Brain,
  activity: Activity,
};

export function ServiceIconMark({
  name,
  className = "h-5 w-5",
}: {
  name: ServiceIcon;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden strokeWidth={1.6} />;
}
