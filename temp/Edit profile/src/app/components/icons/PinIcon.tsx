import svgPaths from "../../../imports/svg-jbicj23zgf";

interface IconProps {
  isDark: boolean;
  isActive?: boolean;
}

export function PinIcon({ isDark, isActive }: IconProps) {
  return (
    <div 
      className="relative size-full" 
      data-name="Pin"
      style={{
        color: isActive ? 'var(--nav-item-icon-active)' : 'var(--nav-item-icon-default)',
      }}
    >
      <div className="absolute inset-[15.63%_14.96%_18.08%_18.75%]">
        <div className="absolute inset-[0_0_-4.53%_-4.53%]">
          <svg 
            className="block size-full" 
            fill="none" 
            preserveAspectRatio="none" 
            viewBox="0 0 13.8583 13.8583"
          >
            <g id="Group 7">
              <path 
                d={svgPaths.p14b101a0} 
                id="Vector 631" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.2" 
              />
              <path 
                d={svgPaths.p3f3aae00} 
                id="Rectangle 556" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.2" 
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
