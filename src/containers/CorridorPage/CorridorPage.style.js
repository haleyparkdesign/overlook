import styled from "styled-components";
import colors from "../../components/colors";

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 4em auto 0;
  color: ${colors.red0};

  .row {
    display: flex;
    justify-content: space-around;
    align-items:flex-start;

    img {
      display: block;
    }
  }

`;

export default Wrapper;
