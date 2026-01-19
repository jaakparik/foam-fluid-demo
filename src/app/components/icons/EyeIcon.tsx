import { Eye } from 'foamicons';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function EyeIcon({ isDark, isActive }: IconProps) {
  return (
    <Eye
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
