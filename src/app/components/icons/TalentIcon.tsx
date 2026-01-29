import { User } from './foamicons/User';

interface TalentIconProps {
  className?: string;
}

export function TalentIcon({ className }: TalentIconProps) {
  return (
    <User
      size={20}

      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
