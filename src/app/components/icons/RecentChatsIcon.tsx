import { History } from 'foamicons';

interface RecentChatsIconProps {
  className?: string;
}

export function RecentChatsIcon({ className }: RecentChatsIconProps) {
  return (
    <History
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
