interface RosterIconProps {
  isDark?: boolean;
  isActive?: boolean;
  className?: string;
}

export function RosterIcon({ isDark = false, isActive = false, className = "" }: RosterIconProps) {
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
        d="M12.4998 1.66663H7.49984C7.0396 1.66663 6.6665 2.03972 6.6665 2.49996V4.16663C6.6665 4.62686 7.0396 4.99996 7.49984 4.99996H12.4998C12.9601 4.99996 13.3332 4.62686 13.3332 4.16663V2.49996C13.3332 2.03972 12.9601 1.66663 12.4998 1.66663Z" 
        stroke={isActive ? "var(--nav-item-icon-active)" : "var(--nav-item-icon-default)"} 
        strokeWidth="var(--icon-stroke-width)"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M13.3335 3.33337H15.0002C15.4422 3.33337 15.8661 3.50897 16.1787 3.82153C16.4912 4.13409 16.6668 4.55801 16.6668 5.00004V16.6667C16.6668 17.1087 16.4912 17.5327 16.1787 17.8452C15.8661 18.1578 15.4422 18.3334 15.0002 18.3334H5.00016C4.55814 18.3334 4.13421 18.1578 3.82165 17.8452C3.50909 17.5327 3.3335 17.1087 3.3335 16.6667V5.00004C3.3335 4.55801 3.50909 4.13409 3.82165 3.82153C4.13421 3.50897 4.55814 3.33337 5.00016 3.33337H6.66683" 
        stroke={isActive ? "var(--nav-item-icon-active)" : "var(--nav-item-icon-default)"} 
        strokeWidth="var(--icon-stroke-width)"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M10 9.16663H13.3333" 
        stroke={isActive ? "var(--nav-item-icon-active)" : "var(--nav-item-icon-default)"} 
        strokeWidth="var(--icon-stroke-width)"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M10 13.3334H13.3333" 
        stroke={isActive ? "var(--nav-item-icon-active)" : "var(--nav-item-icon-default)"} 
        strokeWidth="var(--icon-stroke-width)"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M6.6665 9.16663H6.67484" 
        stroke={isActive ? "var(--nav-item-icon-active)" : "var(--nav-item-icon-default)"} 
        strokeWidth="var(--icon-stroke-width)"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M6.6665 13.3334H6.67484" 
        stroke={isActive ? "var(--nav-item-icon-active)" : "var(--nav-item-icon-default)"} 
        strokeWidth="var(--icon-stroke-width)"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}
