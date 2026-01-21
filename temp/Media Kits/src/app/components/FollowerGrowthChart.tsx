import { useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

// Data for different time periods
const data12Months = [
  { label: "Jan", followers1: 1800, followers2: 1500 },
  { label: "Feb", followers1: 1900, followers2: 1600 },
  { label: "Mar", followers1: 2050, followers2: 1750 },
  { label: "Apr", followers1: 2100, followers2: 1800 },
  { label: "May", followers1: 2200, followers2: 1900 },
  { label: "Jun", followers1: 2350, followers2: 2050 },
  { label: "Jul", followers1: 2450, followers2: 2150 },
  { label: "Aug", followers1: 2600, followers2: 2300 },
  { label: "Sep", followers1: 2800, followers2: 2500 },
  { label: "Oct", followers1: 3050, followers2: 2750 },
  { label: "Nov", followers1: 3350, followers2: 3050 },
  { label: "Dec", followers1: 3700, followers2: 3400 },
];

const dataLastMonth = [
  { label: "1", followers1: 3200, followers2: 2900 },
  { label: "3", followers1: 3250, followers2: 2950 },
  { label: "5", followers1: 3320, followers2: 3020 },
  { label: "7", followers1: 3400, followers2: 3100 },
  { label: "9", followers1: 3480, followers2: 3180 },
  { label: "11", followers1: 3550, followers2: 3250 },
  { label: "13", followers1: 3620, followers2: 3320 },
  { label: "15", followers1: 3680, followers2: 3380 },
  { label: "17", followers1: 3750, followers2: 3450 },
  { label: "19", followers1: 3820, followers2: 3520 },
  { label: "21", followers1: 3900, followers2: 3600 },
  { label: "23", followers1: 4000, followers2: 3700 },
  { label: "25", followers1: 4120, followers2: 3820 },
  { label: "27", followers1: 4250, followers2: 3950 },
  { label: "29", followers1: 4400, followers2: 4100 },
  { label: "30", followers1: 4550, followers2: 4250 },
];

const dataLastWeek = [
  { label: "Mon", followers1: 4000, followers2: 3700 },
  { label: "Tue", followers1: 4100, followers2: 3800 },
  { label: "Wed", followers1: 4250, followers2: 3950 },
  { label: "Thu", followers1: 4400, followers2: 4100 },
  { label: "Fri", followers1: 4600, followers2: 4300 },
  { label: "Sat", followers1: 4850, followers2: 4550 },
  { label: "Sun", followers1: 5100, followers2: 4800 },
];

type TimePeriod = "12months" | "month" | "week";

const periodData = {
  "12months": data12Months,
  "month": dataLastMonth,
  "week": dataLastWeek,
};

const periodLabels = {
  "12months": "Last 12 months",
  "month": "Last month",
  "week": "Last week",
};

const periodMetrics = {
  "12months": { followers: 3700, growth: 105.6, growthAbsolute: 1900 },
  "month": { followers: 4550, growth: 42.2, growthAbsolute: 1350 },
  "week": { followers: 5100, growth: 27.5, growthAbsolute: 1100 },
};

const chartConfig = {
  followers1: {
    label: "Followers 1",
    color: "#aec8f9",
  },
  followers2: {
    label: "Followers 2",
    color: "#155fef",
  },
};

// Instagram Icon SVG
function InstagramIcon() {
  return (
    <div className="relative shrink-0 size-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="instagram-gradient-1" x1="0.5" x2="4.66154" y1="1" y2="9.29231">
            <stop stopColor="#1200E7" />
            <stop offset="0.868122" stopColor="#ED1389" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="instagram-gradient-2" x1="1.48462" x2="7.19231" y1="14.6231" y2="0.246154">
            <stop stopColor="#FC2C46" />
            <stop offset="0.0001" stopColor="#FFE16A" />
            <stop offset="0.39864" stopColor="#FC3746" />
            <stop offset="0.85431" stopColor="#FC2C46" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M8 2.26109C9.86912 2.26109 10.0905 2.26809 10.8287 2.3018C11.5113 2.33294 11.8819 2.44685 12.1285 2.54279C12.4554 2.66986 12.6885 2.82135 12.9335 3.06631C13.1784 3.31127 13.3302 3.54441 13.457 3.87125C13.5529 4.11789 13.6668 4.48852 13.698 5.17109C13.7316 5.90927 13.7387 6.1306 13.7387 7.99978C13.7387 9.86895 13.7317 10.0902 13.698 10.8284C13.6668 11.511 13.5529 11.8816 13.457 12.1282C13.3299 12.4551 13.1784 12.6882 12.9335 12.9332C12.6885 13.1781 12.4554 13.3299 12.1285 13.4567C11.8819 13.5526 11.5113 13.6666 10.8287 13.6977C10.0906 13.7314 9.86918 13.7384 8 13.7384C6.13082 13.7384 5.90955 13.7314 5.17137 13.6977C4.4888 13.6666 4.11817 13.5526 3.87153 13.4567C3.54463 13.3296 3.31155 13.1781 3.06659 12.9332C2.82168 12.6882 2.66986 12.4551 2.54307 12.1282C2.44708 11.8816 2.33322 11.511 2.30208 10.8284C2.26843 10.0903 2.26137 9.8689 2.26137 7.99978C2.26137 6.13066 2.26837 5.90933 2.30208 5.17109C2.33322 4.48852 2.44713 4.11789 2.54307 3.87125C2.67014 3.54435 2.82163 3.31127 3.06659 3.06631C3.31155 2.8214 3.54469 2.66958 3.87153 2.54279C4.11817 2.44685 4.4888 2.33294 5.17137 2.3018C5.9095 2.26843 6.13088 2.26109 8 2.26109ZM8 1C6.0989 1 5.86044 1.00812 5.11386 1.04206C4.36867 1.076 3.85999 1.19444 3.41476 1.3675C2.95436 1.54648 2.56412 1.78584 2.17496 2.17496C1.78584 2.56412 1.54626 2.95436 1.3675 3.41476C1.19439 3.86005 1.076 4.36895 1.04206 5.11386C1.00812 5.8605 1 6.09896 1 8C1 9.90104 1.00812 10.1396 1.04206 10.8861C1.076 11.6313 1.19444 12.14 1.3675 12.5852C1.54648 13.0456 1.78584 13.4359 2.17496 13.825C2.56412 14.2142 2.95464 14.4535 3.41476 14.6325C3.86005 14.8056 4.36895 14.924 5.11386 14.9579C5.86044 14.9919 6.0989 15 8 15C9.9011 15 10.1396 14.9919 10.8861 14.9579C11.6313 14.924 12.14 14.8056 12.5852 14.6325C13.0456 14.4535 13.4359 14.2142 13.825 13.825C14.2142 13.4359 14.4535 13.0454 14.6325 12.5852C14.8056 12.14 14.924 11.631 14.9579 10.8861C14.9919 10.1396 15 9.9011 15 8C15 6.0989 14.9919 5.86044 14.9579 5.11386C14.924 4.36867 14.8056 3.85999 14.6325 3.41476C14.4535 2.95436 14.2142 2.56412 13.825 2.17496C13.4359 1.78584 13.0454 1.54648 12.5852 1.3675C12.14 1.19439 11.631 1.076 10.8861 1.04206C10.1396 1.00812 9.9011 1 8 1ZM8 4.40547C6.01473 4.40547 4.40547 6.01473 4.40547 8C4.40547 9.98527 6.01473 11.5946 8 11.5946C9.98527 11.5946 11.5946 9.98527 11.5946 8C11.5946 6.01473 9.98527 4.40547 8 4.40547ZM8 10.3335C6.71141 10.3335 5.66655 9.28898 5.66655 8.00006C5.66655 6.71113 6.71141 5.66661 8 5.66661C9.28859 5.66661 10.3334 6.71113 10.3334 8.00006C10.3334 9.28898 9.28859 10.3335 8 10.3335ZM11.7366 3.4235C11.2725 3.4235 10.8966 3.79945 10.8966 4.2635C10.8966 4.72754 11.2725 5.10355 11.7366 5.10355C12.2006 5.10355 12.5766 4.72754 12.5766 4.2635C12.5766 3.79945 12.2007 3.4235 11.7366 3.4235Z" fill="url(#instagram-gradient-1)" />
        <path d="M8 2.26109C9.86912 2.26109 10.0905 2.26809 10.8287 2.3018C11.5113 2.33294 11.8819 2.44685 12.1285 2.54279C12.4554 2.66986 12.6885 2.82135 12.9335 3.06631C13.1784 3.31127 13.3302 3.54441 13.457 3.87125C13.5529 4.11789 13.6668 4.48852 13.698 5.17109C13.7316 5.90927 13.7387 6.1306 13.7387 7.99978C13.7387 9.86895 13.7317 10.0902 13.698 10.8284C13.6668 11.511 13.5529 11.8816 13.457 12.1282C13.3299 12.4551 13.1784 12.6882 12.9335 12.9332C12.6885 13.1781 12.4554 13.3299 12.1285 13.4567C11.8819 13.5526 11.5113 13.6666 10.8287 13.6977C10.0906 13.7314 9.86918 13.7384 8 13.7384C6.13082 13.7384 5.90955 13.7314 5.17137 13.6977C4.4888 13.6666 4.11817 13.5526 3.87153 13.4567C3.54463 13.3296 3.31155 13.1781 3.06659 12.9332C2.82168 12.6882 2.66986 12.4551 2.54307 12.1282C2.44708 11.8816 2.33322 11.511 2.30208 10.8284C2.26843 10.0903 2.26137 9.8689 2.26137 7.99978C2.26137 6.13066 2.26837 5.90933 2.30208 5.17109C2.33322 4.48852 2.44713 4.11789 2.54307 3.87125C2.67014 3.54435 2.82163 3.31127 3.06659 3.06631C3.31155 2.8214 3.54469 2.66958 3.87153 2.54279C4.11817 2.44685 4.4888 2.33294 5.17137 2.3018C5.9095 2.26843 6.13088 2.26109 8 2.26109ZM8 1C6.0989 1 5.86044 1.00812 5.11386 1.04206C4.36867 1.076 3.85999 1.19444 3.41476 1.3675C2.95436 1.54648 2.56412 1.78584 2.17496 2.17496C1.78584 2.56412 1.54626 2.95436 1.3675 3.41476C1.19439 3.86005 1.076 4.36895 1.04206 5.11386C1.00812 5.8605 1 6.09896 1 8C1 9.90104 1.00812 10.1396 1.04206 10.8861C1.076 11.6313 1.19444 12.14 1.3675 12.5852C1.54648 13.0456 1.78584 13.4359 2.17496 13.825C2.56412 14.2142 2.95464 14.4535 3.41476 14.6325C3.86005 14.8056 4.36895 14.924 5.11386 14.9579C5.86044 14.9919 6.0989 15 8 15C9.9011 15 10.1396 14.9919 10.8861 14.9579C11.6313 14.924 12.14 14.8056 12.5852 14.6325C13.0456 14.4535 13.4359 14.2142 13.825 13.825C14.2142 13.4359 14.4535 13.0454 14.6325 12.5852C14.8056 12.14 14.924 11.631 14.9579 10.8861C14.9919 10.1396 15 9.9011 15 8C15 6.0989 14.9919 5.86044 14.9579 5.11386C14.924 4.36867 14.8056 3.85999 14.6325 3.41476C14.4535 2.95436 14.2142 2.56412 13.825 2.17496C13.4359 1.78584 13.0454 1.54648 12.5852 1.3675C12.14 1.19439 11.631 1.076 10.8861 1.04206C10.1396 1.00812 9.9011 1 8 1ZM8 4.40547C6.01473 4.40547 4.40547 6.01473 4.40547 8C4.40547 9.98527 6.01473 11.5946 8 11.5946C9.98527 11.5946 11.5946 9.98527 11.5946 8C11.5946 6.01473 9.98527 4.40547 8 4.40547ZM8 10.3335C6.71141 10.3335 5.66655 9.28898 5.66655 8.00006C5.66655 6.71113 6.71141 5.66661 8 5.66661C9.28859 5.66661 10.3334 6.71113 10.3334 8.00006C10.3334 9.28898 9.28859 10.3335 8 10.3335ZM11.7366 3.4235C11.2725 3.4235 10.8966 3.79945 10.8966 4.2635C10.8966 4.72754 11.2725 5.10355 11.7366 5.10355C12.2006 5.10355 12.5766 4.72754 12.5766 4.2635C12.5766 3.79945 12.2007 3.4235 11.7366 3.4235Z" fill="url(#instagram-gradient-2)" />
      </svg>
    </div>
  );
}

export function FollowerGrowthChart() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("12months");
  
  const currentData = periodData[selectedPeriod];
  const currentMetrics = periodMetrics[selectedPeriod];

  // Calculate which labels to show on X axis based on period
  const getTickFormatter = () => {
    if (selectedPeriod === "12months") {
      return (value: string) => {
        const showMonths = ["Jan", "Apr", "Jul", "Oct", "Dec"];
        return showMonths.includes(value) ? value : "";
      };
    } else if (selectedPeriod === "month") {
      return (value: string) => {
        const showDays = ["1", "7", "15", "23", "30"];
        return showDays.includes(value) ? value : "";
      };
    } else {
      // week - show all days
      return (value: string) => value;
    }
  };

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
          gap: "12px",
          flex: "1",
          minHeight: "0",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", flexShrink: "0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: "1", minWidth: "0" }}>
            <h4
              style={{
                color: "var(--table-text-primary)",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "20px",
              }}
            >
              Follower growth rate
            </h4>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <InstagramIcon />
                <span className="filter-card-label" style={{ color: "var(--filter-card-text)" }}>
                  {currentMetrics.followers.toLocaleString()} followers
                </span>
              </div>
              <span className="filter-card-label" style={{ color: "var(--border-subtle)" }}>•</span>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span className="filter-card-label" style={{ color: "#34c0a2", fontWeight: "500" }}>
                  +{currentMetrics.growth}%
                </span>
                <span className="filter-card-label" style={{ color: "var(--filter-card-text)" }}>
                  growth (+{currentMetrics.growthAbsolute})
                </span>
              </div>
            </div>
          </div>
          
          {/* Dropdown */}
          <Select value={selectedPeriod} onValueChange={(value) => setSelectedPeriod(value as TimePeriod)}>
            <SelectTrigger
              className="w-auto rounded-lg px-3 py-1.5 h-auto shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
              style={{
                backgroundColor: "var(--filter-card-bg)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <SelectValue className="filter-card-label" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12months">{periodLabels["12months"]}</SelectItem>
              <SelectItem value="month">{periodLabels.month}</SelectItem>
              <SelectItem value="week">{periodLabels.week}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Chart */}
        <div style={{ width: "100%", flex: "1", minHeight: "0" }}>
          <ChartContainer config={chartConfig} className="h-full w-full">
            <AreaChart
              data={currentData}
              margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
            >
              <CartesianGrid 
                strokeDasharray="0" 
                stroke="var(--border-subtle)"
                vertical={false}
              />
              <XAxis
                dataKey="label"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "var(--filter-card-text)", fontSize: 12 }}
                interval="preserveStartEnd"
                tickFormatter={getTickFormatter()}
              />
              <YAxis hide />
              <ChartTooltip
                content={<ChartTooltipContent 
                  formatter={(value, name) => {
                    const label = name === "followers1" ? "Followers 1" : "Followers 2";
                    return [`${value.toLocaleString()} followers`, label];
                  }}
                  labelFormatter={(label) => {
                    if (selectedPeriod === "12months") return label;
                    if (selectedPeriod === "month") return `Day ${label}`;
                    return label;
                  }}
                />}
              />
              <Area
                type="monotone"
                dataKey="followers1"
                stroke="#aec8f9"
                strokeWidth={1}
                fill="#aec8f9"
                fillOpacity={0.3}
              />
              <Area
                type="monotone"
                dataKey="followers2"
                stroke="#155fef"
                strokeWidth={1.5}
                fill="#155fef"
                fillOpacity={0.5}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
