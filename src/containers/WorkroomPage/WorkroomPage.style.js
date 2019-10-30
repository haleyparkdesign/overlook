import styled from "styled-components";
import colors from "../../components/colors";
// import KeyBG from "../../assets/imgs/KeyBG.svg";
// import KeyChain from "../../assets/imgs/KeyChain.svg";

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 4em auto 0;

  .row {
    display: flex;
    justify-content: space-evenly;
    align-items:flex-start;

    img {
      display: block;
    }
  }

  .box {
    background-color: ${colors.pink0};
    color: ${colors.red0};
    padding: 1em;

    .inner {
      border: 1px solid ${colors.red0};
      width: calc(100% - 3em);
      height: calc(100% - 3em);
      padding: 1.5em;
    }
  }
`;

export default Wrapper;
