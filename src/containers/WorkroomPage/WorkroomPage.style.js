import styled from "styled-components";
import colors from "../../components/colors";

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 4em auto 8em;

  .row {
    display: flex;
    justify-content: space-evenly;
    align-items:flex-start;
    margin-bottom: 4em;

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
