import React from "react";
import "../../Components/Assets/css/user-auth/otp_verification.css";

/* ------------------------------------------------------------------------ */

// Following Account Recovery Components

import OtpBackground from "../../Components/User-authentication/otp_verification/FormBackground";
import OtpHeader from "../../Components/User-authentication/otp_verification/Header";
import OtpForm from "../../Components/User-authentication/otp_verification/Form";
import OtpFooter from "../../Components/User-authentication/otp_verification/Footer";

/* ------------------------------------------------------------------------ */

// OTP Verification Function - Invoking all components

const OtpVerification = () => {
  return (
    <main className="main-page">
      <section>
        <OtpBackground />
      </section>
      <section>
        <OtpHeader />
        <OtpForm />
        <OtpFooter />
      </section>
    </main>
  );
};

export default OtpVerification;
