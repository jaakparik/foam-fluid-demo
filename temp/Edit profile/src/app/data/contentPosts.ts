import { coffeeThumbnails } from "./thumbnails";

export interface ContentPost {
  id: number;
  image: string;
  views: string;
  reach: string;
  clicks: string;
  platform: "instagram" | "tiktok" | "youtube";
  postedDate: string;
  talentId: number;
}

// Generate mock content posts for talents
export const contentPosts: ContentPost[] = [
  {
    id: 1,
    image: coffeeThumbnails[0],
    views: "227k",
    reach: "190k",
    clicks: "468k",
    platform: "instagram",
    postedDate: "12/12/24",
    talentId: 1,
  },
  {
    id: 2,
    image: coffeeThumbnails[1],
    views: "184k",
    reach: "156k",
    clicks: "392k",
    platform: "instagram",
    postedDate: "12/10/24",
    talentId: 1,
  },
  {
    id: 3,
    image: coffeeThumbnails[2],
    views: "312k",
    reach: "267k",
    clicks: "589k",
    platform: "instagram",
    postedDate: "12/08/24",
    talentId: 1,
  },
  {
    id: 4,
    image: coffeeThumbnails[3],
    views: "156k",
    reach: "132k",
    clicks: "301k",
    platform: "instagram",
    postedDate: "12/05/24",
    talentId: 1,
  },
  {
    id: 5,
    image: coffeeThumbnails[4],
    views: "421k",
    reach: "358k",
    clicks: "712k",
    platform: "instagram",
    postedDate: "12/03/24",
    talentId: 1,
  },
  {
    id: 6,
    image: coffeeThumbnails[5],
    views: "198k",
    reach: "168k",
    clicks: "423k",
    platform: "instagram",
    postedDate: "12/01/24",
    talentId: 1,
  },
  {
    id: 7,
    image: coffeeThumbnails[6],
    views: "265k",
    reach: "225k",
    clicks: "534k",
    platform: "instagram",
    postedDate: "11/28/24",
    talentId: 1,
  },
  {
    id: 8,
    image: coffeeThumbnails[7],
    views: "389k",
    reach: "331k",
    clicks: "678k",
    platform: "instagram",
    postedDate: "11/25/24",
    talentId: 1,
  },
  {
    id: 9,
    image: coffeeThumbnails[8],
    views: "142k",
    reach: "121k",
    clicks: "287k",
    platform: "instagram",
    postedDate: "11/22/24",
    talentId: 1,
  },
  {
    id: 10,
    image: coffeeThumbnails[9],
    views: "523k",
    reach: "445k",
    clicks: "891k",
    platform: "instagram",
    postedDate: "11/20/24",
    talentId: 1,
  },
  {
    id: 11,
    image: coffeeThumbnails[10],
    views: "276k",
    reach: "234k",
    clicks: "512k",
    platform: "instagram",
    postedDate: "11/18/24",
    talentId: 1,
  },
  {
    id: 12,
    image: coffeeThumbnails[11],
    views: "334k",
    reach: "284k",
    clicks: "601k",
    platform: "instagram",
    postedDate: "11/15/24",
    talentId: 1,
  },
];

// Helper function to get content posts for a specific talent
export function getContentPostsForTalent(talentId: number): ContentPost[] {
  return contentPosts.filter((post) => post.talentId === talentId);
}
