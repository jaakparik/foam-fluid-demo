import { useState, useEffect } from "react";
import { Pencil, Check, X } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
import { calculateAge } from "@/app/data/talents";

interface BirthdaySelectorProps {
  birthday: string; // Format: "YYYY-MM-DD"
  onChange: (newBirthday: string) => void;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Generate year range (from 1940 to current year - 13 for minimum age)
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1940 - 13 + 1 }, (_, i) => currentYear - 13 - i);

export function BirthdaySelector({
  birthday,
  onChange,
}: BirthdaySelectorProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Parse the current birthday
  const parseBirthday = (bdayStr: string) => {
    if (!bdayStr || bdayStr.trim() === "") {
      // Default to current date if no birthday is set
      const today = new Date();
      return {
        day: today.getDate(),
        month: today.getMonth() + 1,
        year: today.getFullYear() - 25, // Default to 25 years old
      };
    }
    
    const date = new Date(bdayStr);
    // Check if date is valid
    if (isNaN(date.getTime())) {
      const today = new Date();
      return {
        day: today.getDate(),
        month: today.getMonth() + 1,
        year: today.getFullYear() - 25,
      };
    }
    
    return {
      day: date.getDate(),
      month: date.getMonth() + 1, // JavaScript months are 0-indexed
      year: date.getFullYear(),
    };
  };

  const { day: initialDay, month: initialMonth, year: initialYear } = parseBirthday(birthday);
  
  const [selectedDay, setSelectedDay] = useState(initialDay);
  const [selectedMonth, setSelectedMonth] = useState(initialMonth);
  const [selectedYear, setSelectedYear] = useState(initialYear);

  // Update local state when birthday prop changes
  useEffect(() => {
    const { day, month, year } = parseBirthday(birthday);
    setSelectedDay(day);
    setSelectedMonth(month);
    setSelectedYear(year);
  }, [birthday]);

  // Calculate days in month
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Adjust day if it exceeds the days in the selected month
  useEffect(() => {
    const maxDays = getDaysInMonth(selectedMonth, selectedYear);
    if (selectedDay > maxDays) {
      setSelectedDay(maxDays);
    }
  }, [selectedMonth, selectedYear]);

  const handleSave = () => {
    // Format as YYYY-MM-DD
    const monthStr = selectedMonth.toString().padStart(2, "0");
    const dayStr = selectedDay.toString().padStart(2, "0");
    const newBirthday = `${selectedYear}-${monthStr}-${dayStr}`;
    
    onChange(newBirthday);
    setIsOpen(false);
  };

  const handleCancel = () => {
    // Reset to original values
    const { day, month, year } = parseBirthday(birthday);
    setSelectedDay(day);
    setSelectedMonth(month);
    setSelectedYear(year);
    setIsOpen(false);
  };

  const age = calculateAge(birthday);
  const hasValue = birthday && age > 0;
  const displayText = hasValue ? `${age} years old` : "Add age";

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
                <span>{`${age} years old`}</span>
              ) : (
                <span style={{ color: "#9CA3AF" }}>Add age</span>
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
            minWidth: "280px",
          }}
          side="bottom"
          sideOffset={5}
          align="start"
        >
          <div className="flex flex-col p-4 gap-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <p className="text-sm-medium" style={{ color: "var(--nav-item-text-active)" }}>
                Edit Birthday
              </p>
            </div>

            {/* Dropdowns */}
            <div className="flex gap-2">
              {/* Month Dropdown */}
              <div className="flex-1">
                <label className="text-xs mb-1 block" style={{ color: "var(--nav-item-text-subtle)" }}>
                  Month
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(Number(e.target.value))}
                  className="w-full px-2 py-1.5 text-sm rounded-[4px] border cursor-pointer outline-none focus:outline-none focus:ring-0"
                  style={{
                    border: "1px solid var(--card-border-subtle)",
                    background: "#ffffff",
                    color: "var(--nav-item-text-active)",
                  }}
                >
                  {months.map((month, index) => (
                    <option key={month} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* Day Dropdown */}
              <div style={{ width: "80px" }}>
                <label className="text-xs mb-1 block" style={{ color: "var(--nav-item-text-subtle)" }}>
                  Day
                </label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(Number(e.target.value))}
                  className="w-full px-2 py-1.5 text-sm rounded-[4px] border cursor-pointer outline-none focus:outline-none focus:ring-0"
                  style={{
                    border: "1px solid var(--card-border-subtle)",
                    background: "#ffffff",
                    color: "var(--nav-item-text-active)",
                  }}
                >
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Dropdown */}
              <div style={{ width: "90px" }}>
                <label className="text-xs mb-1 block" style={{ color: "var(--nav-item-text-subtle)" }}>
                  Year
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(Number(e.target.value))}
                  className="w-full px-2 py-1.5 text-sm rounded-[4px] border cursor-pointer outline-none focus:outline-none focus:ring-0"
                  style={{
                    border: "1px solid var(--card-border-subtle)",
                    background: "#ffffff",
                    color: "var(--nav-item-text-active)",
                  }}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 justify-between">
              <button
                onClick={() => {
                  onChange("");
                  setIsOpen(false);
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
