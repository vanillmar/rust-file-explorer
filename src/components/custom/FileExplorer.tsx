import { useEffect, useState } from "react"
import { invoke } from "@tauri-apps/api/core"
import NavigationBar from "./NavigationBar"
import { Toolbar } from "./Toolbar"
import ContentContainer from "./ContentContainer"
import { BottomBar } from "./ButtomBar"
import { type FileItem } from "@/components/custom/FileViewContainer"
import { toast } from "sonner"

interface FileExplorerProps {
  path: string
  onPathChange: (newPath: string) => void
}

export default function FileExplorer({ path, onPathChange }: Readonly<FileExplorerProps>) {
  const [files, setFiles] = useState<FileItem[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list" | "details">("grid")

  useEffect(() => {
    invoke<FileItem[]>("list_directory", { path })
      .then(setFiles)
      .catch(error => {
        toast("An error occurred while listing the directory", {
          description: error.message,
          action: {
            label: "Retry",
            onClick: () => {
              invoke<FileItem[]>("list_directory", { path })
                .then(setFiles)
                .catch(error => {
                  toast.error("Failed to list directory", {
                    description: error.message
                  })
                })
            }
          }
        })
        setFiles([])
      })
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
    <div className="flex flex-col">
      <NavigationBar path={path} onPathChange={onPathChange} goUp={goUp} />
      <Toolbar onChangeView={setViewMode} />
      <ContentContainer
        items={files}
        viewMode={viewMode}
        onPathChange={onPathChange}
        handleNavigate={handleNavigate}
      />
      <BottomBar path={path} onPathChange={onPathChange} />
    </div>
  )
}
