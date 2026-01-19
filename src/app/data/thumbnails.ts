/**
 * Coffee thumbnail image URLs for use throughout the application
 */
export const coffeeThumbnails = [
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_1.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_2.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_3.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_4.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_5.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_6.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_7.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_8.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_9.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_10.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_11.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_12.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_13.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_14.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_15.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_16.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_17.jpg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_18.jpg",
];

/**
 * Coffee logo image URLs for brands, profiles, and avatars
 */
export const coffeeLogos = [
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_logo_1.jpeg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_logo_2.jpeg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_logo_3.jpeg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_logo_4.jpeg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_logo_5.jpeg",
  "https://proto.dev.foam.io/assets/photos/coffee/coffee_logo_6.jpeg",
];

/**
 * Coffee video URLs with their corresponding thumbnail images
 */
export const coffeeVideos = [
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_1.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_1.mp4",
  },
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_2.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_2.mp4",
  },
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_3.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_3.mp4",
  },
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_4.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_4.mp4",
  },
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_5.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_5.mp4",
  },
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_6.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_6.mp4",
  },
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_7.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_7.mp4",
  },
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_8.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/coffee_video_8.mp4",
  },
];

/**
 * TikTok video URLs for @mention search results
 * These are used specifically when searching with @mention
 */
export const tiktokVideos = [
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_1.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_1.mp4",
  },
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_2.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_2.mp4",
  },
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_3.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_3.mp4",
  },
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_4.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_4.mp4",
  },
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_5.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_5.mp4",
  },
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_6.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_6.mp4",
  },
  {
    thumbnail: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_7.jpg",
    video: "https://proto.dev.foam.io/assets/photos/coffee/tiktok_video_7.mp4",
  },
];

/**
 * Get a specific coffee thumbnail by index (1-18)
 */
export const getCoffeeThumbnail = (index: number): string => {
  if (index < 1 || index > 18) {
    console.warn(`Coffee thumbnail index ${index} out of range (1-18). Using index 1.`);
    return coffeeThumbnails[0];
  }
  return coffeeThumbnails[index - 1];
};

/**
 * Get a random coffee video with thumbnail
 */
export const getRandomCoffeeVideo = () => {
  return coffeeVideos[Math.floor(Math.random() * coffeeVideos.length)];
};

/**
 * Get a specific coffee video by index (1-8)
 */
export const getCoffeeVideo = (index: number) => {
  if (index < 1 || index > 8) {
    console.warn(`Coffee video index ${index} out of range (1-8). Using index 1.`);
    return coffeeVideos[0];
  }
  return coffeeVideos[index - 1];
};

/**
 * Get a specific coffee logo by index (1-6)
 */
export const getCoffeeLogo = (index: number): string => {
  if (index < 1 || index > 6) {
    console.warn(`Coffee logo index ${index} out of range (1-6). Using index 1.`);
    return coffeeLogos[0];
  }
  return coffeeLogos[index - 1];
};

/**
 * Get a random coffee logo
 */
export const getRandomCoffeeLogo = (): string => {
  return coffeeLogos[Math.floor(Math.random() * coffeeLogos.length)];
};

/**
 * Get a specific TikTok video by index (1-7)
 */
export const getTikTokVideo = (index: number) => {
  if (index < 1 || index > 7) {
    console.warn(`TikTok video index ${index} out of range (1-7). Using index 1.`);
    return tiktokVideos[0];
  }
  return tiktokVideos[index - 1];
};

/**
 * Nike content images for Nike search results
 */
export const nikeImages = [
  "https://proto.dev.foam.io/assets/photos/nike/image1.jpg",
  "https://proto.dev.foam.io/assets/photos/nike/image2.jpg",
  "https://proto.dev.foam.io/assets/photos/nike/image3.jpg",
  "https://proto.dev.foam.io/assets/photos/nike/image4.jpg",
];

/**
 * Nike content videos for Nike search results
 */
export const nikeVideos = [
  "https://proto.dev.foam.io/assets/videos/nike_video-1.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-2.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-3.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-4.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-5.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-6.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-7.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-8.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-9.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-10.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-11.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-12.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-13.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-14.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-15.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-16.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-17.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-18.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-19.mp4",
  "https://proto.dev.foam.io/assets/videos/nike_video-20.mp4",
];

/**
 * Nike logo URL for brand display
 */
export const nikeLogo = "https://proto.dev.foam.io/assets/logos/logo_nike.webp";

/**
 * Get a specific Nike image by index (1-4)
 */
export const getNikeImage = (index: number): string => {
  if (index < 1 || index > 4) {
    console.warn(`Nike image index ${index} out of range (1-4). Using index 1.`);
    return nikeImages[0];
  }
  return nikeImages[index - 1];
};

/**
 * Get a specific Nike video by index (1-20)
 */
export const getNikeVideo = (index: number): string => {
  if (index < 1 || index > 20) {
    console.warn(`Nike video index ${index} out of range (1-20). Using index 1.`);
    return nikeVideos[0];
  }
  return nikeVideos[index - 1];
};