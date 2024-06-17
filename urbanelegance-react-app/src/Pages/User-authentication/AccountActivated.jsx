import React from "react";
import "../../Components/Assets/css/user-auth/account_activation.css";

/* ------------------------------------------------------------------------ */

// Following Account Recovery Components

import AccActBackground from "../../Components/User-authentication/account_activation/FormBackground";
import AccActActivated from "../../Components/User-authentication/account_activation/Activated";
import AccActFooter from "../../Components/User-authentication/account_activation/Footer";

/* ------------------------------------------------------------------------ */

// Account Activation Function - Invoking all components

const AccountActivated = () => {
  return (
    <main className="main-page">
      <section>
        <AccActBackground />
      </section>
      <section>
        <AccActActivated />
        <AccActFooter />
      </section>
    </main>
  );
};

export default AccountActivated;
