import { useState, useEffect, useRef } from "react";
import { Pencil, Check, X, MapPin } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";

interface LocationSelectorProps {
  location: string;
  onChange: (newLocation: string) => void;
}

// Mapbox Geocoding API with placeholder token
const MAPBOX_TOKEN =
  "pk.eyJ1IjoicGFydWthcyIsImEiOiJjbWtmbnowY3YwMWxuM2NzYmNleG1jdXlpIn0.R6T3b9kqXcRghMgrNdB8pQ";
const GEOCODING_API = `https://api.mapbox.com/geocoding/v5/mapbox.places`;

interface GeocodingSuggestion {
  id: string;
  place_name: string;
  text: string;
  properties?: {
    short_code?: string;
  };
  context?: Array<{
    id: string;
    text: string;
    short_code?: string;
  }>;
}

// Helper function to format location with country codes
const formatLocationName = (suggestion: GeocodingSuggestion): string => {
  let formattedName = suggestion.place_name;

  // Country name replacements - map full names to abbreviations
  const countryReplacements: Record<string, string> = {
    'United States': 'USA',
    'United Kingdom': 'UK',
    'United Arab Emirates': 'UAE',
    'South Africa': 'SA',
    'New Zealand': 'NZ',
    'Saudi Arabia': 'SA',
  };

  // Replace country names with abbreviations
  Object.entries(countryReplacements).forEach(([fullName, abbr]) => {
    formattedName = formattedName.replace(fullName, abbr);
  });

  // Alternative: Use context to build a shorter format
  // If we have context data from Mapbox, we can use short_code
  if (suggestion.context && suggestion.context.length > 0) {
    const countryContext = suggestion.context.find(ctx => 
      ctx.id.startsWith('country.')
    );
    
    if (countryContext?.short_code) {
      // Extract country short code (e.g., "us" from "us")
      const countryCode = countryContext.short_code.toUpperCase();
      
      // Replace the full country name in place_name with the code
      if (countryContext.text) {
        formattedName = formattedName.replace(countryContext.text, countryCode);
      }
    }
  }

  return formattedName;
};

export function LocationSelector({
  location,
  onChange,
}: LocationSelectorProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(location);
  const [suggestions, setSuggestions] = useState<
    GeocodingSuggestion[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Update local state when location prop changes
  useEffect(() => {
    setInputValue(location);
  }, [location]);

  // Fetch suggestions from Mapbox Geocoding API
  const fetchSuggestions = async (query: string) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    // Note: In production, replace YOUR_MAPBOX_TOKEN_HERE with a real Mapbox token
    // For demo purposes, we'll use mock data if the token is not set
    if (MAPBOX_TOKEN === "YOUR_MAPBOX_TOKEN_HERE") {
      // Mock suggestions for demo
      const mockSuggestions = [
        {
          id: "1",
          place_name: `${query}, California, United States`,
          text: query,
        },
        {
          id: "2",
          place_name: `${query}, New York, United States`,
          text: query,
        },
        {
          id: "3",
          place_name: `${query}, Texas, United States`,
          text: query,
        },
      ];
      setSuggestions(mockSuggestions);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(
        `${GEOCODING_API}/${encodeURIComponent(query)}.json?access_token=${MAPBOX_TOKEN}&types=place,locality,neighborhood&limit=5`,
      );

      if (!response.ok) {
        throw new Error("Geocoding request failed");
      }

      const data = await response.json();
      setSuggestions(data.features || []);
    } catch (error) {
      console.error(
        "Error fetching location suggestions:",
        error,
      );
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input change with debouncing
  const handleInputChange = (value: string) => {
    setInputValue(value);
    setSelectedIndex(-1);

    // Clear existing timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set new timer for debounced API call
    debounceTimer.current = setTimeout(() => {
      fetchSuggestions(value);
    }, 300);
  };

  // Handle suggestion selection
  const handleSelectSuggestion = (
    suggestion: GeocodingSuggestion,
  ) => {
    const formattedLocation = formatLocationName(suggestion);
    setInputValue(formattedLocation);
    setSuggestions([]);
    setSelectedIndex(-1);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSelectSuggestion(suggestions[selectedIndex]);
    } else if (e.key === "Escape") {
      setSuggestions([]);
      setSelectedIndex(-1);
    }
  };

  const handleSave = () => {
    onChange(inputValue);
    setIsOpen(false);
    setSuggestions([]);
  };

  const handleCancel = () => {
    setInputValue(location);
    setSuggestions([]);
    setIsOpen(false);
  };

  const hasValue = location && location.trim() !== "";
  const displayText = hasValue ? location : "Add location";

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <div
          className="relative inline-flex items-center gap-1 cursor-pointer group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className="px-2 py-1 rounded-[4px] transition-all"
            style={{
              background: isHovering
                ? "rgba(0,0,0,0.03)"
                : "transparent",
            }}
          >
            <p className="text-sm">
              {hasValue ? (
                <span>{location}</span>
              ) : (
                <span style={{ color: "#9CA3AF" }}>Add location</span>
              )}
            </p>
          </div>
          {isHovering && (
            <div
              className="p-1 rounded-[4px] transition-opacity hover:opacity-70"
              style={{
                color: "#54657d",
              }}
            >
              <Pencil size={14} />
            </div>
          )}
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          forceMount={isOpen ? undefined : false}
          className="rounded-[8px] shadow-lg"
          style={{
            border: "1px solid var(--card-border-subtle)",
            background: "#ffffff",
            minWidth: "320px",
            maxWidth: "400px",
          }}
          side="bottom"
          sideOffset={5}
          align="start"
        >
          <div className="flex flex-col p-4 gap-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <p
                className="text-sm-medium"
                style={{ color: "var(--nav-item-text-active)" }}
              >
                Edit Location
              </p>
            </div>

            {/* Input Field */}
            <div className="relative">
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-[4px] border"
                style={{
                  border: "1px solid var(--card-border-subtle)",
                  background: "#ffffff",
                }}
              >
                <MapPin
                  size={16}
                  style={{
                    color: "var(--nav-item-text-subtle)",
                  }}
                />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) =>
                    handleInputChange(e.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Enter location..."
                  className="flex-1 text-sm outline-none"
                  style={{
                    color: "var(--nav-item-text-active)",
                    background: "transparent",
                  }}
                  autoFocus
                />
              </div>

              {/* Suggestions Dropdown */}
              {suggestions.length > 0 && (
                <div
                  className="absolute top-full left-0 right-0 mt-1 rounded-[4px] shadow-lg overflow-hidden z-50"
                  style={{
                    border:
                      "1px solid var(--card-border-subtle)",
                    background: "#ffffff",
                    maxHeight: "200px",
                    overflowY: "auto",
                  }}
                >
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={suggestion.id}
                      onClick={() =>
                        handleSelectSuggestion(suggestion)
                      }
                      className="px-3 py-2 cursor-pointer transition-colors"
                      style={{
                        background:
                          selectedIndex === index
                            ? "rgba(0,0,0,0.05)"
                            : "transparent",
                        color: "var(--nav-item-text-active)",
                      }}
                      onMouseEnter={() =>
                        setSelectedIndex(index)
                      }
                    >
                      <div className="flex items-center gap-2">
                        <MapPin
                          size={14}
                          style={{
                            color:
                              "var(--nav-item-text-subtle)",
                          }}
                        />
                        <p className="text-sm">
                          {formatLocationName(suggestion)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Loading State */}
              {isLoading && (
                <div
                  className="absolute top-full left-0 right-0 mt-1 px-3 py-2 rounded-[4px]"
                  style={{
                    border:
                      "1px solid var(--card-border-subtle)",
                    background: "#ffffff",
                    color: "var(--nav-item-text-subtle)",
                  }}
                >
                  <p className="text-sm">
                    Loading suggestions...
                  </p>
                </div>
              )}
            </div>

            {/* Helper Text */}
            <p
              className="text-xs"
              style={{ color: "var(--nav-item-text-subtle)" }}
            >
              {MAPBOX_TOKEN === "YOUR_MAPBOX_TOKEN_HERE"
                ? "Demo mode: Using mock suggestions. Add a Mapbox token for real geocoding."
                : "Start typing to search for locations"}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-2 justify-between">
              <button
                onClick={() => {
                  onChange("");
                  setIsOpen(false);
                  setSuggestions([]);
                }}
                className="px-3 py-1.5 text-sm rounded-[4px] transition-colors hover:bg-[rgba(203,0,0,0.05)]"
                style={{
                  border: "1px solid #cb0000",
                  background: "transparent",
                  color: "#cb0000",
                }}
              >
                <div className="flex items-center gap-1">
                  <X size={14} />
                  <span>Remove</span>
                </div>
              </button>
              <div className="flex gap-2">
                <button
                  onClick={handleCancel}
                  className="px-3 py-1.5 text-sm rounded-[4px] transition-colors hover:bg-[rgba(0,0,0,0.03)]"
                  style={{
                    border: "1px solid var(--card-border-subtle)",
                    background: "transparent",
                    color: "var(--nav-item-text-active)",
                  }}
                >
                  <div className="flex items-center gap-1">
                    <X size={14} />
                    <span>Cancel</span>
                  </div>
                </button>
                <button
                  onClick={handleSave}
                  className="px-3 py-1.5 text-sm rounded-[4px] transition-opacity hover:opacity-80"
                  style={{
                    background: "#155fef",
                    color: "#ffffff",
                    border: "none",
                  }}
                >
                  <div className="flex items-center gap-1">
                    <Check size={14} />
                    <span>Save</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
