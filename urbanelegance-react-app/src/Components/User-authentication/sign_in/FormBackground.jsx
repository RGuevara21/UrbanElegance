import React from "react";

import SignInLogo from "../../Assets/backgrounds/user-auth-backgrounds/sign_in.jpg";

const SignInBackground = () => {
  return (
    <>
      <div className="image-background">
        <img
          src={SignInLogo}
          alt="Sign In Background"
          className="sign-in-background"
        />
      </div>
    </>
  );
};

export default SignInBackground;
