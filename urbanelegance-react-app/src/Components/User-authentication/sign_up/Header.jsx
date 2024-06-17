import React from "react";
import { Link } from "react-router-dom";

const SignUpHeader = () => {
  const redirectionHeading = "Don't have an account?";

  return (
    <>
      <header className="main-page-header">
        <div className="right-side-heading">
          <h2 className="redirection-heading">{redirectionHeading}</h2>
          <Link to="/SignIn" className="hyperlink">
            Sign In
          </Link>
        </div>
      </header>
    </>
  );
};

export default SignUpHeader;
