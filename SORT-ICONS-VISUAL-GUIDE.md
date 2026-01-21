# Sort Icons Visual Guide

## All Available Sort Icons in Foamicons 0.5.0

### 1. ArrowDownUpDuotone (Current)
**Description:** Generic bi-directional sort indicator  
**Use Case:** Default sort button, toggles between ascending/descending  
**Icon Preview:** Two arrows, one pointing up and one pointing down

---

### 2. ArrowUpAZDuotone ⭐ NEW
**Description:** Alphabetical ascending sort (A→Z)  
**Use Case:** Sorting text fields in ascending order (names, titles, locations)  
**Icon Preview:** Up arrow with "A" and "Z" letters, showing A→Z direction

---

### 3. ArrowUpZADuotone ⭐ NEW
**Description:** Alphabetical descending sort (Z→A)  
**Use Case:** Sorting text fields in descending order  
**Icon Preview:** Up arrow with "Z" and "A" letters, showing Z→A direction

---

### 4. ArrowUpNarrowWideDuotone ⭐ NEW
**Description:** Numerical/size ascending sort  
**Use Case:** Sorting numbers from small to large (age, followers, audience)  
**Icon Preview:** Up arrow with horizontal lines going from narrow to wide

---

### 5. ArrowUpWideNarrowDuotone ⭐ NEW
**Description:** Numerical/size descending sort  
**Use Case:** Sorting numbers from large to small  
**Icon Preview:** Up arrow with horizontal lines going from wide to narrow

---

### 6. ArrowDownNarrowWideDuotone ⭐ NEW
**Description:** Alternative ascending indicator  
**Use Case:** Ascending sort with downward arrow  
**Icon Preview:** Down arrow with horizontal lines going from narrow to wide

---

### 7. ArrowDownWideNarrowDuotone ⭐ NEW
**Description:** Alternative descending indicator  
**Use Case:** Descending sort with downward arrow  
**Icon Preview:** Down arrow with horizontal lines going from wide to narrow

---

## Quick Implementation Guide

### Current Code (Generic Icon)
```tsx
import { ArrowDownUpDuotone } from 'foamicons';

<ArrowDownUpDuotone
  size={16}
  strokeWidth="var(--icon-stroke-width)"
  style={{ color: 'currentColor' }}
/>
```

### Enhanced Code (Context-Aware Icons)
```tsx
import { 
  ArrowDownUpDuotone,
  ArrowUpAZDuotone,
  ArrowUpZADuotone,
  ArrowUpNarrowWideDuotone,
  ArrowUpWideNarrowDuotone
} from 'foamicons';

// Determine icon based on field and direction
const getIcon = (field: string, direction: 'asc' | 'desc') => {
  const alphabetical = ['name', 'title', 'creator'];
  const numerical = ['age', 'followers', 'totalAudience'];
  
  if (alphabetical.includes(field)) {
    return direction === 'asc' ? ArrowUpAZDuotone : ArrowUpZADuotone;
  }
  if (numerical.includes(field)) {
    return direction === 'asc' ? ArrowUpNarrowWideDuotone : ArrowUpWideNarrowDuotone;
  }
  return ArrowDownUpDuotone;
};

const Icon = getIcon(sortField, sortDirection);

<Icon
  size={16}
  strokeWidth="var(--icon-stroke-width)"
  style={{ color: 'currentColor' }}
/>
```

## Usage Recommendations by Context

### For TalentTable (Name, Age, Location, Followers)
- **Name, Location:** Use ArrowUpAZDuotone / ArrowUpZADuotone
- **Age, Followers, Audience:** Use ArrowUpNarrowWideDuotone / ArrowUpWideNarrowDuotone

### For MediaKitsTable (Title, Creator, Date)
- **Title, Creator:** Use ArrowUpAZDuotone / ArrowUpZADuotone
- **Date:** Use ArrowUpNarrowWideDuotone / ArrowUpWideNarrowDuotone

### For Generic/Multi-Type Sorting
- Keep using ArrowDownUpDuotone

## See It In Action

Run the interactive showcase:
```tsx
import { SortIconShowcase } from './src/sort-icon-showcase';

<SortIconShowcase />
```

This will display all icons with live previews, descriptions, and code examples!
