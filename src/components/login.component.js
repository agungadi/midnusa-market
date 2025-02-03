import React from "react";
import { Link } from "react-router-dom";
import profile from "./images/avatar.png";
import "bootstrap/dist/css/bootstrap.min.css";

const handleCart = (name, image_url, price, mejaId) => {};

function Login() {
  return (
    <form>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div class="d-flex flex-row" className="imgs">
              <label class="radio mr-1">
                <input type="radio" name="add" value="anz" checked />
                <span>
                  {" "}
                  <i class="fa fa-user"></i> Login{" "}
                </span>
              </label>
              <label class="radio">
                <input type="radio" name="add" value="add" />
                <Link className="link" to="/registration">
                  <span>
                    {" "}
                    <i class="fa fa-plus-circle"></i> Register{" "}
                  </span>
                </Link>
              </label>
            </div>
            <div>
              <div className="first-input">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="fill"
                />
              </div>
              <div className="second-input">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="fill"
                />
              </div>
              <div className="login-btn">
                <Link to="/home">
                  <button type="button">
                    <h4>Login</h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
