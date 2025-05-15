import "./App.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "@/components/ui/sonner"

import Window from "@/components/custom/Window"
import { cn } from "./lib/utils"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div
        className={cn(
          "overflow-y-hidden border-t bg-background ",
           //"scrollbar-none"
          //"scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md"
        )}
      >
        <Window />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}

export default App
