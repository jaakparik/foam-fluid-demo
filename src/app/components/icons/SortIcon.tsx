interface SortIconProps {
  opacity?: number;
  color?: string;
}

export function SortIcon({ opacity = 1, color = "#54657D" }: SortIconProps) {
  return (
    <div className="relative shrink-0 size-[16px]" style={{ opacity }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2.5 5.66667L4.81311 3.35355C5.00838 3.15829 5.32496 3.15829 5.52022 3.35355L7.83333 5.66667" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.16675 3.66675V11.0001" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.8334 10.3333L11.5203 12.6464C11.325 12.8417 11.0084 12.8417 10.8132 12.6464L8.50004 10.3333" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.1666 12.3333L11.1666 4.99992" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
