import React from "react";

import { Link } from "react-router-dom";
const ChangeCredHeader = () => {
  const redirectionHeading =
    "Still having trouble? Activate your account here.";

  return (
    <>
      <header className="main-page-header">
        <div className="right-side-heading">
          <h2 className="redirection-heading">{redirectionHeading}</h2>
          <Link to="/AccountActivation" className="hyperlink">
            Activate
          </Link>
        </div>
      </header>
    </>
  );
};

export default ChangeCredHeader;
