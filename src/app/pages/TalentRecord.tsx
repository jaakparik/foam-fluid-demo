import { useState } from "react";
import { useParams } from "react-router-dom";
import { talents, calculateAge } from "../data/talents";
import { TalentInfoCard } from "../components/talent-record/TalentInfoCard";
import { TalentSubmenu } from "../components/talent-record/TalentSubmenu";
import { BrandsSection } from "../components/talent-record/BrandsSection";
import { OverviewTab } from "../components/talent-record/OverviewTab";
import { ContentTab } from "../components/talent-record/ContentTab";
import { MediaKitsListsTab } from "../components/talent-record/MediaKitsListsTab";
import { AskAssistTab } from "../components/talent-record/AskAssistTab";

interface TalentRecordProps {
  isDark?: boolean;
}

export function TalentRecord({ isDark = false }: TalentRecordProps) {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("overview");

  // Default to Sophia Martinez (ID: 1) if no ID is provided
  const talentId = id ? Number(id) : 1;
  
  // Find the talent by ID
  const initialTalent = talents.find((t) => t.id === talentId);

  // State for the talent (allows for local editing)
  const [talent, setTalent] = useState(initialTalent);

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

  // Handler functions for updating talent data
  const handleUpdateBio = (newBio: string) => {
    setTalent({ ...talent, bio: newBio });
  };

  const handleUpdateBirthday = (newBirthday: string) => {
    const newAge = calculateAge(newBirthday);
    setTalent({ ...talent, birthday: newBirthday, age: newAge });
  };

  const handleUpdateLocation = (newLocation: string) => {
    setTalent({ ...talent, location: newLocation });
  };

  const handleUpdateGender = (newGender: "Male" | "Female") => {
    setTalent({ ...talent, gender: newGender });
  };

  const handleUpdateVerticals = (newVerticals: string[]) => {
    setTalent({ ...talent, verticals: newVerticals });
  };

  return (
    <div className="p-8 w-full">
      {/* Submenu - Above the name */}
      <TalentSubmenu activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Talent Info Card */}
      <TalentInfoCard
        talent={talent}
        isDark={isDark}
        onUpdateBio={handleUpdateBio}
        onUpdateBirthday={handleUpdateBirthday}
        onUpdateLocation={handleUpdateLocation}
        onUpdateGender={handleUpdateGender}
        onUpdateVerticals={handleUpdateVerticals}
      />

      {/* Brands Section */}
      <BrandsSection isDark={isDark} />

      {/* Tab Content */}
      {activeTab === "overview" && (
        <OverviewTab talent={talent} isDark={isDark} />
      )}
      {activeTab === "content" && <ContentTab />}
      {activeTab === "media-kits-lists" && <MediaKitsListsTab />}
      {activeTab === "ask-assist" && <AskAssistTab />}
    </div>
  );
}