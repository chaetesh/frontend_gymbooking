import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import EventBook from "./components/EventBook";
import Footer from "./components/Footer";
import MyTickets from "./components/MyTickets";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Posts from "./components/Posts";
import SignUp from "./components/SignUp";
import { Slide } from "./components/Slide";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TreckBooking from "./components/TreckBooking";
import Content4 from "./components/Content4";
import Content5 from "./components/Content5";

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
              <Content4></Content4>
              <Content5></Content5>
            </>
          }
        />
        <Route path="/about" element={<About></About>} />
        <Route path="/posts" element={<Posts></Posts>} />
        <Route path="/offers" element={<Offers></Offers>} />
        <Route
          path="/events"
          element={
            <>
              <EventBook></EventBook>
              <TreckBooking></TreckBooking>
            </>
          }
        />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route path="/mytickets" element={<MyTickets></MyTickets>} />
        <Route path="/contactus" element={<ContactUs></ContactUs>} />
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
