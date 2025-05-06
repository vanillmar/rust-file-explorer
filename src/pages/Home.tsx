import { useEffect, useState } from "react";
import { readDir, DirEntry, BaseDirectory } from "@tauri-apps/plugin-fs";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [files, setFiles] = useState<DirEntry[]>([]);

  const loadFiles = async () => {
    try {
      const result = await readDir("/", { baseDir: BaseDirectory.AppLocalData });
      setFiles(result);
    } catch (err) {
      console.error("Failed to read directory:", err);
    }
  };

  useEffect(() => {
    loadFiles();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">File Explorer</h2>
      <div className="grid grid-cols-4 gap-4">
        {files.map((file) => (
          <Card key={file.name} className="p-4">
            {file.name}
          </Card>
        ))}
      </div>
    </div>
  );
}
