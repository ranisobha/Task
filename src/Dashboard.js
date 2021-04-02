import React, { useState } from "react";
import user from "./data";

const Dashboard = () => {
  const [data] = useState(user);
  return (
    <div className="p-5 mt-5">
      <table className="table table-dark">
        <thead>
          <tr>
            <td>
              <h2>ID</h2>
            </td>
            <td>
              <h2>Name</h2>
            </td>
            <td>
              <h2>Age</h2>
            </td>
            <td>
              <h2>Gender</h2>
            </td>
            <td>
              <h2>Email</h2>
            </td>
            <td>
              <h2>PhoneNo</h2>
            </td>
          </tr>
          {data.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.gender}</td>
                <td>{e.email}</td>
                <td>{e.phoneNo}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};
export default Dashboard;
