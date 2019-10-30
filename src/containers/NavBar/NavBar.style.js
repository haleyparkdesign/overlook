import styled from "styled-components";
import colors from "../../components/colors";

const Wrapper = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    margin: 1em;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    // color: ${colors.apricot};
  }

`;

export default Wrapper;



