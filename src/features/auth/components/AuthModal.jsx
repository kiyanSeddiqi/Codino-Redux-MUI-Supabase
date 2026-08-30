import { Dialog } from "@mui/material";
import Logo from "../../../components/ui/Logo/Logo";

import { useState } from "react";
import { authModalDialog } from "../styles/authStyles";
import { useDispatch } from "react-redux";
import { closeAuthModal } from "../redux/authSlice";
import RegisterForm from "./RegisterForm";
import OtpStep from "./OtpStep";
import LoginForm from "./LoginForm";
import PasswordRecovery from "./PasswordRecovery";

function AuthModal({ isOpen }) {
  const [step, setStep] = useState("identifier");
  const [loginType, setLoginType] = useState("email");
  const [identifier, setIdentifier] = useState("");
  const [identifierType, setIdentifierType] = useState("email");
  const [userId, setUserId] = useState(null);
  const [demoOtp, setDemoOtp] = useState("");

  const dispatch = useDispatch();

  function handleClose() {
    setStep("identifier");
    setLoginType("email");
    setIdentifier("");
    setIdentifierType("email");
    setUserId(null);
    setDemoOtp("");

    dispatch(closeAuthModal());
  }

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        disableScrollLock
        disableRestoreFocus
        sx={authModalDialog}
      >
        <Logo />
        {(step === "identifier" || step === "password") && (
          <LoginForm
            step={step}
            setStep={setStep}
            loginType={loginType}
            setLoginType={setLoginType}
            setIdentifier={setIdentifier}
            setIdentifierType={setIdentifierType}
            setDemoOtp={setDemoOtp}
            setUserId={setUserId}
          />
        )}
        {step === "recovery" && (
          <PasswordRecovery
            setStep={setStep}
            identifier={identifier}
            onClose={handleClose}
          />
        )}
        {step === "otp" && (
          <OtpStep
            setStep={setStep}
            identifier={identifier}
            onClose={handleClose}
            demoOtp={demoOtp}
            setDemoOtp={setDemoOtp}
            userId={userId}
          />
        )}
        {step === "register" && (
          <RegisterForm
            setStep={setStep}
            identifier={identifier}
            identifierType={identifierType}
            onClose={handleClose}
          />
        )}
      </Dialog>
    </>
  );
}

export default AuthModal;
