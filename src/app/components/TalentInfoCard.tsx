import { Talent } from "../data/talents";
import { InstagramIcon } from "./icons/InstagramIcon";
import { TikTokIcon } from "./icons/TikTokIcon";
import { YouTubeIcon } from "./icons/YouTubeIcon";
import { SnapchatIcon } from "./icons/SnapchatIcon";

interface TalentInfoCardProps {
  talent: Talent;
}

function AvatarPhoto({ src, name }: { src: string; name: string }) {
  return (
    <div
      className="overflow-clip relative rounded-[8px] shrink-0 size-[160px]"
      data-name="_avatar-photo"
    >
      <div
        className="absolute aspect-[1024/1024] left-0 right-0 top-1/2 translate-y-[-50%]"
        data-name="avatar"
      >
        <img
          alt={name}
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={src}
        />
      </div>
    </div>
  );
}

function LocationAge({ talent }: { talent: Talent }) {
  return (
    <div
      className="content-stretch flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light gap-[2px] items-start justify-end leading-[20px] relative shrink-0 text-[#54657d] text-[12px] w-full"
      data-name=".LocationAge"
    >
      <p className="css-ew64yg relative shrink-0">{talent.location}</p>
      <p className="css-ew64yg relative shrink-0">{talent.age} years old</p>
      <p className="css-ew64yg relative shrink-0">{talent.gender}</p>
    </div>
  );
}

function PlatformRow({
  platform,
  handle,
  followers,
  icon,
}: {
  platform: string;
  handle: string;
  followers: string;
  icon: JSX.Element;
}) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      {icon}
      <p className="css-4hzbpn font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] w-[122px]">
        {handle}
      </p>
      <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px]">
        {followers}
      </p>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <div
      className="bg-[#f3f5f6] content-stretch flex items-center justify-center max-w-[200px] min-w-[24px] p-[4px] relative rounded-[4px] shrink-0"
      data-name="Pill"
    >
      <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#15191e] text-[12px] text-center text-ellipsis">
        <p className="css-g0mm18 leading-[20px] overflow-hidden">{label}</p>
      </div>
    </div>
  );
}

export function TalentInfoCard({ talent }: TalentInfoCardProps) {
  return (
    <div
      className="content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] w-full"
      style={{ background: "white" }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full">
        <div className="content-stretch flex items-start pb-0 pl-[16px] pr-0 pt-[8px] relative w-full">
          {/* Left section - Avatar and basic info */}
          <div className="content-stretch flex flex-col gap-[8px] items-start pl-0 pr-[16px] py-0 relative shrink-0">
            <div
              aria-hidden="true"
              className="absolute border-[rgba(0,0,0,0.05)] border-r border-solid inset-0 pointer-events-none"
            />
            <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15191e] text-[16px]">
              <p className="css-ew64yg leading-[24px]">{talent.name}</p>
            </div>
            <AvatarPhoto src={talent.avatarImage} name={talent.name} />
            <LocationAge talent={talent} />
          </div>

          {/* Middle section - Total followers and platforms */}
          <div className="content-stretch flex flex-col items-start px-[24px] py-0 relative self-stretch shrink-0">
            <div
              aria-hidden="true"
              className="absolute border-[rgba(0,0,0,0.05)] border-r border-solid inset-0 pointer-events-none"
            />
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[10px] items-center leading-[0] relative shrink-0 text-[16px]">
                <div className="flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center relative shrink-0 text-[#8b94a2] w-[150px]">
                  <p className="css-4hzbpn leading-[24px]">Total followers</p>
                </div>
                <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#15191e]">
                  <p className="css-ew64yg leading-[24px]">{talent.followers.total}</p>
                </div>
              </div>

              <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                  <PlatformRow
                    platform="Instagram"
                    handle={talent.aliases.instagram}
                    followers={talent.followers.instagram}
                    icon={<InstagramIcon />}
                  />
                  <PlatformRow
                    platform="TikTok"
                    handle={talent.aliases.tiktok}
                    followers={talent.followers.tiktok}
                    icon={<TikTokIcon />}
                  />
                  <PlatformRow
                    platform="YouTube"
                    handle={talent.aliases.youtube}
                    followers={talent.followers.youtube}
                    icon={<YouTubeIcon />}
                  />
                  <PlatformRow
                    platform="Snapchat"
                    handle={talent.aliases.snapchat}
                    followers={talent.followers.snapchat}
                    icon={<SnapchatIcon />}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right section - Bio, verticals, managed by */}
          <div className="flex-[1_0_0] min-h-px min-w-px relative">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[24px] py-0 relative w-full">
                <p className="css-4hzbpn font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] min-w-full relative shrink-0 text-[#15191e] text-[12px] w-[min-content]">
                  {talent.bio}
                </p>
                <div className="content-center flex flex-wrap gap-[8px] items-center max-w-[256px] relative shrink-0">
                  {talent.verticals.map((vertical, index) => (
                    <Pill key={index} label={vertical} />
                  ))}
                </div>
                <div className="content-stretch flex gap-[8px] items-center leading-[20px] relative shrink-0 text-[12px] w-[272.5px]">
                  <p className="css-ew64yg font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#8b94a2]">
                    Managed by:{" "}
                  </p>
                  <div className="content-stretch flex font-['Hanken_Grotesk:Medium',sans-serif] font-medium gap-[4px] items-center relative shrink-0 text-[#54657d]">
                    <p className="css-ew64yg relative shrink-0">Brendan Nahmias, Sarah Chen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
