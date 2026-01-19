interface TalentIconProps {
  className?: string;
}

export function TalentIcon({ className }: TalentIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle
        cx="10"
        cy="5.625"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15.9499C5 13.0864 7.13648 10.625 10 10.625C12.8635 10.625 15 13.0864 15 15.9499V17.0951C15 17.1479 14.9623 17.1922 14.9099 17.1983C14.4414 17.2534 12.2207 17.5 10 17.5C7.77928 17.5 5.55857 17.2534 5.09011 17.1983C5.03771 17.1922 5 17.1479 5 17.0951V15.9499Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
