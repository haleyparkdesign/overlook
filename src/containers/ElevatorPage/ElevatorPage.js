import React from "react";
import Wrapper from "./ElevatorPage.style.js";
import colors from "../../components/colors";
import elevator from "../../assets/imgs/elevator.gif";
import blood from "../../assets/imgs/blood.gif";
import TitleGraphic from "../../components/TitleGraphic"
import NavBar from "../NavBar/NavBar";

const ElevatorPage = () => {
  document.body.style = `background:${colors.pink0}`;
  let contentColor = colors.red0;

  return (
    <>
      <NavBar pageName="elevator" color={contentColor} />
      <Wrapper>

        <div className="container">
          <div className="title">
            <TitleGraphic className="graphic" color={contentColor} />
            <h2>The Elevator</h2>
          </div>
          <br></br> <br></br> <br></br>
          <div className="row">
            <img src={elevator}></img>
            <img src={blood}></img>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ElevatorPage;
