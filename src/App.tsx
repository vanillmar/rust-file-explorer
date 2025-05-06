import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <main className="container">
      <h1 className="text-3xl font-bold underline">File Explorer</h1>
      <Router>
          <nav className="p-4 bg-gray-800 text-white">
            <Link className="mr-4" to="/">Home</Link>
            <Link className="mr-4" to="/about">About</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
    </main>
  );
}

export default App;
