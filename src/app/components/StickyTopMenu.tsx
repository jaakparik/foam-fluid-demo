import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HomeIcon } from "./icons/HomeIcon";
import { PersonsIcon } from "./icons/PersonsIcon";
import { PicturesIcon } from "./icons/PicturesIcon";
import { ListIcon } from "./icons/ListIcon";
import { MediaPacksIcon } from "./icons/MediaPacksIcon";
import { EyeIcon } from "./icons/EyeIcon";
import { BellIcon } from "./icons/BellIcon";
import { CogwheelIcon } from "./icons/CogwheelIcon";
import { Search } from "./icons/foamicons/Search";

interface StickyTopMenuProps {
  isDark?: boolean;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  route: string;
  count?: string;
}

export function StickyTopMenu({ isDark = false }: StickyTopMenuProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [activeNav, setActiveNav] = useState("dashboard");
  const navigate = useNavigate();
  const location = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const navItems: NavItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <HomeIcon isDark={isDark} />,
      route: "/",
    },
    {
      id: "directory",
      label: "Talent Directory",
      icon: <PersonsIcon isDark={isDark} />,
      route: "/directory",
      count: "456",
    },
    {
      id: "content",
      label: "Content Feed",
      icon: <PicturesIcon isDark={isDark} />,
      route: "/content/nike",
    },
    {
      id: "lists",
      label: "Lists",
      icon: <ListIcon isDark={isDark} />,
      route: "/lists",
    },
    {
      id: "media-kits",
      label: "Media Kits",
      icon: <MediaPacksIcon isDark={isDark} />,
      route: "/media-kits",
      count: "1,832",
    },
    {
      id: "watchlists",
      label: "Scouting Watchlists",
      icon: <EyeIcon isDark={isDark} />,
      route: "/watchlists",
    },
  ];

  useEffect(() => {
    // Find the main content scroll container
    const mainContent = document.querySelector('[data-scroll-container="main"]');
    
    const handleScroll = () => {
      if (mainContent) {
        setIsSticky(mainContent.scrollTop > 100);
      }
    };

    if (mainContent) {
      scrollContainerRef.current = mainContent as HTMLDivElement;
      mainContent.addEventListener("scroll", handleScroll);
      return () => mainContent.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    // Update active nav based on current route
    const path = location.pathname;
    if (path === "/") setActiveNav("dashboard");
    else if (path.startsWith("/directory")) setActiveNav("directory");
    else if (path.startsWith("/content")) setActiveNav("content");
    else if (path.startsWith("/lists")) setActiveNav("lists");
    else if (path.startsWith("/media-kits")) setActiveNav("media-kits");
    else if (path.startsWith("/watchlists")) setActiveNav("watchlists");
  }, [location]);

  const handleNavClick = (item: NavItem) => {
    setActiveNav(item.id);
    navigate(item.route);
  };

  return (
    <>
      {/* Spacer to prevent content jump when menu becomes sticky */}
      <div
        style={{
          height: isSticky ? "64px" : "0px",
          transition: "height 0.3s ease-in-out",
        }}
      />

      <div
        className={`transition-all duration-300 ease-in-out ${
          isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-lg" : "relative"
        }`}
        style={{
          background: isSticky
            ? "var(--nav-sidepanel-bg)"
            : "transparent",
        }}
      >
        <div
          className={`flex items-center transition-all duration-300 ease-in-out ${
            isSticky ? "h-[64px] px-6" : "h-0 overflow-hidden"
          }`}
        >
          {/* Logo/Brand */}
          <div className="flex items-center gap-3 mr-8">
            <div
              className="flex items-center justify-center rounded-lg size-[32px]"
              style={{ background: "var(--nav-item-bg-active)" }}
            >
              <span className="font-bold text-lg" style={{ color: "var(--nav-item-text-active)" }}>
                U
              </span>
            </div>
            <span
              className="font-semibold text-sm whitespace-nowrap"
              style={{ color: "var(--nav-item-text-default)" }}
            >
              Underscore Talent
            </span>
          </div>

          {/* Navigation Items */}
          <nav className="flex items-center gap-1 flex-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-opacity-70"
                style={{
                  background:
                    activeNav === item.id
                      ? "var(--nav-item-bg-active)"
                      : "transparent",
                  color:
                    activeNav === item.id
                      ? "var(--nav-item-text-active)"
                      : "var(--nav-item-text-default)",
                }}
                onMouseEnter={(e) => {
                  if (activeNav !== item.id) {
                    e.currentTarget.style.background = "var(--nav-item-bg-hover)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeNav !== item.id) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                <div className="w-[18px] h-[18px] flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.label}
                </span>
                {item.count && (
                  <span
                    className="text-xs ml-1"
                    style={{ color: "var(--nav-item-text-subtle)" }}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Search */}
            <button
              className="flex items-center justify-center p-2 rounded-lg transition-colors"
              style={{ background: "var(--nav-item-bg-hover)" }}
            >
              <Search size={18} strokeWidth="var(--icon-stroke-width)" color="var(--nav-item-text-default)" />
            </button>

            {/* Notifications */}
            <button
              className="flex items-center justify-center p-2 rounded-lg transition-colors relative"
              style={{ background: "var(--nav-item-bg-hover)" }}
            >
              <BellIcon isDark={isDark} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Settings */}
            <button
              className="flex items-center justify-center p-2 rounded-lg transition-colors"
              style={{ background: "var(--nav-item-bg-hover)" }}
            >
              <CogwheelIcon isDark={isDark} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
