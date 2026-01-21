import { useState } from "react";
import { AppliedFiltersBar } from "@/app/components/AppliedFiltersBar";

export default function App() {
  const [showFilters, setShowFilters] = useState(true);

  const filterData = [
    {
      label: "Gender",
      operator: "is",
      values: ["Female"],
    },
    {
      label: "Age",
      operator: "is",
      values: ["min. 21"],
    },
    {
      label: "Verticals",
      operator: "is",
      values: ["Beauty", "Travel"],
      conjunction: "and" as const,
    },
  ];

  return (
    <div className="size-full flex flex-col items-center justify-start bg-[#f5f6f7]">
      {showFilters && (
        <div className="w-full">
          <AppliedFiltersBar
            resultCount={934}
            resultType="creators"
            filters={filterData}
            onClear={() => setShowFilters(false)}
          />
        </div>
      )}
      
      <div className="flex-1 flex items-center justify-center p-8">
        {!showFilters ? (
          <button
            onClick={() => setShowFilters(true)}
            className="px-6 py-3 bg-[#155fef] text-white rounded-lg hover:bg-[#0d4ec4] transition-colors"
          >
            Show Filters
          </button>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#303d4f] mb-4">
              Applied Filters Example
            </h2>
            <p className="text-[#54657d]">
              Click the close button on the filter bar to clear filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}