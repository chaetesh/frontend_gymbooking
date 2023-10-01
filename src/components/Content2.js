import React from "react";
import four from "./lottie/four.json";
import five from "./lottie/five.json";
import six from "./lottie/six.json";
import eight from "./lottie/eight.json";
import Lottie from "lottie-react";

const Content2 = () => {
  return (
    <>
      <div class="container p-3 mt-5">
        <div class="row">
          <div class="col d-nonesm">
            <div className="row">
              <Lottie
                animationData={five}
                loop={true}
                style={{ width: "20vw" }}
              ></Lottie>
              <Lottie
                animationData={five}
                loop={true}
                style={{ width: "20vw" }}
              ></Lottie>
            </div>
            <div
              className="row"
              style={{
                marginLeft: "-80px",
              }}
            >
              <Lottie
                animationData={six}
                loop={true}
                style={{ width: "20vw" }}
              ></Lottie>
              <Lottie
                animationData={eight}
                loop={true}
                style={{ width: "20vw", marginTop: "5rem" }}
              ></Lottie>
            </div>
          </div>

          <div class="col text-11 text-middle" style={{ width: "50vw" }}>
            <h1 className="p-4 style-h1 text-center">Book Early & Save More</h1>
            <p>
              <span className="fw-bold">
                For those who plan ahead, there are some special discounts
                available:{" "}
              </span>
              Book your Football turf , Resorts, Picnic spot, Night stay, Home
              stay, Gym, Zumba, swimming pool, Dine out Restaurants, trekking
              spot . early and save more. For bookings made at least 21 days in
              advance, customers can enjoy up to 15% off.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content2;
