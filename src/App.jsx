import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Settings from "./Pages/Settings/Settings";
import Layout from "./components/Layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Router>
        {/* <Sidebar />
        <Header /> */}
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
