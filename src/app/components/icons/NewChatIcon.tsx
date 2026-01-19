import { Plus } from 'foamicons';

interface NewChatIconProps {
  className?: string;
}

export function NewChatIcon({ className }: NewChatIconProps) {
  return (
    <Plus
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
