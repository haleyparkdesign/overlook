import React from "react";
import Wrapper from "./BathroomPage.style.js";
import colors from "../../components/colors";
import bathroom from "../../assets/imgs/bathroom.png";
import bathroom1 from "../../assets/imgs/bathroom1.png";
import TitleGraphic from "../../components/TitleGraphic"
import NavBar from "../NavBar/NavBar";
import Quote from "../../components/Quote"

const BathroomPage = () => {
  document.body.style = `background:${colors.apricot1}`;
  let contentColor = colors.brown;

  return (
    <>
      <NavBar pageName="bathroom" color={contentColor} />
      <Wrapper>

        <div className="container">
          <div className="title">
            <TitleGraphic className="graphic" color={contentColor} />
            <h2>The Bathroom</h2>
          </div>
          <div className="row">
            <img src={bathroom}></img>
            <Quote color={contentColor}>
              You're looking so well darling, you really are. I don't know what sort of cream they put on you down at the morgue, but I want some.
            </Quote>
          </div>
          <div className="row">
            <img src={bathroom1}></img>
          </div>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        </div>
      </Wrapper>
    </>
  );
};

export default BathroomPage;
