import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div
          class="nav-custom container-fluid justify-content-center"
          style={{ backgroundColor: "#88C949" }}
        >
          <img
            src="/Maikei.png"
            class="navbar-brand mt-2"
            href="#"
            style={{ width: "150px", height: "80px" }}
          ></img>
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
            <ul class="navbar-nav ms-auto text-center gap-3">
              <li class="nav-item">
                <a
                  class="nav-link active \"
                  aria-current="page"
                  href="#"
                  style={{ fontSize: "1.3rem" }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link \"
                  href="#"
                  style={{ fontSize: "1.3rem" }}
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link \"
                  href="#"
                  style={{ fontSize: "1.3rem" }}
                >
                  <button
                    class="\"
                    style={{
                      padding: "2px 7px",
                      borderRadius: "5px",
                      backgroundColor: "#18b718",
                      border: "none",
                    }}
                  >
                    Contact Us
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
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
      <nav
        class="navbar navbar-expand-lg"
        style={{ height: "9vh", marginTop: "20px" }}
      >
        <div
          class="container-fluid"
          style={{
            height: "9vh",
            paddingLeft: "45px",
          }}
        >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav gap-4">
              <Link
                class="nav-link text-underline-hover hover-text-white"
                aria-current="page"
                to="/"
                style={{ fontSize: "1.3rem" }}
              >
                Home
              </Link>
              <Link
                class="nav-link text-underline-hover hover-text-white"
                aria-current="page"
                to="/events"
                style={{ fontSize: "1.3rem" }}
              >
                Event Booking
              </Link>
              <Link
                class="nav-link \ text-underline-hover hover-text-white"
                to="/mytickets"
                style={{ fontSize: "1.3rem" }}
              >
                My Tickets
              </Link>
              <Link
                class="nav-link text-underline-hover hover-text-white"
                to="/posts"
                style={{ fontSize: "1.3rem" }}
              >
                Posts
              </Link>
              <Link
                class="nav-link \ text-underline-hover hover-text-white"
                to="/offers"
                style={{ fontSize: "1.3rem" }}
              >
                Offers&Copouns
              </Link>
              <Link
                class="nav-link text-underline-hover hover-text-white"
                to="/about"
                style={{ fontSize: "1.3rem" }}
              >
                About
              </Link>
              <Link class="nav-link" to="contactus" style={{ fontSize: "1.3rem" }}>
                <button
                  class="hover-text-white"
                  style={{
                    padding: "2px 7px",
                    borderRadius: "5px",
                    backgroundColor: "#18b718",
                    border: "none",
                  }}
                >
                  Contact Us
                </button>
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
                  Login/SignUp
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
