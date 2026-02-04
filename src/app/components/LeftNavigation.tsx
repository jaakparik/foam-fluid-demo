import { useState } from "react";
import svgPaths from "../../imports/svg-tr14iyuvv7";
import svgPathsTheme from "../../imports/svg-mo0so99mpq";
import Home from "../../imports/Home";
import CogwheelIcon from "../../imports/Cogwheel";
import BellIcon from "../../imports/Bell";
import Frame26 from "../../imports/Frame26";
import { PersonsIcon } from "./icons/PersonsIcon";
import { PicturesIcon } from "./icons/PicturesIcon";
import { ListIcon } from "./icons/ListIcon";
import { MediaPacksIcon } from "./icons/MediaPacksIcon";
import { EyeIcon } from "./icons/EyeIcon";
import { Share } from "./icons/foamicons/Share";
import { ChevronDown } from "./icons/foamicons/ChevronDown";
import { ChevronUp } from "./icons/foamicons/ChevronUp";
import { Bookmark } from "./icons/foamicons/Bookmark";
import { ContentPlus } from "./icons/foamicons/ContentPlus";
import { ChartColumnSquare } from "./icons/foamicons/ChartColumnSquare";
import { SearchIcon } from "./icons/SearchIcon";
import { useRecentItems, RecentItem as RecentItemType } from "../contexts/RecentItemsContext";
import imgAvatar from "../../assets/ee58b14a9045d0e024e00d41f0adefe967cdb999.png";
import imgAvatar1 from "../../assets/ddc25c8c5e86bf6e74b0a0b2c4b59dafbe137784.png";
import imgAvatar2 from "../../assets/60668e2e2279b5f5a3e31741327e568f55f28a7b.png";
import imgAvatar3 from "../../assets/ddf1229648c028903af7ee5eba107860f62e14ea.png";
import imgAvatar4 from "../../assets/756127d64edfe65efe75b2d8463af2294fe3e9c5.png";
import imgAvatar5 from "../../assets/118f7ee3f8bcf8916e64dd3f446f5f0a843dfa95.png";
import imgAvatar6 from "../../assets/992421e6abd42f43985fef4894588d26c932efe5.png";
import imgAvatar7 from "../../assets/e3fa84ad08a69a946cab2e46a0f62b609598d895.png";
import imgAvatar8 from "../../assets/c8a5b3ab0c4d602bce662ac763bdf3c551a63fef.png";
import imgAvatar9 from "../../assets/3e04328ec681a97ee920bbb76b7aa2da6b349b9e.png";
import imgAvatar10 from "../../assets/bb2b99e4bb9db3eed1af721b96aa2228a1eba447.png";

function NavAgency() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative shrink-0"
      data-name="nav/agency"
    >
      <div className="size-[28px]">
        <Frame26 />
      </div>
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#303d4f] text-[16px] text-nowrap">
        Evergreen Agency
      </p>
    </div>
  );
}

function NavSeparator() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.1)] h-px relative shrink-0 w-full"
      data-name="nav/separator"
    >
      <div className="size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  count?: string;
  isActive?: boolean;
  onClick?: () => void;
  indent?: boolean;
}

function NavItemWithIcon({
  icon,
  label,
  count,
  isActive = false,
  onClick,
  indent = false,
}: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-bl-[8px] rounded-tl-[8px] ${isActive ? "rounded-br-[2px] rounded-tr-[2px]" : "rounded-br-[8px] rounded-tr-[8px]"} shrink-0 w-full transition-colors text-left ${
        isActive
          ? "bg-[rgba(58,73,95,0.1)]"
          : "hover:bg-[rgba(58,73,95,0.05)]"
      }`}
      data-name="nav/item/with_icon"
    >
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute border-[#155fef] border-[0px_4px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[2px] rounded-tl-[8px] rounded-tr-[2px]"
        />
      )}
      <div className="flex flex-row items-center size-full">
        <div className={`content-stretch flex gap-[8px] items-center ${indent ? 'pl-[28px]' : 'px-[8px]'} pr-[8px] py-[4px] relative w-full`}>
          <div className="flex items-center justify-center shrink-0 w-[20px]">
            {icon}
          </div>
          <div className="basis-0 content-stretch flex font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow items-center justify-between min-h-px min-w-px relative shrink-0">
            <p
              className={`basis-0 grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-left ${isActive ? "text-[#15191e]" : "text-[#54657d]"}`}
            >
              {label}
            </p>
            {count && (
              <p className="relative shrink-0 text-[#8b94a2] text-[12px] text-nowrap">
                {count}
              </p>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

interface CollapsibleNavSectionProps {
  icon: React.ReactNode;
  label: string;
  isExpanded: boolean;
  onToggle: () => void;
}

function CollapsibleNavSection({
  icon,
  label,
  isExpanded,
  onToggle,
}: CollapsibleNavSectionProps) {
  return (
    <button
      onClick={onToggle}
      className="relative rounded-[8px] shrink-0 w-full transition-colors text-left hover:bg-[rgba(58,73,95,0.05)]"
      data-name="nav/item/collapsible"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <div className="flex items-center justify-center shrink-0 w-[20px]">
            {icon}
          </div>
          <div className="basis-0 content-stretch flex font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow items-center justify-between min-h-px min-w-px relative shrink-0">
            <p className="basis-0 grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-left text-[#54657d]">
              {label}
            </p>
            <div className="flex items-center justify-center shrink-0 w-[16px]">
              {isExpanded ? (
                <ChevronUp size={16} strokeWidth="var(--icon-stroke-width)" color="#54657d" />
              ) : (
                <ChevronDown size={16} strokeWidth="var(--icon-stroke-width)" color="#54657d" />
              )}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function Nav1() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0 w-full"
      data-name="nav_2"
    >
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#8b94a2] text-[12px] text-nowrap">
        RECENT
      </p>
    </div>
  );
}

function Avatar({ src }: { src: string }) {
  return (
    <div
      className="overflow-clip relative rounded-[2px] shrink-0 size-[20px]"
      data-name="Avatar"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={src}
      />
    </div>
  );
}

interface RecentItemProps {
  avatar: React.ReactNode;
  label: string;
  sublabel?: string;
  isActive?: boolean;
  onClick?: () => void;
}

function RecentItem({
  avatar,
  label,
  sublabel,
  isActive = false,
  onClick,
}: RecentItemProps) {
  return (
    <button
      onClick={onClick}
      className={`h-[28px] relative rounded-bl-[8px] rounded-tl-[8px] ${isActive ? "rounded-br-[2px] rounded-tr-[2px]" : "rounded-br-[8px] rounded-tr-[8px]"} shrink-0 w-full transition-colors text-left ${
        isActive
          ? "bg-[rgba(58,73,95,0.1)]"
          : "hover:bg-[rgba(58,73,95,0.05)]"
      }`}
      data-name="nav/item/recent"
    >
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute border-[#155fef] border-[0px_4px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[2px] rounded-tl-[8px] rounded-tr-[2px]"
        />
      )}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
          <div className="flex items-center justify-center shrink-0">
            {avatar}
          </div>
          <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
            <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3a495f] text-[12px] text-nowrap text-left">
              {label}
              {sublabel && (
                <span className="text-[#8b94a2]">
                  {" "}
                  {sublabel}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

// Helper function to get avatar for recent item based on type
function getAvatarForRecentItem(item: RecentItemType): React.ReactNode {
  if (item.type === "search") {
    return (
      <div className="size-[20px] flex items-center justify-center" style={{ color: "#3a495f" }}>
        <SearchIcon />
      </div>
    );
  }
  if (item.type === "profile" && item.avatarUrl) {
    return <Avatar src={item.avatarUrl} />;
  }
  if (item.type === "media-kit" && item.avatarUrl) {
    return <Avatar src={item.avatarUrl} />;
  }
  if (item.type === "list") {
    return <AvatarTalentGrid />;
  }
  if (item.type === "watchlist") {
    return <WatchlistIcon />;
  }
  return <AvatarTalentGrid />;
}

// Dynamic recent items from context
function DynamicRecentItems() {
  const { recentItems } = useRecentItems();
  
  return (
    <>
      {recentItems.map((item) => (
        <RecentItem
          key={item.id}
          avatar={getAvatarForRecentItem(item)}
          label={item.label}
          sublabel={item.sublabel}
          isActive={item.isActive}
        />
      ))}
    </>
  );
}

function Row() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full"
      data-name="row 1"
    >
      <div
        className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
        data-name="avatar"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgAvatar1}
        />
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
        data-name="avatar"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgAvatar2}
        />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full"
      data-name="row 2"
    >
      <div
        className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
        data-name="avatar"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgAvatar3}
        />
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
        data-name="avatar"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgAvatar4}
        />
      </div>
    </div>
  );
}

function AvatarsTalent() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip"
      data-name="avatars talent"
    >
      <Row />
      <Row1 />
    </div>
  );
}

function AvatarTalentGrid() {
  return (
    <div
      className="overflow-clip relative rounded-[2px] shrink-0 size-[20px]"
      data-name="Avatar"
    >
      <AvatarsTalent />
    </div>
  );
}

function Icon() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p2170ce00}
            fill="var(--fill-0, #54657D)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function WatchlistIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
      <Icon />
    </div>
  );
}

function Row2() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full"
      data-name="row 1"
    >
      <div
        className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
        data-name="avatar"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[149.71%] left-0 max-w-none top-0 w-full"
            src={imgAvatar6}
          />
        </div>
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
        data-name="avatar"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgAvatar7}
        />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div
      className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full"
      data-name="row 2"
    >
      <div
        className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
        data-name="avatar"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[124.99%] left-0 max-w-none top-[-0.65%] w-full"
            src={imgAvatar8}
          />
        </div>
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
        data-name="avatar"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[140.85%] left-[0.14%] max-w-none top-[-8.93%] w-full"
            src={imgAvatar9}
          />
        </div>
      </div>
    </div>
  );
}

function AvatarsTalent1() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip"
      data-name="avatars talent"
    >
      <Row2 />
      <Row3 />
    </div>
  );
}

function AvatarTalentGrid2() {
  return (
    <div
      className="overflow-clip relative rounded-[2px] shrink-0 size-[20px]"
      data-name="Avatar"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={imgAvatar10}
      />
      <AvatarsTalent1 />
    </div>
  );
}

function LogoGoogleg48Dp() {
  return (
    <div
      className="absolute inset-[4.17%]"
      data-name="logo_googleg_48dp"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="logo_googleg_48dp">
          <path
            clipRule="evenodd"
            d={svgPaths.p1c31e00}
            fill="var(--fill-0, #4285F4)"
            fillRule="evenodd"
            id="Shape"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pe4b4a80}
            fill="var(--fill-0, #34A853)"
            fillRule="evenodd"
            id="Shape_2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2a1e0380}
            fill="var(--fill-0, #FBBC05)"
            fillRule="evenodd"
            id="Shape_3"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2e6a5600}
            fill="var(--fill-0, #EA4335)"
            fillRule="evenodd"
            id="Shape_4"
          />
          <g id="Shape_5"></g>
        </g>
      </svg>
    </div>
  );
}

function Platforms() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="Platforms"
    >
      <LogoGoogleg48Dp />
    </div>
  );
}

function ChromeExtension() {
  return (
    <button
      className="bg-white relative rounded-[8px] shrink-0 w-full hover:bg-[rgba(255,255,255,0.95)] transition-colors"
      data-name="nav"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Platforms />
          <div className="content-stretch flex flex-col gap-[4px] items-start leading-[16px] not-italic relative shrink-0 text-[12px] w-[144px]">
            <p className="font-['Founders_Grotesk:Medium',sans-serif] relative shrink-0 text-[#303d4f] w-full">
              Download Chrome Extension
            </p>
            <p className="font-['Founders_Grotesk:Regular',sans-serif] relative shrink-0 text-[#8b94a2] w-full">
              Get the full experience
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

interface BottomNavItemProps {
  icon: React.ReactNode;
  label: string;
  count?: string;
  onClick?: () => void;
}

function BottomNavItem({
  icon,
  label,
  count,
  onClick,
}: BottomNavItemProps) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-[4px] shrink-0 w-full hover:bg-[rgba(58,73,95,0.05)] transition-colors text-left"
      data-name="nav/item/with_icon_2"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <div className="flex items-center justify-center shrink-0">
            {icon}
          </div>
          <div className="basis-0 content-stretch flex font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow items-center justify-between leading-[20px] min-h-px min-w-px relative shrink-0">
            <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#54657d] text-[14px] text-left">
              {label}
            </p>
            {count && (
              <p className="relative shrink-0 text-[#8b94a2] text-[12px] text-nowrap">
                {count}
              </p>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

function NotificationItem() {
  return (
    <button className="relative rounded-[4px] shrink-0 w-full hover:bg-[rgba(58,73,95,0.05)] transition-colors text-left">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <div className="flex items-center justify-center shrink-0">
            <div className="size-[20px]"><BellIcon /></div>
          </div>
          <div className="basis-0 content-stretch flex font-['Hanken_Grotesk:Medium',sans-serif] font-medium grow items-center justify-between leading-[20px] min-h-px min-w-px relative shrink-0">
            <p className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#54657d] text-[14px] text-left">
              Notifications
            </p>
            <div className="bg-[#155fef] rounded-full px-[6px] py-[2px] flex items-center justify-center">
              <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-white text-[12px] text-nowrap leading-[16px]">
                12
              </p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function Avatar4() {
  return (
    <div
      className="bg-[#fbb874] relative rounded-[100px] shrink-0 size-[24px]"
      data-name="Avatar"
    >
      <div className="absolute flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] left-[12px] not-italic text-[#1c2128] text-[10px] text-center text-nowrap top-[12.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[15px]">GB</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p1bedaf80}
            fill="var(--fill-0, #8B94A2)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p18a00b00}
            fill="var(--fill-0, #8B94A2)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function User() {
  return (
    <button
      className="relative rounded-[8px] shrink-0 w-full hover:bg-[rgba(58,73,95,0.05)] transition-colors"
      data-name="user_2"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[4px] py-[2px] relative w-full">
          <Avatar4 />
          <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[135px]">
              <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#54657d] text-[14px] w-full text-left">
                John Smith
              </p>
            </div>
            <Icon1 />
          </div>
        </div>
      </div>
    </button>
  );
}

function ThemeLightIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_theme_light)" id="ThemeLight">
          <path d={svgPathsTheme.p2c994080} id="Vector 709" stroke="var(--stroke-0, #8B94A2)" strokeLinecap="round" strokeWidth="var(--icon-stroke-width)" />
          <circle cx="8" cy="8" id="Ellipse 111" r="2.5" stroke="var(--stroke-0, #8B94A2)" strokeLinecap="round" strokeWidth="var(--icon-stroke-width)" />
        </g>
        <defs>
          <clipPath id="clip0_theme_light">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ThemeDarkIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ThemeDark">
          <path d={svgPathsTheme.p3ea98680} fill="var(--stroke-0, #8B94A2)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ThemePicker() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="absolute right-[12px] top-[16px] rounded-[4px] p-[4px] hover:bg-[rgba(58,73,95,0.05)] transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <ThemeDarkIcon /> : <ThemeLightIcon />}
    </button>
  );
}

export default function LeftNavigation() {
  const [activeNav, setActiveNav] = useState("Talent Directory");
  const [isDark, setIsDark] = useState(false);
  const [isSharedExpanded, setIsSharedExpanded] = useState(true);

  const mainNavItems = [
    { icon: <div className="size-[20px]"><Home /></div>, label: "Dashboard", id: "Dashboard" },
    {
      icon: <PersonsIcon isDark={isDark} isActive={activeNav === "Talent Directory"} />,
      label: "Talent directory",
      count: "456",
      id: "Talent Directory",
    },
    {
      icon: <PicturesIcon isDark={isDark} isActive={activeNav === "Content Feed"} />,
      label: "Content feed",
      id: "Content Feed",
    },
    {
      icon: <EyeIcon isDark={isDark} isActive={activeNav === "Scouting Watchlists"} />,
      label: "Scouting watchlists",
      id: "Scouting Watchlists",
    },
  ];

  const sharedNavItems = [
    {
      icon: <MediaPacksIcon isDark={isDark} isActive={activeNav === "Media Kits"} />,
      label: "Media kits",
      id: "Media Kits"
    },
    {
      icon: <ContentPlus size={20} strokeWidth="var(--icon-stroke-width)" style={{ color: activeNav === "Foam Kits" ? "var(--nav-item-icon-active)" : "var(--nav-item-icon-default)" }} />,
      label: "Foam kits",
      id: "Foam Kits"
    },
    {
      icon: <ChartColumnSquare size={20} strokeWidth="var(--icon-stroke-width)" style={{ color: activeNav === "Campaign Reports" ? "var(--nav-item-icon-active)" : "var(--nav-item-icon-default)" }} />,
      label: "Campaign reports",
      id: "Campaign Reports"
    },
    {
      icon: <ListIcon isDark={isDark} isActive={activeNav === "Lists"} />,
      label: "Lists",
      id: "Lists"
    },
    {
      icon: <ListIcon isDark={isDark} isActive={activeNav === "Roster"} />,
      label: "Roster",
      id: "Roster"
    },
  ];

  return (
    <div className="bg-[#f3f5f6] content-stretch flex flex-col items-start justify-between px-0 py-[16px] relative size-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        <NavAgency />
        <NavSeparator />
        <div className="relative shrink-0 w-full">
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] py-0 relative w-full">
              {mainNavItems.map((item) => (
                <NavItemWithIcon
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  count={item.count}
                  isActive={activeNav === item.id}
                  onClick={() => setActiveNav(item.id)}
                />
              ))}
              
              {/* Collapsible Shared Section */}
              <CollapsibleNavSection
                icon={<Share size={20} strokeWidth="var(--icon-stroke-width)" color="#54657d" />}
                label="Shared"
                isExpanded={isSharedExpanded}
                onToggle={() => setIsSharedExpanded(!isSharedExpanded)}
              />
              
              {/* Shared Nav Items - only show when expanded */}
              {isSharedExpanded && sharedNavItems.map((item) => (
                <NavItemWithIcon
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  isActive={activeNav === item.id}
                  onClick={() => setActiveNav(item.id)}
                  indent={true}
                />
              ))}

              {/* Save for later - below Shared group */}
              <NavItemWithIcon
                icon={<Bookmark size={20} strokeWidth="var(--icon-stroke-width)" style={{ color: activeNav === "Save for Later" ? "var(--nav-item-icon-active)" : "var(--nav-item-icon-default)" }} />}
                label="Save for Later"
                isActive={activeNav === "Save for Later"}
                onClick={() => setActiveNav("Save for Later")}
              />
            </div>
          </div>
        </div>
        <NavSeparator />
        <div className="relative shrink-0 w-full">
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] py-0 relative w-full">
              <Nav1 />
              <DynamicRecentItems />
            </div>
          </div>
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center px-[12px] py-0 relative w-full">
              <ChromeExtension />
            </div>
          </div>
        </div>
        <NavSeparator />
        <div className="relative shrink-0 w-full">
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start px-[12px] py-0 relative w-full">
              <NotificationItem />
              <BottomNavItem
                icon={<div className="size-[20px]"><CogwheelIcon /></div>}
                label="Agency Settings"
              />
            </div>
          </div>
        </div>
        <NavSeparator />
        <div className="relative shrink-0 w-full">
          <div className="size-full">
            <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
              <User />
            </div>
          </div>
        </div>
      </div>
      <ThemePicker />
    </div>
  );
}