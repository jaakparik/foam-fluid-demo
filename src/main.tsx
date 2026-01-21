import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { RecentItemsProvider } from "./app/contexts/RecentItemsContext";

createRoot(document.getElementById("root")!).render(
  <RecentItemsProvider>
    <App />
  </RecentItemsProvider>
);
  