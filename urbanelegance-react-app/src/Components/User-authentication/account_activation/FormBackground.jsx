import React from "react";
import AccountActivationLogo from "../../Assets/backgrounds/user-auth-backgrounds/account_activation.jpg";

const AccActBackground = () => {
  return (
    <>
      <div className="image-background">
        <img
          src={AccountActivationLogo}
          alt="Account Activation Background"
          className="account-activation-background"
        />
      </div>
    </>
  );
};

export default AccActBackground;
