import { useState, forwardRef, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import svgPaths from "../../imports/svg-tr14iyuvv7";
import { talents } from "../data/talents";
import imgAvatar from "figma:asset/ee58b14a9045d0e024e00d41f0adefe967cdb999.png";
import imgAvatar1 from "figma:asset/ddc25c8c5e86bf6e74b0a0b2c4b59dafbe137784.png";
import imgAvatar2 from "figma:asset/60668e2e2279b5f5a3e31741327e568f55f28a7b.png";
import imgAvatar3 from "figma:asset/ddf1229648c028903af7ee5eba107860f62e14ea.png";
import imgAvatar4 from "figma:asset/756127d64edfe65efe75b2d8463af2294fe3e9c5.png";
import imgAvatar5 from "figma:asset/118f7ee3f8bcf8916e64dd3f446f5f0a843dfa95.png";
import imgAvatar6 from "figma:asset/992421e6abd42f43985fef4894588d26c932efe5.png";
import imgAvatar7 from "figma:asset/e3fa84ad08a69a946cab2e46a0f62b609598d895.png";
import imgAvatar8 from "figma:asset/c8a5b3ab0c4d602bce662ac763bdf3c551a63fef.png";
import imgAvatar9 from "figma:asset/3e04328ec681a97ee920bbb76b7aa2da6b349b9e.png";
import imgAvatar10 from "figma:asset/bb2b99e4bb9db3eed1af721b96aa2228a1eba447.png";
import { PersonsIcon } from "./icons/PersonsIcon";
import { PicturesIcon } from "./icons/PicturesIcon";
import { ListIcon } from "./icons/ListIcon";
import { MediaPacksIcon } from "./icons/MediaPacksIcon";
import { EyeIcon } from "./icons/EyeIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { BellIcon } from "./icons/BellIcon";
import { CogwheelIcon } from "./icons/CogwheelIcon";
import { ThemeLightIcon } from "./icons/ThemeLightIcon";
import { ThemeDarkIcon } from "./icons/ThemeDarkIcon";
import { PinIcon } from "./icons/PinIcon";
import { PinFilledIcon } from "./icons/PinFilledIcon";
import { NavAgency } from "./NavAgency";
import { ChromeExtensionBanner } from "./ChromeExtensionBanner";
import { SignoutIcon } from "./icons/SignoutIcon";
import { ChevronIcon } from "./icons/ChevronIcon";

interface ThemeProps {
  isDark: boolean;
  isActive?: boolean;
}

function NavSeparator({ isDark }: ThemeProps) {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      style={{ background: "var(--nav-separator)" }}
      data-name="nav/separator"
    >
      <div className="size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

interface NavItemProps extends ThemeProps {
  icon: React.ReactNode;
  label: string;
  count?: string;
  isActive?: boolean;
  onClick?: () => void;
}

function NavItemWithIcon({
  icon,
  label,
  count,
  isActive = false,
  onClick,
  isDark,
}: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-[8px] shrink-0 w-full transition-colors text-left cursor-pointer"
      style={{
        background: isActive
          ? "var(--nav-item-bg-active)"
          : "transparent",
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.background =
            "var(--nav-item-bg-hover)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = "transparent";
        }
      }}
      data-name="nav/item/with_icon"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <div className="flex items-center justify-center shrink-0 w-[20px]">
            {icon}
          </div>
          <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
            <p
              className="nav-text-primary basis-0 grow min-h-px min-w-px relative shrink-0 text-left"
              style={{
                color: isActive
                  ? "var(--nav-item-text-active)"
                  : "var(--nav-item-text-default)",
              }}
            >
              {label}
            </p>
            {count && (
              <p
                className="nav-text-header relative shrink-0 text-nowrap"
                style={{ color: "var(--nav-item-text-subtle)" }}
              >
                {count}
              </p>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

function Nav1({ isDark }: ThemeProps) {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0 w-full"
      data-name="nav_2"
    >
      <p
        className="nav-text-header relative shrink-0 text-nowrap"
        style={{ color: "var(--nav-item-text-subtle)" }}
      >
        RECENT
      </p>
    </div>
  );
}

function NavFavorites({ isDark }: ThemeProps) {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0 w-full"
      data-name="nav_favorites"
    >
      <p
        className="nav-text-header relative shrink-0 text-nowrap"
        style={{ color: "var(--nav-item-text-subtle)" }}
      >
        FAVORITES
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

interface RecentItemProps extends ThemeProps {
  id: string;
  avatar: React.ReactNode;
  label: string;
  sublabel?: string;
  isActive?: boolean;
  isFavorite?: boolean;
  onClick?: () => void;
  onPinClick?: (id: string) => void;
}

const RecentItem = forwardRef<
  HTMLButtonElement,
  RecentItemProps
>(function RecentItem(
  {
    id,
    avatar,
    label,
    sublabel,
    isActive = false,
    isFavorite = false,
    onClick,
    onPinClick,
    isDark,
  },
  ref,
) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinHovered, setIsPinHovered] = useState(false);
  const [showPinIcon, setShowPinIcon] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setIsHovered(true);
    if (!isActive) {
      e.currentTarget.style.background =
        "var(--nav-item-bg-hover)";
    }

    // Set a 2-second delay before showing the pin icon
    hoverTimeoutRef.current = window.setTimeout(() => {
      setShowPinIcon(true);
    }, 2000);
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setIsHovered(false);
    setShowPinIcon(false);
    setIsPinHovered(false);
    if (!isActive) {
      e.currentTarget.style.background = "transparent";
    }

    // Clear the timeout if user leaves before 2 seconds
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.button
      ref={ref}
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-[28px] relative rounded-[8px] shrink-0 w-full transition-colors text-left cursor-pointer"
      style={{
        background: isActive
          ? "var(--nav-item-bg-active)"
          : "transparent",
      }}
      data-name="nav/item/recent"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
          <div className="flex items-center justify-center shrink-0">
            {avatar}
          </div>
          <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 overflow-hidden">
            <p
              className="nav-text-header relative shrink-0 text-left truncate"
              style={{
                color: isActive
                  ? "var(--nav-item-recent-text-active)"
                  : "var(--nav-item-recent-text-default)",
              }}
            >
              {label}
              {sublabel && (
                <span
                  style={{
                    color: "var(--nav-item-recent-text-subtle)",
                  }}
                >
                  {" "}
                  {sublabel}
                </span>
              )}
            </p>
          </div>
          {showPinIcon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center shrink-0 size-[20px] cursor-pointer"
              onMouseEnter={(e) => {
                e.stopPropagation();
                setIsPinHovered(true);
              }}
              onMouseLeave={(e) => {
                e.stopPropagation();
                setIsPinHovered(false);
              }}
              onClick={(e) => {
                e.stopPropagation();
                onPinClick?.(id);
              }}
            >
              {isFavorite || isPinHovered ? (
                <PinFilledIcon
                  isDark={isDark}
                  isActive={false}
                />
              ) : (
                <PinIcon isDark={isDark} isActive={false} />
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.button>
  );
});

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

function Icon({ isDark }: ThemeProps) {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Icon"
      style={{ fill: "var(--nav-chevron-icon)" }}
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
            d={svgPaths.p1bedaf80}
            fill="currentColor"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p18a00b00}
            fill="currentColor"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function WatchlistIcon({ isDark }: ThemeProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
      <Icon isDark={isDark} />
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

function ChromeExtension({ isDark }: ThemeProps) {
  return (
    <button
      className="relative rounded-[8px] shrink-0 w-full transition-colors cursor-pointer"
      data-name="nav"
      style={{ background: "var(--nav-banner-bg-default)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "var(--nav-banner-bg-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          "var(--nav-banner-bg-default)";
      }}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Platforms />
          <div className="content-stretch flex flex-col gap-[4px] items-start leading-[16px] not-italic relative shrink-0 text-[12px] w-[144px]">
            <p
              className="font-['Founders_Grotesk:Medium',sans-serif] relative shrink-0 w-full"
              style={{ color: "var(--nav-banner-title)" }}
            >
              Download Chrome Extension
            </p>
            <p
              className="font-['Founders_Grotesk:Regular',sans-serif] relative shrink-0 w-full"
              style={{ color: "var(--nav-banner-text)" }}
            >
              Get the full experience
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

interface BottomNavItemProps extends ThemeProps {
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
  isDark,
}: BottomNavItemProps) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-[4px] shrink-0 w-full transition-colors text-left cursor-pointer"
      data-name="nav/item/with_icon_2"
      style={{ background: "transparent" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "var(--nav-item-bg-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <div className="flex items-center justify-center shrink-0">
            {icon}
          </div>
          <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
            <p
              className="nav-text-primary basis-0 grow min-h-px min-w-px relative shrink-0 text-left"
              style={{ color: "var(--nav-item-text-default)" }}
            >
              {label}
            </p>
            {count && (
              <p
                className="nav-text-header relative shrink-0 text-nowrap"
                style={{
                  color: "var(--nav-bottom-item-count)",
                }}
              >
                {count}
              </p>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

function NotificationItem({ isDark }: ThemeProps) {
  return (
    <button
      className="relative rounded-[4px] shrink-0 w-full transition-colors text-left cursor-pointer"
      style={{ background: "transparent" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "var(--nav-item-bg-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <div className="flex items-center justify-center shrink-0">
            <div className="size-[20px]">
              <BellIcon isDark={isDark} isActive={false} />
            </div>
          </div>
          <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
            <p
              className="nav-text-primary basis-0 grow min-h-px min-w-px relative shrink-0 text-left"
              style={{ color: "var(--nav-item-text-default)" }}
            >
              Notifications
            </p>
            <div className="bg-[#155fef] rounded-full px-[6px] py-[2px] flex items-center justify-center">
              <p className="nav-text-badge text-white text-nowrap">
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
        <p className="leading-[15px]">JS</p>
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

interface UserProps extends ThemeProps {
  isOpen: boolean;
  onToggle: () => void;
  onThemeToggle: () => void;
}

function User({
  isDark,
  isOpen,
  onToggle,
  onThemeToggle,
}: UserProps) {
  return (
    <div className="relative w-full">
      <button
        onClick={onToggle}
        className="relative rounded-[8px] shrink-0 w-full transition-colors cursor-pointer"
        data-name="user_2"
        style={{ background: "transparent" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "var(--nav-item-bg-hover)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
        }}
      >
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative w-full">
            <Avatar4 />
            <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[135px]">
                <p
                  className="nav-text-primary relative shrink-0 w-full text-left"
                  style={{
                    color: "var(--nav-item-text-default)",
                  }}
                >
                  John Smith
                </p>
              </div>
              <div
                className="transition-transform duration-200"
                style={{
                  transform: isOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              >
                <Icon1 />
              </div>
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-[8px] pt-[4px]">
              <p
                className="nav-text-secondary text-left px-[8px]"
                style={{
                  color: "var(--nav-item-text-subtle)",
                }}
              >
                john.smith@underscore.com
              </p>

              <button
                className="relative rounded-[4px] shrink-0 w-full transition-colors text-left cursor-pointer"
                style={{ background: "transparent" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--nav-item-bg-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "transparent";
                }}
              >
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
                    <p
                      className="nav-text-primary text-left"
                      style={{
                        color: "var(--nav-item-text-default)",
                      }}
                    >
                      Personal Settings
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={onThemeToggle}
                className="relative rounded-[4px] shrink-0 w-full transition-colors text-left cursor-pointer"
                style={{ background: "transparent" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--nav-item-bg-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "transparent";
                }}
              >
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-between px-[8px] py-[4px] relative w-full">
                    <p
                      className="nav-text-primary text-left"
                      style={{
                        color: "var(--nav-item-text-default)",
                      }}
                    >
                      {isDark ? "Dark Theme" : "Light Theme"}
                    </p>
                    <div className="flex items-center justify-center shrink-0 size-[20px]">
                      {isDark ? (
                        <ThemeDarkIcon />
                      ) : (
                        <ThemeLightIcon />
                      )}
                    </div>
                  </div>
                </div>
              </button>

              <button
                className="relative rounded-[4px] shrink-0 w-full transition-colors text-left cursor-pointer"
                style={{ background: "transparent" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--nav-item-bg-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "transparent";
                }}
              >
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
                    <p
                      className="nav-text-primary text-left"
                      style={{
                        color: "var(--nav-item-text-default)",
                      }}
                    >
                      Sign Out
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ThemePickerProps {
  isDark: boolean;
  onToggle: () => void;
}

function ThemePicker({ isDark, onToggle }: ThemePickerProps) {
  return (
    <button
      onClick={onToggle}
      className="absolute right-[12px] top-[16px] rounded-[4px] p-[4px] transition-colors cursor-pointer"
      style={{ background: "transparent" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "var(--nav-item-bg-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
      aria-label="Toggle theme"
    >
      {isDark ? <ThemeDarkIcon /> : <ThemeLightIcon />}
    </button>
  );
}

interface LeftNavigationProps {
  onThemeChange?: (isDark: boolean) => void;
}

export default function LeftNavigation({
  onThemeChange,
}: LeftNavigationProps) {
  const [activeNav, setActiveNav] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(
    new Set(),
  );
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  // Detect if we're on a talent record page or the home page (which is now a talent record)
  const talentMatch = location.pathname.match(/^\/talent\/(\d+)$/);
  const currentTalentId = talentMatch ? talentMatch[1] : null;
  const isOnTalentRecord = talentMatch || location.pathname === "/";

  const handleThemeToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    onThemeChange?.(newTheme);
    setIsUserMenuOpen(false);
  };

  const handlePinClick = (id: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    // Navigation removed - items are now placeholders
  };

  const handleRecentItemClick = (item: any) => {
    if (item.talentId) {
      navigate(`/talent/${item.talentId}`);
    }
  };

  // Get the current talent's data
  const currentTalent = currentTalentId
    ? talents.find((t) => t.id === Number(currentTalentId))
    : talents[0]; // Default to first talent (Sophia Martinez)

  const recentItems = [
    {
      id: "1",
      avatar: <Avatar src={currentTalent?.avatarImage || imgAvatar} />,
      label: currentTalent ? `${currentTalent.name}'s` : "Sophia Martinez's",
      sublabel: "Profile",
      talentId: currentTalent?.id.toString() || "1",
    },
    {
      id: "2",
      avatar: <AvatarTalentGrid />,
      label: "Sixteenth Roster",
    },
    {
      id: "3",
      avatar: <Avatar src={imgAvatar5} />,
      label: "Marcello Bukate's",
      sublabel: "Media Kit",
    },
    {
      id: "4",
      avatar: (
        <div className="size-[20px]">
          <EyeIcon isDark={isDark} isActive={false} />
        </div>
      ),
      label: "Project Hail Mary Watchlist",
    },
    {
      id: "5",
      avatar: <AvatarTalentGrid2 />,
      label: "Google Note 26",
      sublabel: "List",
    },
  ];

  const favoriteItems = recentItems.filter((item) =>
    favorites.has(item.id),
  );
  const nonFavoriteItems = recentItems.filter(
    (item) => !favorites.has(item.id),
  );

  const mainNavItems = [
    {
      icon: (
        <div className="size-[20px]">
          <HomeIcon
            isDark={isDark}
            isActive={activeNav === "Dashboard"}
          />
        </div>
      ),
      label: "Dashboard",
      id: "Dashboard",
    },
    {
      icon: (
        <PersonsIcon
          isDark={isDark}
          isActive={activeNav === "Talent Directory"}
        />
      ),
      label: "Talent Directory",
      count: "456",
      id: "Talent Directory",
    },
    {
      icon: (
        <PicturesIcon
          isDark={isDark}
          isActive={activeNav === "Content Feed"}
        />
      ),
      label: "Content Feed",
      id: "Content Feed",
    },
    {
      icon: (
        <ListIcon
          isDark={isDark}
          isActive={activeNav === "Lists"}
        />
      ),
      label: "Lists",
      id: "Lists",
    },
    {
      icon: (
        <MediaPacksIcon
          isDark={isDark}
          isActive={activeNav === "Media Kits"}
        />
      ),
      label: "Media Kits",
      id: "Media Kits",
    },
    {
      icon: (
        <EyeIcon
          isDark={isDark}
          isActive={activeNav === "Scouting Watchlists"}
        />
      ),
      label: "Scouting Watchlists",
      id: "Scouting Watchlists",
    },
  ];

  return (
    <div className={isDark ? "dark size-full" : "size-full"}>
      <div
        className="content-stretch flex flex-col items-start justify-between px-0 py-[16px] relative size-full"
        style={{ background: "var(--nav-sidepanel-bg)" }}
      >
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <NavAgency isDark={isDark} />

          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] py-0 relative w-full">
                {mainNavItems.map((item) => (
                  <NavItemWithIcon
                    key={item.id}
                    icon={item.icon}
                    label={item.label}
                    count={item.count}
                    isActive={activeNav === item.id && !isOnTalentRecord}
                    onClick={() => handleNavClick(item.id)}
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>
          </div>
          <NavSeparator isDark={isDark} />

          <AnimatePresence>
            {favoriteItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="relative shrink-0 w-full overflow-hidden"
              >
                <div className="size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] py-0 relative w-full">
                    <NavFavorites isDark={isDark} />
                    <AnimatePresence mode="popLayout">
                      {favoriteItems.map((item) => (
                        <RecentItem
                          key={item.id}
                          id={item.id}
                          avatar={item.avatar}
                          label={item.label}
                          sublabel={item.sublabel}
                          isFavorite={true}
                          isActive={item.talentId === currentTalentId}
                          onPinClick={handlePinClick}
                          isDark={isDark}
                          onClick={() => handleRecentItemClick(item)}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {favoriteItems.length > 0 && (
            <NavSeparator isDark={isDark} />
          )}

          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] py-0 relative w-full">
                <Nav1 isDark={isDark} />
                <AnimatePresence mode="popLayout">
                  {nonFavoriteItems.map((item) => (
                    <RecentItem
                      key={item.id}
                      id={item.id}
                      avatar={item.avatar}
                      label={item.label}
                      sublabel={item.sublabel}
                      isFavorite={false}
                      isActive={item.talentId === currentTalentId}
                      onPinClick={handlePinClick}
                      isDark={isDark}
                      onClick={() => handleRecentItemClick(item)}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center px-[12px] py-0 relative w-full">
                <ChromeExtensionBanner isDark={isDark} />
              </div>
            </div>
          </div>
          <NavSeparator isDark={isDark} />
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start px-[12px] py-0 relative w-full">
                <NotificationItem isDark={isDark} />
                <BottomNavItem
                  icon={
                    <div className="size-[20px]">
                      <CogwheelIcon
                        isDark={isDark}
                        isActive={false}
                      />
                    </div>
                  }
                  label="Agency Settings"
                  isDark={isDark}
                />
              </div>
            </div>
          </div>
          <NavSeparator isDark={isDark} />
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
                <User
                  isDark={isDark}
                  isOpen={isUserMenuOpen}
                  onToggle={() =>
                    setIsUserMenuOpen(!isUserMenuOpen)
                  }
                  onThemeToggle={handleThemeToggle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}