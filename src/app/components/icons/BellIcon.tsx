import { Bell } from 'foamicons';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function BellIcon({ isDark, isActive }: IconProps) {
  return (
    <Bell
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
