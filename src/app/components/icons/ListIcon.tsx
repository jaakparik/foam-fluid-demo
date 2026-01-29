import { List } from './foamicons/List';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function ListIcon({ isDark, isActive }: IconProps) {
  return (
    <List
      size={20}

      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
