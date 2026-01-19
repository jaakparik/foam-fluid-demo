interface ManagerIconProps {
  className?: string;
  isDark?: boolean;
}

export function ManagerIcon({ className = "", isDark = false }: ManagerIconProps) {
  const strokeColor = isDark ? "#b7bdc7" : "#54657d";
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none"
      className={className}
    >
      <path 
        d="M7.5 9L4 7.5L5.80204 14.2577C5.91878 14.6954 6.31523 15 6.76828 15H13.6802C14.1569 15 14.5673 14.6635 14.6608 14.1961L16 7.5C15 8 12.9 9 12.5 9C12.1 9 10.6667 7 10 6L7.5 9Z" 
        stroke={strokeColor}
        strokeWidth="1.2" 
        strokeLinejoin="round"
      />
      <circle cx="16" cy="7" r="0.6" fill={strokeColor} stroke={strokeColor} strokeWidth="0.8"/>
      <circle cx="4" cy="7" r="0.6" fill={strokeColor} stroke={strokeColor} strokeWidth="0.8"/>
      <circle cx="10" cy="5" r="0.6" fill={strokeColor} stroke={strokeColor} strokeWidth="0.8"/>
      <circle cx="10" cy="12" r="0.6" fill={strokeColor} stroke={strokeColor} strokeWidth="0.8"/>
    </svg>
  );
}
