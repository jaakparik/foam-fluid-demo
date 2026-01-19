import { Share } from 'foamicons';

interface ShareIconProps {
  isDark?: boolean;
  isActive?: boolean;
}

export function ShareIcon({ isDark = false, isActive = false }: ShareIconProps) {
  return (
    <Share
      size={16}
      strokeWidth="var(--icon-stroke-width)"
      style={{ color: 'currentColor' }}
    />
  );
}
