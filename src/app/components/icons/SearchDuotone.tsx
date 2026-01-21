interface SearchDuotoneProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

export function SearchDuotone({ 
  size = 16, 
  strokeWidth = 1, 
  color = "currentColor",
  className = "" 
}: SearchDuotoneProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M12 7C12 8.38071 11.4404 9.63071 10.5355 10.5355C9.63071 11.4404 8.38071 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7Z" 
        fill={color}
        fillOpacity="0.25"
      />
      <path 
        d="M14 14L10.5355 10.5355M10.5355 10.5355C11.4404 9.63071 12 8.38071 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C8.38071 12 9.63071 11.4404 10.5355 10.5355Z" 
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}
