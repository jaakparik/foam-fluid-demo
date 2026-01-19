import { Calendar } from 'foamicons';

export function CalendarIcon() {
  return (
    <Calendar
      className="filter-card-icon"
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      style={{ color: 'var(--filter-card-icon)' }}
    />
  );
}
