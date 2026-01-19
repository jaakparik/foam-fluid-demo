import svgPaths from "../imports/svg-r9mv1pk30u";
import { Checkbox } from "./Checkbox";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface ContentCardProps {
  imageUrl: string;
  platformName: string;
  views: string;
  reach: string;
  clicks: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  platform?: "instagram" | "tiktok" | "youtube" | "snapchat";
}

function InstagramIcon() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Instagram"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Instagram">
          <g id="Vector">
            <path
              d={svgPaths.p1c85f500}
              fill="url(#paint0_linear_1_2229)"
            />
            <path
              d={svgPaths.p1c85f500}
              fill="url(#paint1_linear_1_2229)"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2229"
            x1="0.75"
            x2="6.99231"
            y1="1.5"
            y2="13.9385"
          >
            <stop stopColor="#D9D9D9" />
            <stop offset="0.0001" stopColor="#1200E7" />
            <stop offset="0.868122" stopColor="#ED1389" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_1_2229"
            x1="2.22692"
            x2="10.7885"
            y1="21.9346"
            y2="0.369231"
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

function TikTokIcon() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="TikTok"
    >
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          d="M14.5 0H11.25V13.6C11.25 15.08 10.05 16.28 8.58 16.28C7.11 16.28 5.91 15.08 5.91 13.6C5.91 12.15 7.09 10.98 8.51 10.92V7.64C5.32 7.71 2.75 10.32 2.75 13.6C2.75 16.9 5.42 19.6 8.57 19.6C11.72 19.6 14.39 16.9 14.39 13.6V6.68C15.66 7.62 17.21 8.16 18.88 8.2V4.92C16.39 4.8 14.5 2.84 14.5 0Z"
          fill="#000000"
        />
      </svg>
    </div>
  );
}

function YouTubeIcon() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="YouTube"
    >
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          d="M19.58 4.73C19.35 3.82 18.64 3.11 17.73 2.88C16.14 2.5 10 2.5 10 2.5C10 2.5 3.86 2.5 2.27 2.88C1.36 3.11 0.65 3.82 0.42 4.73C0 6.32 0 9.5 0 9.5C0 9.5 0 12.68 0.42 14.27C0.65 15.18 1.36 15.89 2.27 16.12C3.86 16.5 10 16.5 10 16.5C10 16.5 16.14 16.5 17.73 16.12C18.64 15.89 19.35 15.18 19.58 14.27C20 12.68 20 9.5 20 9.5C20 9.5 20 6.32 19.58 4.73ZM8 12.5V6.5L13 9.5L8 12.5Z"
          fill="#FF0000"
        />
      </svg>
    </div>
  );
}

function SnapchatIcon() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="Snapchat"
    >
      <img
        src="https://proto.dev.foam.io/assets/icons/color/Snap.svg"
        alt="Snapchat"
        className="block size-full"
      />
    </div>
  );
}

function PlatformIcon({
  platform,
}: {
  platform: "instagram" | "tiktok" | "youtube" | "snapchat";
}) {
  switch (platform) {
    case "tiktok":
      return <TikTokIcon />;
    case "youtube":
      return <YouTubeIcon />;
    case "snapchat":
      return <SnapchatIcon />;
    case "instagram":
    default:
      return <InstagramIcon />;
  }
}

function Eye() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Eye"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Eye">
          <path
            clipRule="evenodd"
            d={svgPaths.p38a8b380}
            fill="var(--fill-0, #8B94A2)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Reach() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Reach"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_2217)" id="Reach">
          <path
            clipRule="evenodd"
            d={svgPaths.p1aa30580}
            fill="var(--fill-0, #8B94A2)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2217">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Click() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Click"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Click">
          <path
            clipRule="evenodd"
            d={svgPaths.p381dd800}
            fill="var(--fill-0, #8B94A2)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Stats() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Stats"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Stats">
          <path
            clipRule="evenodd"
            d={svgPaths.p3f07f870}
            fill="var(--fill-0, #1C2128)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

export function ContentCard({
  imageUrl,
  platformName,
  views,
  reach,
  clicks,
  checked,
  onCheckedChange,
  platform = "instagram",
}: ContentCardProps) {
  return (
    <motion.div
      className="relative w-full cursor-pointer group"
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`content-stretch flex flex-col items-start overflow-hidden relative rounded-[12px] w-full transition-shadow duration-300 ${
          checked ? "border-2 border-[#0066FF]" : "border-1 border-[#dee2e8]"
        } group-hover:shadow-lg`}
      >
        <div
          className="relative shrink-0 w-full aspect-[4/3]"
          data-name="_contentImg"
        >
          <ImageWithFallback
            alt={platformName}
            className={`object-cover pointer-events-none transition-all duration-300 ${
              checked 
                ? "absolute top-[8px] left-[8px] right-[8px] bottom-0 w-[calc(100%-16px)] h-[calc(100%-8px)] rounded-tl-[4px] rounded-tr-[4px]" 
                : "absolute inset-0 w-full h-full rounded-tl-[11px] rounded-tr-[11px]"
            }`}
            src={imageUrl}
          />
          <div
            className={`absolute z-10 transition-all duration-300 ${
              checked
                ? "top-[12px] right-[12px] opacity-100"
                : "top-[4px] right-[4px] opacity-50 group-hover:opacity-100"
            }`}
          >
            <Checkbox
              checked={checked}
              onCheckedChange={onCheckedChange}
            />
          </div>
        </div>
        <div
          className={`bg-white relative shrink-0 w-full transition-all duration-300 ${
            checked ? "rounded-bl-[10px] rounded-br-[10px]" : "rounded-bl-[11px] rounded-br-[11px]"
          }`}
          data-name="InfoLabel"
        >
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div
                  className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full"
                  data-name="Platform+Name"
                >
                  <PlatformIcon platform={platform} />
                  <p className="font-['Founders_Grotesk:Medium',sans-serif] leading-[24px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#15191e] text-[16px] text-nowrap whitespace-pre">
                    {platformName}
                  </p>
                </div>
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-name="Metrics"
                >
                  <div
                    className="content-stretch flex gap-[4px] items-center relative shrink-0"
                    data-name="MetricItem"
                  >
                    <Eye />
                    <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303d4f] text-[14px] text-nowrap text-right">
                      <p className="leading-[20px] whitespace-pre">
                        {views}
                      </p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[4px] items-center relative shrink-0"
                    data-name="MetricItem"
                  >
                    <Reach />
                    <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303d4f] text-[14px] text-nowrap text-right">
                      <p className="leading-[20px] whitespace-pre">
                        {reach}
                      </p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[4px] items-center relative shrink-0"
                    data-name="MetricItem"
                  >
                    <Click />
                    <div className="flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303d4f] text-[14px] text-nowrap text-right">
                      <p className="leading-[20px] whitespace-pre">
                        {clicks}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#f3f5f6] relative rounded-[9999px] shrink-0 w-full"
                data-name="Button"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative w-full">
                    <Stats />
                    <p className="font-['Founders_Grotesk:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#15191e] text-[14px] text-nowrap whitespace-pre">
                      View details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* overlay border removed to avoid 1px gap */}
    </motion.div>
  );
}