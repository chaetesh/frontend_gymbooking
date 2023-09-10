import React from 'react'

const ContactUs = () => {
  return (
    <div className="contact p-5" style={{ backgroundColor: "#ECF9E1",height:'80vh' }}>
      <i
        class="fa-regular fa-address-card my-3"
        style={{ fontSize: "5rem", justifyContent: "center" }}
      ></i>
      <h1>Contact Us</h1>
      <p className="mt-5" style={{ fontSize: "20px" }}>
        Facing Problem? We are here to help
      </p>
      <p style={{ fontSize: "20px", display: "inline" }}>
        Please Write your queries on email:{" "}
      </p>
      <p style={{ fontWeight: "bold", fontSize: "20px", display: "inline" }}>
        contactus@gmail.com
      </p>
    </div>
  );
}

export default ContactUs