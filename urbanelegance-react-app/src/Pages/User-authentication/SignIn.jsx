import React from "react";
import "../../Components/Assets/css/user-auth/sign_in.css";

/* ------------------------------------------------------------------------ */

// Following Sign In Components

import SignInHeader from "../../Components/User-authentication/sign_in/Header";
import SignInBackground from "../../Components/User-authentication/sign_in/FormBackground";
import SignInForm from "../../Components/User-authentication/sign_in/Form";
import SignInFooter from "../../Components/User-authentication/sign_in/Footer";

/* ------------------------------------------------------------------------ */

// Sign In Function - Invoking all fragments

const SignIn = () => {
  return (
    <main className="main-page">
      <section>
        <SignInBackground />
      </section>
      <section>
        <SignInHeader /> <SignInForm /> <SignInFooter />
      </section>
    </main>
  );
};

export default SignIn;
