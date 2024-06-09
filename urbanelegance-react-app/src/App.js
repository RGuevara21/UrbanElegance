import React from "react";
import "./App.css";
import SignInLogo from "./images/sign-in-background.jpg";

// Sign Up anchor tag component

import Hyperlinks from "./user-authentication/sign_in/LinkToSignUp";

//

const SignInBackground = () => {
  return (
    <>
      <div className="image-background">
        <img
          src={SignInLogo}
          alt="Sign In Background"
          className="sign-in-background"
        />
      </div>
    </>
  );
};

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
            {" "}
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
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
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

const SignInFooter = () => {
  const footerHeading = "Sign In to your account with: ";

  return (
    <>
      <footer className="main-page-footer">
        <div className="left-side-heading">
          <h3 className="footer-heading">{footerHeading}</h3>

          <button className="facebook">Facebook {/* Facebook Icon */}</button>
          <button className="instagram">
            Instagram {/* Instagram Icon */}
          </button>
          <button className="google">Google {/* Google Icon */}</button>
        </div>
      </footer>
    </>
  );
};
const App = () => {
  return (
    <main className="main-page">
      <section>
        <SignInBackground />
      </section>
      <section>
        <Hyperlinks />
        <SignInForm />
        <SignInFooter />
      </section>
    </main>
  );
};

export default App;
