import React from "react";
import concert1 from "./lottie/concert1.json";
import concert2 from "./lottie/concert2.json";
import six from "./lottie/six.json";
import ten from "./lottie/ten.json";
import Lottie from "lottie-react";

const Content2 = () => {
  return (
    <>
      <div class="container p-3 mt-5">
        <div class="row">
          <div class="col d-nonesm">
            <div className="row">
              <Lottie
                animationData={concert1}
                loop={true}
                style={{ width: "20vw" }}
              ></Lottie>
              <Lottie
                animationData={concert2}
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
                animationData={ten}
                loop={true}
                style={{ width: "20vw", marginTop: "5rem" }}
              ></Lottie>
            </div>
          </div>

          <div class="col text-11 text-middle" style={{ width: "50vw" }}>
            <h1 className="p-4 style-h1 text-center">
              Attend Amazing Concerts
            </h1>
            <p>
              A concert is a vibrant and exhilarating experience where music
              comes alive. It's a gathering of people who share a passion for
              melodies, beats, and lyrics, all harmonizing in the air.
            </p>
            <p>
              The stage is a focal point, where talented musicians pour their
              hearts into their craft, creating an atmosphere charged with
              energy and emotion. Concerts are more than just auditory delight;
              they're a collective celebration of artistry, connecting
              individuals through the universal language of music, leaving
              lasting memories and a sense of unity in their wake.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content2;
