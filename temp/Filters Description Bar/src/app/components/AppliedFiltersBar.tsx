import svgPaths from "@/imports/svg-3b2w6rmne7";

export interface FilterValue {
  label: string;
  operator?: string;
  values: string[];
  conjunction?: "and" | "or";
}

export interface AppliedFiltersBarProps {
  resultCount: number;
  resultType?: string;
  filters: FilterValue[];
  onClear?: () => void;
}

function FilterSeparator() {
  return (
    <div className="relative shrink-0 size-[11px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 11"
      >
        <circle cx="5.5" cy="5.5" fill="#D9D9D9" r="2.5" />
      </svg>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path
          d={svgPaths.p2475df80}
          stroke="#54657D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
        <path
          d={svgPaths.p22a90d60}
          stroke="#54657D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

function ClearFiltersButton({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <button
      className="bg-[rgba(58,73,95,0.05)] flex gap-[4px] h-[32px] items-center justify-center pl-[16px] pr-[8px] py-[8px] rounded-[8px] shrink-0 hover:bg-[rgba(58,73,95,0.1)] transition-colors"
      onClick={onClick}
      aria-label="Clear filters"
    >
      <p className="font-medium leading-[20px] shrink-0 text-[#15191e] text-[12px]">
        Clear filters
      </p>
      <div className="flex items-center justify-center shrink-0">
        <div className="flex-none rotate-180">
          <CloseIcon />
        </div>
      </div>
    </button>
  );
}

export function AppliedFiltersBar({
  resultCount,
  resultType = "creators",
  filters,
  onClear,
}: AppliedFiltersBarProps) {
  return (
    <div className="bg-white flex gap-[8px] items-center py-[8px]  px-[8px] relative w-full">
      <div
        aria-hidden="true"
        className="absolute border-[rgba(58,73,95,0.1)] border-l border-r border-solid inset-0 pointer-events-none"
      />

      {/* Result count section */}
      <div className="flex items-center px-0 py-[4px] shrink-0">
        <p className="font-medium leading-[20px] text-[#54657d] text-[14px]">
          {resultCount} {resultType} whose:{" "}
        </p>
      </div>

      {/* Filters section */}
      <div className="flex gap-[2px] items-center flex-wrap">
        {filters.map((filter, filterIndex) => (
          <div
            key={filterIndex}
            className="flex gap-[2px] items-center"
          >
            {/* Filter label */}
            <div className="flex items-center px-0 py-[4px]">
              <p className="font-light leading-[20px] text-[#54657d] text-[14px]">
                {filter.label}
              </p>
            </div>

            {/* Operator */}
            {filter.operator && (
              <div className="flex items-center px-0 py-[4px]">
                <p className="font-light leading-[20px] text-[#303d4f] text-[14px]">
                  {filter.operator}
                </p>
              </div>
            )}

            {/* Values */}
            {filter.values.map((value, valueIndex) => (
              <div
                key={valueIndex}
                className="flex gap-[2px] items-center"
              >
                <div className="flex items-center px-0 py-[4px]">
                  <p className="font-light leading-[20px] text-[#155fef] text-[14px]">
                    {value}
                  </p>
                </div>
                {valueIndex < filter.values.length - 1 &&
                  filter.conjunction && (
                    <div className="flex items-center px-0 py-[4px]">
                      <p className="font-light leading-[20px] text-[#303d4f] text-[14px]">
                        {filter.conjunction}
                      </p>
                    </div>
                  )}
              </div>
            ))}

            {/* Separator between filters */}
            {filterIndex < filters.length - 1 && (
              <FilterSeparator />
            )}
          </div>
        ))}
      </div>

      {/* Clear button */}
      {onClear && (
        <div className="flex flex-col items-start pl-[16px] pr-0 py-0 shrink-0">
          <ClearFiltersButton onClick={onClear} />
        </div>
      )}
    </div>
  );
}