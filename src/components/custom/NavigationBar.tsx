import NavigationButtoms from "./NavigationButtoms"
import AddressBar from "./AddressBar"
import ResizebleSearchBar from "./ResizebleSearchBar"

export interface NavigationBarProps {
  goUp: () => void
}
export default function NavigationBar({ goUp }: Readonly<NavigationBarProps>) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border-b bg-background">
      <NavigationButtoms goUp={goUp}/>
      <AddressBar />
      <ResizebleSearchBar />
    </div>
  )
}
