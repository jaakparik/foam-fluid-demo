interface ClearIconProps {
  className?: string;
}

export function ClearIcon({ className = "size-[16px]" }: ClearIconProps) {
  return (
    <div className={className}>
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path
          d="M11.1821 4.81812L4.81817 11.1821"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.1821 11.1819L4.81817 4.81792"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
