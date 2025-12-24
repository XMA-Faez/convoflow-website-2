import {
  ClipboardCheck,
  Brain,
  Rocket,
  BarChart3,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  clipboardCheck: ClipboardCheck,
  brain: Brain,
  rocket: Rocket,
  barChart3: BarChart3,
  refreshCw: RefreshCw,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || ClipboardCheck;
}
