import { MediaKitsDuotone } from 'foamicons';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function MediaPacksIcon({ isDark, isActive }: IconProps) {
  return (
    <MediaKitsDuotone
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
