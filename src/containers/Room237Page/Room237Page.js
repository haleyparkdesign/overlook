import React from "react";
import Wrapper from "./Room237Page.style.js";
import colors from "../../components/colors";
import TitleGraphic from "../../components/TitleGraphic"
import NavBar from "../NavBar/NavBar";
import door from "../../assets/imgs/door.png"

const Room237Page = () => {
  document.body.style = `background:${colors.red2}`;
  let contentColor = colors.apricot;

  return (
    <>
      <NavBar pageName="room237" color={contentColor} />
      <Wrapper>
        <div className="container">
          <div className="title">
            <TitleGraphic className="graphic" color={contentColor} />
            <h2>Room 237</h2>
          </div>
          <div className="row">
            <img src={door}></img>
          </div>

        </div>
      </Wrapper>
    </>
  );
};

export default Room237Page;
