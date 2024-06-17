import React from "react";

import ChangeCredLogo from "../../Assets/backgrounds/user-auth-backgrounds/change_credentials.jpg";
const ChangeCredBackground = () => {
  return (
    <>
      <div className="image-background">
        <img
          src={ChangeCredLogo}
          alt="Change Credentials Background"
          className="change-credentials-background"
        />
      </div>
    </>
  );
};

export default ChangeCredBackground;
