import { 
  ArrowDownUpDuotone,
  ArrowUpAZDuotone,
  ArrowUpZADuotone,
  ArrowUpNarrowWideDuotone,
  ArrowUpWideNarrowDuotone
} from 'foamicons';

/**
 * Enhanced Sort Icon Component with support for different icon types
 * 
 * This is an improved version of your current SortIcon component that can
 * display different icons based on the sort field and direction.
 */

interface SortIconProps {
  opacity?: number;
  color?: string;
  /**
   * Type of sort icon to display:
   * - 'generic': Default bi-directional arrow (ArrowDownUpDuotone)
   * - 'alphabetical-asc': A-Z alphabetical sort
   * - 'alphabetical-desc': Z-A alphabetical sort  
   * - 'numerical-asc': Ascending numerical sort (narrow to wide)
   * - 'numerical-desc': Descending numerical sort (wide to narrow)
   */
  variant?: 'generic' | 'alphabetical-asc' | 'alphabetical-desc' | 'numerical-asc' | 'numerical-desc';
}

export function SortIconEnhanced({ 
  opacity = 1, 
  color = "#54657D",
  variant = 'generic'
}: SortIconProps) {
  // Map variant to the appropriate icon component
  const IconComponent = {
    'generic': ArrowDownUpDuotone,
    'alphabetical-asc': ArrowUpAZDuotone,
    'alphabetical-desc': ArrowUpZADuotone,
    'numerical-asc': ArrowUpNarrowWideDuotone,
    'numerical-desc': ArrowUpWideNarrowDuotone,
  }[variant];

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

/**
 * Helper function to determine which icon variant to use based on sort state
 * 
 * @example
 * const iconVariant = getSortIconVariant('name', 'asc');
 * // Returns: 'alphabetical-asc'
 * 
 * const iconVariant = getSortIconVariant('followers', 'desc');
 * // Returns: 'numerical-desc'
 */
export function getSortIconVariant(
  field: string, 
  direction: 'asc' | 'desc'
): SortIconProps['variant'] {
  // Fields that should use alphabetical icons
  const alphabeticalFields = ['name', 'title', 'creator', 'location', 'biography'];
  
  // Fields that should use numerical icons
  const numericalFields = [
    'age', 
    'followers', 
    'totalAudience', 
    'instagram', 
    'tiktok', 
    'youtube',
    'instagramAudience',
    'tiktokAudience',
    'youtubeAudience',
    'snapchatAudience',
    'price',
    'engagement'
  ];
  
  if (alphabeticalFields.includes(field)) {
    return direction === 'asc' ? 'alphabetical-asc' : 'alphabetical-desc';
  }
  
  if (numericalFields.includes(field)) {
    return direction === 'asc' ? 'numerical-asc' : 'numerical-desc';
  }
  
  // Default to generic for unknown fields
  return 'generic';
}

/**
 * Example: How to use in your SortDropdown or QuickFilters
 */
export function ExampleUsage() {
  // In your component where you have sortState:
  const sortState = { field: 'name', direction: 'asc' as const };
  
  // Get the appropriate icon variant
  const iconVariant = getSortIconVariant(sortState.field, sortState.direction);
  
  return (
    <div>
      {/* Use the enhanced icon with variant */}
      <SortIconEnhanced 
        color="currentColor" 
        variant={iconVariant}
      />
    </div>
  );
}

/**
 * Alternative: Smart Sort Icon that determines variant automatically
 */
interface SmartSortIconProps {
  opacity?: number;
  color?: string;
  field?: string;
  direction?: 'asc' | 'desc';
}

export function SmartSortIcon({ 
  opacity = 1, 
  color = "#54657D",
  field,
  direction
}: SmartSortIconProps) {
  // If field and direction are provided, determine the variant
  const variant = field && direction 
    ? getSortIconVariant(field, direction)
    : 'generic';

  return <SortIconEnhanced opacity={opacity} color={color} variant={variant} />;
}

/**
 * Integration Example: Update your existing SortIcon.tsx
 * 
 * Replace your current SortIcon component with:
 * 
 * ```typescript
 * import { 
 *   ArrowDownUpDuotone,
 *   ArrowUpAZDuotone,
 *   ArrowUpZADuotone,
 *   ArrowUpNarrowWideDuotone,
 *   ArrowUpWideNarrowDuotone
 * } from 'foamicons';
 * 
 * interface SortIconProps {
 *   opacity?: number;
 *   color?: string;
 *   field?: string;           // NEW: sort field name
 *   direction?: 'asc' | 'desc'; // NEW: sort direction
 * }
 * 
 * export function SortIcon({ 
 *   opacity = 1, 
 *   color = "#54657D",
 *   field,
 *   direction
 * }: SortIconProps) {
 *   // Determine which icon to show based on field type
 *   let IconComponent = ArrowDownUpDuotone; // default
 *   
 *   if (field && direction) {
 *     const alphabeticalFields = ['name', 'title', 'creator', 'location'];
 *     const numericalFields = ['age', 'followers', 'totalAudience', 'instagram', 'tiktok', 'youtube'];
 *     
 *     if (alphabeticalFields.includes(field)) {
 *       IconComponent = direction === 'asc' ? ArrowUpAZDuotone : ArrowUpZADuotone;
 *     } else if (numericalFields.includes(field)) {
 *       IconComponent = direction === 'asc' ? ArrowUpNarrowWideDuotone : ArrowUpWideNarrowDuotone;
 *     }
 *   }
 * 
 *   return (
 *     <div style={{ opacity }}>
 *       <IconComponent
 *         size={16}
 *         strokeWidth="var(--icon-stroke-width)"
 *         style={{ color }}
 *       />
 *     </div>
 *   );
 * }
 * ```
 * 
 * Then in your QuickFilters.tsx, update the usage:
 * 
 * ```typescript
 * <SortIcon 
 *   color="currentColor"
 *   field={sortState.field}
 *   direction={sortState.direction}
 * />
 * ```
 */
