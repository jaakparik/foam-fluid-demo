import { List } from './foamicons/List';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
  size?: number;
}

export function ListIcon({ isDark, isActive, size = 20 }: IconProps) {
  return (
    <List
      size={size}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
