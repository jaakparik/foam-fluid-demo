import svgPathsCogwheel from "../../../imports/svg-yty9ru092f";

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function CogwheelIcon({ isDark, isActive }: IconProps) {
  return (
    <div 
      className="relative size-full" 
      data-name="Cogwheel"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    >
      <div
        className="absolute inset-[9.36%_8.2%]"
        data-name="Union"
      >
        <div className="absolute inset-[-3.69%_-3.59%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 17.9209 17.4565"
          >
            <path
              clipRule="evenodd"
              d={svgPathsCogwheel.p32e7ce00}
              fillRule="evenodd"
              id="Union"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.24%_37.33%_37.76%_37.67%]">
        <div className="absolute inset-[-12%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6.2 6.2"
          >
            <circle
              cx="3.1"
              cy="3.1"
              id="Ellipse 31"
              r="2.5"
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