import React from "react";
import { Link } from "react-router-dom";

const AccActForm = () => {
  const mainHeading = "UrbanElegance: Account Activation";

  const mainDescription = "We will send you an email to activate your account.";
  return (
    <>
      <div className="form-layout">
        <div className="form-texts">
          <h1 className="main-heading">{mainHeading}</h1>
          <span className="main-description">{mainDescription}</span>
        </div>

        <form action="#" className="sign-in-form">
          <div className="form-input-fields">
            {/* Account Recovery Requirements */}

            {/* Email Label and Input Field */}
            <label htmlFor="email" className="email-label">
              Email
            </label>
            <input
              type="text"
              className="email-input"
              placeholder="Enter email address"
            />

            <div className="form-sign-in">
              <Link to="/SignIn" className="forgot-password">
                Cancel Request
              </Link>
            </div>

            <div className="form-action-button">
              <button type="submit" className="sign-in-button">
                Send Activation Email
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccActForm;
