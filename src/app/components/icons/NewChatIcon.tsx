import { Plus } from './foamicons/Plus';

interface NewChatIconProps {
  className?: string;
}

export function NewChatIcon({ className }: NewChatIconProps) {
  return (
    <Plus
      size={20}

      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
