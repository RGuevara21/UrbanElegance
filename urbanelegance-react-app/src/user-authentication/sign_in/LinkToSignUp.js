const SignInRedirection = () => {
  const redirectionHeading = "Don't have an account?";

  return (
    <>
      <header className="main-page-header">
        <div className="right-side-heading">
          <h2 className="redirection-heading">{redirectionHeading}</h2>
          <a href="/a.js" className="hyperlink">
            Sign Up
          </a>
        </div>
      </header>
    </>
  );
};

export default SignInRedirection;
