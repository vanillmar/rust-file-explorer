import FolderTree from "./FolderTree";

const mockFolderData = [
  {
    name: "Documents",
    children: [
      { name: "Reports", children: [{ name: "2024" }, { name: "2025" }] },
      { name: "Invoices" },
    ],
  },
  {
    name: "Pictures",
    children: [{ name: "Vacations" }, { name: "Family" }],
  },
  {
    name: "Downloads",
  },
];
export function Sidebar() {
  return (
      <div className="h-full overflow-auto bg-background border-r text-sm">
        <div className="p-2 font-semibold text-muted-foreground">
          Folders
        </div>
        <FolderTree data={mockFolderData} />
      </div>
  );
}
