import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
    return ( <div className="container align-items-center">
        <div className="row text-center p-5 mt-5 ">
         <h1 class="fs-3">Open a free demat and trading account online</h1>
         <h6 class="text-muted">Start investing brokerage free and join a community of 1.6+ crore investors and traders</h6>

        </div>
         <div className="row text-center p-5 mt-5 ">
         <div className="col-6 p-3">
             <img src="media/signup.png" alt="signup img" style={{width:"100%"}}></img>
         </div>
          <div className="col-6  p-3 text-start">
            <h3>Signup now</h3>
            <p class="text-muted">Or track your existing application</p>
             <form onSubmit={handleSubmit} className="signup-form">
        <div className="mb-3">
          <label className='form-label'>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label className='form-label'>Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label className='form-label'>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <div className="signup-action">
        <button class="btn btn-primary "type="submit">Submit</button>
        <span className="text-muted fs-6">
          Already have an account? <Link to={"/login"} style={{textDecoration:"none"}}>Login</Link>
        </span></div>
      </form>
               <ToastContainer />
         </div>

        </div>
         
           <div className="row text-center p-5 mt-5 ">
         <h1 class="fs-3">Already have a demat account?</h1>
         <h6 class="text-muted">Move your holdings to MyStock and we'll cover your transfer costs, up to ₹500,<a href="" style={{textDecoration:"none"}}> learn more.</a></h6>

        </div>
    </div> );
}

export default Signup;