export function SaveIcon({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M2.5 4C2.5 3.17157 3.17157 2.5 4 2.5H8H10.1373C10.53 2.5 10.9071 2.65401 11.1875 2.92897L12.168 3.89039L13.0715 4.8126C13.3462 5.09297 13.5 5.46983 13.5 5.86233V8V12C13.5 12.8284 12.8284 13.5 12 13.5H4C3.17157 13.5 2.5 12.8284 2.5 12V4Z" 
        stroke={color}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M5.5 2.5V4.5C5.5 5.05228 5.94772 5.5 6.5 5.5H8.5C9.05228 5.5 9.5 5.05228 9.5 4.5V2.5" 
        stroke={color}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M4.5 13.5V9.5C4.5 8.94772 4.94772 8.5 5.5 8.5H10.5C11.0523 8.5 11.5 8.94772 11.5 9.5V13.5" 
        stroke={color}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}
