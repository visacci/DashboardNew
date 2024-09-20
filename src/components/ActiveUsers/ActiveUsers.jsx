import React from "react";
import "./ActiveUsers.scss";
import { LineGraph } from "./Line";
const ActiveUsers = () => {
  return (
    <div className="active-users">
      <div className="line">
        <LineGraph />
      </div>
    </div>
  );
};

export default ActiveUsers;
