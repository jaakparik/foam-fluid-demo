interface Brand {
  name: string;
  logo: string;
  mentions: number;
}

interface BrandMentionsCardProps {
  brands: Brand[];
}

export function BrandMentionsCard({
  brands,
}: BrandMentionsCardProps) {
  return (
    <div className="flex flex-col gap-[8px] mt-6">
      <p
        className="sm-medium"
        style={{
          color: "#8b94a2",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "500",
        }}
      >
        Brand mentions
      </p>
      <div className="flex gap-[32px] items-start">
        {brands.map((brand, index) => (
          <div
            key={index}
            title={brand.name}
            className="relative shrink-0 size-[40px]"
            style={{ cursor: "pointer" }}
          >
            <img
              alt={brand.name}
              src={brand.logo}
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}