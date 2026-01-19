import { InstagramMetricsCard } from "./InstagramMetricsCard";
import { TikTokMetricsCard } from "./TikTokMetricsCard";
import { YouTubeMetricsCard } from "./YouTubeMetricsCard";
import { SnapMetricsCard } from "./SnapMetricsCard";

interface PlatformsCardProps {
  aliases: {
    instagram: string;
    tiktok: string;
    youtube: string;
    snapchat: string;
  };
  followers: {
    instagram: string;
    tiktok: string;
    youtube: string;
    snapchat: string;
    total: string;
  };
  isDark?: boolean;
}

export function PlatformsCard({
  aliases,
  followers,
  isDark = false,
}: PlatformsCardProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Total Followers - First row */}
      <div className="flex items-center gap-3">
        <div
          className="md-medium"
          style={{
            color: "var(--table-text-primary)",
          }}
        >
          Total
        </div>
        <div
          className="numbers md-medium"
          style={{
            color: "var(--table-text-primary)",
          }}
        >
          {followers.total}
        </div>
      </div>

      {/* Instagram */}
      <div className="flex items-center gap-3">
        <div style={{ width: "20px", height: "20px" }}>
          <InstagramMetricsCard
            isDark={isDark}
            handle={aliases.instagram}
            followers={followers.instagram}
            iconOnly
          />
        </div>
        <div
          className="numbers md-medium"
          style={{
            color: "var(--table-text-primary)",
          }}
        >
          {followers.instagram}
        </div>
      </div>

      {/* TikTok */}
      <div className="flex items-center gap-3">
        <div style={{ width: "20px", height: "20px" }}>
          <TikTokMetricsCard
            isDark={isDark}
            handle={aliases.tiktok}
            followers={followers.tiktok}
            iconOnly
          />
        </div>
        <div
          className="numbers md-medium"
          style={{
            color: "var(--table-text-primary)",
          }}
        >
          {followers.tiktok}
        </div>
      </div>

      {/* YouTube */}
      <div className="flex items-center gap-3">
        <div style={{ width: "20px", height: "20px" }}>
          <YouTubeMetricsCard
            handle={aliases.youtube}
            followers={followers.youtube}
            iconOnly
          />
        </div>
        <div
          className="numbers md-medium"
          style={{
            color: "var(--table-text-primary)",
          }}
        >
          {followers.youtube}
        </div>
      </div>

      {/* Snapchat */}
      <div className="flex items-center gap-3">
        <div style={{ width: "20px", height: "20px" }}>
          <SnapMetricsCard
            handle={aliases.snapchat}
            followers={followers.snapchat}
            iconOnly
          />
        </div>
        <div
          className="numbers md-medium"
          style={{
            color: "var(--table-text-primary)",
          }}
        >
          {followers.snapchat}
        </div>
      </div>
    </div>
  );
}