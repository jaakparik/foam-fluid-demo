import { ChartContainer } from "./ui/chart";
import { RadialBarChart, RadialBar, PolarRadiusAxis, Label } from "recharts";

const chartData = [{ month: "current", male: 543, female: 1271, others: 181 }];

const chartConfig = {
  male: {
    label: "Male",
    color: "#80a9f9",
  },
  female: {
    label: "Female",
    color: "#155fef",
  },
  others: {
    label: "Others",
    color: "#ccddff",
  },
};

export function GenderDistributionChart() {
  const totalAudience = chartData[0].male + chartData[0].female + chartData[0].others;
  const femalePercentage = Math.round((chartData[0].female / totalAudience) * 100);
  const malePercentage = Math.round((chartData[0].male / totalAudience) * 100);
  const othersPercentage = Math.round((chartData[0].others / totalAudience) * 100);

  return (
    <div
      style={{
        backgroundColor: "var(--filter-card-bg)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "12px",
        padding: "16px",
        width: "100%",
        height: "240px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          flex: "1",
          minHeight: "0",
        }}
      >
        {/* Title */}
        <div style={{ display: "flex", gap: "6px", alignItems: "center", width: "100%", flexShrink: "0" }}>
          <h4
            style={{
              color: "var(--table-text-primary)",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "20px",
            }}
          >
            Gender distribution
          </h4>
        </div>

        {/* Chart and Legend Container */}
        <div
          style={{
            flex: "1 1 0",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "1px",
            minWidth: "1px",
            width: "100%",
          }}
        >
          {/* Chart Container */}
          <div style={{ width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", flexShrink: "0", height: "100px" }}>
            <ChartContainer config={chartConfig} className="w-full h-[120px]">
              <RadialBarChart
                data={chartData}
                startAngle={180}
                endAngle={0}
                innerRadius={45}
                outerRadius={85}
                cx="50%"
                cy={95}
                barSize={18}
              >
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) - 12}
                              style={{
                                fill: "var(--table-text-primary)",
                                fontSize: "20px",
                                fontWeight: "700",
                                fontFamily: "Founders Grotesk, sans-serif",
                              }}
                            >
                              {femalePercentage}%
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 6}
                              style={{
                                fill: "var(--filter-card-text)",
                                fontSize: "12px",
                                fontFamily: "Founders Grotesk, sans-serif",
                              }}
                            >
                              Female
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
                <RadialBar
                  dataKey="female"
                  stackId="a"
                  cornerRadius={8}
                  fill="var(--color-female)"
                  className="stroke-transparent"
                />
                <RadialBar
                  dataKey="male"
                  stackId="a"
                  cornerRadius={8}
                  fill="var(--color-male)"
                  className="stroke-transparent"
                />
                <RadialBar
                  dataKey="others"
                  stackId="a"
                  cornerRadius={8}
                  fill="var(--color-others)"
                  className="stroke-transparent"
                />
              </RadialBarChart>
            </ChartContainer>
          </div>

          {/* Legend - Single row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", alignItems: "center", justifyContent: "center", width: "100%", flexShrink: "0" }}>
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <div style={{ borderRadius: "2px", flexShrink: "0", width: "8px", height: "8px", backgroundColor: "#80a9f9" }} />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", lineHeight: "0" }}>
                <p className="filter-card-label" style={{ lineHeight: "16px", color: "var(--filter-card-text)", whiteSpace: "pre" }}>
                  {malePercentage}% Male
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <div style={{ borderRadius: "2px", flexShrink: "0", width: "8px", height: "8px", backgroundColor: "#ccddff" }} />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", lineHeight: "0" }}>
                <p className="filter-card-label" style={{ lineHeight: "16px", color: "var(--filter-card-text)", whiteSpace: "pre" }}>
                  {othersPercentage}% Others
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
