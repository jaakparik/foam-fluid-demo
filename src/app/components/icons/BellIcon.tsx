import { Bell } from './foamicons/Bell';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function BellIcon({ isDark, isActive }: IconProps) {
  return (
    <Bell
      size={20}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
