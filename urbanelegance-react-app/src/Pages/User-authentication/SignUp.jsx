import React from "react";
import "../../Components/Assets/css/user-auth/sign_up.css";
/* ------------------------------------------------------------------------ */

// Following Sign Up Components

import SignUpHeader from "../../Components/User-authentication/sign_up/Header";
import SignUpBackground from "../../Components/User-authentication/sign_up/FormBackground";
import SignUpForm from "../../Components/User-authentication/sign_up/Form";
import SignUpFooter from "../../Components/User-authentication/sign_up/Footer";

/* ------------------------------------------------------------------------ */

// Sign Up Function - Invoking all fragments

const SignUp = () => {
  return (
    <main className="main-page">
      <section>
        <SignUpBackground />
      </section>
      <section>
        <SignUpHeader /> <SignUpForm /> <SignUpFooter />
      </section>
    </main>
  );
};

export default SignUp;
