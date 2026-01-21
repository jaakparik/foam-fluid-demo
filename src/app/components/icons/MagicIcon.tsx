import { SparklesDuotone } from 'foamicons';

interface MagicIconProps {
  className?: string;
}

export function MagicIcon({ className }: MagicIconProps) {
  return (
    <SparklesDuotone
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
