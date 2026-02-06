import { useRef, useState } from "react";
import { coffeeVideos, coffeeMidjourneyImages, coffeeDalleImages, parukasImages } from "../data/thumbnails";
import { TikTokIcon } from "./icons/TikTokIcon";
import { InstagramIcon } from "./icons/InstagramIcon";

interface VideoThumbnailProps {
  videoUrl: string;
  views: string;
  platform: "tiktok" | "instagram";
}

function VideoThumbnail({ videoUrl, views, platform }: VideoThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="flex flex-col gap-[4px] items-start justify-center shrink-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-[140px] w-[80px] relative rounded-[4px] overflow-hidden cursor-pointer">
        <video
          ref={videoRef}
          src={videoUrl}
          className="absolute inset-0 w-full h-full object-cover rounded-[4px]"
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      <div className="flex items-center gap-[4px]">
        {platform === "tiktok" ? (
          <div className="size-[16px]">
            <TikTokIcon isDark={false} />
          </div>
        ) : (
          <div className="size-[16px]">
            <InstagramIcon isDark={false} />
          </div>
        )}
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
          style={{ color: "#54657d" }}
        >
          {views}
        </p>
      </div>
    </div>
  );
}

interface ImageThumbnailProps {
  imageUrl: string;
  views: string;
  platform: "tiktok" | "instagram";
}

function ImageThumbnail({ imageUrl, views, platform }: ImageThumbnailProps) {
  return (
    <div className="flex flex-col gap-[4px] items-start justify-center shrink-0">
      <div className="h-[140px] w-[80px] relative rounded-[4px] overflow-hidden cursor-pointer">
        <img
          src={imageUrl}
          className="absolute inset-0 w-full h-full object-cover rounded-[4px]"
          alt="Content thumbnail"
        />
      </div>
      <div className="flex items-center gap-[4px]">
        {platform === "tiktok" ? (
          <div className="size-[16px]">
            <TikTokIcon isDark={false} />
          </div>
        ) : (
          <div className="size-[16px]">
            <InstagramIcon isDark={false} />
          </div>
        )}
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
          style={{ color: "#54657d" }}
        >
          {views}
        </p>
      </div>
    </div>
  );
}

function CheckmarkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3337 4L6.00033 11.3333L2.66699 8"
        stroke="#54657d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 5.33333V8M8 10.6667H8.00667M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
        stroke="#b5a000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface MatchingRowProps {
  label: string;
  value: string;
  isWarning?: boolean;
}

function MatchingRow({ label, value, isWarning = false }: MatchingRowProps) {
  return (
    <div
      className="flex items-center justify-between px-[8px] py-[4px] w-full"
      style={{
        background: isWarning ? "#fffbc6" : "transparent",
      }}
    >
      <div className="flex items-center gap-[8px]">
        <div className="size-[16px] flex items-center justify-center">
          {isWarning ? <WarningIcon /> : <CheckmarkIcon />}
        </div>
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
          style={{ color: "#54657d" }}
        >
          {label}
        </p>
      </div>
      <p
        className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px]"
        style={{ color: "#15191e" }}
      >
        {value}
      </p>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px] uppercase"
      style={{ color: "#8b94a2" }}
    >
      {children}
    </p>
  );
}

// Content item type
interface ContentItem {
  type: "video" | "image";
  url: string;
  views: string;
  platform: "tiktok" | "instagram";
}

// Talent insights data with match scores
interface TalentInsights {
  matchScore: number; // 0-100 for sorting
  matchLevel: "Great" | "Good" | "Moderate" | "Fair";
  description: string;
  matching: {
    label: string;
    value: string;
    isWarning?: boolean;
  }[];
  content: ContentItem[];
}

// All 45 talents with unique insights data
const talentInsightsData: Record<string, TalentInsights> = {
  // === GREAT MATCHES (85-100) ===
  "Lauren Blake": {
    matchScore: 96,
    matchLevel: "Great",
    description: "Has loads of content on coffee and tea, is based in LA, very active on TT and IG. Matching filters are almost 100%, just Follower ENG rate is 0.5% lower than defined by the filter.",
    matching: [
      { label: "Vertical", value: "food" },
      { label: "Location", value: "Canada, Ontario" },
      { label: "View ENG rate", value: "21%" },
      { label: "Follower ENG rate", value: "19.5%", isWarning: true },
    ],
    content: [
      { type: "video", url: coffeeVideos[0].video, views: "63K views", platform: "tiktok" },
      { type: "image", url: parukasImages[0], views: "45K views", platform: "instagram" },
      { type: "image", url: parukasImages[1], views: "89K views", platform: "instagram" },
    ],
  },
  "Sophia Martinez": {
    matchScore: 94,
    matchLevel: "Great",
    description: "Exceptional food and lifestyle creator with stunning coffee content. High engagement rates and authentic storytelling style that resonates with audiences.",
    matching: [
      { label: "Vertical", value: "food & lifestyle" },
      { label: "Location", value: "Los Angeles, CA" },
      { label: "View ENG rate", value: "24%" },
      { label: "Follower ENG rate", value: "8.2%" },
    ],
    content: [
      { type: "image", url: parukasImages[2], views: "128K views", platform: "instagram" },
      { type: "video", url: coffeeVideos[1].video, views: "95K views", platform: "tiktok" },
      { type: "image", url: parukasImages[3], views: "87K views", platform: "instagram" },
      { type: "image", url: parukasImages[4], views: "112K views", platform: "instagram" },
    ],
  },
  "Jasmine Lee": {
    matchScore: 92,
    matchLevel: "Great",
    description: "Fantastic food content creator with a focus on specialty coffee. Her audience trusts her recommendations and she has a track record of successful brand partnerships.",
    matching: [
      { label: "Vertical", value: "food" },
      { label: "Location", value: "Seattle, WA" },
      { label: "View ENG rate", value: "22%" },
      { label: "Follower ENG rate", value: "7.1%" },
    ],
    content: [
      { type: "video", url: coffeeVideos[2].video, views: "156K views", platform: "tiktok" },
      { type: "image", url: parukasImages[5], views: "142K views", platform: "instagram" },
    ],
  },
  "Olivia Harper": {
    matchScore: 90,
    matchLevel: "Great",
    description: "Strong lifestyle creator with coffee-centric morning routine content. Audience demographics align well with premium coffee brands.",
    matching: [
      { label: "Vertical", value: "lifestyle" },
      { label: "Location", value: "New York, NY" },
      { label: "View ENG rate", value: "19%" },
      { label: "Follower ENG rate", value: "6.3%" },
    ],
    content: [
      { type: "image", url: parukasImages[6], views: "189K views", platform: "instagram" },
      { type: "video", url: coffeeVideos[3].video, views: "167K views", platform: "tiktok" },
      { type: "image", url: parukasImages[7], views: "145K views", platform: "instagram" },
    ],
  },
  "Mia Torres": {
    matchScore: 88,
    matchLevel: "Great",
    description: "Educational food content creator who explains coffee origins and brewing methods. Perfect for premium coffee brands looking for educational partnerships.",
    matching: [
      { label: "Vertical", value: "food & education" },
      { label: "Location", value: "Portland, OR" },
      { label: "View ENG rate", value: "20%" },
      { label: "Follower ENG rate", value: "6.8%" },
    ],
    content: [
      { type: "image", url: parukasImages[8], views: "98K views", platform: "instagram" },
      { type: "image", url: parukasImages[9], views: "87K views", platform: "instagram" },
    ],
  },
  "Amira Khan": {
    matchScore: 87,
    matchLevel: "Great",
    description: "Fashion and lifestyle influencer with aesthetic coffee shop content. Strong visual style that aligns well with lifestyle brands.",
    matching: [
      { label: "Vertical", value: "fashion & lifestyle" },
      { label: "Location", value: "Brooklyn, NY" },
      { label: "View ENG rate", value: "18%" },
      { label: "Follower ENG rate", value: "7.4%" },
    ],
    content: [
      { type: "video", url: coffeeVideos[4].video, views: "134K views", platform: "tiktok" },
      { type: "image", url: parukasImages[10], views: "112K views", platform: "instagram" },
      { type: "image", url: parukasImages[11], views: "98K views", platform: "instagram" },
    ],
  },
  "Sasha Kim": {
    matchScore: 86,
    matchLevel: "Great",
    description: "Beauty and lifestyle creator with cozy aesthetic content. Coffee features prominently in her morning routines and self-care content.",
    matching: [
      { label: "Vertical", value: "beauty & lifestyle" },
      { label: "Location", value: "San Diego, CA" },
      { label: "View ENG rate", value: "21%" },
      { label: "Follower ENG rate", value: "6.1%" },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[0], views: "156K views", platform: "instagram" },
      { type: "video", url: coffeeVideos[5].video, views: "123K views", platform: "tiktok" },
    ],
  },
  "Diane Brooks": {
    matchScore: 85,
    matchLevel: "Great",
    description: "Family and food content creator. Her coffee content focuses on quick recipes for busy parents. Great for family-oriented coffee brands.",
    matching: [
      { label: "Vertical", value: "food & family" },
      { label: "Location", value: "Nashville, TN" },
      { label: "View ENG rate", value: "17%" },
      { label: "Follower ENG rate", value: "7.9%" },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[1], views: "89K views", platform: "instagram" },
      { type: "image", url: coffeeMidjourneyImages[2], views: "76K views", platform: "instagram" },
      { type: "image", url: coffeeMidjourneyImages[3], views: "92K views", platform: "instagram" },
    ],
  },

  // === GOOD MATCHES (70-84) ===
  "Chloe Nguyen Richards": {
    matchScore: 82,
    matchLevel: "Good",
    description: "Tech-lifestyle crossover creator. Coffee content performs well with her audience. Good fit for modern coffee gadgets and subscription services.",
    matching: [
      { label: "Vertical", value: "tech & lifestyle" },
      { label: "Location", value: "San Francisco, CA" },
      { label: "View ENG rate", value: "17%" },
      { label: "Follower ENG rate", value: "5.9%" },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[4], views: "112K views", platform: "instagram" },
      { type: "video", url: coffeeVideos[6].video, views: "89K views", platform: "tiktok" },
      { type: "image", url: coffeeMidjourneyImages[5], views: "134K views", platform: "instagram" },
      { type: "image", url: coffeeMidjourneyImages[6], views: "98K views", platform: "instagram" },
    ],
  },
  "Marcus Hill": {
    matchScore: 80,
    matchLevel: "Good",
    description: "Urban lifestyle creator with strong local following. Coffee shop reviews and recommendations drive good engagement. Location mismatch with target market.",
    matching: [
      { label: "Vertical", value: "lifestyle" },
      { label: "Location", value: "Chicago, IL", isWarning: true },
      { label: "View ENG rate", value: "17%" },
      { label: "Follower ENG rate", value: "6.2%" },
    ],
    content: [
      { type: "video", url: coffeeVideos[7].video, views: "78K views", platform: "tiktok" },
      { type: "image", url: coffeeMidjourneyImages[7], views: "92K views", platform: "instagram" },
    ],
  },
  "Alexis Carter": {
    matchScore: 79,
    matchLevel: "Good",
    description: "Fitness and wellness creator who incorporates coffee into pre-workout routines. Good for energy and performance-focused coffee brands.",
    matching: [
      { label: "Vertical", value: "fitness & wellness" },
      { label: "Location", value: "Miami, FL" },
      { label: "View ENG rate", value: "16%" },
      { label: "Follower ENG rate", value: "5.8%" },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[8], views: "145K views", platform: "instagram" },
      { type: "image", url: coffeeMidjourneyImages[9], views: "118K views", platform: "instagram" },
      { type: "image", url: coffeeMidjourneyImages[10], views: "97K views", platform: "instagram" },
    ],
  },
  "Harper James": {
    matchScore: 78,
    matchLevel: "Good",
    description: "Education and mental health advocate. Coffee content ties into productivity and self-care topics. Thoughtful, authentic approach.",
    matching: [
      { label: "Vertical", value: "education & lifestyle" },
      { label: "Location", value: "Austin, TX" },
      { label: "View ENG rate", value: "15%" },
      { label: "Follower ENG rate", value: "6.5%" },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[11], views: "67K views", platform: "instagram" },
    ],
  },
  "Bella Ortiz": {
    matchScore: 77,
    matchLevel: "Good",
    description: "Entertainment and lifestyle creator with fun, energetic content. Coffee features in her daily vlogs and behind-the-scenes content.",
    matching: [
      { label: "Vertical", value: "entertainment" },
      { label: "Location", value: "Los Angeles, CA" },
      { label: "View ENG rate", value: "18%" },
      { label: "Follower ENG rate", value: "5.4%" },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[12], views: "234K views", platform: "tiktok" },
      { type: "image", url: coffeeDalleImages[0], views: "198K views", platform: "instagram" },
    ],
  },
  "Zoe Rivers": {
    matchScore: 76,
    matchLevel: "Good",
    description: "Fashion and DIY creator with sustainable lifestyle focus. Interested in eco-friendly coffee brands and reusable accessories.",
    matching: [
      { label: "Vertical", value: "fashion & DIY" },
      { label: "Location", value: "Denver, CO" },
      { label: "View ENG rate", value: "14%", isWarning: true },
      { label: "Follower ENG rate", value: "7.2%" },
    ],
    content: [
      { type: "image", url: coffeeDalleImages[1], views: "89K views", platform: "instagram" },
      { type: "image", url: coffeeDalleImages[2], views: "76K views", platform: "instagram" },
    ],
  },
  "Mason Blake": {
    matchScore: 75,
    matchLevel: "Good",
    description: "Food and lifestyle advocate with focus on healthy eating. Coffee content highlights health benefits and alternative brewing methods.",
    matching: [
      { label: "Vertical", value: "food & advocacy" },
      { label: "Location", value: "Phoenix, AZ" },
      { label: "View ENG rate", value: "16%" },
      { label: "Follower ENG rate", value: "5.7%" },
    ],
    content: [
      { type: "image", url: coffeeDalleImages[3], views: "112K views", platform: "instagram" },
      { type: "image", url: coffeeDalleImages[4], views: "98K views", platform: "instagram" },
      { type: "image", url: coffeeDalleImages[5], views: "87K views", platform: "instagram" },
    ],
  },
  "Ava Scott Maryland": {
    matchScore: 74,
    matchLevel: "Good",
    description: "Fitness and wellness lifestyle creator. Morning routine content frequently features coffee. Good for wellness-focused brands.",
    matching: [
      { label: "Vertical", value: "fitness & wellness" },
      { label: "Location", value: "Baltimore, MD" },
      { label: "View ENG rate", value: "15%" },
      { label: "Follower ENG rate", value: "6.0%" },
    ],
    content: [
      { type: "image", url: coffeeDalleImages[6], views: "78K views", platform: "instagram" },
    ],
  },
  "Harper Lane": {
    matchScore: 73,
    matchLevel: "Good",
    description: "Music and entertainment lifestyle creator. Coffee shop performances and acoustic sessions drive engagement.",
    matching: [
      { label: "Vertical", value: "music & entertainment" },
      { label: "Location", value: "Nashville, TN" },
      { label: "View ENG rate", value: "17%" },
      { label: "Follower ENG rate", value: "5.3%" },
    ],
    content: [
      { type: "image", url: coffeeDalleImages[7], views: "145K views", platform: "instagram" },
      { type: "image", url: coffeeDalleImages[8], views: "123K views", platform: "instagram" },
    ],
  },
  "Ella Brooks": {
    matchScore: 72,
    matchLevel: "Good",
    description: "Art and creativity focused content. Coffee features in her studio sessions and creative process videos.",
    matching: [
      { label: "Vertical", value: "art & creativity" },
      { label: "Location", value: "Portland, OR" },
      { label: "View ENG rate", value: "14%", isWarning: true },
      { label: "Follower ENG rate", value: "6.8%" },
    ],
    content: [
      { type: "image", url: coffeeDalleImages[9], views: "67K views", platform: "instagram" },
      { type: "image", url: coffeeDalleImages[10], views: "54K views", platform: "instagram" },
    ],
  },
  "Ethan Gray": {
    matchScore: 71,
    matchLevel: "Good",
    description: "Beauty and wellness content creator. Coffee skincare routines and wellness tips. Unique angle for lifestyle brands.",
    matching: [
      { label: "Vertical", value: "beauty & wellness" },
      { label: "Location", value: "West Hollywood, CA" },
      { label: "View ENG rate", value: "16%" },
      { label: "Follower ENG rate", value: "5.5%" },
    ],
    content: [
      { type: "image", url: coffeeDalleImages[11], views: "98K views", platform: "instagram" },
      { type: "image", url: coffeeDalleImages[12], views: "87K views", platform: "instagram" },
      { type: "image", url: coffeeDalleImages[13], views: "76K views", platform: "instagram" },
    ],
  },
  "Emily Carter": {
    matchScore: 70,
    matchLevel: "Good",
    description: "Comedy and lifestyle creator. Relatable coffee humor and everyday moments. Good for brands wanting authentic, fun content.",
    matching: [
      { label: "Vertical", value: "comedy & lifestyle" },
      { label: "Location", value: "Atlanta, GA" },
      { label: "View ENG rate", value: "19%" },
      { label: "Follower ENG rate", value: "4.9%", isWarning: true },
    ],
    content: [
      { type: "image", url: coffeeDalleImages[14], views: "312K views", platform: "tiktok" },
    ],
  },

  // === MODERATE MATCHES (55-69) ===
  "Liam Turner": {
    matchScore: 68,
    matchLevel: "Moderate",
    description: "Content creator with some coffee content but primarily focused on other topics. Could work for broader lifestyle campaigns but not coffee-specific.",
    matching: [
      { label: "Vertical", value: "tech", isWarning: true },
      { label: "Location", value: "Austin, TX" },
      { label: "View ENG rate", value: "15%" },
      { label: "Follower ENG rate", value: "5.4%" },
    ],
    content: [
      { type: "image", url: coffeeDalleImages[15], views: "45K views", platform: "instagram" },
      { type: "image", url: coffeeDalleImages[16], views: "52K views", platform: "instagram" },
      { type: "image", url: coffeeDalleImages[17], views: "38K views", platform: "instagram" },
    ],
  },
  "Ryan Brooks": {
    matchScore: 66,
    matchLevel: "Moderate",
    description: "Fitness creator with morning routine content that sometimes features coffee. Audience overlap is limited but could work for energy-focused messaging.",
    matching: [
      { label: "Vertical", value: "fitness", isWarning: true },
      { label: "Location", value: "Denver, CO" },
      { label: "View ENG rate", value: "14%", isWarning: true },
      { label: "Follower ENG rate", value: "5.8%" },
    ],
    content: [
      { type: "image", url: parukasImages[12], views: "67K views", platform: "instagram" },
    ],
  },
  "Noah Bennett": {
    matchScore: 65,
    matchLevel: "Moderate",
    description: "Travel and lifestyle creator. Coffee content is secondary to travel experiences. Limited alignment with coffee-specific campaigns.",
    matching: [
      { label: "Vertical", value: "travel", isWarning: true },
      { label: "Location", value: "Seattle, WA" },
      { label: "View ENG rate", value: "13%", isWarning: true },
      { label: "Follower ENG rate", value: "6.1%" },
    ],
    content: [
      { type: "image", url: parukasImages[13], views: "89K views", platform: "instagram" },
      { type: "image", url: parukasImages[14], views: "76K views", platform: "instagram" },
    ],
  },
  "Ethan Ross": {
    matchScore: 64,
    matchLevel: "Moderate",
    description: "Travel and sports content creator. Occasional coffee content when traveling. Not a primary focus but authentic when featured.",
    matching: [
      { label: "Vertical", value: "travel & sport", isWarning: true },
      { label: "Location", value: "San Diego, CA" },
      { label: "View ENG rate", value: "15%" },
      { label: "Follower ENG rate", value: "5.2%" },
    ],
    content: [
      { type: "image", url: parukasImages[15], views: "112K views", platform: "instagram" },
    ],
  },
  "Dylan Cooper": {
    matchScore: 63,
    matchLevel: "Moderate",
    description: "Travel and entertainment lifestyle content. Coffee features occasionally in travel vlogs. Secondary content focus.",
    matching: [
      { label: "Vertical", value: "travel & entertainment", isWarning: true },
      { label: "Location", value: "Las Vegas, NV" },
      { label: "View ENG rate", value: "16%" },
      { label: "Follower ENG rate", value: "4.8%", isWarning: true },
    ],
    content: [
      { type: "image", url: parukasImages[16], views: "156K views", platform: "tiktok" },
      { type: "image", url: parukasImages[17], views: "134K views", platform: "instagram" },
    ],
  },
  "Rachel Hayes": {
    matchScore: 62,
    matchLevel: "Moderate",
    description: "Finance and education content creator. Productivity-focused content occasionally features coffee. Niche but engaged audience.",
    matching: [
      { label: "Vertical", value: "finance & education", isWarning: true },
      { label: "Location", value: "Charlotte, NC" },
      { label: "View ENG rate", value: "12%", isWarning: true },
      { label: "Follower ENG rate", value: "7.1%" },
    ],
    content: [
      { type: "image", url: parukasImages[18], views: "45K views", platform: "instagram" },
      { type: "image", url: parukasImages[19], views: "38K views", platform: "instagram" },
    ],
  },
  "Logan Price": {
    matchScore: 61,
    matchLevel: "Moderate",
    description: "Entertainment and family travel content. Coffee isn't a focus but appears naturally in content. Moderate alignment.",
    matching: [
      { label: "Vertical", value: "entertainment & family", isWarning: true },
      { label: "Location", value: "Orlando, FL" },
      { label: "View ENG rate", value: "14%", isWarning: true },
      { label: "Follower ENG rate", value: "5.6%" },
    ],
    content: [
      { type: "image", url: parukasImages[20], views: "98K views", platform: "instagram" },
    ],
  },
  "Bella Rivera": {
    matchScore: 60,
    matchLevel: "Moderate",
    description: "Sports and travel advocacy content. Limited coffee content but high engagement when featured. Worth considering for specific campaigns.",
    matching: [
      { label: "Vertical", value: "sport & travel", isWarning: true },
      { label: "Location", value: "Phoenix, AZ" },
      { label: "View ENG rate", value: "15%" },
      { label: "Follower ENG rate", value: "5.0%" },
    ],
    content: [
      { type: "image", url: parukasImages[21], views: "87K views", platform: "instagram" },
      { type: "image", url: parukasImages[22], views: "76K views", platform: "instagram" },
    ],
  },
  "Hunter Gray": {
    matchScore: 59,
    matchLevel: "Moderate",
    description: "Sports and education lifestyle content. Coffee features in study/training routine content. Limited but authentic.",
    matching: [
      { label: "Vertical", value: "sport & education", isWarning: true },
      { label: "Location", value: "Columbus, OH" },
      { label: "View ENG rate", value: "13%", isWarning: true },
      { label: "Follower ENG rate", value: "5.9%" },
    ],
    content: [
      { type: "image", url: parukasImages[23], views: "54K views", platform: "instagram" },
    ],
  },
  "Luca Rossi": {
    matchScore: 58,
    matchLevel: "Moderate",
    description: "Fashion and lifestyle creativity content. Italian heritage gives authentic coffee angle but not primary focus.",
    matching: [
      { label: "Vertical", value: "fashion & creativity", isWarning: true },
      { label: "Location", value: "Boston, MA" },
      { label: "View ENG rate", value: "14%", isWarning: true },
      { label: "Follower ENG rate", value: "5.3%" },
    ],
    content: [
      { type: "image", url: parukasImages[24], views: "112K views", platform: "instagram" },
      { type: "image", url: parukasImages[25], views: "98K views", platform: "instagram" },
    ],
  },
  "Adrian Vega": {
    matchScore: 57,
    matchLevel: "Moderate",
    description: "Food and lifestyle creativity content. Some coffee content but primarily focused on other cuisine types.",
    matching: [
      { label: "Vertical", value: "food & creativity", isWarning: true },
      { label: "Location", value: "Houston, TX" },
      { label: "View ENG rate", value: "15%" },
      { label: "Follower ENG rate", value: "4.7%", isWarning: true },
    ],
    content: [
      { type: "image", url: parukasImages[26], views: "67K views", platform: "instagram" },
    ],
  },
  "Jake Thompson": {
    matchScore: 56,
    matchLevel: "Moderate",
    description: "Fitness and sports wellness content. Coffee features in pre-workout content. Limited but performance-focused angle.",
    matching: [
      { label: "Vertical", value: "fitness & sport", isWarning: true },
      { label: "Location", value: "Salt Lake City, UT" },
      { label: "View ENG rate", value: "16%" },
      { label: "Follower ENG rate", value: "4.5%", isWarning: true },
    ],
    content: [
      { type: "image", url: coffeeDalleImages[18], views: "134K views", platform: "instagram" },
      { type: "image", url: coffeeDalleImages[19], views: "112K views", platform: "instagram" },
    ],
  },

  // === FAIR MATCHES (40-54) ===
  "Carter Miller": {
    matchScore: 54,
    matchLevel: "Fair",
    description: "Gaming creator with minimal coffee content. Low vertical alignment but has mentioned interest in coffee sponsorships. Consider for experimental campaigns only.",
    matching: [
      { label: "Vertical", value: "gaming", isWarning: true },
      { label: "Location", value: "Atlanta, GA", isWarning: true },
      { label: "View ENG rate", value: "12%", isWarning: true },
      { label: "Follower ENG rate", value: "4.1%", isWarning: true },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[0], views: "234K views", platform: "tiktok" },
      { type: "image", url: coffeeMidjourneyImages[1], views: "198K views", platform: "instagram" },
    ],
  },
  "Jake Miller": {
    matchScore: 52,
    matchLevel: "Fair",
    description: "Gaming and comedy entertainment content. Coffee not a focus. High reach but low vertical alignment for coffee brands.",
    matching: [
      { label: "Vertical", value: "gaming & comedy", isWarning: true },
      { label: "Location", value: "Dallas, TX" },
      { label: "View ENG rate", value: "18%" },
      { label: "Follower ENG rate", value: "3.9%", isWarning: true },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[2], views: "456K views", platform: "tiktok" },
    ],
  },
  "Noah Foster": {
    matchScore: 50,
    matchLevel: "Fair",
    description: "Comedy and entertainment lifestyle content. Coffee rarely featured. Not recommended for coffee-specific campaigns.",
    matching: [
      { label: "Vertical", value: "comedy & entertainment", isWarning: true },
      { label: "Location", value: "Chicago, IL", isWarning: true },
      { label: "View ENG rate", value: "20%" },
      { label: "Follower ENG rate", value: "3.8%", isWarning: true },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[3], views: "312K views", platform: "tiktok" },
      { type: "image", url: coffeeMidjourneyImages[4], views: "287K views", platform: "instagram" },
    ],
  },
  "Alex Price": {
    matchScore: 48,
    matchLevel: "Fair",
    description: "General lifestyle content creator. Coffee appears occasionally but no strong connection. Low priority for coffee campaigns.",
    matching: [
      { label: "Vertical", value: "lifestyle", isWarning: true },
      { label: "Location", value: "Minneapolis, MN", isWarning: true },
      { label: "View ENG rate", value: "11%", isWarning: true },
      { label: "Follower ENG rate", value: "5.2%" },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[5], views: "45K views", platform: "instagram" },
    ],
  },
  "Jordan Miles": {
    matchScore: 46,
    matchLevel: "Fair",
    description: "Mixed content creator without specific niche. Coffee not a focus. Consider only for broad awareness campaigns.",
    matching: [
      { label: "Vertical", value: "mixed", isWarning: true },
      { label: "Location", value: "Philadelphia, PA" },
      { label: "View ENG rate", value: "13%", isWarning: true },
      { label: "Follower ENG rate", value: "4.4%", isWarning: true },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[6], views: "78K views", platform: "instagram" },
      { type: "image", url: coffeeMidjourneyImages[7], views: "67K views", platform: "instagram" },
    ],
  },
  "Samuel Hayes": {
    matchScore: 45,
    matchLevel: "Fair",
    description: "General entertainment content. No specific coffee content. Not recommended for targeted coffee campaigns.",
    matching: [
      { label: "Vertical", value: "entertainment", isWarning: true },
      { label: "Location", value: "San Antonio, TX", isWarning: true },
      { label: "View ENG rate", value: "14%", isWarning: true },
      { label: "Follower ENG rate", value: "4.0%", isWarning: true },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[8], views: "156K views", platform: "tiktok" },
    ],
  },
  "Oliver Kim": {
    matchScore: 44,
    matchLevel: "Fair",
    description: "Tech-focused content creator. Limited lifestyle content. Not aligned with coffee brand messaging.",
    matching: [
      { label: "Vertical", value: "tech", isWarning: true },
      { label: "Location", value: "San Jose, CA" },
      { label: "View ENG rate", value: "12%", isWarning: true },
      { label: "Follower ENG rate", value: "5.1%" },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[9], views: "89K views", platform: "instagram" },
      { type: "image", url: coffeeMidjourneyImages[10], views: "76K views", platform: "instagram" },
    ],
  },
  "Nathan Cole": {
    matchScore: 43,
    matchLevel: "Fair",
    description: "Sports and fitness content. Energy drinks more aligned than coffee. Low recommendation for coffee brands.",
    matching: [
      { label: "Vertical", value: "sport & fitness", isWarning: true },
      { label: "Location", value: "Indianapolis, IN", isWarning: true },
      { label: "View ENG rate", value: "15%" },
      { label: "Follower ENG rate", value: "3.7%", isWarning: true },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[11], views: "198K views", platform: "instagram" },
    ],
  },
  "Tyler Brooks": {
    matchScore: 42,
    matchLevel: "Fair",
    description: "General lifestyle content without specific focus. Coffee rarely mentioned. Not suitable for targeted campaigns.",
    matching: [
      { label: "Vertical", value: "lifestyle", isWarning: true },
      { label: "Location", value: "Detroit, MI", isWarning: true },
      { label: "View ENG rate", value: "11%", isWarning: true },
      { label: "Follower ENG rate", value: "4.3%", isWarning: true },
    ],
    content: [
      { type: "image", url: coffeeMidjourneyImages[12], views: "67K views", platform: "instagram" },
      { type: "image", url: coffeeDalleImages[0], views: "54K views", platform: "instagram" },
    ],
  },
  "Chris Allen": {
    matchScore: 41,
    matchLevel: "Fair",
    description: "Mixed entertainment content. No coffee focus. High follower count but low relevance for coffee brands.",
    matching: [
      { label: "Vertical", value: "entertainment", isWarning: true },
      { label: "Location", value: "Milwaukee, WI", isWarning: true },
      { label: "View ENG rate", value: "17%" },
      { label: "Follower ENG rate", value: "3.5%", isWarning: true },
    ],
    content: [
      { type: "image", url: coffeeDalleImages[1], views: "345K views", platform: "tiktok" },
    ],
  },
  "Vincent Ross": {
    matchScore: 40,
    matchLevel: "Fair",
    description: "Gaming and tech content creator. No coffee content history. Not aligned with coffee brand objectives.",
    matching: [
      { label: "Vertical", value: "gaming & tech", isWarning: true },
      { label: "Location", value: "Cleveland, OH", isWarning: true },
      { label: "View ENG rate", value: "13%", isWarning: true },
      { label: "Follower ENG rate", value: "4.2%", isWarning: true },
    ],
    content: [
      { type: "image", url: coffeeDalleImages[2], views: "234K views", platform: "tiktok" },
      { type: "image", url: coffeeDalleImages[3], views: "198K views", platform: "instagram" },
    ],
  },
  "Daniel Reed": {
    matchScore: 38,
    matchLevel: "Fair",
    description: "General content creator without niche. No coffee relevance. Not recommended for coffee campaigns.",
    matching: [
      { label: "Vertical", value: "general", isWarning: true },
      { label: "Location", value: "Kansas City, MO", isWarning: true },
      { label: "View ENG rate", value: "10%", isWarning: true },
      { label: "Follower ENG rate", value: "3.9%", isWarning: true },
    ],
    content: [
      { type: "image", url: coffeeDalleImages[4], views: "45K views", platform: "instagram" },
    ],
  },
  "Walter Green": {
    matchScore: 35,
    matchLevel: "Fair",
    description: "Minimal social presence with general content. No coffee alignment. Skip for coffee-specific campaigns.",
    matching: [
      { label: "Vertical", value: "general", isWarning: true },
      { label: "Location", value: "Memphis, TN", isWarning: true },
      { label: "View ENG rate", value: "9%", isWarning: true },
      { label: "Follower ENG rate", value: "3.4%", isWarning: true },
    ],
    content: [
      { type: "image", url: coffeeDalleImages[5], views: "23K views", platform: "instagram" },
      { type: "image", url: coffeeDalleImages[6], views: "19K views", platform: "instagram" },
    ],
  },
};

// Export match scores for sorting in parent component
export function getTalentMatchScore(talentName: string): number {
  return talentInsightsData[talentName]?.matchScore ?? 50;
}

// Export all talent names sorted by match score
export function getTalentsSortedByScore(): string[] {
  return Object.entries(talentInsightsData)
    .sort(([, a], [, b]) => b.matchScore - a.matchScore)
    .map(([name]) => name);
}

interface InsightsMatchHorizontalProps {
  talentName: string;
  avatarUrl?: string;
  className?: string;
}

export function InsightsMatchHorizontal({
  talentName,
  avatarUrl,
  className = "",
}: InsightsMatchHorizontalProps) {
  const insights = talentInsightsData[talentName];

  // Fallback for unknown talents
  if (!insights) {
    return (
      <div
        className={`flex gap-[24px] items-start p-[16px] rounded-[8px] overflow-hidden ${className}`}
        style={{
          border: "1px solid rgba(58, 73, 95, 0.1)",
          background: "white",
        }}
      >
        <p className="font-['Hanken_Grotesk',sans-serif] text-[14px]" style={{ color: "#54657d" }}>
          No insights available for {talentName}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`flex gap-[24px] items-start p-[16px] rounded-[8px] overflow-hidden ${className}`}
      style={{
        border: "1px solid rgba(58, 73, 95, 0.1)",
        background: "white",
      }}
    >
      {/* Talent Avatar & Name Section */}
      {avatarUrl && (
        <>
          <div className="flex flex-col items-center gap-[8px] shrink-0 w-[140px]">
            <div className="w-[128px] h-[128px] rounded-[8px] overflow-hidden">
              <img
                src={avatarUrl}
                alt={talentName}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className="font-['Hanken_Grotesk',sans-serif] font-medium text-[12px] leading-[16px] text-center"
              style={{ color: "#15191e" }}
            >
              {talentName.split(" ")[0]}
            </p>
            <p
              className="font-['Hanken_Grotesk',sans-serif] font-light text-[11px] leading-[14px] text-center -mt-[4px]"
              style={{ color: "#54657d" }}
            >
              {talentName.split(" ").slice(1).join(" ")}
            </p>
          </div>
          {/* Divider */}
          <div className="w-px self-stretch" style={{ background: "rgba(58, 73, 95, 0.1)" }} />
        </>
      )}

      {/* Analysis Section */}
      <div className="flex-1 flex flex-col gap-[8px] min-w-0">
        <SectionTitle>Analysis</SectionTitle>
        <div className="flex flex-col gap-[8px]">
          <p
            className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px]"
            style={{ color: "#15191e" }}
          >
            {insights.matchLevel} match
            <span
              className="ml-[8px] font-light text-[12px]"
              style={{ color: "#8b94a2" }}
            >
              ({insights.matchScore}/100)
            </span>
          </p>
          <p
            className="font-['Hanken_Grotesk',sans-serif] font-light text-[14px] leading-[20px]"
            style={{ color: "#15191e" }}
          >
            {insights.description}
          </p>
        </div>
      </div>

      {/* Matching Section */}
      <div className="flex flex-col gap-[8px] w-[243px] shrink-0">
        <SectionTitle>Matching</SectionTitle>
        <div className="flex flex-col">
          {insights.matching.map((item, index) => (
            <MatchingRow
              key={index}
              label={item.label}
              value={item.value}
              isWarning={item.isWarning}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col gap-[8px] min-w-0">
        <SectionTitle>Content ({insights.content.length})</SectionTitle>
        <div className="flex gap-[8px] items-center">
          {insights.content.map((item, index) => (
            item.type === "video" ? (
              <VideoThumbnail
                key={index}
                videoUrl={item.url}
                views={item.views}
                platform={item.platform}
              />
            ) : (
              <ImageThumbnail
                key={index}
                imageUrl={item.url}
                views={item.views}
                platform={item.platform}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
}
