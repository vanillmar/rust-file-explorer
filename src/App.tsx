import "./App.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import Window from "@/components/custom/Window"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Window />
    </ThemeProvider>
  )
}

export default App
