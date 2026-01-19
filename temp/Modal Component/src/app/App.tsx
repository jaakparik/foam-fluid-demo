import { useState } from "react";
import MediaKitModal from "@/app/components/media-kit-modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = (selectedKits: string[]) => {
    console.log("Selected media kits:", selectedKits);
  };

  return (
    <div className="size-full flex items-center justify-center bg-[#f9fafb]">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#1c2128] text-white px-6 py-3 rounded-lg hover:bg-[#2a3039] transition-colors font-['Hanken_Grotesk:Medium',sans-serif] font-medium"
      >
        Open Media Kit Modal
      </button>
      <MediaKitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNext={handleNext}
      />
    </div>
  );
}