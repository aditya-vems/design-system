import { cn } from "@/hooks/utils";
import { LogoMark } from "./logomark";

interface LogoLineProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function LogoLine({ className, size = 32, style }: LogoLineProps) {
  return (
    <span
      aria-label="VEMS"
      role="img"
      className={cn("inline-flex items-center gap-2 leading-none", className)}
      style={style}
    >
      <LogoMark size={size} />
      <span className="font-semibold tracking-tight" style={{ fontSize: Math.round(size * 0.8) }}>
        VEMS
      </span>
    </span>
  );
}
