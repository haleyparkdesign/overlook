import styled from "styled-components";
import colors from "../../components/colors";
import KeyBG from "../../assets/imgs/KeyBG.svg";
import KeyChain from "../../assets/imgs/KeyChain.svg";

const KeyWrapper = styled.div`
  background-image: url(${KeyBG});
  background-repeat: no-repeat;
  background-size: cover;
  width: 168px;
  padding: 0 16px;

  .KeyChain {
    background-image: url(${KeyChain});
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 300px;
    margin: 16px auto;
    padding: 16px auto;
    color: ${colors.red1};
    text-align: center;
  }

  .KeyChain:hover {
    transform: rotateZ(-3deg);
    transform-origin: top center;
    transition: transform 0.15s ease;
  }

  img {
    width: 100%;
    display: block;
    margin: 0 auto;
  }

  h4 {
    margin-top: 0em;
  }
`;

export default KeyWrapper;
