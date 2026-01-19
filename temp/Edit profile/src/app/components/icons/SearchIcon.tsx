import svgPaths from "../../../imports/svg-q7ixiy5xgy";

interface SearchIconProps {
  className?: string;
  color?: string;
}

export function SearchIcon({ className = "size-[16px]", color }: SearchIconProps) {
  return (
    <div className={className}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path
            clipRule="evenodd"
            d={svgPaths.p7a69800}
            fill={color || "var(--search-text-default)"}
            fillRule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
}