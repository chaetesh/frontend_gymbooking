import React from "react";
import seven from "./lottie/seven.json";
import eight from "./lottie/eight.json";
import nine from "./lottie/nine.json";
import Lottie from "lottie-react";

const Content5 = () => {
  return (
    <>
      <div class="container p-3">
        <div class="row">
          <div class="col text-11 text-middle" style={{ width: "50vw" }}>
            <h1 className="p-4 style-h1 text-center">
              Experience the Adventure with trecking
            </h1>
            <p>
              Trekking is a captivating adventure that leads you into the heart
              of nature's wonders. With a backpack on your shoulders and sturdy
              boots on your feet, you embark on a journey filled with
              challenging trails, breathtaking vistas, and a deep sense of
              connection with the great outdoors.
            </p>
            <p>
              Each step is a rhythmic dance with the earth, a chance to escape
              the urban cacophony and find solace in the wilderness. Trekking
              offers not just physical exertion but also mental rejuvenation, as
              you navigate through diverse landscapes and forge unforgettable
              memories under the open sky. It's an opportunity to explore,
              reflect, and be inspired by the beauty of the natural world.
            </p>
          </div>
          <div class="col d-nonesm">
            <Lottie
              animationData={seven}
              loop={true}
              style={{ width: "16vw" }}
            ></Lottie>
            <Lottie
              animationData={eight}
              loop={true}
              style={{ width: "16vw", marginLeft: "25vw" }}
            ></Lottie>
            <Lottie
              animationData={nine}
              loop={true}
              style={{ width: "16vw" }}
            ></Lottie>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content5;
