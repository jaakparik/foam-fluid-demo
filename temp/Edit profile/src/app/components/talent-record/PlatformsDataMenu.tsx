import { TabButton } from "./TabButton";
import svgPaths from "@/imports/svg-ov1kx2hcox";
import { InstagramIcon } from "../icons/InstagramIcon";
import { TikTokIcon } from "../icons/TikTokIcon";
import { YouTubeIcon } from "../icons/YouTubeIcon";
import { SnapIcon } from "../icons/SnapIcon";
import { ShareIcon } from "../icons/ShareIcon";
import reloadSvgPaths from "@/imports/svg-nvulfnq6oe";

interface PlatformsDataMenuProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  isDark?: boolean;
}

// Icon components
function OverviewIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? "#15191E" : "#8B94A2";
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          d={svgPaths.p19408500}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

function ContentIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? "#15191E" : "#8B94A2";
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          d={svgPaths.p3b40cf00}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
        <path
          d={svgPaths.p303e9300}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
        <circle cx="11.125" cy="5.7" fill={color} r="0.75" />
        <path
          d={svgPaths.p3ab45380}
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

function MediaKitsIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? "#15191E" : "#8B94A2";
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <circle
          cx="9.90907"
          cy="4.9957"
          r="0.932931"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
        <path
          d={svgPaths.p3a60ff0}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
        <path d={svgPaths.p1431c040} fill={color} />
        <path
          d={svgPaths.p132b6d40}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

function AssistIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? "#15191E" : "#8B94A2";
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path
          d={svgPaths.p14a3b460}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
        <path
          d={svgPaths.p34a8ea80}
          fill={color}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
        <path
          d={svgPaths.pff27e00}
          fill={color}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
        <circle cx="6.99365" cy="10.141" fill={color} r="1" />
        <circle cx="10.157" cy="10.141" fill={color} r="1" />
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path
          d={svgPaths.p2594b100}
          stroke="#B7BDC7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

function ReloadButton() {
  return (
    <button
      className="flex items-center justify-center p-[8px] shrink-0 size-[32px] cursor-pointer transition-opacity hover:opacity-70"
      onClick={() => {
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
            d={reloadSvgPaths.p25edad20}
            stroke="#54657D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d={reloadSvgPaths.p27931500}
            stroke="#54657D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
          <path
            d={reloadSvgPaths.p1d2e4780}
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

function ShareButton() {
  return (
    <button
      className="flex items-center justify-center p-[8px] shrink-0 size-[32px] cursor-pointer transition-opacity hover:opacity-70"
      onClick={() => {
        console.log("Share clicked");
      }}
    >
      <div className="relative shrink-0 size-[16px] text-[#54657D]">
        <ShareIcon />
      </div>
    </button>
  );
}

export function PlatformsDataMenu({
  activeTab = "instagram",
  onTabChange,
  isDark = false,
}: PlatformsDataMenuProps) {
  const tabs = [
    {
      id: "instagram",
      label: "Instagram",
      icon: <InstagramIcon isDark={isDark} />,
    },
    {
      id: "tiktok",
      label: "TikTok",
      icon: <TikTokIcon isDark={isDark} />,
    },
    {
      id: "youtube",
      label: "YouTube",
      icon: <YouTubeIcon />,
    },
    {
      id: "snap",
      label: "Snap",
      icon: <SnapIcon />,
    },
  ];

  const getPlatformName = () => {
    const platform = tabs.find((tab) => tab.id === activeTab);
    return platform ? platform.label : "Instagram";
  };

  return (
    <div className="mb-2">
      <div
        className="flex flex-col items-start relative rounded-[12px] mb-4 w-full"
        style={{ background: "var(--nav-sidepanel-bg)" }}
      >
        <div className="relative rounded-[8px] shrink-0 w-full">
          <div className="flex flex-row items-center w-full">
            <div className="flex items-center justify-between p-[8px] relative w-full">
              <div className="flex gap-[8px] items-center relative shrink-0">
                {tabs.map((tab) => (
                  <TabButton
                    key={tab.id}
                    id={tab.id}
                    label={tab.label}
                    icon={tab.icon}
                    isActive={activeTab === tab.id}
                    onClick={() => onTabChange?.(tab.id)}
                  />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "#8B94A2",
                    fontSize: "12px",
                    fontWeight: "300",
                    lineHeight: "20px",
                  }}
                >
                  Updated 2 hours ago
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <ShareButton />
                  <ReloadButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}