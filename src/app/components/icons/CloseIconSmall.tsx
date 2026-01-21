import { CircleXDuotone } from 'foamicons';

interface CloseIconSmallProps {
  color?: string;
}

export function CloseIconSmall({ color }: CloseIconSmallProps) {
  return (
    <CircleXDuotone
      size={16}
      strokeWidth="var(--icon-stroke-width)"
      style={{ color: color || 'var(--mention-pill-icon)' }}
    />
  );
}
