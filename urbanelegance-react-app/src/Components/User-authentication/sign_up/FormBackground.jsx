import React from "react";

import SignUpLogo from "../../Assets/backgrounds/user-auth-backgrounds/sign_up.jpg";

const SignUpBackground = () => {
  return (
    <>
      <div className="image-background">
        <img
          src={SignUpLogo}
          alt="Sign Up Background"
          className="sign-up-background"
        />
      </div>
    </>
  );
};

export default SignUpBackground;
