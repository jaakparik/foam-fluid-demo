// Duotone icon components extracted from foamicons for build compatibility

interface DuotoneIconProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ChartColumnSquareDuotone({ 
  size = 16, 
  strokeWidth = 1, 
  color = "#003784",
  className = "",
  style
}: DuotoneIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M2.5 4.66915C2.5 3.70258 3.1911 2.87634 4.15044 2.75834C5.18882 2.63062 6.59441 2.5 8 2.5C9.40559 2.5 10.8112 2.63062 11.8496 2.75834C12.8089 2.87634 13.5 3.70258 13.5 4.66915V11.3308C13.5 12.2974 12.8089 13.1237 11.8496 13.2417C10.8112 13.3694 9.40559 13.5 8 13.5C6.59441 13.5 5.18882 13.3694 4.15044 13.2417C3.1911 13.1237 2.5 12.2974 2.5 11.3308V4.66915Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 11V7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 11V5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 11V9.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ImageDuotone({ 
  size = 16, 
  strokeWidth = 1, 
  color = "#003784",
  className = "",
  style
}: DuotoneIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M2 4.74439C2 4.00274 2.54228 3.37428 3.27924 3.29101C4.43238 3.16071 6.21619 3 8 3C9.78381 3 11.5676 3.16071 12.7208 3.29101C13.4577 3.37428 14 4.00274 14 4.74439V11.2556C14 11.9973 13.4577 12.6257 12.7208 12.709C11.5676 12.8393 9.78381 13 8 13C6.21619 13 4.43238 12.8393 3.27924 12.709C2.54228 12.6257 2 11.9973 2 11.2556V4.74439Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.0221 8.9779L3.45139 7.54861C4.28299 6.71701 5.64915 6.77898 6.40205 7.68245L6.62717 7.9526C7.14763 8.57716 8.01105 8.79558 8.7659 8.49364C9.5053 8.19788 10.3509 8.40098 10.8753 9.0003L13.2242 11.6849C13.3991 11.8847 13.4771 12.1515 13.4375 12.4141C13.4375 12.4141 12.9852 12.6528 12.8822 12.6905C11.7387 12.8235 9.86936 13 8 13C6.21619 13 4.43238 12.8393 3.27924 12.709C2.54228 12.6257 2 11.9973 2 11.2556V9.03125C2 9.01124 2.00795 8.99205 2.0221 8.9779Z" fill={color} fillOpacity="0.25"/>
      <path d="M13.4375 12.4141C13.4375 12.4141 12.9852 12.6528 12.8822 12.6905M13.4375 12.4141L12.8822 12.6905M13.4375 12.4141C13.4771 12.1515 13.3991 11.8847 13.2242 11.6849L10.8753 9.0003C10.3509 8.40098 9.5053 8.19788 8.7659 8.49364C8.01105 8.79558 7.14763 8.57716 6.62717 7.9526L6.40205 7.68245C5.64915 6.77898 4.28299 6.71701 3.45139 7.54861L2.0221 8.9779C2.00795 8.99205 2 9.01124 2 9.03125V11.2556C2 11.9973 2.54228 12.6257 3.27924 12.709C4.43238 12.8393 6.21619 13 8 13C9.86936 13 11.7387 12.8235 12.8822 12.6905" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10.75" cy="5.75" r="0.75" fill={color}/>
    </svg>
  );
}

export function ReelDuotone({ 
  size = 16, 
  strokeWidth = 1, 
  color = "#003784",
  className = "",
  style
}: DuotoneIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M1.5 4.79111C1.5 4.28711 1.87445 3.86309 2.37584 3.81187C3.56 3.69088 5.78 3.5 8 3.5C10.22 3.5 12.44 3.69088 13.6242 3.81187C14.1255 3.8631 14.5 4.28711 14.5 4.79111V11.2089C14.5 11.7129 14.1255 12.1369 13.6242 12.1881C12.44 12.3091 10.22 12.5 8 12.5C5.78 12.5 3.56 12.3091 2.37584 12.1881C1.87445 12.1369 1.5 11.7129 1.5 11.2089V4.79111Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 4V12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 6H3.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 8H3.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 10H3.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 6H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 8H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 10H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 4V12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12V4C12.0095 3.81541 11.8701 3.6568 11.6858 3.64355C10.5951 3.56521 9.29754 3.5 8 3.5C6.70246 3.5 5.40492 3.56521 4.3142 3.64355C4.12985 3.6568 3.99048 3.81541 4 4V12C3.99048 12.1846 4.12985 12.3432 4.3142 12.3564C5.40492 12.4348 6.70246 12.5 8 12.5C9.29754 12.5 10.5951 12.4348 11.6858 12.3564C11.8702 12.3432 12.0095 12.1846 12 12Z" fill={color} fillOpacity="0.25"/>
      <path d="M6.09808 6.36603C6.09808 5.98113 6.51474 5.74056 6.84808 5.93301L9.84808 7.66506C10.1814 7.85751 10.1814 8.33864 9.84808 8.53109L6.84808 10.2631C6.51474 10.4556 6.09808 10.215 6.09808 9.83013L6.09808 6.36603Z" fill={color}/>
    </svg>
  );
}

export function StarDuotone({ 
  size = 16, 
  strokeWidth = 1, 
  color = "#003784",
  className = "",
  style
}: DuotoneIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M7.55165 2.56823C7.73507 2.19664 8.26494 2.19664 8.44836 2.56823L9.94378 5.59779C10.0165 5.74521 10.1571 5.84744 10.3198 5.87122L13.6648 6.36014C14.0747 6.42006 14.2381 6.92398 13.9413 7.21306L11.5217 9.56975C11.4038 9.68462 11.35 9.85019 11.3778 10.0125L11.9487 13.3412C12.0188 13.7497 11.59 14.0612 11.2232 13.8683L8.23273 12.2956C8.08704 12.219 7.91297 12.219 7.76728 12.2956L4.77682 13.8683C4.41 14.0612 3.98123 13.7497 4.05129 13.3412L4.62221 10.0125C4.65004 9.85019 4.59621 9.68462 4.47827 9.56975L2.05868 7.21306C1.76188 6.92398 1.92527 6.42006 2.33523 6.36014L5.68019 5.87122C5.84286 5.84744 5.98346 5.74521 6.05623 5.59779L7.55165 2.56823Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SlidersHorizontalDuotone({ 
  size = 16, 
  strokeWidth = 1, 
  color = "#003784",
  className = "",
  style
}: DuotoneIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M2.5 5H8.5M13.5 5H11.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 12H4.5M13.5 12H7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10" cy="5" r="1.5" fill={color} fillOpacity="0.25" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="6" cy="12" r="1.5" fill={color} fillOpacity="0.25" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ShareDuotone({ 
  size = 16, 
  strokeWidth = 1, 
  color = "#003784",
  className = "",
  style
}: DuotoneIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M5.3335 4.66667L7.64661 2.35355C7.84187 2.15829 8.15845 2.15829 8.35372 2.35355L10.6668 4.66667" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.00024 2.66675L8.00024 9.66675" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 6.27271V12.2936C13 13.0185 12.4813 13.6379 11.7625 13.7318C10.8014 13.8573 9.40072 14 8 14C6.59928 14 5.19855 13.8573 4.23755 13.7318C3.51872 13.6379 3 13.0185 3 12.2936V6.27271" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function UsersDuotone({ 
  size = 16, 
  strokeWidth = 1, 
  color = "#003784",
  className = "",
  style
}: DuotoneIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle cx="5.67676" cy="4.52344" r="1.72656" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="11.2344" cy="4.92725" r="1.32275" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.38285 11.8491C9.8863 11.8912 10.5603 11.9336 11.2344 11.9336C12.4245 11.9336 13.6147 11.8014 13.8658 11.7719C13.8939 11.7686 13.9141 11.7449 13.9141 11.7166V11.1028C13.9141 9.56816 12.769 8.24902 11.2344 8.24902C11.0021 8.24902 10.7919 8.26032 10.6031 8.27901C9.70685 8.36768 9.03758 9.01992 8.55469 9.78013" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.08594 12.0742C2.08594 10.0177 3.62032 8.25 5.67685 8.25C7.73337 8.25 9.26776 10.0177 9.26776 12.0742V12.8967C9.26776 12.9346 9.24067 12.9664 9.20304 12.9708C8.8666 13.0104 7.27172 13.1875 5.67685 13.1875C4.08197 13.1875 2.48709 13.0104 2.15066 12.9708C2.11302 12.9664 2.08594 12.9346 2.08594 12.8967V12.0742Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
