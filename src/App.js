import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route exact element={<Create />} path="/create" />
            <Route exact element={<BlogDetails />} path="/blogs/:id" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
