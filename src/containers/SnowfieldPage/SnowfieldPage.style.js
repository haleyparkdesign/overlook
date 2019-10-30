import styled from "styled-components";
import colors from "../../components/colors";

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 4em auto 8em;
  color: ${colors.navy};

  .row {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    min-width: 100%;

    img {
      display: block;
      max-width:680px;
    }
  }

  .row:last-of-type {
    margin-top: -60px;

    img {
      margin-left: auto;
    }
  }

`;

export default Wrapper;
