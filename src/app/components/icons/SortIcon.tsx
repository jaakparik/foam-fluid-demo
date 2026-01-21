import { 
  ArrowDownUpDuotone,
  ArrowUpAZDuotone,
  ArrowUpZADuotone,
  ArrowDown01Duotone,
  ArrowDown10Duotone,
  ArrowDownIGDuotone,
  ArrowUpIGDuotone,
  ArrowDownTTDuotone,
  ArrowUpTTDuotone,
  ArrowDownYTDuotone,
  ArrowUpYTDuotone,
  ArrowDownSCDuotone,
  ArrowUpSCDuotone
} from 'foamicons';

interface SortIconProps {
  opacity?: number;
  color?: string;
  field?: string;
  direction?: 'asc' | 'desc';
}

/**
 * Dynamic sort icon that changes based on the sort field and direction
 * 
 * - Name/Location: Shows A-Z or Z-A icons
 * - Age/Numeric fields: Shows 0-1 or 1-0 icons  
 * - Instagram: Shows I-G with down/up arrows
 * - TikTok: Shows T-T with down/up arrows
 * - YouTube: Shows Y-T with down/up arrows
 * - Snapchat: Shows S-C with down/up arrows
 * - Generic: Shows bi-directional arrow
 */
export function SortIcon({ 
  opacity = 1, 
  color = "#54657D",
  field,
  direction = 'asc'
}: SortIconProps) {
  // If no field is provided, show generic sort icon
  if (!field) {
    return (
      <div style={{ opacity }}>
        <ArrowDownUpDuotone
          size={16}
          strokeWidth="var(--icon-stroke-width)"
          style={{ color }}
        />
      </div>
    );
  }

  // Alphabetical fields (Name, Location)
  const alphabeticalFields = ['name', 'location'];
  
  // Numeric/Audience fields
  const numericFields = ['age', 'totalAudience', 'followers', 'engagement'];

  let IconComponent = ArrowDownUpDuotone;

  if (alphabeticalFields.includes(field)) {
    // For alphabetical: A-Z (asc) or Z-A (desc)
    IconComponent = direction === 'asc' ? ArrowUpAZDuotone : ArrowUpZADuotone;
  } else if (numericFields.includes(field)) {
    // For numeric: 0-1 (asc, low to high = UP) or 1-0 (desc, high to low = DOWN)
    IconComponent = direction === 'asc' ? ArrowDown01Duotone : ArrowDown10Duotone;
  } else if (field === 'instagram') {
    // Instagram: I-G with up (asc, low to high) or down (desc, high to low) arrow
    IconComponent = direction === 'asc' ? ArrowUpIGDuotone : ArrowDownIGDuotone;
  } else if (field === 'tiktok') {
    // TikTok: T-T with up (asc, low to high) or down (desc, high to low) arrow
    IconComponent = direction === 'asc' ? ArrowUpTTDuotone : ArrowDownTTDuotone;
  } else if (field === 'youtube') {
    // YouTube: Y-T with up (asc, low to high) or down (desc, high to low) arrow
    IconComponent = direction === 'asc' ? ArrowUpYTDuotone : ArrowDownYTDuotone;
  } else if (field === 'snap' || field === 'snapchat') {
    // Snapchat: S-C with up (asc, low to high) or down (desc, high to low) arrow
    IconComponent = direction === 'asc' ? ArrowUpSCDuotone : ArrowDownSCDuotone;
  }

  return (
    <div style={{ opacity }}>
      <IconComponent
        size={16}
        strokeWidth="var(--icon-stroke-width)"
        style={{ color }}
      />
    </div>
  );
}
