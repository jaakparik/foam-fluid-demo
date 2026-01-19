import { Cog } from 'foamicons';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function CogwheelIcon({ isDark, isActive }: IconProps) {
  return (
    <Cog
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
