import { House } from './foamicons/House';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function HomeIcon({ isDark, isActive }: IconProps) {
  return (
    <House
      size={20}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
