import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div
          class="nav-custom container-fluid justify-content-center"
          style={{ backgroundColor: "#db346b" }}
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
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                  style={{ fontSize: "1.1rem" }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white"
                  href="#"
                  style={{ fontSize: "1.1rem" }}
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white"
                  href="#"
                  style={{ fontSize: "1.1rem" }}
                >
                  <button
                    class="text-white"
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
                    style={{ width: "150px", height: "80px" }}
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary"
        style={{ height: "9vh" }}
      >
        <div
          class="container-fluid"
          style={{ backgroundColor: "#db346b", height: "9vh",paddingLeft:'30px' }}
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
                class="nav-link text-white text-underline-hover"
                aria-current="page"
                to="/"
                style={{ fontSize: "1.1rem" }}
              >
                Home
              </Link>
              <Link
                class="nav-link text-white text-underline-hover"
                to="/about"
                style={{ fontSize: "1.1rem" }}
              >
                About
              </Link>
              <Link
                class="nav-link text-white text-underline-hover"
                to="/posts"
                style={{ fontSize: "1.1rem" }}
              >
                Posts
              </Link>
              <a
                class="nav-link text-white"
                href="#"
                style={{ fontSize: "1.1rem" }}
              >
                <button
                  class="text-white"
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
