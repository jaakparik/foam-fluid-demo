import { MediaKits } from './foamicons/MediaKits';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function MediaPacksIcon({ isDark, isActive }: IconProps) {
  return (
    <MediaKits
      size={20}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
