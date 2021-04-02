import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./Components/userSlice";


const Login = () => {
  const [Username, setUsername] = useState();
  const [Passowrd, setPassword] = useState();
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        Username: "hruday@gmail.com",
        Passowrd: "hruday123",
        loggin: true
      })
    );
  };

  return (
    <div className="mx-5 my-5 px-5 pt-5">
      <h1>Login Form</h1>
      <form onSubmit={handlesubmit}>
        <div className="form-group col-md-3">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group col-md-3 ">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={Passowrd}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark mx-3">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
