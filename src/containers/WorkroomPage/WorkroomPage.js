import React from "react";
import Wrapper from "./WorkroomPage.style.js";
import colors from "../../components/colors";
import TitleGraphic from "../../components/TitleGraphic"
import NavBar from "../NavBar/NavBar";
import writing from "../../assets/imgs/writing.gif";
import shaking from "../../assets/imgs/shaking.gif";
import Quote from "../../components/Quote"

const WorkroomPage = () => {
  document.body.style = `background:${colors.purple}`;
  let contentColor = colors.apricot

  return (
    <>
      <NavBar pageName="workroom" color={contentColor} />
      <Wrapper>

        <div className="container">
          <div className="title">
            <TitleGraphic className="graphic" color={contentColor} />
            <h2>The Work Room</h2>
          </div>

          <br></br> <br></br> <br></br>
          <div className="row">
            <img src={writing}></img>
            <div className="box">
              <div className="inner">
                All work and no play makes Jack a dull boy.<br></br>
                All work and no play makes Jack a dull boy.<br></br>
                All work and no play makes Jack a dull boy.<br></br>
                All work and no play makes Jack a dull boy.<br></br>
                All work and no play makes Jack a dull boy.<br></br>
                All work and no play makes Jack a dull boy.<br></br>
                All work and no play makes Jack a dull boy.<br></br>
                All work and no play makes Jack a dull boy.<br></br>
                All work and no play makes Jack a dull boy.<br></br>
                All work and no play makes Jack a dull boy.<br></br>
                All work and no play makes Jack a dull boy.<br></br>
                All work and no play makes Jack a dull boy.<br></br>
                All work and no play makes Jack a dull boy.<br></br>
                All work and no play makes Jack a dull boy.<br></br>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <Quote color={contentColor}>I've never seen her like that before. She was shaking like a shitting dog.</Quote>
            <img src={shaking}></img>
          </div> */}
        </div>
      </Wrapper></>

  );
};

export default WorkroomPage;
