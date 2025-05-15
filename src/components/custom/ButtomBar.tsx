type ButtomBarProps = {
  path: string
  onPathChange: (newPath: string) => void
}

export function BottomBar({ path, onPathChange }: Readonly<ButtomBarProps>) {
  return (
    <div className="flex justify-between items-center text-sm text-muted-foreground border-t px-4 py-2 bg-muted">
      <span>12 items</span>
      <span>Free space: 120 GB</span>
    </div>
  )
}
