import React, { useState, useRef } from "react";

import NavigationButtoms from "./NavigationButtoms";
import AddressBar from "./AddressBar";
import ResizebleSearchBar from "./ResizebleSearchBar";

{/* Navigation Bar */}
export default function NavigationBar() { 
    const [searchWidth, setSearchWidth] = useState(200);
    const isResizing = useRef(false);
  
    const handleMouseDown = () => {
      isResizing.current = true;
    };
  
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      setSearchWidth(prev => Math.max(150, prev - e.movementX)); // prevent it from shrinking too small
    };
  
    const handleMouseUp = () => {
      isResizing.current = false;
    };
  
    React.useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }, []);
    return (
        <div className="flex items-center gap-2 px-4 py-2 border-b bg-background">
            <NavigationButtoms />
            <AddressBar />
            <ResizebleSearchBar initialWidth={100} minWidth={50} />
        </div>
    )
}