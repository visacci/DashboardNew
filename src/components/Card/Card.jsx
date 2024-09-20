import React from "react";
import "./Card.scss";
import { IoPeople } from "react-icons/io5";
import { IoTrendingUp } from "react-icons/io5";
import { BsBoxFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { LuTimerReset } from "react-icons/lu";
const Card = () => {
  return (
    <div className="card-container">
      <div className="card" style={{ backgroundColor: "rgb(225, 225, 248)" }}>
        <div className="users">
          <div className="nums">
            <span style={{ fontFamily: "Roboto", color: "gray" }}>
              Total Users
            </span>
            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 22,
                marginTop: 15,
              }}
            >
              150,000
            </span>
          </div>
          <div className="icon">
            <IoPeople size={25} color="blue" />
          </div>
        </div>
        <div className="count">
          <IoTrendingUp size={17} />
          <span style={{ fontFamily: "Roboto", fontSize: 13 }}>+3,200</span>
          <span style={{ fontFamily: "Roboto", fontSize: 13 }}>
            users this month
          </span>
        </div>
      </div>
      <div className="card" style={{ background: "rgb(246, 246, 255)" }}>
        <div className="users">
          <div className="nums">
            <span style={{ fontFamily: "Roboto", color: "gray" }}>
              Active Users
            </span>
            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 22,
                marginTop: 15,
              }}
            >
              45,000
            </span>
          </div>
          <div
            className="icon"
            style={{ backgroundColor: "rgb(235, 241, 199)" }}
          >
            <BsBoxFill size={25} color="rgb(81, 230, 36)" />
          </div>
        </div>
        <div className="count">
          <IoTrendingUp size={17} />
          <span style={{ fontFamily: "Roboto", fontSize: 13 }}>30%</span>
          <span style={{ fontFamily: "Roboto", fontSize: 13 }}>
            users this in the p..
          </span>
        </div>
      </div>
      <div className="card" style={{ backgroundColor: "rgb(244, 251, 215)" }}>
        <div className="users">
          <div className="nums">
            <span style={{ fontFamily: "Roboto", color: "gray" }}>
              Total Posts
            </span>
            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 22,
                marginTop: 15,
              }}
            >
              500,000
            </span>
          </div>
          <div
            className="icon"
            style={{ backgroundColor: "rgba(192, 252, 187, 0.869)" }}
          >
            <GoGraph size={25} color="green" />
          </div>
        </div>
        <div className="count">
          <IoTrendingUp size={17} />
          <span style={{ fontFamily: "Roboto", fontSize: 13 }}>+3,200</span>
          <span style={{ fontFamily: "Roboto", fontSize: 13 }}>
            Posts this month
          </span>
        </div>
      </div>
      <div className="card" style={{ backgroundColor: " rgb(230, 252, 224)" }}>
        <div className="users">
          <div className="nums">
            <span style={{ fontFamily: "Roboto", color: "gray" }}>
              New Companies
            </span>
            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 22,
                marginTop: 15,
              }}
            >
              1,200
            </span>
          </div>
          <div className="icon" style={{ backgroundColor: "#9af591de" }}>
            <LuTimerReset size={25} color="gray" />
          </div>
        </div>
        <div className="count">
          <span style={{ fontFamily: "Roboto", fontSize: 13 }}>+45</span>
          <span style={{ fontFamily: "Roboto", fontSize: 13 }}>
            New companies this..
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
