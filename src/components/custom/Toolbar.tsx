import { Button } from "@/components/ui/button"
import { FolderPlus, RefreshCcw, Upload } from "lucide-react"

export function Toolbar() {
  return (
    <div className="flex items-center gap-2 border-b px-4 py-2">
      <Button variant="ghost" size="sm">
        <FolderPlus className="mr-2 h-4 w-4" />
        New Folder
      </Button>
      <Button variant="ghost" size="sm">
        <Upload className="mr-2 h-4 w-4" />
        Upload
      </Button>
      <Button variant="ghost" size="sm">
        <RefreshCcw className="mr-2 h-4 w-4" />
        Refresh
      </Button>
    </div>
  )
}
