import { useState } from "react";
import svgPaths from "@/imports/svg-2whxb4a96m";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface ContentCardProps {
  image: string;
  views: string;
  reach: string;
  clicks: string;
  platform: "instagram" | "tiktok" | "youtube";
  postedDate: string;
  isSelected?: boolean;
  onSelectionChange?: (selected: boolean) => void;
}

// Icon Components
function EyeIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p38a8b380}
          fill="#8B94A2"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function ReachIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_reach)">
          <path
            clipRule="evenodd"
            d={svgPaths.p1aa30580}
            fill="#8B94A2"
            fillRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_reach">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ClickIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p381dd800}
          fill="#8B94A2"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function InstagramIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path
          d={svgPaths.p208295b0}
          fill="url(#paint0_linear_instagram)"
        />
        <path
          d={svgPaths.p208295b0}
          fill="url(#paint1_linear_instagram)"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_instagram"
            x1="0.625"
            x2="5.82692"
            y1="1.25"
            y2="11.6154"
          >
            <stop stopColor="#D9D9D9" />
            <stop offset="0.0001" stopColor="#1200E7" />
            <stop offset="0.868122" stopColor="#ED1389" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_instagram"
            x1="1.85577"
            x2="8.99038"
            y1="18.2788"
            y2="0.307692"
          >
            <stop stopColor="#FC2C46" />
            <stop offset="0.0001" stopColor="#FFE16A" />
            <stop offset="0.39864" stopColor="#FC3746" />
            <stop
              offset="0.85431"
              stopColor="#FC2C46"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MoreIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p3f07f870}
          fill="#1C2128"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

export function ContentCard({
  image,
  views,
  reach,
  clicks,
  platform,
  postedDate,
  isSelected = false,
  onSelectionChange,
}: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-[12px] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        {/* Image */}
        <div className="relative w-full aspect-[4/5] bg-gray-200">
          <ImageWithFallback
            alt="Content thumbnail"
            className="absolute inset-0 w-full h-full object-cover rounded-tl-[8px] rounded-tr-[8px]"
            src={image}
          />
        </div>

        {/* Info Label */}
        <div
          className="relative rounded-bl-[8px] rounded-br-[8px] w-full"
          style={{ background: "var(--nav-sidepanel-bg)" }}
        >
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
            {/* Metrics */}
            <div className="content-stretch flex gap-[8px] items-center relative w-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <EyeIcon />
                <div
                  className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-sm text-right whitespace-nowrap"
                  style={{ color: "var(--table-text-primary)" }}
                >
                  <p className="leading-[20px] whitespace-pre">
                    {views}
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <ReachIcon />
                <div
                  className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-sm text-right whitespace-nowrap"
                  style={{ color: "var(--table-text-primary)" }}
                >
                  <p className="leading-[20px] whitespace-pre">
                    {reach}
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <ClickIcon />
                <div
                  className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-sm text-right whitespace-nowrap"
                  style={{ color: "var(--table-text-primary)" }}
                >
                  <p className="leading-[20px] whitespace-pre">
                    {clicks}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="content-stretch flex items-center justify-between relative w-full">
              <InstagramIcon />
              <div className="content-stretch flex font-['Founders_Grotesk:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-sm text-right whitespace-nowrap">
                <div
                  className="flex flex-col justify-center relative shrink-0"
                  style={{
                    color: "var(--table-text-secondary)",
                  }}
                >
                  <p className="leading-[20px] whitespace-pre">
                    Posted:
                  </p>
                </div>
                <div
                  className="font-['Hanken_Grotesk:Regular',sans-serif] not-italic relative text-sm text-right whitespace-nowrap"
                  style={{ color: "var(--table-text-secondary)" }}
                >
                  <p className="leading-[20px] whitespace-pre">
                    {postedDate}
                  </p>
                </div>
              </div>
              <button
                className="content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 transition-colors hover:opacity-80"
                style={{
                  background: "var(--button-secondary-bg)",
                }}
              >
                <MoreIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Checkbox on hover */}
        <div
          className={`absolute content-stretch flex items-center right-[12px] top-[12px] transition-opacity ${
            isHovered || isSelected
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <div className="content-stretch flex items-center relative shrink-0">
            <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[1000px] shrink-0">
              <button
                onClick={() => onSelectionChange?.(!isSelected)}
                className={`content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px] transition-colors ${
                  isSelected
                    ? "bg-[#3a495f]"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[8px] ${
                    isSelected
                      ? "border-[#3a495f]"
                      : "border-[#3a495f]"
                  }`}
                />
                {isSelected && (
                  <svg
                    className="size-[16px]"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3 8L6.5 11.5L13 5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-solid inset-0 pointer-events-none rounded-[12px]"
        style={{ borderColor: "var(--table-border)" }}
      />
    </div>
  );
}