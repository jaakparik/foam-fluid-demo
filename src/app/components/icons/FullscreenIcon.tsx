import { Maximize } from './foamicons/Maximize';

interface FullscreenIconProps {
  className?: string;
}

export function FullscreenIcon({ className }: FullscreenIconProps) {
  return (
    <Maximize
      size={20}

      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
