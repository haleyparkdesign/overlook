import React, { Component } from "react";
import colors from "../../components/colors";
import charList from "../PlacesPage/characterList";
import "../PlacesPage/CharacterPage/CharacterPage.css";
import ContentWrapper from "./HomePage.style.js";
import Key from "../Key/Key";

class homePage extends React.Component {
  constructor(props) {
    super(props);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
    this.state = {
      scrollY: 0,
      velocity: 0.24
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent, {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent, {
      passive: true
    });
  }

  listenScrollEvent() {
    var scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    var scrolled = scrollTop * this.state.velocity;
    this.setState({ scrollY: scrolled });
  }

  render() {
    document.body.style = `background:${colors.red1}`;

    return (
      <ContentWrapper>
        <div
          className="Banner"
          style={{
            backgroundPositionY: this.state.scrollY * this.state.velocity + "%"
          }}
        >
          <div className="BannerTextContainer">
            <div className="Text">
              <span>Designed & Developed by Haley Park</span>
              <br></br>
              <span>Inspired by </span>
              <a
                href="https://www.youtube.com/watch?v=Nsi06PG7w_0"
                target="_blank"
                rel="noopener noreferrer"
              >
                this youtube video
              </a>
            </div>
          </div>
        </div>
        <br />

        <div className="container">
          <h1 className="deco">x</h1>
          <h1>Concierge</h1>

          <div className="row">
            {charList.map((Character, i, arr) => {
              return (
                <>
                  <Key
                    name={Character.name}
                    photo={Character.photo}
                    path={Character.route}
                  />
                </>
              );
            })}
          </div>
        </div>
      </ContentWrapper>
    );
  }
}

export default homePage;
