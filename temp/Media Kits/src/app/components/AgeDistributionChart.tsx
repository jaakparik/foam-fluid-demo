import { motion } from "motion/react";

const ageData = [
  { age: "13-17", percentage: 80, color: "#155fef" },
  { age: "18-24", percentage: 50, color: "#80a9f9" },
  { age: "25-34", percentage: 30, color: "#aec8f9" },
  { age: "35-44", percentage: 10, color: "#ccddff" },
  { age: "45-64", percentage: 1, color: "#e5eeff" },
  { age: "65+", percentage: 0, color: "#e5eeff" },
];

export function AgeDistributionChart() {
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
        <div style={{ display: "flex", gap: "6px", alignItems: "center", flexShrink: "0" }}>
          <h4
            style={{
              color: "var(--table-text-primary)",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "20px",
            }}
          >
            Age distribution
          </h4>
        </div>

        {/* Chart Container */}
        <div style={{ display: "flex", gap: "8px", width: "100%", flex: "1", minHeight: "0" }}>
          {/* Age Labels */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexShrink: "0",
            }}
          >
            {ageData.map((item) => (
              <div
                key={item.age}
                style={{ display: "flex", alignItems: "center", height: "15px" }}
              >
                <p
                  className="filter-card-label"
                  style={{
                    color: "var(--filter-card-text)",
                    lineHeight: "15px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.age}
                </p>
              </div>
            ))}
          </div>

          {/* Bars Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              flex: "1",
              minHeight: "0",
              justifyContent: "space-between",
            }}
          >
            {ageData.map((item, index) => (
              <div
                key={item.age}
                style={{
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                  height: "15px",
                  width: "100%",
                }}
              >
                {item.percentage > 0 ? (
                  <>
                    <motion.div
                      style={{
                        height: "15px",
                        borderRadius: "4px",
                        flexShrink: "0",
                        backgroundColor: item.color,
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />
                    <motion.p
                      className="filter-card-label"
                      style={{
                        color: "var(--filter-card-text)",
                        lineHeight: "15px",
                        flexShrink: "0",
                        whiteSpace: "nowrap",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + 0.3,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      {item.percentage}%
                    </motion.p>
                  </>
                ) : (
                  <motion.p
                    className="filter-card-label"
                    style={{
                      color: "var(--filter-card-text)",
                      lineHeight: "15px",
                      flexShrink: "0",
                      whiteSpace: "nowrap",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    {item.percentage}%
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
