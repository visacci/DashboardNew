import React from "react";
import "./Header.scss";
import { LuSearch } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowDropdown } from "react-icons/io";
const Header = () => {
  return (
    <div className="header">
      <span
        style={{
          fontFamily: "Roboto",
          fontSize: "25px",
          fontWeight: "100",
          color: "GrayText",
        }}
      >
        Dashboard
      </span>
      <div className="inputs">
        <div className="search">
          <LuSearch fontSize={20} color="gray" />
          <input type="text" placeholder="Search anything.." className="i" />
        </div>
        <div className="search">
          <img src="/images/avator.jpeg" alt="" className="avator" />
          <div className="names">
            <span
              style={{ fontFamily: "Roboto", fontWeight: "bold", fontSize: 15 }}
            >
              Visacci Allanz
            </span>
            <span
              style={{
                alignSelf: "flex-start",
                fontFamily: "Roboto",
                color: "gray",
                fontSize: 14,
              }}
            >
              Admin
            </span>
          </div>
          <div className="icons">
            <FaRegBell style={{ marginRight: 13 }} />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
