import { Pin } from 'foamicons';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function PinIcon({ isDark, isActive }: IconProps) {
  return (
    <Pin
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
