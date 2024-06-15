import SignUpLogo from "./page_background/sign-up-background.jpg";

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
