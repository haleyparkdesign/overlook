import React from "react";
import { Link } from "react-router-dom";
import KeyWrapper from "./Key.style.js";

const Key = props => {
  return (
    <KeyWrapper>
      <Link to={`/${props.path}/`}>
        <div className="KeyChain">
          <img src={props.photo} />
          <h4>{props.name}</h4>
        </div>
      </Link>
    </KeyWrapper>
  );
};

export default Key;
