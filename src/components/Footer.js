import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr className="text-white"></hr>
      <footer
        className="footer-custom section footer-classic context-dark bg-image text-white "
        style={{
          backgroundColor: "#db346b",
          position: "",
          bottom: "0",
          padding: "50px 25px",
          marginLeft: "25px",
        }}
      >
        <div className="">
          <div className="row row-30">
            <div
              className="col-md-4 col-xl-5 d-flex"
              style={{ alignItems: "center"}}
            >
              <div className="pr-xl-4">
                <p>
                  MAIKEI is a booking App founded by Jackson in october 2022,The
                  brand name "maikei" it is a metaphor for life. It can
                  represent a path that individuals should take in order to
                  achieve their goals and dreams. It can also represent a way of
                  thinking and behaving, and the decisions that can lead to a
                  more successful and fulfilled life. A sense of direction can
                  give people security and confidence in their own abilities,
                  and help them to stay focused and motivated.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <h4>Contacts</h4>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>Your Address</dd>
              </dl>
              <dl className="contact-list">
                <dt>Phone:</dt>
                <dd>
                  <a
                    href="tel:9863015792"
                    className="text-white text-decoration-none"
                  >
                    +91 8974922925
                  </a>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3 text-center">
              <h4>Links</h4>
              <ul className="nav-list" style={{ listStyle: "none",display:'flex',flexDirection:'column',gap:'10px' }}>
                <li>
                  <a href="/toc" className="text-white text-underline-hover">
                    TermsandCondition
                  </a>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-underline-hover text-white"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
