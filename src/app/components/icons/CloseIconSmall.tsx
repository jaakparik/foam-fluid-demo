import { CircleX } from './foamicons/CircleX';

interface CloseIconSmallProps {
  color?: string;
}

export function CloseIconSmall({ color }: CloseIconSmallProps) {
  return (
    <CircleX
      size={16}

      style={{ color: color || 'var(--mention-pill-icon)' }}
    />
  );
}
