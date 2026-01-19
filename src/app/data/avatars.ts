// Male avatars from Foam prototype
export const maleAvatars = [
  "https://proto.dev.foam.io/assets/avatars/male/male_teen_skater_influencer.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_teen_braces.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_adjusting_tie.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_late_30s.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_bearded_mirror.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_relaxed_lounging.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_running_influencer.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_middle_aged_laughing.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_bearded_oversized_coat.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_athletic_stretching.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_model_espresso.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_musician_guitar.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_stylish_leaning.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_glasses.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_stubble.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_vintage_leather.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_car_dashboard.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_zoom_call.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_elderly_plaid_shirt.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_confident_standing.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_car_selfie.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_middle_aged_hoodie.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_middle_aged_balding_polo.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_winter_jacket.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_teen_acne_braces.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_stylish_seated.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_baseball_cap.jpeg",
  "https://proto.dev.foam.io/assets/avatars/male/male_young_adult_business_suit.jpeg",
];

// Female avatars from Foam prototype
export const femaleAvatars = [
  "https://proto.dev.foam.io/assets/avatars/female/female_teen_peace_sign.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_dyed_hair.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_mom_baby.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_yoga_instructor.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_fashion_influencer.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_music_vlogger.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_middle_aged_kitchen.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_hijab.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_hoodie_couch.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_teen_braces_goofy.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_business_train.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_party_host.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_streetwear_influencer.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_cooking_influencer.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_fitness_influencer.jpeg",
  "https://proto.dev.foam.io/assets/avatars/female/female_young_adult_laughing.jpeg",
];

// Photos (3:4 and 4:3 aspect ratios) from Foam prototype
export const photos = [
  "https://proto.dev.foam.io/assets/photos/female_young_adult_dyed_hair_3_4.jpeg",
  "https://proto.dev.foam.io/assets/photos/female_young_adult_hijab_elevator_3_4.jpeg",
  "https://proto.dev.foam.io/assets/photos/female_young_adult_home_decor_influencer_3_4.jpeg",
  "https://proto.dev.foam.io/assets/photos/female_young_adult_hoodie_couch_3_4.jpeg",
  "https://proto.dev.foam.io/assets/photos/female_young_adult_laughing_friends_4_3.jpeg",
  "https://proto.dev.foam.io/assets/photos/female_young_adult_squinting_sunglasses_3_4.jpeg",
  "https://proto.dev.foam.io/assets/photos/male_middle_aged_balding_polo_3_4.jpeg",
  "https://proto.dev.foam.io/assets/photos/male_middle_aged_hoodie_4_3.jpeg",
  "https://proto.dev.foam.io/assets/photos/male_teen_braces_3_4.jpeg",
  "https://proto.dev.foam.io/assets/photos/male_young_adult_athletic_stretching_3_4.jpeg",
  "https://proto.dev.foam.io/assets/photos/male_young_adult_business_suit_4_3.jpeg",
];

// Export all avatars
export const avatars = [...maleAvatars, ...femaleAvatars];

// Helper function to get a random avatar
export function getRandomAvatar(): string {
  return avatars[Math.floor(Math.random() * avatars.length)];
}

// Helper function to get a specific avatar by index
export function getAvatar(index: number): string {
  return avatars[index % avatars.length];
}

// Helper function to get a random photo
export function getRandomPhoto(): string {
  return photos[Math.floor(Math.random() * photos.length)];
}

// Helper function to get a specific photo by index
export function getPhoto(index: number): string {
  return photos[index % photos.length];
}