import { useState } from "react"
import FileViewContainer, { type FileViewContainerProps } from "./FileViewContainer"
import { Sidebar } from "./Sidebar"

export default function ContentContainer({
  items,
  viewMode,
  onPathChange,
  handleNavigate
}: Readonly<FileViewContainerProps>) {
  const [sidebarWidth, _] = useState(240)

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <div style={{ width: sidebarWidth }} className="border-r overflow-auto bg-muted">
        <Sidebar />
      </div>
      {/* Optional: Resizer bar between sidebar and content */}

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* File View Container */}
        <FileViewContainer
          items={items}
          viewMode={viewMode}
          onPathChange={onPathChange}
          handleNavigate={handleNavigate}
        />
      </div>
    </div>
  )
}
