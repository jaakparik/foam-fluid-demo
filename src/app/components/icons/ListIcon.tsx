import { ListDuotone } from 'foamicons';

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function ListIcon({ isDark, isActive }: IconProps) {
  return (
    <ListDuotone
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    />
  );
}
