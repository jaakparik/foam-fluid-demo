import { CalendarDuotone } from 'foamicons';

export function CalendarIcon() {
  return (
    <CalendarDuotone
      className="filter-card-icon"
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      style={{ color: 'var(--filter-card-icon)' }}
    />
  );
}
