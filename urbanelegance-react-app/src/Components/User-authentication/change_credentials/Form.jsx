import React from "react";
import { Link } from "react-router-dom";
const ChangeCredForm = () => {
  const mainHeading = "UrbanElegance: Change Credentials";
  const mainDescription =
    "Create your new password in order to recover your account.";

  return (
    <>
      <div className="form-layout">
        <div className="form-texts">
          <h1 className="main-heading">{mainHeading}</h1>
          <span className="main-description">{mainDescription}</span>
        </div>

        <form action="#" className="sign-in-form">
          <div className="form-input-fields">
            <label htmlFor="password" className="password-label">
              New Password
            </label>
            <input type="text" className="password-input" />
          </div>

          <label htmlFor="password" className="password-label">
            Confirm New Password
          </label>
          <input type="text" className="password-input" />

          <div className="form-account-recovery">
            <Link to="/SignIn" className="forgot-password">
              Cancel Request
            </Link>
          </div>

          <div className="form-action-button">
            <button type="submit" className="sign-in-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangeCredForm;
