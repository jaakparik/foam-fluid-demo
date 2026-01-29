import { Volume2 } from './foamicons/Volume2';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function AudioIcon({ isDark, isActive }: IconProps) {
  return (
    <Volume2
      size={20}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
