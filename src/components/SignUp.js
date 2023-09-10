import login from "./lottie/login.json";
import Lottie from "lottie-react";

import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div
        class="text-center"
        style={{
          backgroundColor: "beige",
          height: "80vh",
          display: "flex",
          flexDirection: "coloumn",
          alignItems: "center",
        }}
      >
        <div class="row" style={{ margin: "0px 0px", width: "100vw" }}>
          <div
            class="col"
            style={{ display: "flex", justifyContent: "center", width: "50vw" }}
          >
            <Lottie
              animationData={login}
              loop={true}
              style={{ width: "30vw" }}
            ></Lottie>
          </div>
          <div
            class="col"
            style={{ display: "flex", justifyContent: "center", width: "50vw",alignItems:'center' }}
          >
            <form style={{width:'50%'}}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter password"
                />
              </div>
              <div class="mb-3">
                <label>Dosen't have account? </label>
                <Link> SignUp</Link>
              </div>
              <button type="submit" class="btn btn-primary">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
