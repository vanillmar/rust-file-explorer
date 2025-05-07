import { useState } from "react"
import "./App.css"
import { BottomBar } from "./components/custom/ButtomBar"
import NavigationBar from "./components/custom/NavigationBar"
import { Toolbar } from "./components/custom/Toolbar"
import { type FileItem } from "./components/custom/FileViewContainer"
import ContentContainer from "./components/custom/ContentContainer"

const mockItems: FileItem[] = [
  { name: "Documents", type: "folder" },
  { name: "Project.pdf", type: "file", size: "2 MB", modified: "2025-05-01" },
  { name: "Photos", type: "folder" },
  { name: "Resume.docx", type: "file", size: "250 KB", modified: "2025-04-20" }
]

function App() {
  const [viewMode, _] = useState<"grid" | "list" | "details">("grid")

  return (
    <div className="flex flex-col h-screen">
      <NavigationBar />
      <Toolbar />
      <ContentContainer items={mockItems} viewMode={viewMode} />
      <BottomBar />
    </div>
  )
}

export default App
