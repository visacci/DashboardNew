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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelected } from "../../../Redux/Selected";
import { useNavigate } from "react-router-dom";
//Sidebar component
const Sidebar = () => {
  const [active, setActive] = useState("dashboard");
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        <div
          className="btns-c"
          style={{
            backgroundColor: active === "dashboard" ? "blue" : "",
          }}
          onClick={() => {
            setActive("dashboard");
            dispatch(setSelected("Dashboard"));
            navigate("/");
          }}
        >
          <div className="btns">
            <MdOutlineDashboard
              fontSize={20}
              color={active === "dashboard" ? "white" : "gray"}
            />
            <span
              style={{
                color: active === "dashboard" ? "white" : "gray",
                marginRight: 40,
              }}
            >
              Dashboard
            </span>
          </div>
        </div>
        <div
          className="btns-c"
          onClick={() => {
            setActive("users");
            dispatch(setSelected("Users"));
          }}
          style={{
            backgroundColor: active === "users" ? "blue" : "",
          }}
        >
          <div className="btns" style={{ width: "46%" }}>
            <HiOutlineUserGroup
              fontSize={20}
              color={active === "users" ? "white" : "gray"}
            />
            <span
              style={{
                color: active === "users" ? "white" : "gray",
                alignSelf: "center",
              }}
            >
              Users
            </span>
          </div>
          <IoIosArrowForward color={active === "users" ? "white" : "gray"} />
        </div>
        <div
          className="btns-c"
          style={{
            backgroundColor: active === "companies" ? "blue" : "",
          }}
          onClick={() => {
            setActive("companies");
            dispatch(setSelected("Companies"));
          }}
        >
          <div className="btns" style={{ width: "75%" }}>
            <HiOutlineUserGroup
              fontSize={20}
              color={active === "companies" ? "white" : "gray"}
            />
            <span style={{ color: active === "companies" ? "white" : "gray" }}>
              Companies
            </span>
          </div>
          <IoIosArrowForward
            color={active === "companies" ? "white" : "gray"}
          />
        </div>
        <div
          className="btns-c"
          onClick={() => {
            setActive("posts");
            dispatch(setSelected("Posts"));
          }}
          style={{
            backgroundColor: active === "posts" ? "blue" : "",
          }}
        >
          <div className="btns" style={{ width: "46%" }}>
            <MdOutlineRssFeed
              fontSize={20}
              color={active === "posts" ? "white" : "gray"}
            />
            <span style={{ color: active === "posts" ? "white" : "gray" }}>
              Posts
            </span>
          </div>
          <IoIosArrowForward color={active === "posts" ? "white" : "gray"} />
        </div>
        <div
          className="btns-c"
          style={{
            backgroundColor: active === "content" ? "blue" : "",
            paddingRight: 0,
          }}
          onClick={() => {
            setActive("content");
            dispatch(setSelected("Content Moderation"));
          }}
        >
          <div
            className="btns"
            style={{
              width: "100%",
            }}
          >
            <FaRegFlag
              fontSize={20}
              color={active === "content" ? "white" : "gray"}
            />
            <span style={{ color: active === "content" ? "white" : "gray" }}>
              Content Moderation
            </span>
          </div>
        </div>
        <div
          className="btns-c"
          style={{
            backgroundColor: active === "settings" ? "blue" : "",
          }}
          onClick={() => {
            setActive("settings");
            dispatch(setSelected("Settings"));
            navigate("/settings");
          }}
        >
          <div className="btns" style={{ width: "60%" }}>
            <IoSettingsOutline
              fontSize={20}
              color={active === "settings" ? "white" : "gray"}
            />
            <span style={{ color: active === "settings" ? "white" : "gray" }}>
              Settings
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
