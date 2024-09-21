import React from "react";
import "./DailyUsers.scss";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import UsersTable from "./UsersTable";
const DailyUsers = () => {
  return (
    <div className="daily-wrapper">
      <div className="head">
        <span
          style={{ fontFamily: "Roboto", fontWeight: "bold", fontSize: 20 }}
        >
          Daily New users
        </span>
        <div className="search">
          <div className="input">
            <FiSearch color="gray" size={16} />
            <input
              className="i"
              type="text"
              placeholder="Search"
              style={{ width: "90%", height: "100%" }}
            />
          </div>
          <div className="sort">
            <span>October</span>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>
      <UsersTable />
    </div>
  );
};

export default DailyUsers;
