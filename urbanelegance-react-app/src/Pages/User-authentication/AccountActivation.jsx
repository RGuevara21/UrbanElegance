import React from "react";
import "../../Components/Assets/css/user-auth/account_activation.css";

/* ------------------------------------------------------------------------ */

// Following Account Recovery Components

import AccActBackground from "../../Components/User-authentication/account_activation/FormBackground";
import AccActHeader from "../../Components/User-authentication/account_activation/Header";
import AccActForm from "../../Components/User-authentication/account_activation/Form";
import AccActFooter from "../../Components/User-authentication/account_activation/Footer";

/* ------------------------------------------------------------------------ */

// Account Activation Function - Invoking all components

const AccountActivation = () => {
  return (
    <main className="main-page">
      <section>
        <AccActBackground />
      </section>
      <section>
        <AccActHeader />
        <AccActForm />
        <AccActFooter />
      </section>
    </main>
  );
};

export default AccountActivation;
