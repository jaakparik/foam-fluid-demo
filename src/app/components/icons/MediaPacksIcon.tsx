import { MediaKits } from './foamicons/MediaKits';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
  size?: number;
}

export function MediaPacksIcon({ isDark, isActive, size = 20 }: IconProps) {
  return (
    <MediaKits
      size={size}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
