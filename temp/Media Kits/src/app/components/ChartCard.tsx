import { LineChart, Line } from "recharts";

interface ChartCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  data: number[];
  color: string;
}

export function ChartCard({
  title,
  value,
  change,
  isPositive,
  data,
  color,
}: ChartCardProps) {
  // Convert data array to recharts format
  const chartData = data.map((value, index) => ({
    value,
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
            fontSize: "16px",
            lineHeight: "28px",
            fontWeight: 300,
            color: "var(--nav-item-text-active)",
          }}
        >
          {value}
        </p>
      </div>

      {/* Chart layer - right side with percentage below */}
      <div className="flex flex-col items-end gap-1">
        <LineChart
          width={64}
          height={24}
          data={chartData}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            fill={`${color}1a`}
            dot={false}
          />
        </LineChart>
        <div className="flex items-center gap-1">
          <span
            style={{
              color: "var(--nav-item-icon-default)",
              fontSize: "11px",
            }}
          >
            {isPositive ? "▲" : "▼"}
          </span>
          <p
            className="quickresults-info"
            style={{
              color: "var(--nav-item-text-default)",
              fontSize: "11px",
            }}
          >
            {change}
          </p>
        </div>
      </div>
    </div>
  );
}