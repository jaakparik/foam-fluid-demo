import { NotesCard } from "./NotesCard";

export function PersonalInfoSection() {
  return (
    <div className="mb-8">
      <h2
        className="table-item-text-primary"
        style={{
          color: "var(--table-text-primary)",
          fontSize: "18px",
          fontWeight: "500",
          marginBottom: "16px",
        }}
      >
        Personal Info
      </h2>
      <NotesCard />
    </div>
  );
}
