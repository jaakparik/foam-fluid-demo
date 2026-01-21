import { useState, useEffect } from 'react';

interface CreatorVerticalsFilterProps {
  selectedVerticals?: string[];
  onSelectionChange?: (selected: string[]) => void;
}

export function CreatorVerticalsFilter({ selectedVerticals = [], onSelectionChange }: CreatorVerticalsFilterProps = {}) {
  const [verticalSearch, setVerticalSearch] = useState('');
  const [verticalFilters, setVerticalFilters] = useState({
    advocacy: selectedVerticals.includes('advocacy'),
    art: selectedVerticals.includes('art'),
    author: selectedVerticals.includes('author'),
    beauty: selectedVerticals.includes('beauty'),
    comedy: selectedVerticals.includes('comedy'),
    creativity: selectedVerticals.includes('creativity'),
    dance: selectedVerticals.includes('dance'),
    diy: selectedVerticals.includes('diy'),
    education: selectedVerticals.includes('education'),
    entertainment: selectedVerticals.includes('entertainment'),
    family: selectedVerticals.includes('family'),
    fashion: selectedVerticals.includes('fashion'),
    finance: selectedVerticals.includes('finance'),
    fitness: selectedVerticals.includes('fitness'),
    food: selectedVerticals.includes('food'),
    gaming: selectedVerticals.includes('gaming'),
    homeDecor: selectedVerticals.includes('homeDecor'),
    lgbtq: selectedVerticals.includes('lgbtq'),
    lifestyle: selectedVerticals.includes('lifestyle'),
    mental: selectedVerticals.includes('mental'),
    health: selectedVerticals.includes('health'),
    music: selectedVerticals.includes('music'),
    pet: selectedVerticals.includes('pet'),
    sport: selectedVerticals.includes('sport'),
    tech: selectedVerticals.includes('tech'),
    travel: selectedVerticals.includes('travel'),
    wellness: selectedVerticals.includes('wellness'),
  });

  useEffect(() => {
    setVerticalFilters({
      advocacy: selectedVerticals.includes('advocacy'),
      art: selectedVerticals.includes('art'),
      author: selectedVerticals.includes('author'),
      beauty: selectedVerticals.includes('beauty'),
      comedy: selectedVerticals.includes('comedy'),
      creativity: selectedVerticals.includes('creativity'),
      dance: selectedVerticals.includes('dance'),
      diy: selectedVerticals.includes('diy'),
      education: selectedVerticals.includes('education'),
      entertainment: selectedVerticals.includes('entertainment'),
      family: selectedVerticals.includes('family'),
      fashion: selectedVerticals.includes('fashion'),
      finance: selectedVerticals.includes('finance'),
      fitness: selectedVerticals.includes('fitness'),
      food: selectedVerticals.includes('food'),
      gaming: selectedVerticals.includes('gaming'),
      homeDecor: selectedVerticals.includes('homeDecor'),
      lgbtq: selectedVerticals.includes('lgbtq'),
      lifestyle: selectedVerticals.includes('lifestyle'),
      mental: selectedVerticals.includes('mental'),
      health: selectedVerticals.includes('health'),
      music: selectedVerticals.includes('music'),
      pet: selectedVerticals.includes('pet'),
      sport: selectedVerticals.includes('sport'),
      tech: selectedVerticals.includes('tech'),
      travel: selectedVerticals.includes('travel'),
      wellness: selectedVerticals.includes('wellness'),
    });
  }, [selectedVerticals]);

  const toggleVerticalFilter = (key: keyof typeof verticalFilters) => {
    const newFilters = {
      ...verticalFilters,
      [key]: !verticalFilters[key],
    };
    setVerticalFilters(newFilters);
    
    // Notify parent of changes
    if (onSelectionChange) {
      const selected = Object.entries(newFilters)
        .filter(([_, value]) => value)
        .map(([key, _]) => key);
      onSelectionChange(selected);
    }
  };

  const verticals = [
    { key: 'advocacy', label: 'Advocacy' },
    { key: 'art', label: 'Art' },
    { key: 'author', label: 'Author' },
    { key: 'beauty', label: 'Beauty' },
    { key: 'comedy', label: 'Comedy' },
    { key: 'creativity', label: 'Creativity' },
    { key: 'dance', label: 'Dance' },
    { key: 'diy', label: 'DIY' },
    { key: 'education', label: 'Education' },
    { key: 'entertainment', label: 'Entertainment' },
    { key: 'family', label: 'Family' },
    { key: 'fashion', label: 'Fashion' },
    { key: 'finance', label: 'Finance' },
    { key: 'fitness', label: 'Fitness' },
    { key: 'food', label: 'Food' },
    { key: 'gaming', label: 'Gaming' },
    { key: 'homeDecor', label: 'Home/Decor' },
    { key: 'lgbtq', label: 'LGBTQ+' },
    { key: 'lifestyle', label: 'Lifestyle' },
    { key: 'mental', label: 'Mental' },
    { key: 'health', label: 'Health' },
    { key: 'music', label: 'Music' },
    { key: 'pet', label: 'Pet' },
    { key: 'sport', label: 'Sport' },
    { key: 'tech', label: 'Tech' },
    { key: 'travel', label: 'Travel' },
    { key: 'wellness', label: 'Wellness' },
  ] as const;

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative size-full">
      {/* Title and search input */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] h-[32px] items-center min-h-[32px] px-0 py-[8px] relative shrink-0 w-full">
          <div className="css-g0mm18 flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54657d] text-[14px]">
            <p className="css-ew64yg leading-[20px]">Creators tagged with any of these</p>
          </div>
        </div>
        <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full">
          <input
            type="text"
            value={verticalSearch}
            onChange={(e) => setVerticalSearch(e.target.value)}
            className="flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] min-h-px min-w-px relative text-[#8b94a2] text-[12px] bg-transparent border-none outline-none px-[8px] h-full w-full"
            placeholder="food, art, sport"
          />
          <div aria-hidden="true" className="absolute border border-[#c4c8cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>

      {/* Vertical pills */}
      <div className="content-start flex flex-wrap gap-[8px] items-start px-0 py-[12px] relative shrink-0 w-full">
        {verticals.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => toggleVerticalFilter(key)}
            className={`${verticalFilters[key] ? 'bg-[rgba(21,95,239,0.1)]' : 'bg-transparent'} content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0`}
          >
            <div className="css-g0mm18 flex flex-col font-['Founders_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
              <p className="css-ew64yg leading-[20px]">{label}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}