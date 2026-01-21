import { SearchDuotone } from './SearchDuotone';

interface SearchIconProps {
  className?: string;
  color?: string;
}

export function SearchIcon({ className = "size-[16px]", color }: SearchIconProps) {
  return (
    <SearchDuotone
      size={16}
      strokeWidth={1}
      className={className}
      style={{
        color: color || 'var(--search-text-default)',
      }}
    />
  );
}
