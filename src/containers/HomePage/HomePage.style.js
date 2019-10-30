import styled from "styled-components";
import Banner from "../../assets/imgs/banner.png";
import Lettering from "../../assets/imgs/lettering.png";
import colors from "../../components/colors";

const ContentWrapper = styled.div`
  .Banner {
    position: relative;
    background-image: url(${Banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 90vh;
    padding-top: 16vh;
  }

  .BannerTextContainer {
    margin: 0 auto;
    max-width: 800px;
    height: 100%;
    background-image: url(${Lettering});
    background-size: contain;
    background-repeat: no-repeat;
    color: ${colors.pink1};
    text-align: center;

    .Text {
      padding-top: 140px;
    }

    a {
      color: ${colors.pink1};
    }
  }


  .container {
    box-shadow: inset 0px 0px 0px 10px ${colors.red1};
    background-color: ${colors.red2};
    box-sizing: border-box;
    padding: 4em;
  }

  .deco {
    font-family: charcuterie-ornaments, sans-serif;
    font-size: 6em;
    line-height: 1em;
    margin: -0.2em auto -0.4em;
  }

  .row {
    display: flex;
    justify-content: space-around;
  }

  @media screen and (max-width: 600px) {
    .Banner {
      height: 300px;
    }
  }
`;

export default ContentWrapper;
