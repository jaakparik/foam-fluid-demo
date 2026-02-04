import svgPaths from '@/imports/svg-cswsbk26q1';

interface FlagCanadaProps {
  className?: string;
}

export function FlagCanada({ className }: FlagCanadaProps) {
  return (
    <div className={`h-[16px] relative shrink-0 w-[26px] ${className || ''}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 16">
        <g clipPath="url(#clip0_canada_applied)">
          <rect fill="white" height="15.5" stroke="#F5F5F5" strokeWidth="0.5" width="25.5" x="0.25" y="0.25" />
          <mask height="16" id="mask0_canada_applied" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="26" x="0" y="0">
            <rect fill="white" height="15.5" stroke="white" strokeWidth="0.5" width="25.5" x="0.25" y="0.25" />
          </mask>
          <g mask="url(#mask0_canada_applied)">
            <rect fill="#FF3131" height="16" width="7.42857" x="18.5714" />
            <path clipRule="evenodd" d="M0 16H7.42857V0H0V16Z" fill="#FF3131" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p33e37fc0} fill="#FF3131" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_canada_applied">
            <rect fill="white" height="16" rx="2" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
