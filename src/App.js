import About from "./components/About";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import { Slide } from "./components/Slide";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slide></Slide>
              <Content1></Content1>
              <Content2></Content2>
              <Content3></Content3>
            </>
          }
        />
        <Route path="/about" element={<About></About>} />
        <Route path="/posts" element={<Posts></Posts>} />
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
