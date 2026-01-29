import { motion, AnimatePresence } from "motion/react";
import { RecentChatsIcon } from "./icons/RecentChatsIcon";
import { NewChatIcon } from "./icons/NewChatIcon";
import { FullscreenIcon } from "./icons/FullscreenIcon";
import { MagicIcon } from "./icons/MagicIcon";
import { TalentIcon } from "./icons/TalentIcon";
import { ArrowUpIcon } from "./icons/ArrowUpIcon";
import { AskIcon } from "./icons/AskIcon";
import { useState, useRef, useEffect } from "react";
import { TalentPicker } from "./TalentPicker";
import { MentionPill } from "./MentionPill";
import {
  talents,
  Talent,
  getRandomTalents,
} from "../data/talents";

interface AssistPanelProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

interface SelectedMention {
  id: string;
  talent: Talent;
}

export function AssistPanel({
  isOpen,
  onClose,
  isDark,
}: AssistPanelProps) {
  const [hoveredButton, setHoveredButton] = useState<
    string | null
  >(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedMentions, setSelectedMentions] = useState<
    SelectedMention[]
  >([]);
  const [showTalentPicker, setShowTalentPicker] =
    useState(false);
  const [filteredTalents, setFilteredTalents] = useState<
    Talent[]
  >([]);
  const [isLoadingTalents, setIsLoadingTalents] = useState(false);
  const [mentionQuery, setMentionQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const loadingTimeoutRef = useRef<number | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    setInputValue(value);

    // Check if the input starts with @ for mention
    if (value.startsWith("@")) {
      const query = value.substring(1).toLowerCase();
      setMentionQuery(query);

      // Filter talents by name or handle starting with the query
      let matchingTalents: Talent[];

      if (query === "") {
        // Just typed @, show 5 random talents
        matchingTalents = getRandomTalents(5);
      } else {
        // Filter by first letter of name or handle
        matchingTalents = talents
          .filter((talent) => {
            const nameMatch = talent.name
              .toLowerCase()
              .startsWith(query);
            const handleMatch = talent.aliases.instagram
              .toLowerCase()
              .replace("@", "")
              .startsWith(query);
            return nameMatch || handleMatch;
          })
          .slice(0, 5); // Limit to 5 results
      }

      if (matchingTalents.length > 0) {
        // Clear any existing timeout
        if (loadingTimeoutRef.current) {
          clearTimeout(loadingTimeoutRef.current);
        }

        // Show skeleton loading state immediately
        setIsLoadingTalents(true);
        setShowTalentPicker(true);
        setHighlightedIndex(0);

        // After 1.5 seconds, show actual talents
        loadingTimeoutRef.current = window.setTimeout(() => {
          setFilteredTalents(matchingTalents);
          setIsLoadingTalents(false);
        }, 1500);
      } else {
        setShowTalentPicker(false);
        setIsLoadingTalents(false);
        if (loadingTimeoutRef.current) {
          clearTimeout(loadingTimeoutRef.current);
        }
      }
    } else {
      setShowTalentPicker(false);
      setMentionQuery("");
      setIsLoadingTalents(false);
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    }
  };

  const handleTalentSelect = (talent: Talent) => {
    // Add the mention to the selected mentions list
    setSelectedMentions((prev) => [
      ...prev,
      { id: `${talent.id}-${Date.now()}`, talent },
    ]);

    // Clear the input
    setInputValue("");
    setShowTalentPicker(false);
    setMentionQuery("");

    // Focus back on textarea
    requestAnimationFrame(() => {
      textareaRef.current?.focus();
    });
  };

  const handleRemoveMention = (id: string) => {
    setSelectedMentions((prev) =>
      prev.filter((m) => m.id !== id),
    );
    textareaRef.current?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    // If backspace is pressed and input is empty, remove the last mention
    if (
      e.key === "Backspace" &&
      inputValue === "" &&
      selectedMentions.length > 0
    ) {
      setSelectedMentions((prev) => prev.slice(0, -1));
    }

    // Handle arrow keys for talent picker navigation
    if (showTalentPicker) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((prev) =>
          Math.min(prev + 1, filteredTalents.length - 1),
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredTalents.length > 0) {
          handleTalentSelect(filteredTalents[highlightedIndex]);
        }
      }
    }
  };

  const hasContent = selectedMentions.length > 0 || inputValue;

  return (
    <motion.div
      initial={false}
      animate={{ width: isOpen ? 320 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen overflow-hidden flex-shrink-0"
      style={{
        background: "var(--assist-panel-bg)",
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full flex flex-col w-[320px]"
          >
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-[8px] px-0 py-[12px]">
              {/* Ask Button on the left */}
              <button
                className="size-[32px] rounded-[8px] flex items-center justify-center ml-[10px]"
                style={{
                  background: "var(--assist-toolbar-button-bg)",
                }}
                onClick={onClose}
              >
                <AskIcon className="size-[20px] text-white" />
              </button>

              {/* Right side buttons */}
              <div className="flex gap-[8px] mr-[10px]">
                <button
                  className="size-[32px] rounded-full flex items-center justify-center transition-colors"
                  style={{
                    background:
                      hoveredButton === "recent"
                        ? "var(--assist-toolbar-icon-bg-hover)"
                        : "transparent",
                    color: "var(--assist-toolbar-icon-color)",
                  }}
                  onMouseEnter={() =>
                    setHoveredButton("recent")
                  }
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <RecentChatsIcon className="size-[20px]" />
                </button>
                <button
                  className="size-[32px] rounded-full flex items-center justify-center transition-colors"
                  style={{
                    background:
                      hoveredButton === "new"
                        ? "var(--assist-toolbar-icon-bg-hover)"
                        : "transparent",
                    color: "var(--assist-toolbar-icon-color)",
                  }}
                  onMouseEnter={() => setHoveredButton("new")}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <NewChatIcon className="size-[20px]" />
                </button>
                <button
                  className="size-[32px] rounded-full flex items-center justify-center transition-colors"
                  style={{
                    background:
                      hoveredButton === "fullscreen"
                        ? "var(--assist-toolbar-icon-bg-hover)"
                        : "transparent",
                    color: "var(--assist-toolbar-icon-color)",
                  }}
                  onMouseEnter={() =>
                    setHoveredButton("fullscreen")
                  }
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <FullscreenIcon className="size-[20px]" />
                </button>
                <button
                  className="size-[32px] rounded-full flex items-center justify-center transition-colors"
                  style={{
                    background:
                      hoveredButton === "close"
                        ? "var(--assist-toolbar-icon-bg-hover)"
                        : "transparent",
                    color: "var(--assist-toolbar-icon-color)",
                  }}
                  onClick={onClose}
                  onMouseEnter={() => setHoveredButton("close")}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M15 5L5 15M5 5L15 15"
                      stroke="currentColor"
                      strokeWidth="var(--icon-stroke-width)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col gap-[8px] overflow-y-auto p-[10px] pt-0 relative">
              {/* Talent Picker Dropdown - floats above input area */}
              {showTalentPicker && (
                <div
                  className="absolute left-[10px] right-[10px] z-50"
                  style={{
                    bottom: inputContainerRef.current
                      ? `calc(${inputContainerRef.current.offsetHeight}px + 300px)`
                      : "140px",
                  }}
                >
                  <TalentPicker
                    talents={filteredTalents}
                    onSelect={handleTalentSelect}
                    isDark={isDark}
                    position={{ top: 0, left: 0 }}
                    highlightedIndex={highlightedIndex}
                    isLoadingTalents={isLoadingTalents}
                  />
                </div>
              )}

              {/* Chat Area */}
              <div className="flex-1 flex flex-col items-center justify-center gap-[12px] rounded-[12px] overflow-clip">
                {/* Title and Subtitle */}
                <div className="flex flex-col gap-[8px] items-center px-0 py-[16px]">
                  <h1
                    className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[32px] leading-[40px]"
                    style={{
                      color: "var(--assist-heading-color)",
                    }}
                  >
                    Hi John!
                  </h1>
                  <p
                    className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px] text-center"
                    style={{
                      color: "var(--assist-subheading-color)",
                    }}
                  >
                    Ask me anything about your talent roster,
                    data insights, or how to use Foam's
                    features.
                  </p>
                </div>

                {/* Suggestion Buttons */}
                <div className="flex flex-col gap-[12px] w-full px-[12px]">
                  <button
                    className="w-full rounded-[8px] p-[12px] transition-colors border border-solid"
                    style={{
                      background:
                        hoveredButton === "suggestion1"
                          ? "var(--assist-suggestion-bg-hover)"
                          : "var(--assist-suggestion-bg-default)",
                      borderColor:
                        "var(--assist-suggestion-border)",
                      color: "var(--assist-suggestion-text)",
                    }}
                    onMouseEnter={() =>
                      setHoveredButton("suggestion1")
                    }
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-center">
                      Highest ranking talent this week
                    </p>
                  </button>
                  <button
                    className="w-full rounded-[8px] p-[12px] transition-colors border border-solid"
                    style={{
                      background:
                        hoveredButton === "suggestion2"
                          ? "var(--assist-suggestion-bg-hover)"
                          : "var(--assist-suggestion-bg-default)",
                      borderColor:
                        "var(--assist-suggestion-border)",
                      color: "var(--assist-suggestion-text)",
                    }}
                    onMouseEnter={() =>
                      setHoveredButton("suggestion2")
                    }
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-center">
                      Which profiles need data updates?
                    </p>
                  </button>
                  <button
                    className="w-full rounded-[8px] p-[12px] transition-colors border border-solid"
                    style={{
                      background:
                        hoveredButton === "suggestion3"
                          ? "var(--assist-suggestion-bg-hover)"
                          : "var(--assist-suggestion-bg-default)",
                      borderColor:
                        "var(--assist-suggestion-border)",
                      color: "var(--assist-suggestion-text)",
                    }}
                    onMouseEnter={() =>
                      setHoveredButton("suggestion3")
                    }
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-center">
                      How do I create a media kit?
                    </p>
                  </button>
                </div>
              </div>

              {/* Input Area */}
              <div
                ref={inputContainerRef}
                className="rounded-[12px] p-[8px] border border-solid flex flex-col gap-[12px] relative"
                style={{
                  background: "var(--assist-input-bg)",
                  borderColor: "var(--assist-input-border)",
                  position: "relative",
                }}
              >
                {/* Pills and Input Container */}
                <div className="flex flex-col gap-[8px] w-full">
                  {/* Selected Mention Pills */}
                  {selectedMentions.length > 0 && (
                    <div className="flex flex-wrap gap-[4px]">
                      {selectedMentions.map((mention) => (
                        <MentionPill
                          key={mention.id}
                          name={mention.talent.name}
                          avatarUrl={mention.talent.avatarImage}
                          onRemove={() =>
                            handleRemoveMention(mention.id)
                          }
                          isDark={isDark}
                        />
                      ))}
                    </div>
                  )}

                  {/* Input field with send button */}
                  <div className="flex items-end gap-[8px] w-full">
                    <textarea
                      value={inputValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder={
                        selectedMentions.length > 0
                          ? ""
                          : "@mention a creator"
                      }
                      className="flex-1 p-[8px] resize-none outline-none font-['Founders_Grotesk:Regular',sans-serif] text-[14px] leading-[20px]"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "var(--assist-input-text)",
                        minHeight: "36px",
                        maxHeight: "200px",
                      }}
                      rows={1}
                      onInput={(e) => {
                        const target =
                          e.target as HTMLTextAreaElement;
                        target.style.height = "36px";
                        target.style.height =
                          target.scrollHeight + "px";
                      }}
                      ref={textareaRef}
                      onBlur={() => {
                        // Delay to allow click events on talent picker
                        setTimeout(
                          () => setShowTalentPicker(false),
                          200,
                        );
                      }}
                    />
                    <button
                      className="size-[32px] rounded-full flex items-center justify-center flex-shrink-0 transition-opacity"
                      style={{
                        background: "var(--assist-button-bg)",
                        opacity: hasContent ? 1 : 0.5,
                      }}
                      disabled={!hasContent}
                    >
                      <ArrowUpIcon className="size-[16px] text-white" />
                    </button>
                  </div>
                </div>

                {/* Skills and Talent buttons */}
                <div className="flex gap-[8px] w-full">
                  <button
                    className="flex gap-[4px] items-center justify-center px-[12px] py-[6px] rounded-[8px] transition-colors"
                    style={{
                      background:
                        hoveredButton === "skills"
                          ? "var(--assist-action-bg-hover)"
                          : "transparent",
                      color: "var(--assist-action-text)",
                    }}
                    onMouseEnter={() =>
                      setHoveredButton("skills")
                    }
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <MagicIcon className="size-[20px]" />

                    <p
                      className="nav-text-primary basis-0 grow min-h-px min-w-px relative shrink-0 text-left"
                      style={{
                        color: "var(--nav-item-text-default)",
                      }}
                    >
                      Skills
                    </p>
                  </button>
                  <button
                    className="flex gap-[4px] items-center justify-center px-[12px] py-[6px] rounded-[8px] transition-colors"
                    style={{
                      background:
                        hoveredButton === "talent"
                          ? "var(--assist-action-bg-hover)"
                          : "transparent",
                      color: "var(--assist-action-text)",
                    }}
                    onMouseEnter={() =>
                      setHoveredButton("talent")
                    }
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <TalentIcon className="size-[20px]" />
                    <p
                      className="nav-text-primary basis-0 grow min-h-px min-w-px relative shrink-0 text-left"
                      style={{
                        color: "var(--nav-item-text-default)",
                      }}
                    >
                      Talent
                    </p>
                  </button>
                </div>
              </div>

              {/* Footer Text */}
              <p
                className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]"
                style={{
                  color: "var(--assist-footer-text)",
                }}
              >
                Foam AI can make mistakes. Check important info.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}