import { AgeDistributionChart } from "../AgeDistributionChart";
import { CountryDistributionChart } from "../CountryDistributionChart";
import { GenderDistributionChart } from "../GenderDistributionChart";
import { FollowerGrowthChart } from "../FollowerGrowthChart";
import { AverageMetricsCard } from "../AverageMetricsCard";
import RecentActivityCard from "@/imports/Frame5585";
import svgPaths from "@/imports/svg-nvulfnq6oe";

function ReloadButton() {
  return (
    <button
      className="bg-[rgba(58,73,95,0.05)] flex items-center justify-center p-[8px] rounded-[8px] shrink-0 size-[32px] cursor-pointer transition-opacity hover:opacity-70"
      onClick={() => {
        // Reload functionality can be added here
        console.log("Reload clicked");
      }}
    >
      <div className="relative shrink-0 size-[16px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <path
            d={svgPaths.p25edad20}
            stroke="#54657D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d={svgPaths.p27931500}
            stroke="#54657D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d={svgPaths.p1d2e4780}
            stroke="#54657D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </svg>
      </div>
    </button>
  );
}

export function PerformanceChartsSection() {
  return (
    <>
      {/* Main Layout: Charts on left, Recent Activity on right */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Charts Section - Left Side */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Age, Country, and Gender Distribution Charts - 3 in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AgeDistributionChart />
            <CountryDistributionChart />
            <GenderDistributionChart />
          </div>

          {/* Follower Growth Chart and Average Metrics Card - side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <FollowerGrowthChart />
            </div>
            <div>
              <AverageMetricsCard />
            </div>
          </div>
        </div>

        {/* Recent Activity Card - Right Side */}
        <div
          className="lg:w-[280px] xl:w-[360px]"
          style={{ minWidth: "240px" }}
        >
          <RecentActivityCard />
        </div>
      </div>
    </>
  );
}