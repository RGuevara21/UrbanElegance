import React from "react";

import OtpVerificationLogo from "../../Assets/backgrounds/user-auth-backgrounds/otp_verification.jpg";
const OtpBackground = () => {
  return (
    <>
      <div className="image-background">
        <img
          src={OtpVerificationLogo}
          alt="OTP Verification Background"
          className="otp-verification-background"
        />
      </div>
    </>
  );
};

export default OtpBackground;
