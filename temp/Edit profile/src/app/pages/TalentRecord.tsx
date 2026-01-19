import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { talents } from "../data/talents";
import { TalentInfoCard } from "../components/talent-record/TalentInfoCard";
import { TalentSubmenu } from "../components/talent-record/TalentSubmenu";
import { BrandsSection } from "../components/talent-record/BrandsSection";
import { PlatformsDataMenu } from "../components/talent-record/PlatformsDataMenu";
import { OverviewTab } from "../components/talent-record/OverviewTab";
import { ContentTab } from "../components/talent-record/ContentTab";
import { MediaKitsListsTab } from "../components/talent-record/MediaKitsListsTab";
import { AskAssistTab } from "../components/talent-record/AskAssistTab";

interface TalentRecordProps {
  isDark?: boolean;
}

export function TalentRecord({
  isDark = false,
}: TalentRecordProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [platformsTab, setPlatformsTab] = useState("instagram");

  // Default to Sophia Martinez (ID: 1) if no ID is provided
  const talentId = id ? Number(id) : 1;

  // Find the talent by ID and store in state
  const initialTalent = talents.find((t) => t.id === talentId);
  const [talent, setTalent] = useState(initialTalent);

  // Handle bio update
  const handleUpdateBio = (newBio: string) => {
    if (talent) {
      setTalent({ ...talent, bio: newBio });
    }
  };

  // Handle birthday update
  const handleUpdateBirthday = (newBirthday: string) => {
    if (talent) {
      setTalent({ ...talent, birthday: newBirthday });
    }
  };

  // Handle location update
  const handleUpdateLocation = (newLocation: string) => {
    if (talent) {
      setTalent({ ...talent, location: newLocation });
    }
  };

  // Handle verticals update
  const handleUpdateVerticals = (newVerticals: string[]) => {
    if (talent) {
      setTalent({ ...talent, verticals: newVerticals });
    }
  };

  // Handle tab change with navigation for Content tab
  const handleTabChange = (tab: string) => {
    if (tab === "content") {
      navigate(`/talent/${talentId}/content`);
    } else {
      setActiveTab(tab);
    }
  };

  if (!talent) {
    return (
      <div className="flex items-center justify-center h-full">
        <p
          className="lg-medium"
          style={{ color: "var(--table-text-primary)" }}
        >
          Talent not found
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 w-full">
      {/* Submenu */}
      <TalentSubmenu
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* Talent Info Card */}
      <TalentInfoCard talent={talent} isDark={isDark} onUpdateBio={handleUpdateBio} onUpdateBirthday={handleUpdateBirthday} onUpdateLocation={handleUpdateLocation} onUpdateVerticals={handleUpdateVerticals} />

      {/* Brands Section */}
      <BrandsSection isDark={isDark} />

      {/* Platforms Data Menu */}
      <PlatformsDataMenu
        activeTab={platformsTab}
        onTabChange={setPlatformsTab}
        isDark={isDark}
      />

      {/* Tab Content */}
      {activeTab === "overview" && (
        <OverviewTab talent={talent} isDark={isDark} />
      )}
      {activeTab === "media-kits-lists" && (
        <MediaKitsListsTab />
      )}
      {activeTab === "ask-assist" && <AskAssistTab />}
    </div>
  );
}