import LeftNavigation from "./components/LeftNavigationDark";
import { TopBar } from "./components/TopBar";
import { AssistPanel } from "./components/AssistPanel";
import { MediaKits } from "./pages/MediaKits";
import { MediaKitEditor } from "./pages/MediaKitEditor";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecentItemsProvider } from "./contexts/RecentItemsContext";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isAssistOpen, setIsAssistOpen] = useState(false);

  return (
    <BrowserRouter>
      <RecentItemsProvider>
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
              >
                <Routes>
                  <Route path="/" element={<MediaKits isDark={isDark} />} />
                  <Route path="/media-kits" element={<MediaKits isDark={isDark} />} />
                  <Route path="/media-kits/new" element={<MediaKitEditor isDark={isDark} />} />
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
      </RecentItemsProvider>
    </BrowserRouter>
  );
}