import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { talents } from "../data/talents";
import { getContentPostsForTalent } from "../data/contentPosts";
import { TalentSubmenu } from "../components/talent-record/TalentSubmenu";
import { ContentToolbar } from "../components/talent-record/ContentToolbar";
import { ContentCard } from "../components/content/ContentCard";

interface TalentContentProps {
  isDark?: boolean;
}

export function TalentContent({
  isDark = false,
}: TalentContentProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("content");

  // Default to Sophia Martinez (ID: 1) if no ID is provided
  const talentId = id ? Number(id) : 1;

  // Find the talent by ID
  const talent = talents.find((t) => t.id === talentId);

  // Handle tab change with navigation
  const handleTabChange = (tab: string) => {
    if (tab === "content") {
      setActiveTab(tab);
    } else {
      // Navigate back to TalentRecord for other tabs
      navigate(`/talent/${talentId}`);
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

  // Get content posts for the talent
  const contentPosts = getContentPostsForTalent(talentId);
  const [selectedPosts, setSelectedPosts] = useState<Set<number>>(new Set());

  const handleSelectionChange = (postId: number, selected: boolean) => {
    const newSelected = new Set(selectedPosts);
    if (selected) {
      newSelected.add(postId);
    } else {
      newSelected.delete(postId);
    }
    setSelectedPosts(newSelected);
  };

  return (
    <div className="p-4 w-full">
      {/* Submenu */}
      <TalentSubmenu
        activeTab={activeTab}
        onTabChange={handleTabChange}
        roundedBottom={false}
      />

      {/* Content Toolbar */}
      <ContentToolbar 
        talentName={talent.name}
        talentAvatar={talent.avatarImage}
      />

      {/* Content Cards */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[12px] mt-4">
        {contentPosts.map((post) => (
          <ContentCard
            key={post.id}
            image={post.image}
            views={post.views}
            reach={post.reach}
            clicks={post.clicks}
            platform={post.platform}
            postedDate={post.postedDate}
            isSelected={selectedPosts.has(post.id)}
            onSelectionChange={(selected) =>
              handleSelectionChange(post.id, selected)
            }
          />
        ))}
      </div>
    </div>
  );
}