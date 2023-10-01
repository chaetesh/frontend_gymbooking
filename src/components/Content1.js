import React from "react";
import one from "./lottie/one.json";
import two from "./lottie/two.json";
import four from "./lottie/four.json";
import exercise from "./lottie/exercise.json";
import three from "./lottie/three.json";
import Lottie from "lottie-react";

const Content1 = () => {
  return (
    <>
      <div class="container p-3">
        <div class="row">
          <div class="col text-middle text-11" style={{ width: "50vw" }}>
            <h1 className="p-4 style-h1 text-center">
              Get Fit, Strong & More Confident
            </h1>
            <p>
              <span className="fw-bold">Exercise regularly: </span>
              Incorporate a regular exercise routine into your life. Exercise
              can help you get fit, strong, and more confident. Aim to get at
              least 150 minutes of moderate aerobic exercise or 75 minutes of
              vigorous aerobic exercise per week.
            </p>
            <p>
              <span className="fw-bold">Eat nutritious meals: </span>
              Eating a healthy and balanced diet is essential for feeling good
              and being your best self. Eat plenty of fruits, vegetables, whole
              grains, lean proteins, and healthy fats.
            </p>
            <p>
              <span className="fw-bold">Set goals: </span>
              Set realistic and achievable goals for yourself. This will help
              you stay motivated and give you something to work towards.
            </p>
            <p>
              <span className="fw-bold">Get enough sleep: </span>
              Getting enough sleep is essential for your body to repair and
              recover after exercise. Aim for 8 hours of sleep a night.
            </p>
            <p>
              <span className="fw-bold">Stay positive: </span>
              Negative self-talk and unrealistic expectations can be damaging to
              your progress. Stay focused on the positive and focus on the
              progress you have made.
            </p>
            <p className="mt-5 text-center">
              Get now <span style={{ color: "#949" }}>Maikei</span> app from
              playstore
            </p>
            <button
              className="btn-download"
              style={{ backgroundColor: "#949",margin:'auto' }}
            >
              Download Now{" "}
              <span>
                <i class="fa-solid fa-download"></i>
              </span>
            </button>
          </div>
          <div class="col d-nonesm">
            <div className="row">
              <Lottie
                animationData={one}
                loop={true}
                style={{ width: "20vw" }}
              ></Lottie>
              <Lottie
                animationData={exercise}
                loop={true}
                style={{ width: "20vw" }}
              ></Lottie>
            </div>
            <div
              className="row"
              style={{
                marginLeft: "29px",
                position: "absolute",
                right: "25px",
              }}
            >
              <Lottie
                animationData={three}
                loop={true}
                style={{ width: "20vw" }}
              ></Lottie>
              <Lottie
                animationData={four}
                loop={true}
                style={{ width: "20vw", marginTop: "5rem" }}
              ></Lottie>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content1;
