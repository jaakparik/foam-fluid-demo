import { CircleX } from 'foamicons';

interface ClearIconProps {
  className?: string;
}

export function ClearIcon({ className = "size-[16px]" }: ClearIconProps) {
  return (
    <CircleX
      size={16}
      strokeWidth="var(--icon-stroke-width)"
      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
