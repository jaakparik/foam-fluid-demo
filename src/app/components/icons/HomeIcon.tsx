import svgPathsHome from "../../../imports/svg-ezu2hikp3";

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function HomeIcon({ isDark, isActive }: IconProps) {
  return (
    <div 
      className="relative size-full" 
      data-name="Home"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    >
      <div className="absolute inset-[9.38%_15.63%_16.1%_15.63%]">
        <div className="absolute inset-[-4.03%_-4.36%_-3.45%_-4.36%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 14.95 16.0182"
          >
            <path
              d={svgPathsHome.p1126c800}
              id="Rectangle 519"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}