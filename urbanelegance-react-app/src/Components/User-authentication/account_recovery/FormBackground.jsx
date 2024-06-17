import React from "react";

import AccountRecoveryLogo from "../../Assets/backgrounds/user-auth-backgrounds/forgot_password.jpg";

const AccRecBackground = () => {
  return (
    <>
      <div className="image-background">
        <img
          src={AccountRecoveryLogo}
          alt="Forgot Password Background"
          className="forgot-password-background"
        />
      </div>
    </>
  );
};

export default AccRecBackground;
