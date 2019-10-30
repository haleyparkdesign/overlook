import React from "react";
import Wrapper from "./SnowfieldPage.style.js";
import colors from "../../components/colors";
import why from "../../assets/imgs/why.png";
import ded from "../../assets/imgs/ded.png";
import TitleGraphic from "../../components/TitleGraphic"
import NavBar from "../NavBar/NavBar";
import Quote from "../../components/Quote"

const SnowfieldPage = () => {
  document.body.style = `background:${colors.lavender}`;
  let contentColor = colors.navy;

  return (
    <>
      <NavBar pageName="snowfield" color={contentColor} />
      <Wrapper>

        <div className="title">
          <TitleGraphic className="graphic" color={contentColor} />
          <h2>The Snow Field</h2>
        </div>
        <br></br> <br></br> <br></br>
        <div className="row">
          <img src={why}></img>
          <Quote color={contentColor}>Why are we stopping at a barley field?</Quote>
        </div>
        <div className="row">
          <img src={ded}></img>

        </div>
      </Wrapper>
    </>
  );
};

export default SnowfieldPage;
