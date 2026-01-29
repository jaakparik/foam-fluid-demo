import { History } from './foamicons/History';

interface RecentChatsIconProps {
  className?: string;
}

export function RecentChatsIcon({ className }: RecentChatsIconProps) {
  return (
    <History
      size={20}

      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
