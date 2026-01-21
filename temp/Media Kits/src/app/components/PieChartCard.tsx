import { PieChart, Pie, Cell } from "recharts";

interface PieChartCardProps {
  title: string;
  value: string;
  femalePercent: number;
  malePercent: number;
}

export function PieChartCard({
  title,
  value,
  femalePercent,
  malePercent,
}: PieChartCardProps) {
  const data = [
    { name: "Female", value: femalePercent },
    { name: "Male", value: malePercent },
  ];

  const COLORS = ["#f66d9b", "#6574cd"];

  return (
    <div
      className="filter-card relative overflow-hidden"
      style={{
        minHeight: "40px",
        width: "100%",
        padding: "6px",
        paddingLeft: "16px",
        paddingRight: "16px",
        gap: "16px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid var(--table-border-header)",
      }}
    >
      {/* Content layer - left side */}
      <div className="flex flex-col gap-1 mt-2">
        <p
          className="filter-card-label"
          style={{ color: "var(--nav-item-text-subtle)" }}
        >
          {title}
        </p>
        <p
          className="filter-card-count whitespace-nowrap"
          style={{
            fontSize: "16px",
            lineHeight: "28px",
            fontWeight: 300,
            color: "var(--nav-item-text-active)",
          }}
        >
          {value}
        </p>
      </div>

      {/* Pie Chart layer - right side */}
      <div className="flex flex-col items-end gap-1">
        <PieChart width={40} height={40}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={12}
            outerRadius={20}
            paddingAngle={0}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}