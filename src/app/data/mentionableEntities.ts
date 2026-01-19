// Types for mentionable entities
export type MentionEntityType = 'talent' | 'list' | 'mediakit';

export interface List {
  id: string;
  name: string;
  creatorCount: number;
  managerName: string;
}

export interface MediaKit {
  id: string;
  name: string;
  managerName: string;
}

// Mock data for Lists
export const lists: List[] = [
  {
    id: 'list-1',
    name: 'Beauty Influencers 2026',
    creatorCount: 24,
    managerName: 'Sarah Chen',
  },
  {
    id: 'list-2',
    name: 'Tech Reviewers',
    creatorCount: 18,
    managerName: 'Michael Torres',
  },
  {
    id: 'list-3',
    name: 'Fashion Week VIPs',
    creatorCount: 31,
    managerName: 'Elena Rossi',
  },
  {
    id: 'list-4',
    name: 'Fitness Creators',
    creatorCount: 15,
    managerName: 'Jordan Kim',
  },
  {
    id: 'list-5',
    name: 'Food & Travel',
    creatorCount: 22,
    managerName: 'Alex Rivera',
  },
];

// Mock data for Media Kits
export const mediaKits: MediaKit[] = [
  {
    id: 'mk-1',
    name: 'Ava Scott',
    managerName: 'Jessica Martinez',
  },
  {
    id: 'mk-2',
    name: 'Marcus Chen',
    managerName: 'David Park',
  },
  {
    id: 'mk-3',
    name: 'Sophia Rodriguez',
    managerName: 'Emily Rodriguez',
  },
  {
    id: 'mk-4',
    name: 'James Wilson',
    managerName: 'Jordan Lee',
  },
  {
    id: 'mk-5',
    name: 'Isabella Kim',
    managerName: 'Sarah Chen',
  },
];

// Helper function to search lists
export function searchLists(query: string): List[] {
  const lowerQuery = query.toLowerCase();
  return lists.filter((list) =>
    list.name.toLowerCase().includes(lowerQuery)
  );
}

// Helper function to search media kits
export function searchMediaKits(query: string): MediaKit[] {
  const lowerQuery = query.toLowerCase();
  return mediaKits.filter((mk) =>
    mk.name.toLowerCase().includes(lowerQuery)
  );
}

// Get random lists
export function getRandomLists(count: number = 3): List[] {
  const shuffled = [...lists].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, lists.length));
}

// Get random media kits
export function getRandomMediaKits(count: number = 3): MediaKit[] {
  const shuffled = [...mediaKits].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, mediaKits.length));
}
