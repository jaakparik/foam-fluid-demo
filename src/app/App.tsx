import LeftNavigation from "./components/LeftNavigationDark";
import { TopBar } from "./components/TopBar";
import { AssistPanel } from "./components/AssistPanel";
import { StickyTopMenu } from "./components/StickyTopMenu";
import { TalentDirectory } from "./pages/TalentDirectory";
import { MediaKits } from "./pages/MediaKits";
import { MediaKitEditor } from "./pages/MediaKitEditor";
import { TalentRecord } from "./pages/TalentRecord";
import { ContentSearchResults } from "./pages/ContentSearchResults";
import { NewMediaKit } from "./pages/NewMediaKit";
import { PublicMediaKit } from "./pages/PublicMediaKit";
import { MediaKitProvider } from "./contexts/MediaKitContext";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isAssistOpen, setIsAssistOpen] = useState(false);

  return (
    <BrowserRouter>
      <MediaKitProvider>
        <Routes>
          {/* Public route without layout */}
          <Route path="/public-mediakit" element={<PublicMediaKit />} />

          {/* All other routes with layout */}
          <Route
            path="*"
            element={
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
                  <TopBar
                    isDark={isDark}
                    onAskAssistClick={() => setIsAssistOpen(true)}
                    isAssistOpen={isAssistOpen}
                  />
                  <div
                    className="flex-1 overflow-y-auto rounded-tl-[8px] rounded-tr-[8px]"
                    style={{ background: "var(--page-background)" }}
                    data-scroll-container="main"
                  >
                    <StickyTopMenu isDark={isDark} />
                    <Routes>
                      <Route path="/" element={<TalentRecord isDark={isDark} />} />
                      <Route path="/directory" element={<TalentDirectory isDark={isDark} />} />
                      <Route path="/talent/:id" element={<TalentRecord isDark={isDark} />} />
                      <Route path="/media-kits" element={<MediaKits isDark={isDark} />} />
                      <Route path="/media-kits/new" element={<MediaKitEditor isDark={isDark} />} />
                      <Route path="/media-kits/create" element={<NewMediaKit isDark={isDark} />} />
                      <Route path="/media-kits/edit/:id" element={<MediaKitEditor isDark={isDark} />} />
                      <Route path="/content/nike" element={<ContentSearchResults isDark={isDark} />} />
                    </Routes>
                  </div>
                </div>

                {/* Assist Panel - Conditional width */}
                <AssistPanel
                  isOpen={isAssistOpen}
                  onClose={() => setIsAssistOpen(false)}
                  isDark={isDark}
                />
              </div>
            </div>
          }
        />
      </Routes>
      </MediaKitProvider>
    </BrowserRouter>
  );
}