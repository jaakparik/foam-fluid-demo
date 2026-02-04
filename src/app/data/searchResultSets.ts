// Search result sets for faking a filtering flow
// Each set contains specific talents, with proper nesting:
// set5 ⊂ set15 ⊂ set35 ⊂ set235

import { talents, Talent } from "./talents";

// Helper to get talent by ID
function getTalentById(id: number): Talent | undefined {
  return talents.find((t) => t.id === id);
}

// Helper to get talents by IDs (filters out undefined)
function getTalentsByIds(ids: number[]): Talent[] {
  return ids.map((id) => getTalentById(id)).filter((t): t is Talent => t !== undefined);
}

// ============================================================================
// SET 5: The most filtered set (5 talents)
// These 5 talents appear in ALL sets
// ============================================================================
const set5TalentIds = [
  1,  // Sophia Martinez - Female, Fashion/Travel/Wellness
  6,  // Ryan Brooks - Male, Music/Entertainment/Lifestyle
  11, // Olivia Harper - Female, Fashion/Lifestyle/Beauty
  16, // Carter Miller - Male, Food/Creativity/Lifestyle
  25, // Lauren Blake - Female, Family/Lifestyle/Comedy
];

// ============================================================================
// SET 10: Macchiato + Canada filter (10 talents)
// Includes all 5 from set5 + 5 additional talents
// ============================================================================
const set10AdditionalIds = [
  3,  // Jasmine Lee - Female, Food/Wellness/Lifestyle
  7,  // Alexis Carter - Female, Fitness/Dance/Wellness
  13, // Harper James - Female, Education/Lifestyle/Mental Health
  20, // Mason Blake - Male, Food/Lifestyle/Advocacy
  33, // Ethan Gray - Male, Beauty/Lifestyle/Wellness
];
const set10TalentIds = [...set5TalentIds, ...set10AdditionalIds];

// ============================================================================
// SET 15: Second filter level (15 talents)
// Includes all 10 from set10 + 5 additional talents
// ============================================================================
const set15AdditionalIds = [
  9,  // Mia Torres - Female, Food/Education/Lifestyle
  17, // Ava Scott Maryland - Female, Fitness/Wellness/Lifestyle
  23, // Zoe Rivers - Female, Fashion/DIY/Advocacy
  27, // Bella Ortiz - Female, Entertainment/Lifestyle/Fashion
  41, // Jake Thompson - Male, Fitness/Sport/Wellness
];
const set15TalentIds = [...set10TalentIds, ...set15AdditionalIds];

// ============================================================================
// SET 35: First filter level (35 talents)
// Includes all 15 from set15 + 20 additional talents
// ============================================================================
const set35AdditionalIds = [
  2,  // Liam Turner - Male, Tech/Family/Travel
  4,  // Marcus Hill - Male, Fashion/Lifestyle/Creativity
  5,  // Chloe Nguyen Richards - Female, Gaming/Tech/Creativity
  8,  // Ethan Ross - Male, Travel/Sport/Lifestyle
  10, // Noah Bennett - Male, Travel/Lifestyle/Advocacy
  12, // Dylan Cooper - Male, Travel/Lifestyle/Entertainment
  14, // Logan Price - Male, Entertainment/Family/Travel
  15, // Bella Rivera - Female, Sport/Travel/Advocacy
  18, // Hunter Gray - Male, Sport/Education/Lifestyle
  19, // Ella Brooks - Female, Art/Creativity/Education
  21, // Emily Carter - Female, Comedy/Lifestyle/Entertainment
  22, // Rachel Hayes - Female, Finance/Education/Lifestyle
  24, // Amira Khan - Female, Fashion/Lifestyle/Advocacy
  26, // Harper Lane - Female, Music/Entertainment/Lifestyle
  28, // Sasha Kim - Female, Fashion/Beauty/Lifestyle
  29, // Diane Brooks - Female, Food/Family/Lifestyle
  30, // Jake Miller - Male, Gaming/Comedy/Entertainment
  31, // Noah Foster - Male, Comedy/Entertainment/Lifestyle
  34, // Luca Rossi - Male, Fashion/Lifestyle/Creativity
  39, // Adrian Vega - Male, Food/Lifestyle/Creativity
];
const set35TalentIds = [...set15TalentIds, ...set35AdditionalIds];

// ============================================================================
// SET 235: Initial full set (all 45 talents)
// For the demo, we use all 45 unique talents
// ============================================================================
const set235TalentIds = talents.map((t) => t.id);

// ============================================================================
// Export the actual talent arrays
// ============================================================================

export const searchResultSet5: Talent[] = getTalentsByIds(set5TalentIds);
export const searchResultSet10: Talent[] = getTalentsByIds(set10TalentIds);
export const searchResultSet15: Talent[] = getTalentsByIds(set15TalentIds);
export const searchResultSet35: Talent[] = getTalentsByIds(set35TalentIds);
export const searchResultSet235: Talent[] = getTalentsByIds(set235TalentIds);

// Shuffled versions for display variety (same talents, different order)
function shuffle<T>(array: T[], seed: number): T[] {
  const result = [...array];
  let currentIndex = result.length;
  
  const seededRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(seededRandom() * currentIndex);
    currentIndex--;
    [result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]];
  }
  
  return result;
}

export const searchResultSet15Shuffled: Talent[] = shuffle(searchResultSet15, 42);
export const searchResultSet35Shuffled: Talent[] = shuffle(searchResultSet35, 123);
export const searchResultSet45Shuffled: Talent[] = shuffle(searchResultSet235, 456);

// Gender-filtered sets (from the full 235/45 set)
export const searchResultSetFemale: Talent[] = searchResultSet235.filter(
  (t) => t.gender === "Female"
);
export const searchResultSetMale: Talent[] = searchResultSet235.filter(
  (t) => t.gender === "Male"
);

// ============================================================================
// Export organized result sets for easy access
// ============================================================================

export interface SearchResultSets {
  set235: Talent[];
  set35: Talent[];
  set15: Talent[];
  set10: Talent[];
  set5: Talent[];
}

export const searchResultSets: SearchResultSets = {
  set235: searchResultSet235,
  set35: searchResultSet35,
  set15: searchResultSet15,
  set10: searchResultSet10,
  set5: searchResultSet5,
};

// Get counts for display
export const searchResultCounts = {
  initial: searchResultSet235.length,      // 45
  firstFilter: searchResultSet35.length,   // 35
  secondFilter: searchResultSet15.length,  // 15
  thirdFilter: searchResultSet5.length,    // 5
} as const;

// Helper to verify nesting (for debugging)
export function verifyNesting(): boolean {
  const set5InSet15 = set5TalentIds.every((id) => set15TalentIds.includes(id));
  const set15InSet35 = set15TalentIds.every((id) => set35TalentIds.includes(id));
  const set35InSet235 = set35TalentIds.every((id) => set235TalentIds.includes(id));
  
  console.log("Set 5 talents in Set 15:", set5InSet15);
  console.log("Set 15 talents in Set 35:", set15InSet35);
  console.log("Set 35 talents in Set 235:", set35InSet235);
  console.log("Set sizes - 5:", searchResultSet5.length, "15:", searchResultSet15.length, "35:", searchResultSet35.length, "235:", searchResultSet235.length);
  
  return set5InSet15 && set15InSet35 && set35InSet235;
}
