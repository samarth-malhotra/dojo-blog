import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

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
            <Route element={<NotFound />} path="*" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
