interface FilterCardWithCountProps {
  label: string;
  count: string;
}

export function FilterCardWithCount({ label, count }: FilterCardWithCountProps) {
  return (
    <div className="filter-card">
      <p className="filter-card-label">{label}</p>
      <p className="filter-card-count">{count}</p>
    </div>
  );
}
