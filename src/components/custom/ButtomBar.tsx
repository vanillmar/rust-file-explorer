type ButtomBarProps = {
  itemCount : number
}

export function BottomBar({ itemCount }: Readonly<ButtomBarProps>) {
  return (
    <div className="flex justify-between items-center text-sm text-muted-foreground border-t px-4 py-2 bg-muted">
      <span>
        {itemCount} item{itemCount !== 1 ? "s" : ""}
      </span>
    </div>
  )
}
