import { TabButton } from "./TabButton";
import { RefreshCwDuotone } from 'foamicons';
import { InstagramIcon } from "../icons/InstagramIcon";
import { TikTokIcon } from "../icons/TikTokIcon";
import { YouTubeIcon } from "../icons/YouTubeIcon";
import { SnapIcon } from "../icons/SnapIcon";
import { ShareIcon } from "../icons/ShareIcon";

interface PlatformsDataMenuProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  isDark?: boolean;
}

function ReloadButton() {
  return (
    <button
      className="flex items-center justify-center p-[8px] shrink-0 size-[32px] cursor-pointer transition-opacity hover:opacity-70"
      onClick={() => {
        console.log("Reload clicked");
      }}
    >
      <RefreshCwDuotone 
        size={16} 
        strokeWidth="var(--icon-stroke-width)" 
        style={{ color: '#54657D' }} 
      />
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
    <div className="mb-4">
      <div
        className="flex flex-col items-start relative rounded-[12px] w-full"
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
