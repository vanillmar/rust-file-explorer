import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import FileExplorer from "@/components/custom/FileExplorer"
import Titlebar from "./Titlebar"

export default function Window() {
  const [tabs, setTabs] = useState([{ id: uuidv4(), title: "Home", path: "/" }])
  const [currentTabId, setCurrentTabId] = useState(tabs[0].id)

  const handleAddTab = () => {
    const newTab = {
      id: uuidv4(),
      title: "New Tab",
      path: "/"
    }
    setTabs([...tabs, newTab])
    setCurrentTabId(newTab.id)
  }

  const handleCloseTab = (tabId: string) => {
    const filtered = tabs.filter(tab => tab.id !== tabId)
    setTabs(filtered)
    if (currentTabId === tabId && filtered.length > 0) {
      setCurrentTabId(filtered[0].id)
    }
  }

  const handleChangeTab = (tabId: string) => {
    setCurrentTabId(tabId)
  }

  const handlePathChange = (tabId: string, newPath: string) => {
    setTabs(tabs.map(tab => (tab.id === tabId ? { ...tab, path: newPath } : tab)))
  }

  return (
    <div >
      <Titlebar title="My App" />
      <Tabs value={currentTabId} onValueChange={handleChangeTab} className="w-full">
        <TabsList className="flex space-x-2 overflow-x-auto">
          {tabs.map(tab => (
            <TabsTrigger key={tab.id} value={tab.id} className="flex items-center space-x-1">
              <span>{tab.title}</span>
              <Button
                className="rounded-full h-6 w-6"
                size="icon"
                variant="ghost"
                onClick={e => {
                  e.stopPropagation()
                  handleCloseTab(tab.id)
                }}
              >
                ×
              </Button>
            </TabsTrigger>
          ))}
          <Button className="h-7 w-7" size="icon" variant="outline" onClick={handleAddTab}>
            +
          </Button>
        </TabsList>

        {tabs.map(tab => (
          <TabsContent key={tab.id} value={tab.id}>
            <FileExplorer
              path={tab.path}
              onPathChange={newPath => handlePathChange(tab.id, newPath)}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
