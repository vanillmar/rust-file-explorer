import { useState } from "react"
import { ChevronDown, ChevronRight, Folder } from "lucide-react"

interface FolderNode {
  name: string
  children?: FolderNode[]
}

interface FolderTreeProps {
  data: FolderNode[]
}

export default function FolderTree({ data }: FolderTreeProps) {
  return (
    <div className="text-sm">
      {data.map((folder, idx) => (
        <FolderItem key={idx} node={folder} level={0} />
      ))}
    </div>
  )
}

export function FolderItem({ node, level }: { node: FolderNode; level: number }) {
  const [expanded, setExpanded] = useState(false)
  const hasChildren = node.children && node.children.length > 0
  return (
    <div>
      <div
        className="flex items-center cursor-pointer px-2 py-1 hover:bg-muted rounded"
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {hasChildren ? (
          expanded ? (
            <ChevronDown className="w-4 h-4 mr-1" />
          ) : (
            <ChevronRight className="w-4 h-4 mr-1" />
          )
        ) : (
          <span className="w-4 h-4 mr-1" />
        )}
        <Folder className="w-4 h-4 mr-2" />
        <span>{node.name}</span>
      </div>

      {expanded && hasChildren && (
        <div>
          {node.children!.map((child, idx) => (
            <FolderItem key={idx} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}
