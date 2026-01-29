import { Image } from './foamicons/Image';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function PicturesIcon({ isDark, isActive }: IconProps) {
  return (
    <Image
      size={20}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
