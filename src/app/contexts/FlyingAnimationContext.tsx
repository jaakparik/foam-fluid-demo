import { createContext, useContext, useState, useRef, ReactNode, RefObject } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";

interface FlyingItem {
  id: string;
  imageUrl?: string;
  videoUrl?: string;
  sourceX: number;
  sourceY: number;
  sourceWidth: number;
  sourceHeight: number;
}

interface FlyingAnimationContextType {
  // Ref to attach to the "Save for later" nav button
  saveForLaterRef: RefObject<HTMLDivElement>;
  // Trigger flying animation
  triggerFlyAnimation: (items: FlyingItem[]) => void;
  // Register a card element for getting its position
  getCardPosition: (element: HTMLElement) => { x: number; y: number; width: number; height: number };
}

const FlyingAnimationContext = createContext<FlyingAnimationContextType | undefined>(undefined);

interface FlyingThumbnailProps {
  item: FlyingItem;
  targetX: number;
  targetY: number;
  onComplete: () => void;
  delay: number;
}

function FlyingThumbnail({ item, targetX, targetY, onComplete, delay }: FlyingThumbnailProps) {
  return (
    <motion.div
      initial={{
        position: "fixed",
        left: item.sourceX,
        top: item.sourceY,
        width: item.sourceWidth,
        height: item.sourceHeight,
        opacity: 1,
        scale: 1,
        zIndex: 9999,
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
      animate={{
        left: targetX,
        top: targetY,
        width: 32,
        height: 32,
        opacity: 0,
        scale: 0.5,
      }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      onAnimationComplete={onComplete}
      style={{
        position: "fixed",
        pointerEvents: "none",
      }}
    >
      {item.videoUrl ? (
        <video
          src={item.videoUrl}
          className="w-full h-full object-cover"
          muted
          playsInline
        />
      ) : item.imageUrl ? (
        <img
          src={item.imageUrl}
          alt=""
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-400" />
      )}
    </motion.div>
  );
}

export function FlyingAnimationProvider({ children }: { children: ReactNode }) {
  const saveForLaterRef = useRef<HTMLDivElement>(null);
  const [flyingItems, setFlyingItems] = useState<FlyingItem[]>([]);

  const getCardPosition = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    };
  };

  const triggerFlyAnimation = (items: FlyingItem[]) => {
    setFlyingItems(items);
  };

  const handleAnimationComplete = (id: string) => {
    setFlyingItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Get target position (Save for later button)
  const getTargetPosition = () => {
    if (saveForLaterRef.current) {
      const rect = saveForLaterRef.current.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - 16, // Center the 32px thumbnail
        y: rect.top + rect.height / 2 - 16,
      };
    }
    // Fallback position (left side of screen)
    return { x: 120, y: 400 };
  };

  const target = getTargetPosition();

  return (
    <FlyingAnimationContext.Provider
      value={{
        saveForLaterRef,
        triggerFlyAnimation,
        getCardPosition,
      }}
    >
      {children}
      {/* Render flying thumbnails in a portal */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {flyingItems.map((item, index) => (
              <FlyingThumbnail
                key={item.id}
                item={item}
                targetX={target.x}
                targetY={target.y}
                delay={index * 0.05} // Stagger the animations
                onComplete={() => handleAnimationComplete(item.id)}
              />
            ))}
          </AnimatePresence>,
          document.body
        )}
    </FlyingAnimationContext.Provider>
  );
}

export function useFlyingAnimation() {
  const context = useContext(FlyingAnimationContext);
  if (context === undefined) {
    throw new Error("useFlyingAnimation must be used within a FlyingAnimationProvider");
  }
  return context;
}
