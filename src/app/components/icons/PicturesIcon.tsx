import { Image } from './foamicons/Image';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
  size?: number;
}

export function PicturesIcon({ isDark, isActive, size = 20 }: IconProps) {
  return (
    <Image
      size={size}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
