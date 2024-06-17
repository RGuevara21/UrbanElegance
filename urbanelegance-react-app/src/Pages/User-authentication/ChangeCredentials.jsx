import React from "react";
import "../../Components/Assets/css/user-auth/change_credentials.css";

/* ------------------------------------------------------------------------ */

import ChangeCredBackground from "../../Components/User-authentication/change_credentials/FormBackground";
import ChangeCredHeader from "../../Components/User-authentication/change_credentials/Header";
import ChangeCredForm from "../../Components/User-authentication/change_credentials/Form";
import ChangeCredFooter from "../../Components/User-authentication/change_credentials/Footer";

/* ------------------------------------------------------------------------ */

// Change Credentials Function - Invoking all components

const ChangeCredentials = () => {
  return (
    <main className="main-page">
      <section>
        <ChangeCredBackground />
      </section>
      <section>
        <ChangeCredHeader />
        <ChangeCredForm />
        <ChangeCredFooter />
      </section>
    </main>
  );
};

export default ChangeCredentials;
