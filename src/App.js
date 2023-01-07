import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route exact element={<Create />} path="/create" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
