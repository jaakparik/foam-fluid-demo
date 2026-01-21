import svgPathsBell from "../../../imports/svg-tflpfbaj0f";

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function BellIcon({ isDark, isActive }: IconProps) {
  return (
    <div 
      className="relative size-full" 
      data-name="Bell"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    >
      <div
        className="absolute inset-[12.5%_15.37%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-4%_-1.73%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 14.331 16.2"
          >
            <path
              d={svgPathsBell.p1a2e6c00}
              id="Vector"
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