import { createContext, useContext, useState, ReactNode } from 'react';

interface MediaKit {
  id: string;
  title: string;
  thumbnail?: string;
  route: string;
}

interface MediaKitContextType {
  mediaKits: MediaKit[];
  currentMediaKitId: string | null;
  addMediaKit: (mediaKit: MediaKit) => void;
  updateMediaKit: (id: string, updates: Partial<MediaKit>) => void;
  setCurrentMediaKitId: (id: string | null) => void;
}

const MediaKitContext = createContext<MediaKitContextType | undefined>(undefined);

export function MediaKitProvider({ children }: { children: ReactNode }) {
  const [mediaKits, setMediaKits] = useState<MediaKit[]>([]);
  const [currentMediaKitId, setCurrentMediaKitId] = useState<string | null>(null);

  const addMediaKit = (mediaKit: MediaKit) => {
    setMediaKits(prev => {
      // Check if already exists
      const exists = prev.some(mk => mk.id === mediaKit.id);
      if (exists) {
        return prev;
      }
      return [mediaKit, ...prev];
    });
    setCurrentMediaKitId(mediaKit.id);
  };

  const updateMediaKit = (id: string, updates: Partial<MediaKit>) => {
    setMediaKits(prev =>
      prev.map(mk => (mk.id === id ? { ...mk, ...updates } : mk))
    );
  };

  return (
    <MediaKitContext.Provider
      value={{
        mediaKits,
        currentMediaKitId,
        addMediaKit,
        updateMediaKit,
        setCurrentMediaKitId,
      }}
    >
      {children}
    </MediaKitContext.Provider>
  );
}

export function useMediaKit() {
  const context = useContext(MediaKitContext);
  if (context === undefined) {
    throw new Error('useMediaKit must be used within a MediaKitProvider');
  }
  return context;
}
