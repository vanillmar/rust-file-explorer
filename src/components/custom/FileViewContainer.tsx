import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuGroup,
  ContextMenuShortcut,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuSub,
  ContextMenuSeparator
} from "@/components/ui/context-menu"
import { formatDate, formatSizeAuto } from "@/lib/Common"
import { File, Folder, Trash2, Pencil, Copy, TableProperties, FolderPlus } from "lucide-react"
import { Button } from "../ui/button"
type ViewMode = "grid" | "list" | "details"

export interface FileItem {
  name: string
  type: "file" | "folder"
  size?: string
  modified?: string
}

export interface FileViewContainerProps {
  items: FileItem[]
  viewMode: ViewMode
  onPathChange?: (newPath: string) => void
  handleNavigate?: (name: string) => void
}

export default function FileViewContainer({
  items,
  viewMode,
  onPathChange,
  handleNavigate
}: Readonly<FileViewContainerProps>) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="w-full h-full overflow-auto">
          {viewMode === "grid" && (
            <div className="grid grid-cols-4 gap-4">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-4 border rounded shadow-sm hover:bg-muted"
                  onClick={() => handleNavigate?.(item.name)}
                >
                  {item.type === "folder" ? (
                    <Folder className="h-50 w-6 mb-2" strokeWidth={1.5} />
                  ) : (
                    <File className="h-50 w-6 mb-2" strokeWidth={1.5} />
                  )}
                  <span className="text-sm truncate w-full text-center">{item.name}</span>
                </div>
              ))}
            </div>
          )}

          {viewMode === "list" && (
            <ul className="divide-y">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 py-2 px-2 hover:bg-muted rounded"
                  onClick={() => handleNavigate?.(item.name)}
                >
                  {item.type === "folder" ? (
                    <Folder className="h-4 w-4" />
                  ) : (
                    <File className="h-4 w-4" />
                  )}
                  <span className="text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          )}

          {viewMode === "details" && (
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="p-2 font-semibold">Name</th>
                  <th className="p-2 font-semibold">Size</th>
                  <th className="p-2 font-semibold">Modified</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-muted"
                    onClick={() => handleNavigate?.(item.name)}
                  >
                    <td className="p-2 flex items-center gap-2">
                      {item.type === "folder" ? (
                        <Folder className="h-4 w-4" />
                      ) : (
                        <File className="h-4 w-4" />
                      )}
                      {item.name}
                    </td>
                    <td className="p-2">{(item.size && `${formatSizeAuto(item.size)}`) ?? "-"}</td>
                    <td className="p-2">
                      {(item.modified && `${formatDate(item.modified)}`) ?? "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            <Copy className="w-4 h-4 mr-2" />
            Copy
            <ContextMenuShortcut>ctlr+c</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Pencil className="w-4 h-4 mr-2" />
            Rename
          </ContextMenuItem>
          <ContextMenuItem>
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
            <ContextMenuShortcut>del</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>
            <FolderPlus className="w-4 h-4 mr-2" />
            Add Folder
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <TableProperties className="w-4 h-4 mr-2" />
          Properties
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
