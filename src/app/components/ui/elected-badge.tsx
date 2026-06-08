import { Award } from "lucide-react";

export type ElectedBadgeSize = "sm" | "md" | "lg";

interface ElectedBadgeProps {
  size?: ElectedBadgeSize;
  className?: string;
}

export function ElectedBadge({ size = "md", className = "" }: ElectedBadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 20,
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-yellow-400 text-blue-900 font-bold tracking-wide shadow-md ${sizeClasses[size]} ${className}`}
      style={{
        backgroundColor: "#FFED00",
        color: "#001C54",
      }}
    >
      <Award size={iconSizes[size]} className="flex-shrink-0" />
      <span>SEÇİLEN BAŞKAN</span>
    </div>
  );
}
