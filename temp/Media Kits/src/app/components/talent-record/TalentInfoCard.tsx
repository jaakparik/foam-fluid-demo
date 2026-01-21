import { InstagramMetricsCard } from "./InstagramMetricsCard";
import { TikTokMetricsCard } from "./TikTokMetricsCard";
import { YouTubeMetricsCard } from "./YouTubeMetricsCard";
import { SnapMetricsCard } from "./SnapMetricsCard";
import { brandLogos } from "@/data/brands";

interface Talent {
  id: number;
  name: string;
  avatarImage: string;
  location: string;
  gender: string;
  age: number;
  bio: string;
  verticals: string[];
  connected: boolean;
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
}

interface TalentInfoCardProps {
  talent: Talent;
  isDark?: boolean;
}

export function TalentInfoCard({
  talent,
  isDark = false,
}: TalentInfoCardProps) {
  return (
    <div className="content-stretch flex items-start mb-8">
      {/* Left Column: Name + Avatar + Location/Age */}
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-0 pr-[24px] py-0 relative shrink-0">
        <div
          aria-hidden="true"
          className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none"
        />
        <div className="flex flex-col justify-center relative shrink-0">
          <p className="text-xl-medium">{talent.name}</p>
        </div>

        {/* Avatar */}
        <div className="relative rounded-[8px] shrink-0 size-[128px]">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <img
              alt={talent.name}
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={talent.avatarImage}
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#dee2e8] border-solid inset-0 pointer-events-none rounded-[8px]"
          />
        </div>

        {/* Location + Age */}
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-end relative shrink-0 w-full whitespace-pre">
          <p className="text-sm">{talent.location}</p>

          <p className="text-sm">{talent.age} years old</p>

          <p className="text-sm">{talent.gender}</p>
        </div>
      </div>

      {/* Middle Column: Total Followers + Platforms */}
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-0 relative shrink-0">
        <div
          aria-hidden="true"
          className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none"
        />

        {/* Total Followers */}
        <div className="content-stretch flex gap-[10px] items-center leading-[0] relative shrink-0">
          <p className="text-xl w-[150px]">Total followers</p>
          <p className="text-xl-medium whitespace-nowrap">
            {talent.followers.total}
          </p>
        </div>

        {/* Platforms List */}
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0">
            {/* Instagram */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div style={{ width: "20px", height: "20px" }}>
                <InstagramMetricsCard
                  isDark={isDark}
                  handle={talent.aliases.instagram}
                  followers={talent.followers.instagram}
                  iconOnly
                />
              </div>
              <p className="text-md-medium w-[122px]">
                {talent.aliases.instagram}
              </p>
              <p className="numbers">
                {talent.followers.instagram}
              </p>
            </div>

            {/* TikTok */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div style={{ width: "20px", height: "20px" }}>
                <TikTokMetricsCard
                  isDark={isDark}
                  handle={talent.aliases.tiktok}
                  followers={talent.followers.tiktok}
                  iconOnly
                />
              </div>
              <p className="text-md-medium w-[122px]">
                {talent.aliases.tiktok}
              </p>
              <p className="numbers">
                {talent.followers.tiktok}
              </p>
            </div>

            {/* YouTube */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div style={{ width: "20px", height: "20px" }}>
                <YouTubeMetricsCard
                  handle={talent.aliases.youtube}
                  followers={talent.followers.youtube}
                  iconOnly
                />
              </div>
              <p className="text-md-medium w-[122px]">
                {talent.aliases.youtube}
              </p>
              <p className="numbers">
                {talent.followers.youtube}
              </p>
            </div>

            {/* Snapchat */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div style={{ width: "20px", height: "20px" }}>
                <SnapMetricsCard
                  handle={talent.aliases.snapchat}
                  followers={talent.followers.snapchat}
                  iconOnly
                />
              </div>
              <p className="text-md-medium w-[122px]">
                {talent.aliases.snapchat}
              </p>
              <p className="numbers">
                {talent.followers.snapchat}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Bio + Verticals + Brand Experience + Managed By */}
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pl-[24px] pr-0 py-0 relative flex-1 min-w-0">
        {/* Bio */}
        <p className="text-sm-medium w-full">{talent.bio}</p>

        {/* Verticals */}
        <div className="content-center flex flex-wrap gap-[8px] items-center max-w-[621px] relative shrink-0">
          {talent.verticals.map((vertical, index) => (
            <div
              key={index}
              className="bg-[#f3f5f6] content-stretch flex items-center justify-center max-w-[200px] min-w-[24px] p-[4px] relative rounded-[4px] shrink-0"
            >
              <p className="text-sm-medium overflow-ellipsis overflow-hidden whitespace-nowrap">
                {vertical}
              </p>
            </div>
          ))}
        </div>

        {/* Brand Experience */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <p className="text-md">Brand Experience</p>
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
            {[
              brandLogos.find((b) => b.name === "Pepsi"),
              brandLogos.find((b) => b.name === "Starbucks"),
              brandLogos.find(
                (b) => b.name === "Procter & Gamble",
              ),
              brandLogos.find((b) => b.name === "Lyft"),
            ].map(
              (brand, index) =>
                brand && (
                  <div
                    key={index}
                    title={brand.name}
                    className="relative shrink-0 size-[40px]"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      alt={brand.name}
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                      src={brand.logo}
                    />
                  </div>
                ),
            )}
          </div>
        </div>

        {/* Managed By */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[272.5px]">
          <p className="text-sm">Managed by: </p>
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <div className="content-stretch flex items-center relative shrink-0">
              <a
                href="#"
                className="text-sm-medium relative shrink-0"
                style={{
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration =
                    "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration =
                    "none")
                }
              >
                Brendan Nahmias
              </a>
              <p className="text-sm-medium relative shrink-0">
                ,
              </p>
            </div>
            <a
              href="#"
              className="text-sm-medium relative shrink-0"
              style={{
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration =
                  "underline")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              Sarah Chen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}