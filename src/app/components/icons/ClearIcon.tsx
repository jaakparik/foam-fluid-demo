import { CircleX } from './foamicons/CircleX';

interface ClearIconProps {
  className?: string;
}

export function ClearIcon({ className = "size-[16px]" }: ClearIconProps) {
  return (
    <CircleX
      size={16}

      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
