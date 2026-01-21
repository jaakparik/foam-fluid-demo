# New Sort Icons Available in Foamicons 0.5.0

## Summary

Good news! The foamicons package (v0.5.0) that you're using already has a **comprehensive set of sorting/arrow icons** beyond just `ArrowDownUpDuotone`. Here are the new sort-specific icons available:

## 🎯 Sort-Specific Icons (NEW!)

### Alphabetical Sort Icons
- **`ArrowUpAZDuotone`** - Arrow pointing up with "A-Z" indicator (ascending alphabetical)
- **`ArrowUpZADuotone`** - Arrow pointing up with "Z-A" indicator (descending alphabetical)

### Width-Based Sort Icons (Visual Size Indicators)
These show lines of increasing/decreasing width to indicate sort direction:

- **`ArrowDownNarrowWideDuotone`** - Arrow down with lines going narrow→wide (ascending)
- **`ArrowDownWideNarrowDuotone`** - Arrow down with lines going wide→narrow (descending)
- **`ArrowUpNarrowWideDuotone`** - Arrow up with lines going narrow→wide (ascending)
- **`ArrowUpWideNarrowDuotone`** - Arrow up with lines going wide→narrow (descending)

### Current Icon
- **`ArrowDownUpDuotone`** - Generic bi-directional sort (what you're using now)

## 📊 All Available Arrow Icons

For reference, here are ALL arrow icons available in foamicons:

### Basic Directional Arrows
- `ArrowUp` / `ArrowUpDuotone`
- `ArrowDown` / `ArrowDownDuotone`
- `ArrowLeft` / `ArrowLeftDuotone`
- `ArrowRight` / `ArrowRightDuotone`

### Sort & Ordering Arrows
- `ArrowDownUp` / `ArrowDownUpDuotone` *(current)*
- `ArrowUpAZ` / `ArrowUpAZDuotone` *(NEW!)*
- `ArrowUpZA` / `ArrowUpZADuotone` *(NEW!)*
- `ArrowDownNarrowWide` / `ArrowDownNarrowWideDuotone` *(NEW!)*
- `ArrowDownWideNarrow` / `ArrowDownWideNarrowDuotone` *(NEW!)*
- `ArrowUpNarrowWide` / `ArrowUpNarrowWideDuotone` *(NEW!)*
- `ArrowUpWideNarrow` / `ArrowUpWideNarrowDuotone` *(NEW!)*

### Utility Arrows
- `ArrowRightToLine` / `ArrowRightToLineDuotone`
- `ArchiveArrowUp` / `ArchiveArrowUpDuotone`

## 💡 Recommended Usage

### For General Sorting (Current Use Case)
Keep using `ArrowDownUpDuotone` - it's the standard bi-directional sort icon

### For Alphabetical Sorting
Switch between:
- `ArrowUpAZDuotone` when sorted A→Z (ascending)
- `ArrowUpZADuotone` when sorted Z→A (descending)

### For Numerical/Size Sorting
Switch between:
- `ArrowUpNarrowWideDuotone` for ascending (small→large)
- `ArrowUpWideNarrowDuotone` for descending (large→small)

## 🔧 How to Use

Import from foamicons:

```typescript
import { 
  ArrowDownUpDuotone,      // Current
  ArrowUpAZDuotone,        // A-Z sort
  ArrowUpZADuotone,        // Z-A sort
  ArrowUpNarrowWideDuotone,  // Ascending numeric
  ArrowUpWideNarrowDuotone   // Descending numeric
} from 'foamicons';
```

Usage example:
```tsx
<ArrowUpAZDuotone 
  size={16}
  strokeWidth="var(--icon-stroke-width)"
  style={{ color: 'currentColor' }}
/>
```

## 📝 Icon Properties

All foamicons support these props:
- `size`: number | string (default: 16)
- `strokeWidth`: number | string (default: 1)
- `absoluteStrokeWidth`: boolean (default: false)
- `color`: string (default: 'currentColor') - but prefer using `style={{ color: '...' }}`

## 🎨 Implementation Suggestion

You could make your `SortIcon` component more intelligent by accepting a `type` prop:

```tsx
interface SortIconProps {
  opacity?: number;
  color?: string;
  type?: 'generic' | 'az' | 'za' | 'ascending' | 'descending';
}

export function SortIcon({ 
  opacity = 1, 
  color = "#54657D",
  type = 'generic' 
}: SortIconProps) {
  const IconComponent = {
    generic: ArrowDownUpDuotone,
    az: ArrowUpAZDuotone,
    za: ArrowUpZADuotone,
    ascending: ArrowUpNarrowWideDuotone,
    descending: ArrowUpWideNarrowDuotone,
  }[type];

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
```

## 🔗 Resources

- Foamicons Documentation: https://foamicons.com
- Your current version: **0.5.0** (already up to date!)
- Location: `/node_modules/foamicons/`
