
import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ResizableSearchBarProps {
    initialWidth?: number;
    minWidth?: number;
}

{/* Right: Search */}
export default function ResizebleSearchBar({
    initialWidth = 200,
    minWidth = 150
}: ResizableSearchBarProps) {

    const [searchWidth, setSearchWidth] = useState(initialWidth);
    const isResizing = useRef(false);
  
    const handleMouseDown = () => {
      isResizing.current = true;
    };
  
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      setSearchWidth((prev) => Math.max(minWidth, prev - e.movementX));
    };
  
    const handleMouseUp = () => {
      isResizing.current = false;
    };
  
    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }, []);

    return (
        <>
            {/* Spacer / Drag handle */}
            <div
                onMouseDown={handleMouseDown}
                className="w-1 h-6 bg-muted-foreground cursor-col-resize rounded-sm"
                title="Drag to resize search bar"
            />

            {/* Resizable Search Bar */}
            <div
                style={{ width: `${searchWidth}px` }}
                className="flex items-center relative transition-all"
            >
                <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
                <Input
                type="text"
                placeholder="Search files..."
                className="pl-8 pr-2"
                />
            </div>
        </>
    )
}