import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import "./App.css"
import ProjectsPage from "./Components/Projects";
import BlogsPage from "./Components/Blog";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
              <Home />
             
          }
        />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
