import { MaximizeDuotone } from 'foamicons';

interface FullscreenIconProps {
  className?: string;
}

export function FullscreenIcon({ className }: FullscreenIconProps) {
  return (
    <MaximizeDuotone
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
