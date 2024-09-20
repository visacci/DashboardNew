import React from "react";
import "./DailyUsers.scss";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const DailyUsers = () => {
  return (
    <div className="daily-wrapper">
      <div className="head">
        <span>Daily New users</span>
        <div className="search">
          <div className="input">
            <FiSearch />
            <input type="text" placeholder="Search" />
          </div>
          <div className="sort">
            <span>October</span>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyUsers;
