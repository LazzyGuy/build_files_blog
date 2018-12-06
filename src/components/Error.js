import React from "react";
import { Link } from "react-router-dom";
const Error = props => (
  <div className="error">
    <div className="big">404.</div>
    <p>
      There is nothing here let me guide you to the <br />{" "}
      <Link to="/">home page</Link>{" "}
    </p>
  </div>
);

export default Error;
