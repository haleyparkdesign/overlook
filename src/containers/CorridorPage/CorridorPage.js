import React from "react";
import Wrapper from "./CorridorPage.style.js";
import colors from "../../components/colors";
import twins from "../../assets/imgs/twins.png";
import zero from "../../assets/imgs/zero.png";
import TitleGraphic from "../../components/TitleGraphic"
import NavBar from "../NavBar/NavBar";
import Quote from "../../components/Quote"

const CorridorPage = () => {
  document.body.style = `background:${colors.purple}`;
  let contentColor = colors.red0;

  return (
    <>
      <NavBar pageName="corridor" color={contentColor} />
      <Wrapper>
        <div className="title">
          <TitleGraphic className="graphic" color={contentColor} />
          <h2>The Corridor</h2>
        </div>
        <br></br> <br></br> <br></br>
        <div className="row">
          <img src={twins}></img>
          <Quote color={contentColor}>
            Come play with us, Danny...
            </Quote>
        </div>
        <div className="row">
          <img src={zero}></img>
        </div>

      </Wrapper>
    </>
  );
};

export default CorridorPage;
