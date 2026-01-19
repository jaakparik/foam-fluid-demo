import { TabButton } from "./TabButton";
import svgPaths from "@/imports/svg-ov1kx2hcox";

interface TalentSubmenuProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  roundedBottom?: boolean;
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
