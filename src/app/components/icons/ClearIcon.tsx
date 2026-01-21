import { CircleXDuotone } from 'foamicons';

interface ClearIconProps {
  className?: string;
}

export function ClearIcon({ className = "size-[16px]" }: ClearIconProps) {
  return (
    <CircleXDuotone
      size={16}
      strokeWidth="var(--icon-stroke-width)"
      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
