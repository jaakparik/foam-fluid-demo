import { useState } from "react";
import SelectionToast from "@/app/components/SelectionToast";

interface Item {
  id: number;
  name: string;
  selected: boolean;
}

export default function App() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Mountain landscape photo", selected: false },
    { id: 2, name: "City architecture shot", selected: false },
    { id: 3, name: "Beach sunset image", selected: false },
    { id: 4, name: "Forest trail picture", selected: false },
    { id: 5, name: "Desert dunes photo", selected: false },
    { id: 6, name: "Ocean waves image", selected: false },
  ]);

  const selectedCount = items.filter(item => item.selected).length;

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const selectAll = () => {
    setItems(items.map(item => ({ ...item, selected: true })));
  };

  const deselectAll = () => {
    setItems(items.map(item => ({ ...item, selected: false })));
  };

  const handleShare = () => {
    alert(`Sharing ${selectedCount} item(s)`);
  };

  const handleAddTo = () => {
    alert(`Adding ${selectedCount} item(s) to collection`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8 text-center">Selection Toast Demo</h1>
        
        {/* Grid of selectable items */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-6 rounded-lg border-2 transition-all ${
                item.selected 
                  ? 'border-blue-500 bg-blue-50 shadow-lg' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`size-5 rounded border-2 flex items-center justify-center ${
                  item.selected 
                    ? 'border-blue-500 bg-blue-500' 
                    : 'border-gray-300'
                }`}>
                  {item.selected && (
                    <svg className="size-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`text-sm ${item.selected ? 'text-blue-600' : 'text-gray-500'}`}>
                  #{item.id}
                </span>
              </div>
              <p className="text-sm text-gray-700 text-left">{item.name}</p>
            </button>
          ))}
        </div>

        {/* Selection Toast - appears when items are selected */}
        {selectedCount > 0 && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-in slide-in-from-bottom-4 fade-in duration-300">
            <SelectionToast
              selectedCount={selectedCount}
              totalCount={items.length}
              onSelectAll={selectAll}
              onShare={handleShare}
              onAddTo={handleAddTo}
              onClose={deselectAll}
            />
          </div>
        )}
      </div>
    </div>
  );
}
