import { Image } from 'foamicons';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function PicturesIcon({ isDark, isActive }: IconProps) {
  return (
    <Image
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
