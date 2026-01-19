import { MediaKits } from 'foamicons';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function MediaPacksIcon({ isDark, isActive }: IconProps) {
  return (
    <MediaKits
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
