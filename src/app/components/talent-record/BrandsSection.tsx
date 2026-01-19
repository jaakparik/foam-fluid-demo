import { brandLogos } from "@/data/brands";

interface BrandsSectionProps {
  isDark?: boolean;
}

export function BrandsSection({
  isDark = false,
}: BrandsSectionProps) {
  return (
    <div className="mb-4 px-2">
      <div
        className="relative rounded-[8px]"
        style={{
          border: "1px solid var(--card-border-subtle)",
        }}
      >
        <div className="flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          {/* Header */}
          <div className="flex items-center relative shrink-0 w-full">
            <p className="font-light text-[#54657d] text-[16px] leading-[24px] whitespace-nowrap">
              Brand experience
            </p>
          </div>

          {/* Brand Logos */}
          <div className="flex gap-[32px] items-start relative shrink-0">
            {[
              brandLogos.find((b) => b.name === "Pepsi"),
              brandLogos.find((b) => b.name === "Starbucks"),
              brandLogos.find(
                (b) => b.name === "Procter & Gamble",
              ),
              brandLogos.find((b) => b.name === "Lyft"),
            ].map(
              (brand, index) =>
                brand && (
                  <div
                    key={index}
                    title={brand.name}
                    className="relative shrink-0 size-[40px]"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      alt={brand.name}
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                      src={brand.logo}
                    />
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
