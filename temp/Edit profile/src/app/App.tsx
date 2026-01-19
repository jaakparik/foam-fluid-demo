import LeftNavigation from "./components/LeftNavigationDark";
import { TopBar } from "./components/TopBar";
import { TalentRecord } from "./pages/TalentRecord";
import { TalentContent } from "./pages/TalentContent";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <BrowserRouter>
      <div className={isDark ? "dark size-full" : "size-full"}>
        <div className="size-full flex">
          {/* Left Navigation - Fixed width */}
          <div className="w-[240px] h-screen overflow-y-auto flex-shrink-0">
            <LeftNavigation onThemeChange={setIsDark} />
          </div>

          {/* Main Content Area - Flexible */}
          <div
            className="flex-1 flex flex-col h-screen min-w-0"
            style={{ background: "var(--nav-sidepanel-bg)" }}
          >
            <TopBar isDark={isDark} />
            <div
              className="flex-1 overflow-y-auto rounded-tl-[8px] rounded-tr-[8px]"
              style={{ background: "var(--page-background)" }}
            >
              <Routes>
                <Route path="/" element={<TalentRecord isDark={isDark} />} />
                <Route path="/talent/:id" element={<TalentRecord isDark={isDark} />} />
                <Route path="/talent/:id/content" element={<TalentContent isDark={isDark} />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;