import styled from "styled-components";
import colors from "../../components/colors";

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 4em auto 0;
  color: ${colors.brown};

  .row {
    display: flex;
    justify-content: space-evenly;
    align-items:flex-start;

    img {
      display: block;
    }

    .quote {
      
    }
  }

`;

export default Wrapper;
