import React from "react";
import seven from "./lottie/seven.json";
import eight from "./lottie/eight.json";
import nine from "./lottie/nine.json";
import Lottie from "lottie-react";

const Content3 = () => {
  return (
    <>
      <div class="container p-3">
        <div class="row">
          <div class="col text-11 text-middle" style={{ width: "50vw" }}>
            <h1 className="p-4 style-h1 text-center">Take Control Your Game</h1>
            <p>
              <span className="fw-bold">
                When it comes to playing Football, cricket, badminton… etc
                sometimes it can be hard to stay focused and in control. If you
                find yourself getting too into the game, here are some tips to
                help you stay in control:
              </span>
              <br></br>
            </p>
            <p>
              <span className="fw-bold">Set Limits: </span>
              It's important to set limits on how much time you spend playing
              video games. Decide ahead of time how much time you are going to
              spend playing and stick to it. This will help you regulate your
              gaming time and make sure you're not overdoing it.
            </p>
            <p>
              <span className="fw-bold">Take Breaks: </span>
              Breaks are important for any activity, and gaming is no different.
              Taking regular breaks can help prevent burnout and keep you from
              getting too invested in the game.
            </p>
            <p>
              <span className="fw-bold">Monitor Your Mood: </span>
              It's important to be aware of how you're feeling while playing. If
              you find yourself getting angry or frustrated, take a step back
              and take a break.
            </p>
            <p>
              <span className="fw-bold">Play With Others: </span>
              Playing with friends or family can be a great way to stay in
              control. You can keep each other accountable and make sure you’re
              all playing responsibly.
            </p>
            <p>
              <span className="fw-bold"> Learn to Turn it Off: </span>
              It can be hard to turn off a game once you've
            </p>
          </div>
          <div class="col">
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

export default Content3;
