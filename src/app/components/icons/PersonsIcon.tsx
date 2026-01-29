import { Users } from './foamicons/Users';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function PersonsIcon({ isDark, isActive }: IconProps) {
  return (
    <Users
      size={20}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
