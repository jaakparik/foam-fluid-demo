import { Users } from './foamicons/Users';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
  size?: number;
}

export function PersonsIcon({ isDark, isActive, size = 20 }: IconProps) {
  return (
    <Users
      size={size}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
