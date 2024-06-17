import React from "react";
import "../../Components/Assets/css/user-auth/account_recovery.css";

/* ------------------------------------------------------------------------ */

// Following Account Recovery Components

import AccRecHeader from "../../Components/User-authentication/account_recovery/Header";
import AccRecForm from "../../Components/User-authentication/account_recovery/Form";
import AccRecBackground from "../../Components/User-authentication/account_recovery/FormBackground";
import AccRecFooter from "../../Components/User-authentication/account_recovery/Footer";

/* ------------------------------------------------------------------------ */

// Account Recovery Function - Invoking all components

const AccountRecovery = () => {
  return (
    <main className="main-page">
      <section>
        <AccRecBackground />
      </section>
      <section>
        <AccRecHeader />
        <AccRecForm />
        <AccRecFooter />
      </section>
    </main>
  );
};

export default AccountRecovery;
