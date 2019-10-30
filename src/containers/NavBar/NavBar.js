import React from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import Wrapper from "./NavBar.style.js";
import SmallKey from "../../components/SmallKey";

const NavBar = props => {
  console.log(props.pageName);

  const pages = ["workroom", "room237", "elevator", "bathroom", "corridor", "snowfield"];
  const titles = ["the work room", "room 237", "the elevator", "the bathroom", "the corridor", "the snow field"];

  let nextPage = "";
  let nextTitle = "";

  for (let i = 0; i < pages.length; i++) {
    if (props.pageName == pages[pages.length - 1]) {
      nextPage = pages[0];
      nextTitle = titles[0];
    } else {
      if (pages[i] == props.pageName) {
        nextPage = pages[i + 1];
        nextTitle = titles[i + 1]
      }
    }
  }

  let route = "../" + nextPage;
  console.log(route)

  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="nav-item">
          <NavLink className="nav-link" to={appRoutes.home} exact>
            <SmallKey color={props.color} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: props.color }}>Go back to lobby</span>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to={route}>
            <span style={{ color: props.color }}>Go to {nextTitle}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SmallKey
              color={props.color}
              flipped />
          </NavLink>
        </div>
      </nav>
    </Wrapper>
  );
};

export default NavBar;
