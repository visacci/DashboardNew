import React from "react";
import "./Home.scss";
import Card from "../../components/Card/Card";
import Activities from "../../components/Activities/Activities";
import Likes from "../../components/Likes/Likes";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import Gender from "../../components/Gender/Gender";
import DailyUsers from "../../components/DailyUsers/DailyUsers";
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
