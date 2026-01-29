import { Sparkles } from './foamicons/Sparkles';

interface MagicIconProps {
  className?: string;
}

export function MagicIcon({ className }: MagicIconProps) {
  return (
    <Sparkles
      size={20}

      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
