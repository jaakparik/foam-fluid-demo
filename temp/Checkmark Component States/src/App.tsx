import { useState } from 'react';
import { ContentCard } from './components/ContentCard';

interface CardData {
  id: number;
  imageUrl: string;
  platformName: string;
  views: string;
  reach: string;
  clicks: string;
  platform: 'instagram' | 'tiktok' | 'youtube' | 'snapchat';
}

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: 'https://proto.dev.foam.io/assets/avatars/female/female_young_adult_fashion_influencer.jpeg',
    platformName: 'Emma Style',
    views: '227k',
    reach: '190k',
    clicks: '468k',
    platform: 'instagram',
  },
  {
    id: 2,
    imageUrl: 'https://proto.dev.foam.io/assets/photos/male_young_adult_business_suit_4_3.jpeg',
    platformName: 'Jordan Business',
    views: '184k',
    reach: '156k',
    clicks: '312k',
    platform: 'tiktok',
  },
  {
    id: 3,
    imageUrl: 'https://proto.dev.foam.io/assets/photos/female_young_adult_home_decor_influencer_3_4.jpeg',
    platformName: 'Ashley Home',
    views: '312k',
    reach: '278k',
    clicks: '521k',
    platform: 'youtube',
  },
  {
    id: 4,
    imageUrl: 'https://proto.dev.foam.io/assets/photos/female_young_adult_laughing_friends_4_3.jpeg',
    platformName: 'Sofia & Friends',
    views: '445k',
    reach: '389k',
    clicks: '678k',
    platform: 'snapchat',
  },
  {
    id: 5,
    imageUrl: 'https://proto.dev.foam.io/assets/photos/male_young_adult_athletic_stretching_3_4.jpeg',
    platformName: 'Lucas Fitness',
    views: '156k',
    reach: '134k',
    clicks: '289k',
    platform: 'instagram',
  },
  {
    id: 6,
    imageUrl: 'https://proto.dev.foam.io/assets/photos/female_young_adult_dyed_hair_3_4.jpeg',
    platformName: 'Maya Creative',
    views: '298k',
    reach: '245k',
    clicks: '567k',
    platform: 'tiktok',
  },
  {
    id: 7,
    imageUrl: 'https://proto.dev.foam.io/assets/avatars/animals/cat.jpeg',
    platformName: 'Whiskers Daily',
    views: '892k',
    reach: '756k',
    clicks: '1.2M',
    platform: 'youtube',
  },
  {
    id: 8,
    imageUrl: 'https://proto.dev.foam.io/assets/avatars/animals/dog.jpeg',
    platformName: 'Buddy Adventures',
    views: '634k',
    reach: '521k',
    clicks: '987k',
    platform: 'snapchat',
  },
  {
    id: 9,
    imageUrl: 'https://proto.dev.foam.io/assets/photos/female_young_adult_hijab_elevator_3_4.jpeg',
    platformName: 'Amira Fashion',
    views: '425k',
    reach: '367k',
    clicks: '678k',
    platform: 'instagram',
  },
  {
    id: 10,
    imageUrl: 'https://proto.dev.foam.io/assets/avatars/animals/butterfly.jpeg',
    platformName: 'Nature Wings',
    views: '198k',
    reach: '156k',
    clicks: '301k',
    platform: 'tiktok',
  },
  {
    id: 11,
    imageUrl: 'https://proto.dev.foam.io/assets/photos/male_middle_aged_hoodie_4_3.jpeg',
    platformName: 'Tech Dad',
    views: '512k',
    reach: '445k',
    clicks: '823k',
    platform: 'youtube',
  },
  {
    id: 12,
    imageUrl: 'https://proto.dev.foam.io/assets/photos/female_young_adult_hoodie_couch_3_4.jpeg',
    platformName: 'Chill Vibes',
    views: '267k',
    reach: '223k',
    clicks: '456k',
    platform: 'snapchat',
  },
  {
    id: 13,
    imageUrl: 'https://proto.dev.foam.io/assets/avatars/animals/owl.jpeg',
    platformName: 'Wise Owl',
    views: '378k',
    reach: '312k',
    clicks: '589k',
    platform: 'instagram',
  },
  {
    id: 14,
    imageUrl: 'https://proto.dev.foam.io/assets/avatars/animals/koala.jpeg',
    platformName: 'Koala Cuddles',
    views: '723k',
    reach: '601k',
    clicks: '1.1M',
    platform: 'tiktok',
  },
  {
    id: 15,
    imageUrl: 'https://proto.dev.foam.io/assets/avatars/animals/jellyfish.jpeg',
    platformName: 'Ocean Drift',
    views: '289k',
    reach: '234k',
    clicks: '445k',
    platform: 'youtube',
  },
  {
    id: 16,
    imageUrl: 'https://proto.dev.foam.io/assets/avatars/male/male_young_adult_running_influencer.jpeg',
    platformName: 'Run Coach Alex',
    views: '543k',
    reach: '478k',
    clicks: '891k',
    platform: 'snapchat',
  },
  {
    id: 17,
    imageUrl: 'https://proto.dev.foam.io/assets/avatars/female/female_young_adult_yoga_instructor.jpeg',
    platformName: 'Yoga with Sara',
    views: '667k',
    reach: '589k',
    clicks: '1.1M',
    platform: 'instagram',
  },
  {
    id: 18,
    imageUrl: 'https://proto.dev.foam.io/assets/avatars/animals/tiger.jpeg',
    platformName: 'Tiger Tales',
    views: '421k',
    reach: '356k',
    clicks: '678k',
    platform: 'tiktok',
  },
];

export default function App() {
  const [selectedCards, setSelectedCards] = useState<Record<number, boolean>>({});

  const handleCardCheckedChange = (id: number, checked: boolean) => {
    setSelectedCards((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cardData.map((card) => (
            <ContentCard
              key={card.id}
              imageUrl={card.imageUrl}
              platformName={card.platformName}
              views={card.views}
              reach={card.reach}
              clicks={card.clicks}
              checked={selectedCards[card.id] || false}
              onCheckedChange={(checked) => handleCardCheckedChange(card.id, checked)}
              platform={card.platform}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
