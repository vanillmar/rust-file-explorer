import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  ClipboardPenLine as Paste,
  Copy,
  LayoutGrid,
  List,
  MoreVertical,
  Pencil,
  Settings,
  Trash,
  FolderPlus
} from "lucide-react"

interface ToolbarProps {
  onChangeView: (view: "grid" | "list" | "details") => void
}

export function Toolbar({ onChangeView }: ToolbarProps) {
  const [currentView, setCurrentView] = useState<"grid" | "list" | "details">("grid")

  const handleViewChange = (view: "grid" | "list" | "details") => {
    setCurrentView(view)
    onChangeView(view)
  }

  return (
    <div className="flex items-center gap-2 border-b px-4 py-2">
      <Button variant="ghost" size="sm">
        <FolderPlus className="mr-2 h-4 w-4" />
        New Folder
      </Button>

      {/**Action Buttoms */}
      <div className="flex gap-2">
        <Button variant="ghost" size="sm">
          <Copy className="w-4 h-4 mr-1" />
        </Button>
        <Button variant="ghost" size="sm">
          <Paste className="w-4 h-4 mr-1" />
        </Button>
        <Button variant="ghost" size="sm">
          <Pencil className="w-4 h-4 mr-1" />
        </Button>
        <Button variant="ghost" size="sm">
          <Trash className="w-4 h-4 mr-1" />
        </Button>
      </div>

      {/* View Mode and Settings */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            {currentView === "grid" && <LayoutGrid className="w-4 h-4 mr-1" />}
            {currentView === "list" && <List className="w-4 h-4 mr-1" />}
            {currentView === "details" && <MoreVertical className="w-4 h-4 mr-1" />}
            View
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => handleViewChange("grid")}>
            <LayoutGrid className="w-4 h-4 mr-2" /> Grid
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleViewChange("list")}>
            <List className="w-4 h-4 mr-2" /> List
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleViewChange("details")}>
            <MoreVertical className="w-4 h-4 mr-2" /> Details
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="ghost" size="sm">
        <Settings className="w-4 h-4 mr-1" />
        Settings
      </Button>
    </div>
  )
}
