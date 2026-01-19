import { ChartContainer } from "./ui/chart";
import { Pie, PieChart } from "recharts";

const countryData = [
  { country: "USA", value: 1630, fill: "#155fef" },
  { country: "Canada", value: 543, fill: "#80a9f9" },
  { country: "Mexico", value: 543, fill: "#aec8f9" },
  { country: "Others", value: 271, fill: "#e6eeff" },
];

export function CountryDistributionChart() {
  const totalValue = countryData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div
      style={{
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: "0" }}>
          <h4
            style={{
              color: "var(--table-text-primary)",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "20px",
            }}
          >
            Country distribution
          </h4>
        </div>

        {/* Chart Container */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "120px",
            width: "100%",
          }}
        >
          {/* Pie Chart */}
          <div style={{ position: "relative", flexShrink: "0", width: "100px", height: "100px" }}>
            <ChartContainer config={{}} className="w-full h-full">
              <PieChart width={100} height={100}>
                <Pie
                  data={countryData}
                  dataKey="value"
                  nameKey="country"
                  innerRadius={0}
                  outerRadius={50}
                  cx="50%"
                  cy="50%"
                />
              </PieChart>
            </ChartContainer>
          </div>

          {/* Legend */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              flexShrink: "0",
            }}
          >
            {countryData.map((item) => {
              const percentage = ((item.value / totalValue) * 100).toFixed(0);
              return (
                <div
                  key={item.country}
                  style={{ display: "flex", gap: "6px", alignItems: "center" }}
                >
                  <div
                    style={{
                      borderRadius: "2px",
                      flexShrink: "0",
                      width: "8px",
                      height: "8px",
                      backgroundColor: item.fill,
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", lineHeight: "0" }}>
                    <p
                      className="filter-card-label"
                      style={{
                        lineHeight: "16px",
                        color: "var(--filter-card-text)",
                        whiteSpace: "pre",
                      }}
                    >
                      {percentage}% {item.country}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}