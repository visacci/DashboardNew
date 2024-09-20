import React from "react";
import "./Home.scss";
import Card from "../Card/Card";
import Activities from "../Activities/Activities";
import Likes from "../Likes/Likes";
import ActiveUsers from "../ActiveUsers/ActiveUsers";
import Gender from "../Gender/Gender";
import DailyUsers from "../DailyUsers/DailyUsers";
const Home = () => {
  return (
    <div className="home">
      <Card />
      <div className="grid">
        <Activities />
        <Likes />
        <ActiveUsers />
        <Gender />
        <DailyUsers />
      </div>
    </div>
  );
};

export default Home;
