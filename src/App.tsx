import "./App.css";
import { BottomBar } from "./components/custom/ButtomBar";
import NavigationBar from "./components/custom/NavigationBar";
import { Sidebar } from "./components/custom/Sidebar";
import { Toolbar } from "./components/custom/Toolbar";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavigationBar />
      <Toolbar />
      <div className="flex-1 p-1 overflow-auto">
        <Sidebar />
        {/* File explorer content goes here */}
        <div className="grid grid-cols-4 gap-4">
          {/* Example: file/folder tiles */}
          <div className="border p-4 rounded bg-background shadow">Folder 1</div>
          <div className="border p-4 rounded bg-background shadow">File 1.txt</div>
          {/* Add more */}
        </div>
      </div>
      <BottomBar />
  </div>
  );
}

export default App;
