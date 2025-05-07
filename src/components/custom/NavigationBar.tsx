import NavigationButtoms from "./NavigationButtoms";
import AddressBar from "./AddressBar";
import ResizebleSearchBar from "./ResizebleSearchBar";

{/* Navigation Bar */}
export default function NavigationBar() { 
    return (
        <div className="flex items-center gap-2 px-4 py-2 border-b bg-background">
            <NavigationButtoms />
            <AddressBar />
            <ResizebleSearchBar />
        </div>
    )
}