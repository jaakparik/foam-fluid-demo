import { ShareDuotone } from 'foamicons';

interface ShareIconProps {
  isDark?: boolean;
  isActive?: boolean;
}

export function ShareIcon({ isDark = false, isActive = false }: ShareIconProps) {
  return (
    <ShareDuotone
      size={16}
      strokeWidth="var(--icon-stroke-width)"
      style={{ color: 'currentColor' }}
    />
  );
}
