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
  caption?: string;
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
  { id: "whistlin-diesel", name: "Whistlin Diesel", avatarUrl: "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_athletic_stretching.jpeg" },
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
    id: 100,
    title: "A new set of boots",
    videoUrl: nikeVideos[25], // landscape video
    platform: "youtube",
    creator: nikeCreators[0],
    score: 95,
    postedAt: timeAgo(0, 2),
    reach: 245000,
    impressions: 520000,
    engagements: 18600,
    reachEngRate: 7.6,
    views: 428000,
    viewEngRate: 4.3,
    caption: `#NIKE #boots #newkicks\n\n"Every step I take, I think of what I feel in my feet—which is a good thing."\n\nJust copped these absolute beauties and had to share the moment with y'all. The craftsmanship on these is insane - premium leather, perfect stitching, and that unmistakable Nike quality we all know and love.\n\nBrought to you by Nike. Restocks coming soon - turn on notifications so you don't miss out! 🔥\n\nDrop a 🔥 if you're feeling these as much as I am!`,
  },
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
    caption: `#NIKE #running #morningrun #justdoit\n\n5:30 AM. The city is still asleep. Just me, my Nikes, and the open road.\n\nThere's something magical about those early morning runs when the world is quiet and your mind is clear. Today I pushed through 10K and honestly? These new Pegasus 41s made every stride feel effortless.\n\nThe cushioning is next level - responsive yet soft, perfect for those longer distances. If you're looking to upgrade your running game, this is it.\n\nWhat time do you prefer to run? Early bird or night owl? Let me know in the comments! 👇`,
  },
  {
    id: 2,
    title: "Air Max Unboxing",
    videoUrl: nikeVideos[2],
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
    caption: `#NIKE #AirMax #unboxing #sneakers\n\nUNBOXING TIME! 📦✨\n\nFinally got my hands on the new Air Max colorway and I'm absolutely obsessed. The moment I opened that orange box, I knew these were going to be special.\n\nFirst impressions: The colors pop way more in person than they do in photos. That visible Air unit? *chef's kiss* And the materials feel premium - you can tell Nike didn't cut any corners.\n\nStay tuned for the on-feet review coming later this week! Would you cop these or drop? Let me know your thoughts!`,
  },
  {
    id: 3,
    title: "Nike Training Day",
    videoUrl: nikeVideos[4],
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
    caption: `#NIKE #training #fitness #workout\n\nFull training day documented! Here's what went down:\n\n🏋️ Morning: Upper body strength (1.5 hrs)\n🏃 Midday: 5K recovery run\n💪 Evening: Core and flexibility work\n\nGear breakdown:\n- Nike Metcon 9s for lifting (absolute beasts for stability)\n- Nike Dri-FIT tee (zero sweat patches, trust me)\n- Training shorts with the perfect stretch\n\nThe key to consistency? Having gear you actually want to train in. When you look good, you feel good, and when you feel good, you perform good.\n\nFull workout routine linked in bio. Let's get after it! 💪`,
  },
  {
    id: 4,
    title: "Sneaker Collection Tour",
    videoUrl: nikeVideos[6],
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
    caption: `#NIKE #sneakercollection #sneakerhead #kicks\n\nY'all asked for it - here's the FULL collection tour! 👟\n\nAfter 8 years of collecting, I've finally organized everything and wanted to share the journey with you. From my first pair of Dunks to the latest drops, every shoe tells a story.\n\nHighlights:\n- OG Chicago 1s (my grails, still can't believe I own these)\n- Full Dunk Low rainbow\n- Every Air Max Day release since 2019\n- Some heat that hasn't even dropped yet 👀\n\nTotal count: 147 pairs and counting...\n\nWhich pair would you steal from my collection? Be honest! 😂`,
  },
  {
    id: 5,
    title: "Jordan 1 Retro Review",
    videoUrl: nikeVideos[8],
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
    caption: `#Jordan1 #NIKE #sneakerreview #retro\n\nHONEST Jordan 1 Retro Review - No cap 🧢❌\n\nLet's break it down:\n\n✅ Pros:\n- Timeless silhouette that goes with everything\n- Premium leather quality (2024 pairs are hitting different)\n- That ankle support is actually functional\n- Resale value stays strong\n\n❌ Cons:\n- Break-in period is real (give it 2-3 wears)\n- They run slightly narrow\n- Hard to keep clean if you actually wear them\n\nFinal verdict: 9/10 - Still the king of sneakers after all these years.\n\nAgree or disagree? Fight me in the comments! 😤`,
  },
  {
    id: 6,
    title: "Nike Athlete Workout",
    videoUrl: nikeVideos[10],
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
    caption: `#NIKE #athlete #workout #fitnessmotivation\n\nTraining like a Nike athlete for a day - here's what I learned:\n\nGot invited to train at the Nike campus and honestly? It was life-changing. The facilities are insane, the coaches know their stuff, and the energy is unmatched.\n\nKey takeaways:\n1. Recovery is just as important as the workout\n2. Proper footwear makes a HUGE difference\n3. Mindset > Everything\n4. Consistency beats intensity every time\n\nThey put me through a full assessment and customized a training plan based on my goals. This is what separates good from great.\n\nWould you want me to share the full workout plan? Drop a YES below! 👇`,
  },
  {
    id: 7,
    title: "Running Challenge",
    videoUrl: nikeVideos[12],
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
    caption: `#NIKE #runningchallenge #30dayrun #running\n\n30 DAY RUNNING CHALLENGE - Day 15 Update! 🏃‍♂️\n\nHalfway through and here's where I'm at:\n\n📊 Stats so far:\n- Total distance: 127 km\n- Longest run: 15 km\n- Average pace: 5:42/km\n- Zero rest days (yes, I'm insane)\n\nMy Nike Run Club app has been clutch for tracking everything. The guided runs are keeping me motivated when my legs want to quit.\n\nBiggest challenge? Not the running itself - it's the mental game. Some days I wake up and the last thing I want to do is lace up. But that's when the magic happens.\n\nWho's joining me for the second half? Let's finish this together! 💪`,
  },
  {
    id: 8,
    title: "Nike Tech Fleece Fit",
    videoUrl: nikeVideos[14],
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
    caption: `#NIKE #TechFleece #OOTD #streetwear\n\nTech Fleece szn is officially here and I'm not mad about it 🔥\n\nFit breakdown:\n- Nike Tech Fleece Hoodie (Dark Grey Heather)\n- Nike Tech Fleece Joggers (matching)\n- Air Force 1 Lows (clean white)\n\nWhy Tech Fleece hits different:\n1. Lightweight but actually warm\n2. The slim fit is *chef's kiss*\n3. Those zippered pockets? Game changer\n4. Washes well without losing shape\n\nReal talk: I used to think $200+ for a tracksuit was crazy. Then I tried it. Now I own 4 colors. No regrets.\n\nWhat's your go-to comfy fit? Sound off below! 👇`,
  },
  {
    id: 9,
    title: "Basketball Practice",
    videoUrl: nikeVideos[16],
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
    caption: `#NIKE #basketball #hoops #practice\n\nPractice makes permanent, not perfect 🏀\n\nToday's session:\n- 200 free throws (made 167 - not bad!)\n- Defensive slides for 30 mins\n- 1v1 work with my boy @[teammate]\n- Full court 5v5 to finish\n\nRocking the new LeBron 21s and I gotta say - the court feel is incredible. You can really feel the floor while still getting that impact protection.\n\nThe traction is sticky even on dusty courts (you know how it be at the local gym 😅)\n\nDrop your shooting percentage in the comments - let's see who's really putting in work! 🎯`,
  },
  {
    id: 10,
    title: "Nike Pro Tips",
    videoUrl: nikeVideos[18],
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
    caption: `#NIKE #protips #sneakercare #lifehacks\n\n5 Nike Pro Tips that changed my sneaker game forever! Save this post! 📌\n\n1️⃣ CLEANING: Use a soft brush + mild soap. Never put them in the washing machine (I learned this the hard way 😭)\n\n2️⃣ STORAGE: Keep the silica gel packets! They prevent moisture damage and yellowing.\n\n3️⃣ ROTATION: Don't wear the same pair every day. Your shoes need 24-48 hrs to fully dry out.\n\n4️⃣ LACING: Loose laces = creased toe boxes. Keep em snug!\n\n5️⃣ PROTECTION: Spray with water/stain repellent before first wear. Prevention > Cure.\n\nBonus tip: Stuff shoes with paper when storing to maintain shape!\n\nWhich tip was new to you? Drop a number below! 👇`,
  },
  {
    id: 11,
    title: "Marathon Prep",
    videoUrl: nikeVideos[20],
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
    caption: `#NIKE #marathon #running #42km\n\n8 WEEKS OUT from my first marathon and here's my prep! 🏃‍♂️\n\nThis week's training:\n- Mon: Easy 10K\n- Tue: Speed work (8x400m)\n- Wed: Rest + stretching\n- Thu: Tempo run 8K\n- Fri: Easy 5K\n- Sat: LONG RUN - 28K 😮‍💨\n- Sun: Active recovery\n\nGear I'm trusting for race day:\n- Nike Vaporfly 3 (the carbon plate is no joke)\n- Dri-FIT singlet\n- Running shorts with secure pocket for gels\n\nNutrition, sleep, and mental prep are all dialed in. Now it's just about trusting the process.\n\nAny marathon runners in here? Drop your best advice! 🙏`,
  },
  {
    id: 12,
    title: "Street Style Nike",
    videoUrl: nikeVideos[22],
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
    caption: `#NIKE #streetstyle #fashion #OOTD\n\nStreet style lookbook featuring all Nike everything! 📸\n\nLook 1: Casual day out\n- Vintage Nike windbreaker (thrifted!)\n- Basic white tee\n- Straight leg jeans\n- Dunk Low Pandas\n\nLook 2: Evening vibes\n- Nike ACG jacket\n- Black cargo pants\n- Air Max 97 Silver Bullets\n\nLook 3: Sporty chic\n- Cropped Nike hoodie\n- Biker shorts\n- Jordan 1 Lows\n\nThe key to Nike street style? Mix vintage with new, athletic with casual. Don't be afraid to experiment!\n\nWhich look is your favorite? 1, 2, or 3? Vote below! 👇`,
  },
  {
    id: 13,
    title: "Gym Session Nike",
    videoUrl: nikeVideos[24],
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
    caption: `#NIKE #gym #legday #fitness\n\nLEG DAY COMPLETE 🦵💪\n\nFull workout breakdown:\n\n1. Squats: 5x5 @ 225lbs\n2. Romanian Deadlifts: 4x8\n3. Leg Press: 4x12\n4. Walking Lunges: 3x20 each leg\n5. Leg Curls: 4x12\n6. Calf Raises: 4x15\n\nTotal time: 1 hour 20 mins\n\nWearing the Nike Metcon 9s - honestly the best gym shoe I've owned. The flat sole is perfect for squats and the support during lateral movements is unmatched.\n\nPro tip: Save your running shoes for running. Invest in proper training shoes for the gym. Your joints will thank you!\n\nWhat's your leg day split? Share below! 🏋️`,
  },
  {
    id: 14,
    title: "Nike x Collab Drop",
    videoUrl: nikeVideos[1],
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
    caption: `#NIKE #collab #sneakers #hypebeast\n\n🚨 EXCLUSIVE EARLY ACCESS 🚨\n\nGot my hands on the upcoming Nike x [Designer] collab and WOW. These are going to break the internet.\n\nWithout spoiling too much:\n- Premium materials throughout\n- Special packaging that's actually worth keeping\n- Details you won't believe until you see them in person\n- Limited to [X] pairs worldwide\n\nRelease date: [Coming Soon]\nRetail: $XXX\nExpected resale: 📈📈📈\n\nI'll be doing a full review + on-feet when I'm allowed to show everything. Turn on post notifications so you don't miss it!\n\nWho else is going for these? This might be the drop of the year! 🔥`,
  },
  {
    id: 15,
    title: "Running Shoe Guide",
    videoUrl: nikeVideos[3],
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
    caption: `#NIKE #runningshoes #buyingguide #running\n\nThe ULTIMATE Nike Running Shoe Guide for 2024! 👟\n\nFor beginners:\n→ Nike Revolution 7 - affordable, comfortable, reliable\n\nFor daily training:\n→ Nike Pegasus 41 - the workhorse, can't go wrong\n\nFor speed work:\n→ Nike Zoom Fly 5 - responsive, fast, race-day ready\n\nFor race day:\n→ Nike Vaporfly 3 - if you're serious about PRs\n\nFor trail running:\n→ Nike Pegasus Trail 4 - grip for days\n\nHow to choose:\n1. Know your gait (neutral vs overpronation)\n2. Consider your weekly mileage\n3. Think about the surfaces you run on\n4. Don't forget to factor in cushion preference!\n\nSave this post for your next purchase! Questions? Drop them below! 👇`,
  },
  {
    id: 16,
    title: "Nike Gear Review",
    videoUrl: nikeVideos[5],
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
    caption: `#NIKE #gearreview #fitness #sportswear\n\nHonest Nike Gear Review - 6 months later! 📝\n\nDri-FIT Tees: 10/10\n- Still look brand new after 50+ washes\n- No stretching, no fading\n- Worth every penny\n\nPro Leggings: 9/10\n- Squat proof (tested extensively 😅)\n- Great compression without being restrictive\n- Wish they had more pocket options\n\nTraining Shorts: 8/10\n- Lightweight and breathable\n- Built-in liner is clutch\n- Run slightly long on shorter folks\n\nSports Bras: 9/10\n- Excellent support for high impact\n- Comfortable enough for all-day wear\n- Size up if between sizes\n\nOverall: Nike quality remains undefeated. What should I review next? 👇`,
  },
  {
    id: 17,
    title: "Fitness Motivation",
    videoUrl: nikeVideos[7],
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
    caption: `#NIKE #motivation #fitness #justdoit\n\n"Just Do It" hits different at 5 AM when your alarm goes off and your bed is warm. 🛏️➡️🏃‍♂️\n\nReal talk: I wasn't always this person. 2 years ago, I couldn't run a mile without stopping. Today, I just completed my first ultra marathon.\n\nWhat changed?\n\n1. I stopped waiting for motivation and started building discipline\n2. I invested in gear that made me WANT to train\n3. I found a community that held me accountable\n4. I celebrated small wins along the way\n\nYou don't have to be great to start, but you have to start to be great.\n\nThis is your sign. Lace up. Get after it. Your future self will thank you.\n\nTag someone who needs this today! 💪`,
  },
  {
    id: 18,
    title: "Nike Store Haul",
    videoUrl: nikeVideos[9],
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
    caption: `#NIKE #haul #shopping #unboxing\n\nNike Store Haul - I may have gone a little overboard 😅\n\nWhat I picked up:\n\n👟 Footwear:\n- Air Force 1 '07 (classics never die)\n- Dunk Low Retro (the colorway was too clean)\n\n👕 Apparel:\n- 3x Dri-FIT tees (stocking up for summer)\n- Tech Fleece hoodie (had to)\n- 2x training shorts\n\n🎒 Accessories:\n- Nike Heritage backpack\n- Crew socks 6-pack\n- Running hat\n\nTotal damage: Let's just say my wallet is crying but my closet is thriving 💀\n\nWhat would you have grabbed? Best Nike store finds in the comments! 👇`,
  },
  {
    id: 19,
    title: "Sneaker Care Tips",
    videoUrl: nikeVideos[11],
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
    caption: `#NIKE #sneakercare #cleaningtips #sneakers\n\nHow I keep my kicks looking FRESH! 👟✨\n\nMy cleaning routine:\n\n1. Remove laces and insoles\n2. Dry brush off loose dirt\n3. Mix warm water + gentle soap\n4. Soft brush in circular motions\n5. Wipe clean with microfiber cloth\n6. Air dry (NEVER direct heat!)\n7. Re-lace and you're done!\n\nPro tips:\n- Clean after EVERY wear for white sneakers\n- Use a magic eraser on midsoles\n- Stuff with paper while drying\n- Store in a cool, dry place\n- Rotate your collection to extend life\n\nProducts I use:\n- Jason Markk Premium Kit\n- Crep Protect spray\n- Soft bristle brush\n\nSave this for later! Your sneakers deserve love too! ❤️`,
  },
  {
    id: 20,
    title: "Nike Training Club",
    videoUrl: nikeVideos[13],
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
    caption: `#NIKE #NTC #workout #fitness\n\nNike Training Club App Review - Is it worth it? 📱\n\nSPOILER: It's FREE and absolutely goated.\n\nWhat you get:\n✅ 200+ workouts (yoga, HIIT, strength, mobility)\n✅ Programs designed by real trainers\n✅ No equipment needed options\n✅ Beginner to advanced levels\n✅ Syncs with Apple Health/Google Fit\n\nMy favorite workouts:\n1. "15-Min Full Body Burn" - perfect for busy days\n2. "Core Crusher" - actually works\n3. "Morning Yoga Flow" - better than coffee\n\nAfter 3 months of consistent use:\n- Lost 8 lbs\n- Gained visible muscle definition\n- Actually enjoy working out now??\n\nDownload it. It's free. No excuses. Let's get it! 💪`,
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
