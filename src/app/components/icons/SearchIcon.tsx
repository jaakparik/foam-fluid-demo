import { SearchDuotone } from 'foamicons';

interface SearchIconProps {
  className?: string;
  color?: string;
}

export function SearchIcon({ className = "size-[16px]", color }: SearchIconProps) {
  return (
    <SearchDuotone
      size={16}
      strokeWidth="var(--icon-stroke-width)"
      className={className}
      style={{
        color: color || 'var(--search-text-default)',
      }}
    />
  );
}
