import React from "react";
import "./App.css";

/* ------------------------------------------------------------------------ */

// Sign In Header Component
import Header from "./user-authentication/sign_in/Header";

// Sign In Form Component
import SignInForm from "./user-authentication/sign_in/Form";

// Sign In Background Component
import SignInBackground from "./user-authentication/sign_in/FormBackground";

// Sign In Footer Component
import SignInFooter from "./user-authentication/sign_in/Footer";

/* ------------------------------------------------------------------------ */

// Main Function

const App = () => {
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

export default App;
