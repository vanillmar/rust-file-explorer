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

export default function FileExplorer({ path, onPathChange }: Readonly<FileExplorerProps>) {
  const [files, setFiles] = useState<FileItem[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list" | "details">("grid")

  useEffect(() => {
    invoke<FileItem[]>("list_directory", { path }).then(setFiles).catch(console.error)
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
      <NavigationBar goUp={goUp} />
      <Toolbar onChangeView={setViewMode} />
      <ContentContainer
        items={files}
        viewMode={viewMode}
        onPathChange={onPathChange}
        handleNavigate={handleNavigate}
      />
      <BottomBar />
    </div>
  )
}
