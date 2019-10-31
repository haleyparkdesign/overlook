import styled from "styled-components";
import colors from "../../components/colors";

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 4em auto 8em;
  color: ${colors.brown};

  .row {
    margin-top: 80px;
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
    margin-top: -64px;

    img {
      margin-left: auto;
    }
  }

`;

export default Wrapper;
