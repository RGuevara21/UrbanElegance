import React from "react";
import { Link } from "react-router-dom";

const OtpForm = () => {
  const mainHeading = "UrbanElegance: OTP Verification";

  const mainDescription =
    "An OTP (One Time Pin) has already been sent to your email address.";

  return (
    <>
      <div className="form-layout">
        <div className="form-texts">
          <h1 className="main-heading">{mainHeading}</h1>
          <span className="main-description">{mainDescription}</span>
        </div>

        <form action="#" className="sign-in-form">
          <div className="form-input-fields">
            {/* OTP Verification Requirements */}

            {/* Text Digit 1 Input Field */}
            <input type="text" className="otp-digit-1" placeholder="0" />

            {/* Text Digit 2 Input Field */}
            <input type="text" className="otp-digit-2" placeholder="0" />

            {/* Text Digit 3 Input Field */}
            <input type="text" className="otp-digit-3" placeholder="0" />

            {/* Text Digit 4 Input Field */}
            <input type="text" className="otp-digit-4" placeholder="0" />

            {/* Text Digit 5 Input Field */}
            <input type="text" className="otp-digit-5" placeholder="0" />

            {/* Text Digit 6 Input Field */}
            <input type="text" className="otp-digit-6" placeholder="0" />

            <div className="form-sign-in">
              <Link to="/SignIn" className="forgot-password">
                Cancel Request
              </Link>
            </div>
            <div className="form-action-button">
              <button type="submit" className="sign-in-button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default OtpForm;
