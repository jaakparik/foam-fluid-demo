import { Share } from './foamicons/Share';

interface ShareIconProps {
  isDark?: boolean;
  isActive?: boolean;
}

export function ShareIcon({ isDark = false, isActive = false }: ShareIconProps) {
  return (
    <Share
      size={16}

      style={{ color: 'currentColor' }}
    />
  );
}
