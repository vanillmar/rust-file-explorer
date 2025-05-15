import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"
import { getSiblings } from "@/lib/Common"
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

type AddressBarProps = {
  path: string
  onPathChange?: (newPath: string) => void
}

export default function AddressBar({ path, onPathChange }: Readonly<AddressBarProps>) {
  const segments = path === "/" ? ["/"] : ["/", ...path.split("/").filter(Boolean)]

  const buildFullPath = (index: number) =>
    index === 0 ? "/" : "/" + segments.slice(1, index + 1).join("/")

  const handleNavigate = (newPath: string) => {
    onPathChange?.(newPath)
  }

  return (
    <div className="flex items-center space-x-1 p-x-2 w-full bg-muted rounded-xl shadow">
      {segments.map((segment, index) => {
        const currentPath = buildFullPath(index)
        const siblings = getSiblings(
          currentPath === "/" ? "/" : currentPath.split("/").slice(0, -1).join("/") || "/"
        )
        return (
          <div key={index} className="flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-sm px-2 py-1 rounded-xl flex items-center gap-1"
                >
                  {segment === "/" ? "Root" : segment}
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {siblings.map(sibling => {
                  const base =
                    currentPath === "/" ? "" : currentPath.split("/").slice(0, -1).join("/")
                  const siblingPath = base
                    ? `/${base}/${sibling}`.replace(/\/+/g, "/")
                    : `/${sibling}`
                  return (
                    <DropdownMenuItem key={sibling} onClick={() => handleNavigate(siblingPath)}>
                      {sibling}
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
            {index < segments.length - 1 && (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        )
      })}
    </div>
  )
}
