import { Maximize } from 'foamicons';

interface FullscreenIconProps {
  className?: string;
}

export function FullscreenIcon({ className }: FullscreenIconProps) {
  return (
    <Maximize
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
