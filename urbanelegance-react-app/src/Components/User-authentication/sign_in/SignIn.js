import React from "react";
import "../../Assets/css/user-auth/sign_in.css";
import SignInLogo from "../../Assets/backgrounds/user-auth-backgrounds/sign_in.jpg";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* ------------------------------------------------------------------------ */

// Sign-In Function

const SignIn = () => {
  const redirectionHeading = "Don't have an account?";

  const mainHeading = "Sign In to UrbanElegance";
  const mainDescription =
    "Fill out the fields in order to sign in to UrbanElegance store.";

  const footerHeading = "Sign In to your account with: ";

  return (
    <Router>
      <main className="main-page">
        <section>
          <div className="image-background">
            <img
              src={SignInLogo}
              alt="Sign In Background"
              className="sign-in-background"
            />
          </div>
        </section>
        <section>
          <header className="main-page-header">
            <div className="right-side-heading">
              <h2 className="redirection-heading">{redirectionHeading}</h2>
              <a href="/a.js" className="hyperlink">
                Sign Up
              </a>
            </div>
          </header>
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
          <footer className="main-page-footer">
            <div className="left-side-heading">
              <h3 className="footer-heading">{footerHeading}</h3>

              <button className="facebook">
                Facebook {/* Facebook Icon */}
              </button>
              <button className="instagram">
                Instagram {/* Instagram Icon */}
              </button>
              <button className="google">Google {/* Google Icon */}</button>
            </div>
          </footer>
        </section>
      </main>
    </Router>
  );
};

export default SignIn;
