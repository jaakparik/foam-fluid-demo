interface ArrowUpIconProps {
  className?: string;
}

export function ArrowUpIcon({ className }: ArrowUpIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5.41675 9.58333L9.64653 5.35355C9.84179 5.15829 10.1584 5.15829 10.3536 5.35355L14.5834 9.58333"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0002 5.83334V16.25"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
