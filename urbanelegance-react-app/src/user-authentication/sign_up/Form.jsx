const SignUpForm = () => {
  const mainHeading = "Sign up to UrbanElegance";
  const mainDescription =
    "Fill out the fields in order to sign up an account to UrbanElegance store.";

  return (
    <>
      <div className="form-layout">
        <div className="form-texts">
          <h1 className="main-heading">{mainHeading}</h1>
          <span className="main-description">{mainDescription}</span>
        </div>

        <form action="#" className="sign-in-form">
          <div className="form-input-fields">
            {/* Sign Up Requirements */}

            {/* First Name Label and Input Field */}

            <label htmlFor="first-name" className="first-name">
              First Name
            </label>
            <input
              type="text"
              className="first-name"
              placeholder="First Name"
            />

            {/* Last Name Label and Input Field */}

            <label htmlFor="last-name" className="last-name">
              Last Name
            </label>
            <input type="text" className="last-name" placeholder="Last Name" />

            {/* Birthday Label and Input Field */}

            <label htmlFor="birthday" className="birthday">
              Birthday
            </label>

            <input type="date" className="birthday" />

            {/* Contact Number Label and Input Field */}

            <label htmlFor="contact-number" className="contact-number">
              Contact Number
            </label>
            <input type="phone" className="contact-number" />

            {/* Email Address Label and Input Field */}

            <label htmlFor="email" className="email-label">
              Email
            </label>
            <input
              type="text"
              className="email-input"
              placeholder="Enter email address"
            />

            {/* Password Name Label and Input Field */}

            <label htmlFor="password" className="password-label">
              Password
            </label>
            <input type="text" className="password-input" />
          </div>

          <div className="form-account-recovery">
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <div className="form-action-button">
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
