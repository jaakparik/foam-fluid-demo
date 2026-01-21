import { HouseDuotone } from 'foamicons';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function HomeIcon({ isDark, isActive }: IconProps) {
  return (
    <HouseDuotone
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
