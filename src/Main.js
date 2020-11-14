import './App.scss';
import HeaderTicker from "./components/header/HeaderTicker";
import React from "react";
import MiddleSection from "./components/section/MiddleSection";

function Main() {
  return (
    <div className="App">
        <HeaderTicker/>
        <MiddleSection/>
    </div>
  );
}

export default Main;
