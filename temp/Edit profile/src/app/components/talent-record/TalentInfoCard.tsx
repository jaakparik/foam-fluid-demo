import { Pencil, Check, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { InstagramMetricsCard } from "./InstagramMetricsCard";
import { TikTokMetricsCard } from "./TikTokMetricsCard";
import { YouTubeMetricsCard } from "./YouTubeMetricsCard";
import { SnapMetricsCard } from "./SnapMetricsCard";
import { DataHealthCards } from "./DataHealthCards";
import { GenderSelector } from "./GenderSelector";
import { BirthdaySelector } from "./BirthdaySelector";
import { LocationSelector } from "./LocationSelector";
import { VerticalsSelector } from "./VerticalsSelector";
import { calculateAge, Talent } from "@/app/data/talents";

interface TalentInfoCardProps {
  talent: Talent;
  isDark?: boolean;
  onUpdateBio?: (newBio: string) => void;
  onUpdateBirthday?: (newBirthday: string) => void;
  onUpdateLocation?: (newLocation: string) => void;
  onUpdateVerticals?: (newVerticals: string[]) => void;
}

export function TalentInfoCard({
  talent,
  isDark = false,
  onUpdateBio,
  onUpdateBirthday,
  onUpdateLocation,
  onUpdateVerticals,
}: TalentInfoCardProps) {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [editedBio, setEditedBio] = useState(talent.bio);
  const [isHoveringBio, setIsHoveringBio] = useState(false);
  const [showDataUpdated, setShowDataUpdated] = useState(false);
  const [currentGender, setCurrentGender] = useState(
    talent.gender,
  );
  const [currentBirthday, setCurrentBirthday] = useState(
    talent.birthday,
  );
  const [currentLocation, setCurrentLocation] = useState(
    talent.location,
  );
  const [currentVerticals, setCurrentVerticals] = useState(
    talent.verticals,
  );
  const bioRef = useRef<HTMLTextAreaElement>(null);

  const handleSaveBio = () => {
    // Here you would typically send the updated data to the server
    console.log("Saving bio:", editedBio);
    setIsEditingBio(false);
    setIsHoveringBio(false);

    // Only show notification if bio was actually changed
    if (editedBio !== talent.bio) {
      setShowDataUpdated(true);
      // Auto-hide after 3 seconds
      setTimeout(() => {
        setShowDataUpdated(false);
      }, 3000);
    }

    if (onUpdateBio) {
      onUpdateBio(editedBio);
    }
  };

  const handleCancelBio = () => {
    setEditedBio(talent.bio);
    setIsEditingBio(false);
    setIsHoveringBio(false);
  };

  const handleBioChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    if (value.length <= 255) {
      setEditedBio(value);
    }
    // Auto-resize textarea
    if (bioRef.current) {
      bioRef.current.style.height = "auto";
      bioRef.current.style.height =
        bioRef.current.scrollHeight + "px";
    }
  };

  const handleBioKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (e.key === "Escape") {
      handleCancelBio();
    } else if (e.key === "Enter" && e.metaKey) {
      // Cmd+Enter or Ctrl+Enter to save
      handleSaveBio();
    }
  };

  const handleGenderUpdate = (newGender: string) => {
    console.log("Gender changed to:", newGender);
    setCurrentGender(newGender);

    // Show data updated notification
    setShowDataUpdated(true);
    setTimeout(() => {
      setShowDataUpdated(false);
    }, 3000);
  };

  const handleBirthdayUpdate = (newBirthday: string) => {
    console.log("Birthday changed to:", newBirthday);
    setCurrentBirthday(newBirthday);

    // Show data updated notification
    setShowDataUpdated(true);
    setTimeout(() => {
      setShowDataUpdated(false);
    }, 3000);

    if (onUpdateBirthday) {
      onUpdateBirthday(newBirthday);
    }
  };

  const handleLocationUpdate = (newLocation: string) => {
    console.log("Location changed to:", newLocation);
    setCurrentLocation(newLocation);

    // Show data updated notification
    setShowDataUpdated(true);
    setTimeout(() => {
      setShowDataUpdated(false);
    }, 3000);

    if (onUpdateLocation) {
      onUpdateLocation(newLocation);
    }
  };

  const handleVerticalsUpdate = (newVerticals: string[]) => {
    console.log("Verticals changed to:", newVerticals);
    setCurrentVerticals(newVerticals);

    // Show data updated notification
    setShowDataUpdated(true);
    setTimeout(() => {
      setShowDataUpdated(false);
    }, 3000);

    if (onUpdateVerticals) {
      onUpdateVerticals(newVerticals);
    }
  };

  useEffect(() => {
    if (isEditingBio && bioRef.current) {
      bioRef.current.focus();
      // Set initial height to match content
      bioRef.current.style.height = "auto";
      bioRef.current.style.height =
        bioRef.current.scrollHeight + "px";
    }
  }, [isEditingBio]);

  return (
    <div className="mb-4 mt-4 px-2">
      {/* First Row - Name Only */}
      <div className="mb-4 flex items-center gap-3">
        <p
          className="text-xl-medium"
          style={{
            color: "var(--nav-item-text-active)",
            height: "24px",
          }}
        >
          {talent.name}
        </p>
        <AnimatePresence>
          {showDataUpdated && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 25,
                duration: 0.3,
              }}
              className="bg-[rgba(52,192,162,0.2)] flex gap-[6px] items-center justify-center px-[12px] py-[2px] rounded-[100px]"
              style={{ height: "24px" }}
            >
              <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[#15191e] text-[12px] leading-[20px] whitespace-nowrap">
                Data updated
              </p>
              <div className="relative shrink-0 size-[16px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.3346 4L6.0013 11.3333L2.66797 8"
                    stroke="#54657D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Second Row - Avatar + Info + Data Health Cards */}
      <div className="flex flex-wrap items-start gap-8">
        {/* Avatar + Location/Age/Gender */}
        <div
          className="flex flex-col gap-[8px] items-start pl-0 py-0 relative shrink-0"
          style={{ minWidth: "160px" }}
        >
          {/* Avatar - 160x160 */}
          <div className="relative rounded-[8px] shrink-0 size-[160px]">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <img
                alt={talent.name}
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={talent.avatarImage}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none rounded-[8px]"
            />
          </div>

          {/* Location + Age + Gender */}
          <div className="flex flex-col gap-[2px] items-start justify-end relative shrink-0 w-full whitespace-pre">
            <LocationSelector
              location={currentLocation}
              onChange={handleLocationUpdate}
            />
            <BirthdaySelector
              birthday={currentBirthday}
              onChange={handleBirthdayUpdate}
            />
            <GenderSelector
              selectedGender={currentGender}
              onChange={handleGenderUpdate}
            />
          </div>
        </div>

        {/* Second Column: Total Followers + Platforms + Bio + Verticals + Managed By */}
        <div
          className="flex flex-col gap-[16px] items-start py-0 relative shrink-0"
          style={{ minWidth: "200px" }}
        >
          {/* Total Followers */}
          <div className="flex gap-[10px] items-center leading-[0] relative shrink-0">
            <p
              className="text-xl w-[150px]"
              style={{ color: "var(--nav-item-text-subtle)" }}
            >
              Total followers
            </p>
            <p
              className="text-xl-medium whitespace-nowrap"
              style={{ color: "var(--nav-item-text-active)" }}
            >
              {talent.followers.total}
            </p>
          </div>

          {/* Platforms List */}
          <div className="flex flex-col gap-[8px] items-start justify-center relative shrink-0">
            {/* Instagram */}
            <div className="flex gap-[8px] items-center relative shrink-0">
              <div style={{ width: "20px", height: "20px" }}>
                <InstagramMetricsCard
                  isDark={isDark}
                  handle={talent.aliases.instagram}
                  followers={talent.followers.instagram}
                  iconOnly
                />
              </div>
              <p
                className="text-sm w-[122px]"
                style={{
                  color: "var(--nav-item-text-subtle)",
                }}
              >
                {talent.aliases.instagram}
              </p>
              <p
                className="text-sm-medium"
                style={{
                  color: "var(--nav-item-text-active)",
                }}
              >
                {talent.followers.instagram}
              </p>
            </div>

            {/* TikTok */}
            <div className="flex gap-[8px] items-center relative shrink-0">
              <div style={{ width: "20px", height: "20px" }}>
                <TikTokMetricsCard
                  isDark={isDark}
                  handle={talent.aliases.tiktok}
                  followers={talent.followers.tiktok}
                  iconOnly
                />
              </div>
              <p
                className="text-sm w-[122px]"
                style={{
                  color: "var(--nav-item-text-subtle)",
                }}
              >
                {talent.aliases.tiktok}
              </p>
              <p
                className="text-sm-medium"
                style={{
                  color: "var(--nav-item-text-active)",
                }}
              >
                {talent.followers.tiktok}
              </p>
            </div>

            {/* YouTube */}
            <div className="flex gap-[8px] items-center relative shrink-0">
              <div style={{ width: "20px", height: "20px" }}>
                <YouTubeMetricsCard
                  handle={talent.aliases.youtube}
                  followers={talent.followers.youtube}
                  iconOnly
                />
              </div>
              <p
                className="text-sm w-[122px]"
                style={{
                  color: "var(--nav-item-text-subtle)",
                }}
              >
                {talent.aliases.youtube}
              </p>
              <p
                className="text-sm-medium"
                style={{
                  color: "var(--nav-item-text-active)",
                }}
              >
                {talent.followers.youtube}
              </p>
            </div>

            {/* Snapchat */}
            <div className="flex gap-[8px] items-center relative shrink-0">
              <div style={{ width: "20px", height: "20px" }}>
                <SnapMetricsCard
                  handle={talent.aliases.snapchat}
                  followers={talent.followers.snapchat}
                  iconOnly
                />
              </div>
              <p
                className="text-sm w-[122px]"
                style={{
                  color: "var(--nav-item-text-subtle)",
                }}
              >
                {talent.aliases.snapchat}
              </p>
              <p
                className="text-sm-medium"
                style={{
                  color: "var(--nav-item-text-active)",
                }}
              >
                {talent.followers.snapchat}
              </p>
            </div>
          </div>

          {/* Links */}
          {talent.links && talent.links.length > 0 && (
            <div className="flex flex-col gap-[8px] items-start justify-center relative shrink-0">
              {talent.links.map((link, index) => {
                // Extract domain and last part of URL path
                const url = new URL(link);
                const domain = url.hostname.replace("www.", "");
                const pathParts = url.pathname
                  .split("/")
                  .filter(Boolean);
                const displayName =
                  pathParts[pathParts.length - 1] || domain;
                const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=16`;

                return (
                  <div
                    key={index}
                    className="flex gap-[8px] items-center relative shrink-0"
                  >
                    <img
                      src={faviconUrl}
                      alt={domain}
                      className="shrink-0"
                      style={{ width: "16px", height: "16px" }}
                    />
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm"
                      style={{
                        color: "var(--nav-item-text-subtle)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration =
                          "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration =
                          "none")
                      }
                    >
                      {displayName}
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Third Column: Bio + Verticals + Managed By */}
        <div
          className="flex flex-col gap-[16px] items-start justify-start pr-0 py-0 relative flex-1"
          style={{ minWidth: "280px", maxWidth: "450px" }}
        >
          {/* Bio */}
          <div className="relative w-full">
            {isEditingBio ? (
              <>
                <div className="px-2 py-1">
                  <textarea
                    value={editedBio}
                    onChange={handleBioChange}
                    onKeyDown={handleBioKeyDown}
                    onBlur={handleSaveBio}
                    className="text-sm w-full resize-none overflow-hidden"
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      padding: 0,
                      margin: 0,
                      lineHeight: "1.5",
                    }}
                    maxLength={255}
                    ref={bioRef}
                  />
                </div>
                <span
                  className="text-xs absolute -top-6 right-1 px-1 py-0.5 rounded-[4px]"
                  style={{
                    color:
                      editedBio.length >= 255
                        ? "#cb0000"
                        : "var(--nav-item-text-subtle)",
                    background: "rgba(255,255,255,0.8)",
                  }}
                >
                  {editedBio.length}/255
                </span>
              </>
            ) : (
              <>
                <div
                  className="px-2 py-1 rounded-[4px] transition-all cursor-pointer"
                  style={{
                    background: isHoveringBio
                      ? "rgba(0,0,0,0.03)"
                      : "transparent",
                  }}
                  onClick={() => setIsEditingBio(true)}
                  onMouseEnter={() => setIsHoveringBio(true)}
                  onMouseLeave={() => setIsHoveringBio(false)}
                >
                  <p
                    className="text-sm"
                    style={{ lineHeight: "1.5" }}
                  >
                    {talent.bio}
                  </p>
                </div>
                {isHoveringBio && (
                  <button
                    className="absolute -top-6 right-1 p-1 rounded-[4px] transition-opacity hover:opacity-70"
                    style={{
                      color: "#54657d",
                      background: "rgba(255,255,255,0.8)",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEditingBio(true);
                    }}
                  >
                    <Pencil size={14} />
                  </button>
                )}
              </>
            )}
          </div>

          {/* Verticals */}
          <div className="relative w-full">
            <VerticalsSelector
              verticals={currentVerticals}
              onChange={handleVerticalsUpdate}
            />
          </div>

          {/* Managed By */}
          <div className="flex gap-[8px] pl-2 items-center relative shrink-0">
            <p
              className="text-sm"
              style={{ color: "var(--nav-item-text-subtle)" }}
            >
              Managed by:{" "}
            </p>
            <div className="flex gap-[4px] items-center relative shrink-0">
              <div className="flex items-center relative shrink-0">
                <a
                  href="#"
                  className="text-sm-medium relative shrink-0"
                  style={{
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration =
                      "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration =
                      "none")
                  }
                >
                  Brendan Nahmias
                </a>
                <p className="text-sm-medium relative shrink-0">
                  ,
                </p>
              </div>
              <a
                href="#"
                className="text-sm-medium relative shrink-0"
                style={{
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration =
                    "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration =
                    "none")
                }
              >
                Sarah Chen
              </a>
            </div>
          </div>
        </div>

        {/* Fourth Column: Data Health & Profile Completion Cards - wraps below when doesn't fit */}
        <div
          className=" pr-0 py-0 flex-1"
          style={{ minWidth: "220px" }}
        >
          <DataHealthCards />
        </div>
      </div>
    </div>
  );
}