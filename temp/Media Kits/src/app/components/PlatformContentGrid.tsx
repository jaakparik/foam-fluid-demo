import svgPaths from "@/imports/svg-r622i5xrvt";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface ContentCardData {
  id: number;
  imageUrl: string;
  views: string;
  reach: string;
  clicks: string;
  postedDate: string;
}

const contentData: ContentCardData[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1641971215382-63f41d02c1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzY4Nzk0MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "227k",
    reach: "190k",
    clicks: "468k",
    postedDate: "12/12/24",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1635795631344-a333443cad5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY4NzYyMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "342k",
    reach: "298k",
    clicks: "512k",
    postedDate: "12/10/24",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1684568519320-8c6b14f7e65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGxhdGluZyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY4ODI5NDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "189k",
    reach: "156k",
    clicks: "394k",
    postedDate: "12/08/24",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1612802969356-391e9d36a474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3Njg3NDM3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "425k",
    reach: "367k",
    clicks: "689k",
    postedDate: "12/05/24",
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1682979358243-816a75830f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjYWZlJTIwYWVzdGhldGljfGVufDF8fHx8MTc2ODc3NzQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "156k",
    reach: "134k",
    clicks: "287k",
    postedDate: "12/03/24",
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1643875402004-22631ef914aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwdXJiYW58ZW58MXx8fHwxNzY4Nzc5NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "298k",
    reach: "245k",
    clicks: "521k",
    postedDate: "11/30/24",
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1631248621162-b87af2118f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBiZWF1dHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg4Mjk0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "378k",
    reach: "312k",
    clicks: "623k",
    postedDate: "11/28/24",
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1597434429739-2574d7e06807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBtb3VudGFpbnxlbnwxfHx8fDE3Njg3NjgzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "512k",
    reach: "445k",
    clicks: "834k",
    postedDate: "11/25/24",
  },
];

function Eye() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Eye">
          <path clipRule="evenodd" d={svgPaths.p38a8b380} fill="var(--fill-0, #8B94A2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Reach() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Reach">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2003_16061)" id="Reach">
          <path clipRule="evenodd" d={svgPaths.p1aa30580} fill="var(--fill-0, #8B94A2)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2003_16061">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Click() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Click">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Click">
          <path clipRule="evenodd" d={svgPaths.p381dd800} fill="var(--fill-0, #8B94A2)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Platforms() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Platforms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Platforms">
          <g id="Vector">
            <path d={svgPaths.p208295b0} fill="url(#paint0_linear_2003_16067)" />
            <path d={svgPaths.p208295b0} fill="url(#paint1_linear_2003_16067)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2003_16067" x1="0.625" x2="5.82692" y1="1.25" y2="11.6154">
            <stop stopColor="#D9D9D9" />
            <stop offset="0.0001" stopColor="#1200E7" />
            <stop offset="0.868122" stopColor="#ED1389" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2003_16067" x1="1.85577" x2="8.99038" y1="18.2788" y2="0.307692">
            <stop stopColor="#FC2C46" />
            <stop offset="0.0001" stopColor="#FFE16A" />
            <stop offset="0.39864" stopColor="#FC3746" />
            <stop offset="0.85431" stopColor="#FC2C46" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3f07f870} fill="var(--fill-0, #1C2128)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

interface ContentCardProps {
  data: ContentCardData;
}

function ContentCard({ data }: ContentCardProps) {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full group cursor-pointer" data-name="Content Card Metrics">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        {/* Image */}
        <div className="content-stretch flex flex-col h-[200px] items-start relative shrink-0 w-full" data-name="ImgWrapper">
          <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="_contentImg">
            <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={data.imageUrl} />
          </div>
        </div>

        {/* Info Label */}
        <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="InfoLabel">
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
            {/* Metrics */}
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Metrics">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="MetricItem">
                    <Eye />
                    <div className="css-g0mm18 flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303d4f] text-[14px] text-right">
                      <p className="css-ew64yg leading-[20px]">{data.views}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="MetricItem">
                    <Reach />
                    <div className="css-g0mm18 flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303d4f] text-[14px] text-right">
                      <p className="css-ew64yg leading-[20px]">{data.reach}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="MetricItem">
                    <Click />
                    <div className="css-g0mm18 flex flex-col font-['Founders_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303d4f] text-[14px] text-right">
                      <p className="css-ew64yg leading-[20px]">{data.clicks}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform and Date */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <Platforms />
              <div className="content-stretch flex font-['Founders_Grotesk:Regular',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] text-right">
                <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#8b94a2]">
                  <p className="css-ew64yg leading-[20px]">Posted:</p>
                </div>
                <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#15191e]">
                  <p className="css-ew64yg leading-[20px]">{data.postedDate}</p>
                </div>
              </div>
              <div className="bg-[#f3f5f6] content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
                <Icon />
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox - Shown on hover */}
        <div className="absolute content-stretch flex items-center opacity-0 group-hover:opacity-100 transition-opacity right-[12.38px] top-[12px]" data-name="_hover">
          <div className="content-stretch flex items-center relative shrink-0" data-name="checkbox">
            <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[1000px] shrink-0" data-name="hit area">
              <div className="bg-white content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="checkbox">
                <div aria-hidden="true" className="absolute border-2 border-[#3a495f] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dee2e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

export function PlatformContentGrid() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[12px] w-full">
          {contentData.map((item) => (
            <ContentCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}