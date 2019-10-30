import React from "react";
import styled from "styled-components";

const Quote = props => {
  return (
    <Wrapper>
      <div className="left">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.72222 5.92573C4.55556 5.37018 4.05556 4.92573 4.05556 4.00906C4.05556 2.78684 5.05556 2.00906 7.27778 0.981287C7.61111 0.842398 7.25 -0.102047 6.83333 0.00906415C2.16667 1.25906 0 4.06462 0 7.06462C0 9.81462 1.77778 11.5091 4.33333 11.5091C6.05556 11.5091 7.66667 10.5646 7.66667 8.5924C7.66667 7.39795 7.13889 6.62018 5.72222 5.92573ZM14.0556 5.92573C12.8889 5.37018 12.3889 4.92573 12.3889 4.00906C12.3889 2.78684 13.3889 2.00906 15.6111 0.981287C15.9444 0.842398 15.5833 -0.102047 15.1667 0.00906415C10.5 1.25906 8.33333 4.06462 8.33333 7.06462C8.33333 9.81462 10.1111 11.5091 12.6667 11.5091C14.3889 11.5091 16 10.5646 16 8.5924C16 7.39795 15.4722 6.62018 14.0556 5.92573Z" fill={props.color} />
        </svg>
      </div>
      <div className="right"> {props.children}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  min-width: 250px;
  margin-left: 32px;
  font-size: 1.1em;

    .left {
      margin-right: 16px;
    }
`;

export default Quote;
