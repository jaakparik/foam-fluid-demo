interface FilterCardProps {
  icon: React.ReactNode;
  text: string;
}

export function FilterCard({ icon, text }: FilterCardProps) {
  return (
    <div
      className="filter-card gap-2 h-full"
      style={{
        padding: "12px 16px",
        border: "1px solid var(--table-border-header)",
      }}
    >
      {icon}
      <p
        className="filter-card-text text-[12px] whitespace-nowrap"
        style={{ color: "var(--nav-item-text-subtle)" }}
      >
        {text}
      </p>
    </div>
  );
}