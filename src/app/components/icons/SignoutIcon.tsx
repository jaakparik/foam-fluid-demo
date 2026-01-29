import { LogOut } from './foamicons/LogOut';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function SignoutIcon({ isDark, isActive }: IconProps) {
  return (
    <LogOut
      size={20}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
