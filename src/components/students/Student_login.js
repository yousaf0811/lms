import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../component/footer";
import StudentNavbarLogin from "./studentnavlogin";
const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((info) => {
        localStorage.setItem("user", JSON.stringify(user));
        handleClick();
      });
  };
  const handleClick = () => {
    navigate("/studentaccount");
  };
  useEffect(() => {
    let localData = localStorage.getItem("name");
    console.log("Data :: ", localData);
  });
  const user = {
    email: email,
    password: password,
  };
  return (
    <div>
      <StudentNavbarLogin />
      <div className="SL">
        <section class="vh-100">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col col-xl-10">
                <div class="card" style={{ borderRadius: "1rem" }}>
                  <div class="row g-0">
                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://images.unsplash.com/photo-1519818187420-8e49de7adeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                        alt="login form"
                        class="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                      <div class="card-body p-4 p-lg-5 text-black">
                        <form onSubmit={handleSubmit}>
                          <div class="d-flex align-items-center mb-3 pb-1">
                            <i
                              class="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                            ></i>
                            <span class="h1 fw-bold mb-0">
                              Student Login Form
                            </span>
                          </div>
                          <h5
                            class="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: "1px" }}
                          >
                            Sign into your account
                          </h5>
                          <div class="form-outline mb-4">
                            <input
                              type="email"
                              id="email"
                              class="form-control form-control-lg"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label class="form-label" for="email">
                              Email address
                            </label>
                          </div>
                          <div class="form-outline mb-4">
                            <input
                              type="password"
                              id="password"
                              class="form-control form-control-lg"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label class="form-label" for="form2Example27">
                              Password
                            </label>
                          </div>
                          <div class="pt-1 mb-4">
                            <button
                              class="btn btn-warning btn-lg btn-block"
                              type="submit"
                            >
                              Login
                            </button>
                          </div>
                          <a
                            class="small text-muted"
                            href="https://mdbootstrap.com/"
                          >
                            Forgot password?
                          </a>
                          <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                            Don't have an account?{" "}
                            <a
                              href="/studentsignup"
                              style={{ color: "#393f81" }}
                            >
                              Register here
                            </a>
                          </p>
                          <a
                            href="https://mdbootstrap.com/"
                            class="small text-muted"
                          >
                            Terms of use.
                          </a>
                          <a
                            href="https://mdbootstrap.com/"
                            class="small text-muted"
                          >
                            Privacy policy
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default StudentLogin;
