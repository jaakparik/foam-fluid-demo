import svgPaths from "./svg-mo0so99mpq";

function ThemeLightFilled() {
  return (
    <div className="absolute inset-[20.47%_35.11%_66.93%_47.87%]" data-name="ThemeLightFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5460)" id="ThemeLightFilled">
          <path d={svgPaths.p2c994080} id="Vector 709" stroke="var(--stroke-0, #8B94A2)" strokeLinecap="round" strokeWidth="1.2" />
          <circle cx="8" cy="8" fill="var(--fill-0, #8B94A2)" id="Ellipse 111" r="2.5" stroke="var(--stroke-0, #8B94A2)" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_3_5460">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ThemeLight() {
  return (
    <div className="absolute inset-[20.47%_57.45%_66.93%_25.53%]" data-name="ThemeLight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5446)" id="ThemeLight">
          <path d={svgPaths.p2c994080} id="Vector 709" stroke="var(--stroke-0, #8B94A2)" strokeLinecap="round" strokeWidth="1.2" />
          <circle cx="8" cy="8" id="Ellipse 111" r="2.5" stroke="var(--stroke-0, #8B94A2)" strokeLinecap="round" strokeWidth="1.2" />
        </g>
        <defs>
          <clipPath id="clip0_3_5446">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ThemeDark() {
  return (
    <div className="absolute inset-[36.22%_57.45%_51.18%_25.53%]" data-name="ThemeDark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ThemeDark">
          <path d={svgPaths.p3ea98680} fill="var(--stroke-0, #8B94A2)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ThemeDarkFilled() {
  return (
    <div className="absolute inset-[36.22%_35.11%_51.18%_47.87%]" data-name="ThemeDarkFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ThemeDarkFilled">
          <g id="Subtract">
            <path d={svgPaths.p177e7e80} fill="var(--fill-0, #8B94A2)" />
            <path d={svgPaths.p3924f100} fill="var(--stroke-0, #8B94A2)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <ThemeLightFilled />
      <ThemeLight />
      <ThemeDark />
      <ThemeDarkFilled />
    </div>
  );
}