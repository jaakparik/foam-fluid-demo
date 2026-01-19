import { TabButton } from "./TabButton";
import { House, Image, MediaKits, Sparkles } from 'foamicons';

interface TalentSubmenuProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  roundedBottom?: boolean;
}

// Icon components
function OverviewIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? "#15191E" : "#8B94A2";
  return (
    <House 
      size={16} 
      strokeWidth="var(--icon-stroke-width)" 
      style={{ color }} 
    />
  );
}

function ContentIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? "#15191E" : "#8B94A2";
  return (
    <Image 
      size={16} 
      strokeWidth="var(--icon-stroke-width)" 
      style={{ color }} 
    />
  );
}

function MediaKitsIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? "#15191E" : "#8B94A2";
  return (
    <MediaKits 
      size={16} 
      strokeWidth="var(--icon-stroke-width)" 
      style={{ color }} 
    />
  );
}

function AssistIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? "#15191E" : "#8B94A2";
  return (
    <Sparkles 
      size={20} 
      strokeWidth="var(--icon-stroke-width)" 
      style={{ color }} 
    />
  );
}

export function TalentSubmenu({
  activeTab = "overview",
  onTabChange,
  roundedBottom = true,
}: TalentSubmenuProps) {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: (
        <OverviewIcon isActive={activeTab === "overview"} />
      ),
    },
    {
      id: "content",
      label: "Content",
      icon: <ContentIcon isActive={activeTab === "content"} />,
    },
    {
      id: "media-kits-lists",
      label: "Media Kits & Lists",
      icon: (
        <MediaKitsIcon
          isActive={activeTab === "media-kits-lists"}
        />
      ),
    },
    {
      id: "ask-assist",
      label: "Ask Assist",
      icon: (
        <AssistIcon isActive={activeTab === "ask-assist"} />
      ),
    },
  ];

  return (
    <div
      className={`flex flex-col items-start relative w-full mb-6 ${roundedBottom ? 'rounded-[12px]' : 'rounded-t-[12px]'}`}
      style={{ background: "var(--nav-sidepanel-bg)" }}
    >
      <div className="relative rounded-[8px] shrink-0 w-full">
        <div className="flex flex-row items-center w-full">
          <div className="flex items-center justify-between p-[8px] relative w-full border-l border-r border-b rounded-b-[12px]" style={{ borderColor: "var(--nav-sidepanel-bg)" }}>
            {/* Tabs */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
