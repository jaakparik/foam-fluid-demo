import svgPaths from "../../imports/svg-tr14iyuvv7";

interface ChromeExtensionBannerProps {
  isDark: boolean;
  onClick?: () => void;
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

export function ChromeExtensionBanner({
  isDark,
  onClick,
}: ChromeExtensionBannerProps) {
  return (
    <button
      className="relative rounded-[8px] shrink-0 w-full transition-colors cursor-pointer"
      data-name="nav"
      style={{ background: "var(--nav-banner-bg-default)" }}
      onClick={onClick}
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
              className="font-['Founders_Grotesk:Medium',sans-serif] relative shrink-0"
              style={{
                color: "var(--nav-banner-title)",
                letterSpacing: "-0.05em",
              }}
            >
              Download Chrome Extension
            </p>
            <p
              className="font-['Founders_Grotesk:Regular',sans-serif] relative shrink-0"
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