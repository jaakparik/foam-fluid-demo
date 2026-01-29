import { Pencil } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { InstagramMetricsCard } from "./InstagramMetricsCard";
import { TikTokMetricsCard } from "./TikTokMetricsCard";
import { YouTubeMetricsCard } from "./YouTubeMetricsCard";
import { SnapMetricsCard } from "./SnapMetricsCard";
import { GenderSelector } from "./GenderSelector";
import { BirthdaySelector } from "./BirthdaySelector";
import { LocationSelector } from "./LocationSelector";
import { VerticalsSelector } from "./VerticalsSelector";
import { DataHealthCards } from "./DataHealthCards";

interface Talent {
  id: number;
  name: string;
  avatarImage: string;
  location: string;
  gender: string;
  age: number;
  birthday: string;
  bio: string;
  verticals: string[];
  connected: boolean;
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

interface TalentInfoCardProps {
  talent: Talent;
  isDark?: boolean;
  onUpdateBio?: (newBio: string) => void;
  onUpdateBirthday?: (newBirthday: string) => void;
  onUpdateLocation?: (newLocation: string) => void;
  onUpdateGender?: (newGender: string) => void;
  onUpdateVerticals?: (newVerticals: string[]) => void;
}

export function TalentInfoCard({
  talent,
  isDark = false,
  onUpdateBio,
  onUpdateBirthday,
  onUpdateLocation,
  onUpdateGender,
  onUpdateVerticals,
}: TalentInfoCardProps) {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [editedBio, setEditedBio] = useState(talent.bio);
  const [isHoveringBio, setIsHoveringBio] = useState(false);
  const [showDataUpdated, setShowDataUpdated] = useState(false);
  const bioRef = useRef<HTMLTextAreaElement>(null);

  const showNotification = () => {
    setShowDataUpdated(true);
    setTimeout(() => {
      setShowDataUpdated(false);
    }, 3000);
  };

  const handleSaveBio = () => {
    setIsEditingBio(false);
    setIsHoveringBio(false);

    if (editedBio !== talent.bio) {
      showNotification();
      if (onUpdateBio) {
        onUpdateBio(editedBio);
      }
    }
  };

  const handleCancelBio = () => {
    setEditedBio(talent.bio);
    setIsEditingBio(false);
    setIsHoveringBio(false);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 255) {
      setEditedBio(value);
    }
    if (bioRef.current) {
      bioRef.current.style.height = "auto";
      bioRef.current.style.height = bioRef.current.scrollHeight + "px";
    }
  };

  const handleBioKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Escape") {
      handleCancelBio();
    } else if (e.key === "Enter" && e.metaKey) {
      handleSaveBio();
    }
  };

  const handleGenderUpdate = (newGender: string) => {
    showNotification();
    if (onUpdateGender) {
      onUpdateGender(newGender);
    }
  };

  const handleBirthdayUpdate = (newBirthday: string) => {
    showNotification();
    if (onUpdateBirthday) {
      onUpdateBirthday(newBirthday);
    }
  };

  const handleLocationUpdate = (newLocation: string) => {
    showNotification();
    if (onUpdateLocation) {
      onUpdateLocation(newLocation);
    }
  };

  const handleVerticalsUpdate = (newVerticals: string[]) => {
    showNotification();
    if (onUpdateVerticals) {
      onUpdateVerticals(newVerticals);
    }
  };

  useEffect(() => {
    if (isEditingBio && bioRef.current) {
      bioRef.current.focus();
      bioRef.current.style.height = "auto";
      bioRef.current.style.height = bioRef.current.scrollHeight + "px";
    }
  }, [isEditingBio]);

  useEffect(() => {
    setEditedBio(talent.bio);
  }, [talent.bio]);

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
              <p className="font-light text-[#15191e] text-[12px] leading-[20px] whitespace-nowrap">
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
                    strokeWidth="var(--icon-stroke-width)"
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
          <div className="flex flex-col gap-[2px] items-start justify-end relative shrink-0 w-full">
            <LocationSelector
              location={talent.location}
              onChange={handleLocationUpdate}
            />
            <BirthdaySelector
              birthday={talent.birthday}
              onChange={handleBirthdayUpdate}
            />
            <GenderSelector
              selectedGender={talent.gender}
              onChange={handleGenderUpdate}
            />
          </div>
        </div>

        {/* Second Column: Total Followers + Platforms */}
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
              verticals={talent.verticals}
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

        {/* Fourth Column: Data Health & Profile Completion Cards */}
        <div
          className="pr-0 py-0 flex-1"
          style={{ minWidth: "220px" }}
        >
          <DataHealthCards />
        </div>
      </div>
    </div>
  );
}
