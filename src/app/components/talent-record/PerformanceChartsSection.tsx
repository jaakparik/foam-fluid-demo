import { useState } from "react";
import { AgeDistributionChart } from "../AgeDistributionChart";
import { CountryDistributionChart } from "../CountryDistributionChart";
import { GenderDistributionChart } from "../GenderDistributionChart";
import { FollowerGrowthChart } from "../FollowerGrowthChart";
import { PlatformsDataMenu } from "./PlatformsDataMenu";

export function PerformanceChartsSection() {
  const [platformsTab, setPlatformsTab] = useState("instagram");

  return (
    <>
      {/* Platforms Data Menu */}
      <PlatformsDataMenu
        activeTab={platformsTab}
        onTabChange={setPlatformsTab}
        isDark={false}
      />

      {/* Age and Country Distribution Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <AgeDistributionChart />
        <CountryDistributionChart />
      </div>

      {/* Gender Distribution Chart */}
      <div className="mb-8">
        <GenderDistributionChart />
      </div>

      {/* Follower Growth Chart */}
      <div className="mb-8">
        <h2
          className="table-item-text-primary"
          style={{
            color: "var(--table-text-primary)",
            fontSize: "18px",
            fontWeight: "500",
            marginBottom: "16px",
          }}
        >
          Follower Growth
        </h2>
        <FollowerGrowthChart />
      </div>
    </>
  );
}
