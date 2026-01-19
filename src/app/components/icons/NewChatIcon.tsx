interface NewChatIconProps {
  className?: string;
}

export function NewChatIcon({ className }: NewChatIconProps) {
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
        d="M10 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V15.5C2.5 16.6046 3.39543 17.5 4.5 17.5H15.5C16.6046 17.5 17.5 16.6046 17.5 15.5V10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.875 13.65V11.9164C6.875 11.8899 6.88554 11.8645 6.90429 11.8457L14.9293 3.82071C14.9683 3.78166 15.0317 3.78166 15.0707 3.82071L16.8043 5.55429C16.8433 5.59334 16.8433 5.65666 16.8043 5.69571L8.77929 13.7207C8.76054 13.7395 8.7351 13.75 8.70858 13.75H6.975C6.91977 13.75 6.875 13.7052 6.875 13.65Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.125 6.25L14.375 7.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
