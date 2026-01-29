import { Cog } from './foamicons/Cog';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function CogwheelIcon({ isDark, isActive }: IconProps) {
  return (
    <Cog
      size={20}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
