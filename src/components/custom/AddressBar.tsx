import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type AddressBarProps = {
  path: string
  onPathChange: (newPath: string) => void
}

export default function AddressBar({ path, onPathChange }: Readonly<AddressBarProps>) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState<string>(path);
  const inputRef = useRef<HTMLInputElement>(null);

  const segments = path.split("/").filter(Boolean);

  useEffect(() => {
    setInputValue(path);
  }, [path]);

  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  const handleInputSubmit = () => {
    onPathChange(inputValue);
    setIsEditing(false);
  };

  const handleSegmentClick = (index: number) => {
    const newPath = "/" + segments.slice(0, index + 1).join("/");
    onPathChange(newPath);
  };

  return (
    <div
      className={cn(
        "border rounded-xl bg-muted cursor-text w-full",
        isEditing && "bg-background"
      )}
      onClick={() => setIsEditing(true)}
    >
      {isEditing ? (
        <Input
          className="text-sm"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleInputSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleInputSubmit();
            } else if (e.key === "Escape") {
              setIsEditing(false);
              setInputValue(path);
            }
          }}
        />
      ) : (
        <div className="flex flex-wrap gap-1 text-sm px-4 py-2  ">
          {segments.map((segment, index) => (
            <div key={index} className="flex items-center gap-1">
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering edit mode
                  handleSegmentClick(index);
                }}
              >
                {segment}
              </span>
              {index < segments.length - 1 && <span className="text-muted-foreground">›</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
