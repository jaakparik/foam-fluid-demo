import { BarChart, Bar } from "recharts";

interface BarChartCardProps {
  title: string;
  subtitle: string;
  value: string;
  data?: number[];
  color?: string;
}

export function BarChartCard({
  title,
  subtitle,
  value,
  data = [3, 5, 2, 8, 4, 7, 6],
  color = "#6574cd",
}: BarChartCardProps) {
  // Convert data array to recharts format
  const chartData = data.map((val, index) => ({
    value: val,
    index,
  }));

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
          className="filter-card-count"
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 500,
            color: "var(--nav-item-text-active)",
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Chart layer - right side with value below */}
      <div className="flex flex-col items-end gap-1">
        <BarChart
          width={64}
          height={24}
          data={chartData}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <Bar
            dataKey="value"
            fill={color}
            radius={[2, 2, 0, 0]}
          />
        </BarChart>
        <p
          className="quickresults-info"
          style={{
            color: "var(--nav-item-text-default)",
            fontSize: "11px",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}