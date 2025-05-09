import { useEffect, useState } from "react"
import { invoke } from "@tauri-apps/api/core"
import NavigationBar from "./NavigationBar"
import { Toolbar } from "./Toolbar"
import ContentContainer from "./ContentContainer"
import { BottomBar } from "./ButtomBar"
import { type FileItem } from "@/components/custom/FileViewContainer"


interface FileExplorerProps {
  path: string
  onPathChange: (newPath: string) => void
}

const mockItems: FileItem[] = [
  { name: "Documents", type: "folder" },
  { name: "Project.pdf", type: "file", size: "2 MB", modified: "2025-05-01" },
  { name: "Photos", type: "folder" },
  { name: "Resume.docx", type: "file", size: "250 KB", modified: "2025-04-20" }
]

export default function FileExplorer({ path, onPathChange }: FileExplorerProps) {
  const [files, setFiles] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list" | "details">("grid")

  useEffect(() => {
    invoke<string[]>("list_directory", { path }).then(setFiles).catch(console.error)
  }, [path])

  const goUp = () => {
    const parentPath = path.split("/").slice(0, -1).join("/") || "/"
    onPathChange(parentPath)
  }

  const handleNavigate = (name: string) => {
    const newPath = path.endsWith("/") ? `${path}${name}` : `${path}/${name}`
    onPathChange(newPath)
  }

  return (
    <div className="flex flex-col h-screen">
          <NavigationBar />
          <Toolbar onChangeView={setViewMode} />
          <ContentContainer items={mockItems} viewMode={viewMode} />
          <BottomBar />
    </div>
  )
}
