import svgPaths from "@/imports/svg-6q99q8rjjx";
import { imgGroup, imgGroup1 } from "@/imports/svg-6jbzl";

interface PlatformIconProps {
  selected?: boolean;
}

export function InstagramIcon({ selected = false }: PlatformIconProps) {
  if (selected) {
    return (
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path d={svgPaths.p3331c380} fill="white" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p10fa8e00} fill="url(#paint0_linear_instagram)" />
          <path d={svgPaths.p3331c380} fill="url(#paint1_linear_instagram)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_instagram" x1="-1.05417" x2="4.84032" y1="0.64585" y2="9.15633">
            <stop offset="0.00121768" stopColor="#6521F5" />
            <stop offset="0.293733" stopColor="#1200DD" />
            <stop offset="0.709013" stopColor="#ED1389" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_instagram" x1="1.83345" x2="7.23548" y1="14.2015" y2="0.595057">
            <stop stopColor="#FBEC48" />
            <stop offset="0.399" stopColor="#FC3746" />
            <stop offset="0.854" stopColor="#FC2C46" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TikTokGroup({ selected }: { selected: boolean }) {
  if (selected) {
    return (
      <div className="absolute inset-[11.11%_12.5%_7.56%_16.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.652px_-0.567px] mask-size-[12px_13.58px]" style={{ maskImage: `url('${imgGroup}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3477 13.0129">
          <g>
            <path d={svgPaths.p2ae2b280} fill="white" />
            <path d={svgPaths.p19d21a80} fill="white" />
            <path d={svgPaths.p36325100} fill="white" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-[7.56%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[12px_13.58px]" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9998 13.5802">
        <g>
          <path d={svgPaths.p2b54e300} fill="#25F4EE" />
          <path d={svgPaths.p1261ee80} fill="#25F4EE" />
          <path d={svgPaths.p6114832} fill="#25F4EE" />
          <path d={svgPaths.p2b18700} fill="#FE2C55" />
          <path d={svgPaths.p2db2bf00} fill="#FE2C55" />
          <path d={svgPaths.p210f2500} fill="#FE2C55" />
          <path d={svgPaths.p183b2480} fill="black" />
        </g>
      </svg>
    </div>
  );
}

export function TikTokIcon({ selected = false }: PlatformIconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute contents inset-[7.56%_12.5%]">
        <TikTokGroup selected={selected} />
      </div>
    </div>
  );
}

function YouTubeGroup({ selected }: { selected: boolean }) {
  return (
    <div className="absolute inset-[20.83%_4.17%_16.67%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[14.667px_10px]" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 9.99999">
        <g>
          <path d={svgPaths.pb949100} fill={selected ? "white" : "#FF0302"} />
          <path d={svgPaths.p17171100} fill="white" />
        </g>
      </svg>
    </div>
  );
}

export function YouTubeIcon({ selected = false }: PlatformIconProps) {
  if (selected) {
    return (
      <div className="overflow-clip relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path d={svgPaths.p3d167900} fill="white" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute contents inset-[20.83%_4.17%_16.67%_4.17%]">
        <YouTubeGroup selected={selected} />
      </div>
    </div>
  );
}

export function SnapchatIcon({ selected = false }: PlatformIconProps) {
  if (selected) {
    return (
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path d={svgPaths.p26bc7d00} fill="white" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.pf127b00} fill="#FFFC00" />
          <path d={svgPaths.pd7a3400} fill="white" />
          <path d={svgPaths.p28fc400} fill="black" />
        </g>
      </svg>
    </div>
  );
}
