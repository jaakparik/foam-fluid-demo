import { ArrowDownUp } from 'foamicons';

interface SortIconProps {
  opacity?: number;
  color?: string;
}

export function SortIcon({ opacity = 1, color = "#54657D" }: SortIconProps) {
  return (
    <div style={{ opacity }}>
      <ArrowDownUp
        size={16}
        strokeWidth="var(--icon-stroke-width)"
        style={{ color }}
      />
    </div>
  );
}
