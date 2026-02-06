import { coffeeVideos } from "./thumbnails";
import { nikeVideos } from "./thumbnails";

// Post item type with all required fields
export interface PostItem {
  id: number;
  title: string;
  videoUrl: string;
  platform: "instagram" | "tiktok" | "youtube";
  creator: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  score: number; // 0-100 percentage
  postedAt: Date;
  reach: number;
  impressions: number;
  engagements: number;
  reachEngRate: number; // percentage
  views: number;
  viewEngRate: number; // percentage
}

// Helper to format numbers (e.g., 5300 -> "5.3k")
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toString();
}

// Helper to format percentage
export function formatPercent(num: number): string {
  return num.toFixed(2).replace(/\.?0+$/, "") + "%";
}

// Helper to format date as "ago" string
export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  if (diffWeeks < 4) return `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} ago`;
  return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
}

// Coffee post creators
const coffeeCreators = [
  { id: "emma-barista", name: "Emma Barista", avatarUrl: "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_cooking_influencer.jpeg" },
  { id: "coffee-chris", name: "Coffee Chris", avatarUrl: "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_stylish_leaning.jpeg" },
  { id: "latte-lisa", name: "Latte Lisa", avatarUrl: "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_fashion_influencer.jpeg" },
  { id: "bean-master", name: "Bean Master", avatarUrl: "https://proto.dev.foam.io/assets/avatars/male/male_middle_aged_hoodie.jpeg" },
  { id: "cafe-clara", name: "Café Clara", avatarUrl: "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_hoodie_couch.jpeg" },
];

// Nike post creators
const nikeCreators = [
  { id: "chris-allen", name: "Chris Allen", avatarUrl: "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_athletic_stretching.jpeg" },
  { id: "nike-runner", name: "Nike Runner", avatarUrl: "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_musician_guitar.jpeg" },
  { id: "fit-mike", name: "Fit Mike", avatarUrl: "https://proto.dev.foam.io/assets/avatars/male/male_teen_skater_influencer.jpeg" },
  { id: "sneaker-sarah", name: "Sneaker Sarah", avatarUrl: "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_fitness_influencer.jpeg" },
  { id: "athletic-amy", name: "Athletic Amy", avatarUrl: "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_dyed_hair.jpeg" },
];

// Helper to create a date X minutes/hours/days ago
function timeAgo(mins: number = 0, hours: number = 0, days: number = 0): Date {
  const now = new Date();
  return new Date(now.getTime() - (days * 24 * 60 * 60 * 1000) - (hours * 60 * 60 * 1000) - (mins * 60 * 1000));
}

// Static Coffee posts data
export const coffeePosts: PostItem[] = [
  {
    id: 1,
    title: "Morning Brew Ritual",
    videoUrl: coffeeVideos[0].video,
    platform: "instagram",
    creator: coffeeCreators[0],
    score: 88,
    postedAt: timeAgo(23),
    reach: 5300,
    impressions: 12300,
    engagements: 298,
    reachEngRate: 5.62,
    views: 9400,
    viewEngRate: 3.17,
  },
  {
    id: 2,
    title: "Latte Art Mastery",
    videoUrl: coffeeVideos[1].video,
    platform: "tiktok",
    creator: coffeeCreators[1],
    score: 92,
    postedAt: timeAgo(0, 2),
    reach: 18700,
    impressions: 45200,
    engagements: 1420,
    reachEngRate: 7.59,
    views: 38100,
    viewEngRate: 3.73,
  },
  {
    id: 3,
    title: "Pour Over Perfection",
    videoUrl: coffeeVideos[2].video,
    platform: "youtube",
    creator: coffeeCreators[2],
    score: 76,
    postedAt: timeAgo(0, 0, 1),
    reach: 8200,
    impressions: 19800,
    engagements: 412,
    reachEngRate: 5.02,
    views: 15600,
    viewEngRate: 2.64,
  },
  {
    id: 4,
    title: "Espresso Shot Tutorial",
    videoUrl: coffeeVideos[3].video,
    platform: "instagram",
    creator: coffeeCreators[3],
    score: 85,
    postedAt: timeAgo(0, 0, 2),
    reach: 12400,
    impressions: 28900,
    engagements: 876,
    reachEngRate: 7.06,
    views: 22100,
    viewEngRate: 3.96,
  },
  {
    id: 5,
    title: "Coffee Bean Roasting",
    videoUrl: coffeeVideos[4].video,
    platform: "tiktok",
    creator: coffeeCreators[4],
    score: 79,
    postedAt: timeAgo(0, 0, 3),
    reach: 6800,
    impressions: 15400,
    engagements: 324,
    reachEngRate: 4.76,
    views: 11200,
    viewEngRate: 2.89,
  },
  {
    id: 6,
    title: "Café Vibes ASMR",
    videoUrl: coffeeVideos[5].video,
    platform: "youtube",
    creator: coffeeCreators[0],
    score: 91,
    postedAt: timeAgo(0, 5),
    reach: 24300,
    impressions: 58700,
    engagements: 2180,
    reachEngRate: 8.97,
    views: 49200,
    viewEngRate: 4.43,
  },
  {
    id: 7,
    title: "Cold Brew Recipe",
    videoUrl: coffeeVideos[6].video,
    platform: "instagram",
    creator: coffeeCreators[1],
    score: 83,
    postedAt: timeAgo(0, 0, 4),
    reach: 9100,
    impressions: 21200,
    engagements: 542,
    reachEngRate: 5.96,
    views: 16800,
    viewEngRate: 3.23,
  },
  {
    id: 8,
    title: "Barista Training Day",
    videoUrl: coffeeVideos[7].video,
    platform: "tiktok",
    creator: coffeeCreators[2],
    score: 87,
    postedAt: timeAgo(45),
    reach: 15600,
    impressions: 37400,
    engagements: 1120,
    reachEngRate: 7.18,
    views: 31200,
    viewEngRate: 3.59,
  },
  {
    id: 9,
    title: "French Press Guide",
    videoUrl: coffeeVideos[0].video,
    platform: "youtube",
    creator: coffeeCreators[3],
    score: 74,
    postedAt: timeAgo(0, 0, 5),
    reach: 4200,
    impressions: 9800,
    engagements: 189,
    reachEngRate: 4.5,
    views: 7400,
    viewEngRate: 2.55,
  },
  {
    id: 10,
    title: "Coffee Shop Tour",
    videoUrl: coffeeVideos[1].video,
    platform: "instagram",
    creator: coffeeCreators[4],
    score: 89,
    postedAt: timeAgo(0, 8),
    reach: 21800,
    impressions: 52400,
    engagements: 1890,
    reachEngRate: 8.67,
    views: 43600,
    viewEngRate: 4.33,
  },
  {
    id: 11,
    title: "Cappuccino Art",
    videoUrl: coffeeVideos[2].video,
    platform: "tiktok",
    creator: coffeeCreators[0],
    score: 94,
    postedAt: timeAgo(12),
    reach: 32100,
    impressions: 78500,
    engagements: 3240,
    reachEngRate: 10.09,
    views: 65200,
    viewEngRate: 4.97,
  },
  {
    id: 12,
    title: "Iced Coffee Summer",
    videoUrl: coffeeVideos[3].video,
    platform: "youtube",
    creator: coffeeCreators[1],
    score: 81,
    postedAt: timeAgo(0, 0, 6),
    reach: 7600,
    impressions: 17900,
    engagements: 398,
    reachEngRate: 5.24,
    views: 13800,
    viewEngRate: 2.88,
  },
  {
    id: 13,
    title: "Coffee Farm Visit",
    videoUrl: coffeeVideos[4].video,
    platform: "instagram",
    creator: coffeeCreators[2],
    score: 86,
    postedAt: timeAgo(0, 0, 7),
    reach: 11200,
    impressions: 26800,
    engagements: 756,
    reachEngRate: 6.75,
    views: 21400,
    viewEngRate: 3.53,
  },
  {
    id: 14,
    title: "Matcha vs Coffee",
    videoUrl: coffeeVideos[5].video,
    platform: "tiktok",
    creator: coffeeCreators[3],
    score: 78,
    postedAt: timeAgo(0, 0, 8),
    reach: 5900,
    impressions: 13600,
    engagements: 287,
    reachEngRate: 4.86,
    views: 10200,
    viewEngRate: 2.81,
  },
  {
    id: 15,
    title: "Home Brewing Tips",
    videoUrl: coffeeVideos[6].video,
    platform: "youtube",
    creator: coffeeCreators[4],
    score: 82,
    postedAt: timeAgo(0, 0, 9),
    reach: 8900,
    impressions: 20600,
    engagements: 512,
    reachEngRate: 5.75,
    views: 16200,
    viewEngRate: 3.16,
  },
  {
    id: 16,
    title: "Coffee Gadgets Review",
    videoUrl: coffeeVideos[7].video,
    platform: "instagram",
    creator: coffeeCreators[0],
    score: 90,
    postedAt: timeAgo(0, 18),
    reach: 19400,
    impressions: 46800,
    engagements: 1650,
    reachEngRate: 8.51,
    views: 38900,
    viewEngRate: 4.24,
  },
  {
    id: 17,
    title: "Mocha Monday",
    videoUrl: coffeeVideos[0].video,
    platform: "tiktok",
    creator: coffeeCreators[1],
    score: 84,
    postedAt: timeAgo(0, 0, 10),
    reach: 10800,
    impressions: 25200,
    engagements: 678,
    reachEngRate: 6.28,
    views: 19800,
    viewEngRate: 3.42,
  },
  {
    id: 18,
    title: "Ethiopian Coffee",
    videoUrl: coffeeVideos[1].video,
    platform: "youtube",
    creator: coffeeCreators[2],
    score: 77,
    postedAt: timeAgo(0, 0, 12),
    reach: 6200,
    impressions: 14500,
    engagements: 298,
    reachEngRate: 4.81,
    views: 10900,
    viewEngRate: 2.73,
  },
  {
    id: 19,
    title: "Specialty Coffee Unbox",
    videoUrl: coffeeVideos[2].video,
    platform: "instagram",
    creator: coffeeCreators[3],
    score: 93,
    postedAt: timeAgo(35),
    reach: 28600,
    impressions: 69200,
    engagements: 2780,
    reachEngRate: 9.72,
    views: 57800,
    viewEngRate: 4.81,
  },
  {
    id: 20,
    title: "Coffee & Productivity",
    videoUrl: coffeeVideos[3].video,
    platform: "tiktok",
    creator: coffeeCreators[4],
    score: 80,
    postedAt: timeAgo(0, 0, 14),
    reach: 7400,
    impressions: 17200,
    engagements: 368,
    reachEngRate: 4.97,
    views: 13400,
    viewEngRate: 2.75,
  },
];

// Static Nike posts data
export const nikePosts: PostItem[] = [
  {
    id: 1,
    title: "Just Do It Morning Run",
    videoUrl: nikeVideos[0],
    platform: "instagram",
    creator: nikeCreators[0],
    score: 92,
    postedAt: timeAgo(15),
    reach: 156000,
    impressions: 378000,
    engagements: 12480,
    reachEngRate: 8.0,
    views: 312000,
    viewEngRate: 4.0,
  },
  {
    id: 2,
    title: "Air Max Unboxing",
    videoUrl: nikeVideos[1],
    platform: "tiktok",
    creator: nikeCreators[1],
    score: 88,
    postedAt: timeAgo(0, 1),
    reach: 89000,
    impressions: 214000,
    engagements: 6230,
    reachEngRate: 7.0,
    views: 178000,
    viewEngRate: 3.5,
  },
  {
    id: 3,
    title: "Nike Training Day",
    videoUrl: nikeVideos[2],
    platform: "youtube",
    creator: nikeCreators[2],
    score: 85,
    postedAt: timeAgo(0, 0, 1),
    reach: 72000,
    impressions: 168000,
    engagements: 4320,
    reachEngRate: 6.0,
    views: 138000,
    viewEngRate: 3.13,
  },
  {
    id: 4,
    title: "Sneaker Collection Tour",
    videoUrl: nikeVideos[3],
    platform: "instagram",
    creator: nikeCreators[3],
    score: 94,
    postedAt: timeAgo(0, 0, 2),
    reach: 198000,
    impressions: 486000,
    engagements: 17820,
    reachEngRate: 9.0,
    views: 402000,
    viewEngRate: 4.43,
  },
  {
    id: 5,
    title: "Jordan 1 Retro Review",
    videoUrl: nikeVideos[4],
    platform: "tiktok",
    creator: nikeCreators[4],
    score: 91,
    postedAt: timeAgo(0, 0, 3),
    reach: 134000,
    impressions: 324000,
    engagements: 10720,
    reachEngRate: 8.0,
    views: 268000,
    viewEngRate: 4.0,
  },
  {
    id: 6,
    title: "Nike Athlete Workout",
    videoUrl: nikeVideos[5],
    platform: "youtube",
    creator: nikeCreators[0],
    score: 87,
    postedAt: timeAgo(0, 3),
    reach: 95000,
    impressions: 228000,
    engagements: 6650,
    reachEngRate: 7.0,
    views: 189000,
    viewEngRate: 3.52,
  },
  {
    id: 7,
    title: "Running Challenge",
    videoUrl: nikeVideos[6],
    platform: "instagram",
    creator: nikeCreators[1],
    score: 83,
    postedAt: timeAgo(0, 0, 4),
    reach: 67000,
    impressions: 158000,
    engagements: 4020,
    reachEngRate: 6.0,
    views: 128000,
    viewEngRate: 3.14,
  },
  {
    id: 8,
    title: "Nike Tech Fleece Fit",
    videoUrl: nikeVideos[7],
    platform: "tiktok",
    creator: nikeCreators[2],
    score: 89,
    postedAt: timeAgo(28),
    reach: 112000,
    impressions: 268000,
    engagements: 7840,
    reachEngRate: 7.0,
    views: 224000,
    viewEngRate: 3.5,
  },
  {
    id: 9,
    title: "Basketball Practice",
    videoUrl: nikeVideos[8],
    platform: "youtube",
    creator: nikeCreators[3],
    score: 78,
    postedAt: timeAgo(0, 0, 5),
    reach: 54000,
    impressions: 126000,
    engagements: 2700,
    reachEngRate: 5.0,
    views: 102000,
    viewEngRate: 2.65,
  },
  {
    id: 10,
    title: "Nike Pro Tips",
    videoUrl: nikeVideos[9],
    platform: "instagram",
    creator: nikeCreators[4],
    score: 90,
    postedAt: timeAgo(0, 6),
    reach: 145000,
    impressions: 348000,
    engagements: 11600,
    reachEngRate: 8.0,
    views: 289000,
    viewEngRate: 4.01,
  },
  {
    id: 11,
    title: "Marathon Prep",
    videoUrl: nikeVideos[10],
    platform: "tiktok",
    creator: nikeCreators[0],
    score: 86,
    postedAt: timeAgo(0, 0, 6),
    reach: 78000,
    impressions: 186000,
    engagements: 5460,
    reachEngRate: 7.0,
    views: 154000,
    viewEngRate: 3.55,
  },
  {
    id: 12,
    title: "Street Style Nike",
    videoUrl: nikeVideos[11],
    platform: "youtube",
    creator: nikeCreators[1],
    score: 82,
    postedAt: timeAgo(0, 0, 7),
    reach: 62000,
    impressions: 146000,
    engagements: 3720,
    reachEngRate: 6.0,
    views: 118000,
    viewEngRate: 3.15,
  },
  {
    id: 13,
    title: "Gym Session Nike",
    videoUrl: nikeVideos[12],
    platform: "instagram",
    creator: nikeCreators[2],
    score: 84,
    postedAt: timeAgo(0, 0, 8),
    reach: 86000,
    impressions: 206000,
    engagements: 5590,
    reachEngRate: 6.5,
    views: 168000,
    viewEngRate: 3.33,
  },
  {
    id: 14,
    title: "Nike x Collab Drop",
    videoUrl: nikeVideos[13],
    platform: "tiktok",
    creator: nikeCreators[3],
    score: 95,
    postedAt: timeAgo(8),
    reach: 234000,
    impressions: 568000,
    engagements: 21060,
    reachEngRate: 9.0,
    views: 472000,
    viewEngRate: 4.46,
  },
  {
    id: 15,
    title: "Running Shoe Guide",
    videoUrl: nikeVideos[14],
    platform: "youtube",
    creator: nikeCreators[4],
    score: 81,
    postedAt: timeAgo(0, 0, 9),
    reach: 58000,
    impressions: 138000,
    engagements: 3190,
    reachEngRate: 5.5,
    views: 112000,
    viewEngRate: 2.85,
  },
  {
    id: 16,
    title: "Nike Gear Review",
    videoUrl: nikeVideos[15],
    platform: "instagram",
    creator: nikeCreators[0],
    score: 88,
    postedAt: timeAgo(0, 12),
    reach: 124000,
    impressions: 298000,
    engagements: 8680,
    reachEngRate: 7.0,
    views: 248000,
    viewEngRate: 3.5,
  },
  {
    id: 17,
    title: "Fitness Motivation",
    videoUrl: nikeVideos[16],
    platform: "tiktok",
    creator: nikeCreators[1],
    score: 93,
    postedAt: timeAgo(0, 0, 10),
    reach: 178000,
    impressions: 432000,
    engagements: 14240,
    reachEngRate: 8.0,
    views: 358000,
    viewEngRate: 3.98,
  },
  {
    id: 18,
    title: "Nike Store Haul",
    videoUrl: nikeVideos[17],
    platform: "youtube",
    creator: nikeCreators[2],
    score: 79,
    postedAt: timeAgo(0, 0, 12),
    reach: 48000,
    impressions: 114000,
    engagements: 2400,
    reachEngRate: 5.0,
    views: 92000,
    viewEngRate: 2.61,
  },
  {
    id: 19,
    title: "Sneaker Care Tips",
    videoUrl: nikeVideos[18],
    platform: "instagram",
    creator: nikeCreators[3],
    score: 85,
    postedAt: timeAgo(0, 0, 14),
    reach: 92000,
    impressions: 218000,
    engagements: 5980,
    reachEngRate: 6.5,
    views: 178000,
    viewEngRate: 3.36,
  },
  {
    id: 20,
    title: "Nike Training Club",
    videoUrl: nikeVideos[19],
    platform: "tiktok",
    creator: nikeCreators[4],
    score: 87,
    postedAt: timeAgo(42),
    reach: 108000,
    impressions: 258000,
    engagements: 7560,
    reachEngRate: 7.0,
    views: 214000,
    viewEngRate: 3.53,
  },
];

// Export counts
export const COFFEE_POSTS_COUNT = coffeePosts.length;
export const NIKE_POSTS_COUNT = nikePosts.length;

// Get all IDs
export const getAllCoffeePostIds = (): number[] => coffeePosts.map((p) => p.id);
export const getAllNikePostIds = (): number[] => nikePosts.map((p) => p.id);

// Get posts by IDs with optional positions
export const getCoffeePostsByIds = (
  ids: Set<number>,
  positions?: Map<number, { x: number; y: number }>
) => {
  return coffeePosts
    .filter((p) => ids.has(p.id))
    .map((p) => {
      const pos = positions?.get(p.id);
      return { ...p, sourceX: pos?.x, sourceY: pos?.y };
    });
};

export const getNikePostsByIds = (
  ids: Set<number>,
  positions?: Map<number, { x: number; y: number }>
) => {
  return nikePosts
    .filter((p) => ids.has(p.id))
    .map((p) => {
      const pos = positions?.get(p.id);
      return { ...p, sourceX: pos?.x, sourceY: pos?.y };
    });
};
