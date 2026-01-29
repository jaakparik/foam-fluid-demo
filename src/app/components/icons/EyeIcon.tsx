import { Eye } from './foamicons/Eye';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function EyeIcon({ isDark, isActive }: IconProps) {
  return (
    <Eye
      size={20}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
