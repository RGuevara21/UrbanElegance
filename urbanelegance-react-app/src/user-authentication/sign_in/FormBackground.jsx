import SignInLogo from "./page-background/sign-in.jpg";

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
