import { PerformanceSection } from "./PerformanceSection";
import { DataHealthSection } from "./DataHealthSection";
import { RecentActivitySection } from "./RecentActivitySection";
import { PersonalInfoSection } from "./PersonalInfoSection";

interface Talent {
  instagramEngagementRate: string;
  aliases: {
    instagram: string;
    tiktok: string;
    youtube: string;
    snapchat: string;
  };
  followers: {
    instagram: string;
    tiktok: string;
    youtube: string;
    snapchat: string;
    total: string;
  };
}

interface OverviewTabProps {
  talent: Talent;
  isDark?: boolean;
}

export function OverviewTab({ talent, isDark = false }: OverviewTabProps) {
  return (
    <div>
      <PerformanceSection talent={talent} isDark={isDark} />
      <DataHealthSection />
      <RecentActivitySection />
      <PersonalInfoSection />
    </div>
  );
}
