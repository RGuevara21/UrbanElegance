import React from "react";

/* ------------------------------------------------------------------------ */

// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Sign In Page
import SignIn from "./Pages/User-authentication/SignIn";

// Sign Up Page
import SignUp from "./Pages/User-authentication/SignUp";

// Account Recovery Page
import AccountRecovery from "./Pages/User-authentication/AccountRecovery";

// Account Activation Page
import AccountActivation from "./Pages/User-authentication/AccountActivation";

// Account Activated Page
import AccountActivated from "./Pages/User-authentication/AccountActivated";

// OTP Verification Page
import OtpVerification from "./Pages/User-authentication/OtpVerification";

// Change Credentials Page
import ChangeCredentials from "./Pages/User-authentication/ChangeCredentials";

/* ------------------------------------------------------------------------ */

// Main Function

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" index element={<SignIn />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AccountRecovery" element={<AccountRecovery />} />
        <Route path="/AccountActivation" element={<AccountActivation />} />
        <Route path="/AccountActivated" element={<AccountActivated />} />
        <Route path="/OtpVerification" element={<OtpVerification />} />
        <Route path="/ChangeCredentials" element={<ChangeCredentials />} />
      </Routes>
    </Router>
  );
};

export default App;
