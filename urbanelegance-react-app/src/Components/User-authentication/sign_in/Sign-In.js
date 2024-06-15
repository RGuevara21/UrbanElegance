import React from "react";
import "../../Assets/css/user-auth/sign-in.css";

/* ------------------------------------------------------------------------ */

// Sign In Header Component
import Header from "./Header";

// Sign In Form Component
import SignInForm from "./Form";

// Sign In Background Component
import SignInBackground from "./FormBackground";

// Sign In Footer Component
import SignInFooter from "./Footer";

/* ------------------------------------------------------------------------ */

// Sign-In Function

const Sign_In = () => {
  return (
    <main className="main-page">
      <section>
        <SignInBackground />
      </section>
      <section>
        <Header />
        <SignInForm />
        <SignInFooter />
      </section>
    </main>
  );
};

export default Sign_In;
