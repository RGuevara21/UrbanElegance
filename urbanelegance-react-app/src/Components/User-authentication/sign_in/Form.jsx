import React from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const mainHeading = "Sign In to UrbanElegance";
  const mainDescription =
    "Fill out the fields in order to sign in to UrbanElegance store.";

  return (
    <>
      <div className="form-layout">
        <div className="form-texts">
          <h1 className="main-heading">{mainHeading}</h1>
          <span className="main-description">{mainDescription}</span>
        </div>

        <form action="#" className="sign-in-form">
          <div className="form-input-fields">
            <label htmlFor="email" className="email-label">
              Email
            </label>
            <input
              type="text"
              className="email-input"
              placeholder="Enter email address"
            />
            <label htmlFor="password" className="password-label">
              Password
            </label>
            <input type="text" className="password-input" />
          </div>

          <div className="form-account-recovery">
            <Link to="/AccountRecovery" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <div className="form-action-button">
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
