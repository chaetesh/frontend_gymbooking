import React from "react";
import four from "./lottie/four.json";
import five from "./lottie/five.json";
import six from "./lottie/six.json";
import Lottie from "lottie-react";

const Content2 = () => {
  return (
    <>
      <div class="container text-center p-3 mt-5">
        <div class="row">
          <div class="col">
            <Lottie
              animationData={four}
              loop={true}
              style={{ width: "16vw" }}
            ></Lottie>
            <Lottie
              animationData={five}
              loop={true}
              style={{ width: "16vw", marginLeft: "25vw" }}
            ></Lottie>
            <Lottie
              animationData={six}
              loop={true}
              style={{ width: "16vw" }}
            ></Lottie>
          </div>

          <div
            class="col text-white text-center text-middle"
            style={{ width: "50vw" }}
          >
            <h1 className="p-4 style-h1">Book Early & Save More</h1>
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