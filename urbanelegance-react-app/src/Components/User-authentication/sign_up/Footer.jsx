import React from "react";

const SignUpFooter = () => {
  const footerHeading = "Sign Up to your account with: ";

  return (
    <>
      <footer className="main-page-footer">
        <div className="left-side-heading">
          <h3 className="footer-heading">{footerHeading}</h3>

          <button className="facebook">Facebook {/* Facebook Icon */}</button>
          <button className="instagram">
            Instagram {/* Instagram Icon */}
          </button>
          <button className="google">Google {/* Google Icon */}</button>
        </div>
      </footer>
    </>
  );
};

export default SignUpFooter;
