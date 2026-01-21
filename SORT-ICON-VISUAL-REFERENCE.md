# 🎨 Sort Icon Visual Reference

## Quick Visual Guide to Dynamic Sort Icons

This guide shows exactly what icon appears for each field and direction combination.

---

## 📝 Name / Location (Alphabetical)

### Ascending (A→Z)
```
Icon: ArrowUpAZDuotone
Visual: ↑ with "A" at top, "Z" at bottom
Use: Sorting names/locations from A to Z
```

### Descending (Z→A)
```
Icon: ArrowUpZADuotone  
Visual: ↑ with "Z" at top, "A" at bottom
Use: Sorting names/locations from Z to A
```

**Example Flow:**
1. Click "Name" → Icon changes to A→Z (↑AZ)
2. Click "Name" again → Icon changes to Z→A (↑ZA)
3. Click "Location" → Icon shows A→Z (↑AZ)

---

## 🔢 Age / Total Audience (Numeric)

### Ascending (0→9, Low to High)
```
Icon: ArrowUpNarrowWideDuotone
Visual: ↑ with horizontal lines going ▃▅█ (narrow to wide)
Use: Sorting numbers from smallest to largest
Represents: 0 → 9
```

### Descending (9→0, High to Low)
```
Icon: ArrowUpWideNarrowDuotone
Visual: ↑ with horizontal lines going █▅▃ (wide to narrow)
Use: Sorting numbers from largest to smallest
Represents: 9 → 0
```

**Example Flow:**
1. Click "Age" → Icon shows ↑▃▅█ (young to old)
2. Click "Age" again → Icon shows ↑█▅▃ (old to young)

---

## 📱 Instagram / TikTok / YouTube / Snapchat (Platform Audiences)

### Ascending (Low to High)
```
Icon: ArrowDownNarrowWideDuotone
Visual: ↓ with horizontal lines going ▃▅█ (narrow to wide)
Use: Sorting platform metrics from low to high
```

### Descending (High to Low)
```
Icon: ArrowUpWideNarrowDuotone
Visual: ↑ with horizontal lines going █▅▃ (wide to narrow)
Use: Sorting platform metrics from high to low
```

**Example Flow:**
1. Click "Instagram Audience" → Icon shows ↓▃▅█ (low to high followers)
2. Click "Instagram" again → Icon shows ↑█▅▃ (high to low followers)

---

## ⇅ Generic / Default

```
Icon: ArrowDownUpDuotone
Visual: ↕ (bi-directional arrows)
Use: Default state or unknown fields
```

**When shown:**
- Before any sort is selected
- For fields not in the predefined categories

---

## 🎯 Icon Selection Logic

```
Field Type           | Ascending Icon               | Descending Icon
---------------------|------------------------------|-----------------------------
name                 | ArrowUpAZDuotone (A→Z)      | ArrowUpZADuotone (Z→A)
location             | ArrowUpAZDuotone (A→Z)      | ArrowUpZADuotone (Z→A)
age                  | ArrowUpNarrowWideDuotone    | ArrowUpWideNarrowDuotone
totalAudience        | ArrowUpNarrowWideDuotone    | ArrowUpWideNarrowDuotone
instagram            | ArrowDownNarrowWideDuotone  | ArrowUpWideNarrowDuotone
tiktok               | ArrowDownNarrowWideDuotone  | ArrowUpWideNarrowDuotone
youtube              | ArrowDownNarrowWideDuotone  | ArrowUpWideNarrowDuotone
snap/snapchat        | ArrowDownNarrowWideDuotone  | ArrowUpWideNarrowDuotone
(any other)          | ArrowDownUpDuotone          | ArrowDownUpDuotone
```

---

## 📐 Icon Properties

All icons use consistent sizing:
- **Size:** 16px
- **Stroke Width:** CSS variable `var(--icon-stroke-width)`
- **Color:** Passed via props (typically `currentColor` or specific color)

---

## 🎬 User Flow Example

**Scenario: User wants to sort talents by age**

1. **Initial State**
   - Sort button shows: ⇅ (generic arrow)
   - Label: "Sort"

2. **User clicks sort button**
   - Dropdown opens showing sort options

3. **User clicks "Age"**
   - Dropdown closes
   - Sort button icon changes to: ↑▃▅█ (narrow→wide)
   - Data sorts: youngest → oldest

4. **User clicks sort button again**
   - Dropdown opens
   - "Age" is highlighted with ↑▃▅█ icon

5. **User clicks "Age" again**
   - Dropdown closes
   - Sort button icon changes to: ↑█▅▃ (wide→narrow)
   - Data re-sorts: oldest → youngest

6. **User clicks sort button, then "Name"**
   - Dropdown closes
   - Sort button icon changes to: ↑AZ
   - Data sorts alphabetically A→Z

---

## 💡 Design Rationale

### Why These Icons?

1. **A-Z / Z-A**: Universal symbol for alphabetical sorting
2. **Narrow→Wide / Wide→Narrow**: Visual metaphor for 0→9 / 9→0
   - Smaller bar = smaller number
   - Larger bar = larger number
3. **Platform-specific arrows**: Contextual indicators for social metrics
4. **Consistent direction**: Arrow direction indicates data flow

### Why Not "0-9" or "I-G" Icons?

- Foamicons v0.5.0 doesn't include these specific text-based icons
- The bar-based icons (narrow→wide) are universally understood
- They work across all languages (not English-specific)
- Visual metaphors are often clearer than text!

---

## 🧪 Testing Checklist

Use this checklist to verify the implementation:

- [ ] Sort button shows generic icon before any selection
- [ ] Clicking "Name" shows A→Z icon
- [ ] Clicking "Name" again shows Z→A icon
- [ ] Clicking "Age" shows narrow→wide bars icon
- [ ] Clicking "Age" again shows wide→narrow bars icon
- [ ] Clicking "Location" shows A→Z icon (same as Name)
- [ ] Clicking "Instagram" shows down arrow with bars
- [ ] Clicking "Instagram" again shows up arrow with bars
- [ ] All platform fields (TikTok, YouTube, Snap) behave like Instagram
- [ ] Icons maintain consistent size and color
- [ ] Icons animate smoothly when changing

---

## 📚 Related Files

- **Implementation:** `src/app/components/icons/SortIcon.tsx`
- **Demo Component:** `src/sort-icon-demo.tsx`
- **Usage Examples:** 
  - `src/app/components/QuickFilters.tsx`
  - `src/app/components/ContentSearchToolbar.tsx`
  - `src/app/components/MediaKitsQuickFilters.tsx`

---

**Enjoy your new dynamic sort icons! 🎨✨**
