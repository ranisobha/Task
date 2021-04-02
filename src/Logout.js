import React from "react";
import { useDispatch } from "react-redux";
import Dashboard from "./Dashboard";
import { logout } from "./Components/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const handlelogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  return (
    <div className="text-center mt-5">
      <h1>Welcome to Dashboard</h1>
      <button
        type="submit"
        onClick={(e) => handlelogout(e)}
        className="btn btn-dark mx-5 mt-5 text-center"
      >
        Logout
      </button>
      <Dashboard />
    </div>
  );
};
export default Logout;
