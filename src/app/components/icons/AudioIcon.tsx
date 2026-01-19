import { Volume2 } from 'foamicons';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function AudioIcon({ isDark, isActive }: IconProps) {
  return (
    <Volume2
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
