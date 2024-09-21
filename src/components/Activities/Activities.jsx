import React from "react";
import "./Activities.scss";
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { BiSolidShareAlt } from "react-icons/bi";
const Activities = () => {
  return (
    <div className="a-wrapper">
      <div className="text">
        <span style={{ fontSize: 13, fontWeight: "bold" }}>
          Daily Engagement & Activities
        </span>
        <span style={{ fontSize: 13 }}>September 24, 2024</span>
      </div>
      <div className="boxes">
        <div className="box">
          <div className="box-text">
            <span style={{ color: "gray", fontSize: 13 }}>Total Posts</span>
            <FaRegFileAlt color="gray" fontSize={15} />
          </div>
          <div className="box-text">
            <span style={{ fontWeight: "bold", fontSize: 18 }}>1,986</span>
            <span style={{ color: "red", fontSize: 14, fontWeight: "bold" }}>
              -1,43%
            </span>
          </div>
        </div>
        <div className="box">
          <div className="box-text">
            <span style={{ color: "gray", fontSize: 13 }}>Total Likes</span>
            <AiOutlineLike color="gray" fontSize={15} />
          </div>
          <div className="box-text">
            <span style={{ fontWeight: "bold", fontSize: 18 }}>890,543</span>
            <span style={{ color: "red", fontSize: 14, fontWeight: "bold" }}>
              -3,43%
            </span>
          </div>
        </div>
        <div className="box">
          <div className="box-text">
            <span style={{ color: "gray", fontSize: 13 }}>Total Comments</span>
            <FaRegComments color="gray" fontSize={15} />
          </div>
          <div className="box-text">
            <span style={{ fontWeight: "bold", fontSize: 18 }}>1,234,780</span>
            <span style={{ color: "red", fontSize: 14, fontWeight: "bold" }}>
              +9,43%
            </span>
          </div>
        </div>
        <div className="box">
          <div className="box-text">
            <span style={{ color: "gray", fontSize: 13 }}>Total Shares</span>
            <BiSolidShareAlt color="gray" fontSize={15} />
          </div>
          <div className="box-text">
            <span style={{ fontWeight: "bold", fontSize: 18 }}>432,097</span>
            <span style={{ color: "red", fontSize: 14, fontWeight: "bold" }}>
              -1,43%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
