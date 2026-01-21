import { UserDuotone } from 'foamicons';

interface TalentIconProps {
  className?: string;
}

export function TalentIcon({ className }: TalentIconProps) {
  return (
    <UserDuotone
      size={20}
      strokeWidth="var(--icon-stroke-width)"
      className={className}
      style={{ color: 'currentColor' }}
    />
  );
}
