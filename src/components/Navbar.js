import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div class="container-fluid px-md-5">
        <div class="row" style={{ display: "flex", justifyContent: "center" }}>
          <div
            class="col-md-8 order-md-last"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div class="row">
              <div class="col-md-5 text-center">
                <a class="navbar-brand" href="index.html">
                  <img
                    src="/Maikei.png"
                    class="navbar-brand mt-2"
                    href="#"
                    style={{ width: "190px", height: "65px" }}
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg" style={{ marginTop: "20px" }}>
        <div
          class="container-fluid container-fluid-btn"
          style={{
            paddingLeft: "45px",
          }}
        >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
              <Link
                class="nav-link active text-underline-hover hover-text-white"
                aria-current="page"
                to="/"
                style={{ fontSize: "1.3rem" }}
              >
                Home
              </Link>
              <Link
                class="nav-link active text-underline-hover hover-text-white"
                aria-current="page"
                to="/events"
                style={{ fontSize: "1.3rem" }}
              >
                Event Booking
              </Link>
              <Link
                class="nav-link active text-underline-hover hover-text-white"
                to="/mytickets"
                style={{ fontSize: "1.3rem" }}
              >
                My Tickets
              </Link>
              <Link
                class="nav-link active text-underline-hover hover-text-white"
                to="/posts"
                style={{ fontSize: "1.3rem" }}
              >
                Posts
              </Link>
              <Link
                class="nav-link active text-underline-hover hover-text-white"
                to="/offers"
                style={{ fontSize: "1.3rem" }}
              >
                Offers&Copouns
              </Link>
              <Link
                class="nav-link active text-underline-hover hover-text-white"
                to="/about"
                style={{ fontSize: "1.3rem" }}
              >
                About
              </Link>
              <Link
                class="nav-link active text-underline-hover hover-text-white"
                to="contactus"
                style={{ fontSize: "1.3rem" }}
              >
                Contact Us
              </Link>
              <Link
                class="nav-link"
                to="/signUp"
                style={{ fontSize: "1.3rem" }}
              >
                <button
                  class="hover-text-white"
                  style={{
                    padding: "2px 7px",
                    borderRadius: "5px",
                    backgroundColor: "#18b718",
                    border: "none",
                    position: "absolute",
                    right: "0",
                    margin: "0px 20px",
                  }}
                >
                  <i class="fa-solid fa-right-to-bracket m-2"></i>
                  Login/SignUp
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
    // <>
    //   <nav class="navbar navbar-expand-lg" style={{ marginTop: "20px" }}>
    //     <div class="container-fluid">
    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
    //           <li class="nav-item">
    //             <Link
    //               class="nav-link active text-underline-hover hover-text-white"
    //               aria-current="page"
    //               to="/"
    //               style={{ fontSize: "1.3rem" }}
    //             >
    //               Home
    //             </Link>
    //           </li>
    //           <li class="nav-item">
    //             <Link
    //               class="nav-link active text-underline-hover hover-text-white"
    //               aria-current="page"
    //               to="/"
    //               style={{ fontSize: "1.3rem" }}
    //             >
    //               Event Booking
    //             </Link>
    //           </li>
    //           <li class="nav-item">
    //             <Link
    //               class="nav-link active text-underline-hover hover-text-white"
    //               aria-current="page"
    //               to="/"
    //               style={{ fontSize: "1.3rem" }}
    //             >
    //               My Tickets
    //             </Link>
    //           </li>
    //           <li class="nav-item">
    //             <Link
    //               class="nav-link active text-underline-hover hover-text-white"
    //               aria-current="page"
    //               to="/"
    //               style={{ fontSize: "1.3rem" }}
    //             >
    //               Posts
    //             </Link>
    //           </li>
    //           <li class="nav-item">
    //             <Link
    //               class="nav-link active text-underline-hover hover-text-white"
    //               aria-current="page"
    //               to="/"
    //               style={{ fontSize: "1.3rem" }}
    //             >
    //               Offers&Copouns
    //             </Link>
    //           </li>
    //           <li class="nav-item">
    //             <Link
    //               class="nav-link active text-underline-hover hover-text-white"
    //               aria-current="page"
    //               to="/"
    //               style={{ fontSize: "1.3rem" }}
    //             >
    //               About
    //             </Link>
    //           </li>
    //           <li class="nav-item">
    //             <Link
    //               class="nav-link active text-underline-hover hover-text-white"
    //               aria-current="page"
    //               to="/"
    //               style={{ fontSize: "1.3rem" }}
    //             >
    //               Contact Us
    //             </Link>
    //           </li>
    //           <li class="nav-item">
    //             <Link
    //               class="nav-link"
    //               to="/signUp"
    //               style={{ fontSize: "1.3rem" }}
    //             >
    //               <button
    //                 class="hover-text-white"
    //                 style={{
    //                   padding: "2px 7px",
    //                   borderRadius: "5px",
    //                   backgroundColor: "#18b718",
    //                   border: "none",
    //                   position: "absolute",
    //                   right: "0",
    //                   margin: "0px 20px",
    //                 }}
    //               >
    //                 <i class="fa-solid fa-right-to-bracket m-2"></i>
    //                 Login/SignUp
    //               </button>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </>
  );
};

export default Navbar;
