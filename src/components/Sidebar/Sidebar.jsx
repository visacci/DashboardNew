import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { COLORS, SIZES } from "../../../constants";
import "./Sidebar.scss";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineRssFeed } from "react-icons/md";
import { FaRegFlag } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
//Sidebar component
const Sidebar = () => {
  return (
    <div className="container">
      <div className="title">
        <img
          src="/images/logo.jpeg"
          alt=""
          style={{ width: 45, height: 45, borderRadius: 12 }}
        />
        <span
          className="text"
          style={{ fontFamily: "Roboto", fontWeight: "bold", fontSize: 28 }}
        >
          Budytalk
        </span>
      </div>
      <div className="actions">
        <div className="btns-c">
          <div className="btns">
            <MdOutlineDashboard fontSize={20} color="gray" />
            <span style={{ color: "gray", marginRight: 60 }}>Dashboard</span>
          </div>
        </div>
        <div className="btns-c">
          <div className="btns" style={{ width: "43%" }}>
            <HiOutlineUserGroup fontSize={20} color="gray" />
            <span style={{ color: "gray" }}>Users</span>
          </div>
          <IoIosArrowForward />
        </div>
        <div className="btns-c">
          <div className="btns" style={{ width: "65%" }}>
            <HiOutlineUserGroup fontSize={20} color="gray" />
            <span style={{ color: "gray" }}>Companies</span>
          </div>
          <IoIosArrowForward />
        </div>
        <div className="btns-c">
          <div className="btns" style={{ width: "43%" }}>
            <MdOutlineRssFeed fontSize={20} color="gray" />
            <span style={{ color: "gray" }}>Posts</span>
          </div>
          <IoIosArrowForward />
        </div>
        <div className="btns-c">
          <div className="btns" style={{ width: "100%" }}>
            <FaRegFlag fontSize={20} color="gray" />
            <span style={{ color: "gray" }}>Content Moderation</span>
          </div>
        </div>
        <div className="btns-c">
          <div className="btns" style={{ width: "53%" }}>
            <IoSettingsOutline fontSize={20} color="gray" />
            <span style={{ color: "gray" }}>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
