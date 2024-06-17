import React from "react";
import { Link } from "react-router-dom";

const AccActActivated = () => {
  const mainHeading = "UrbanElegance: Account Activation";

  const mainDescription =
    "Your account has been activated! You can now Sign In ";
  return (
    <>
      <div className="form-layout">
        <div className="form-texts">
          <h1 className="main-heading">{mainHeading}</h1>
          <span className="main-description">
            {mainDescription} <Link to="/SignIn">here.</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default AccActActivated;
