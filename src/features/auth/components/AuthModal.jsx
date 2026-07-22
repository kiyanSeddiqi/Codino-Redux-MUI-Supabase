import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  InputBase,
  stepContentClasses,
  Typography,
  useTheme,
} from "@mui/material";
import Logo from "../../../components/ui/Logo/Logo";

import { useState } from "react";
import SvgIcon from "../../../components/ui/SvgIcon/SvgIcon";
import {
  authMethodSlider,
  authModalBox,
  authModalDialog,
  authModalForm,
  authModalInput,
  authModalSwitchBox,
  authModalSwitchBtn,
  formErrorLabel,
  formLabel,
  formPasswordIcon,
} from "../styles/authStyles";
import { useDispatch } from "react-redux";
import { closeAuthModal } from "../redux/authSlice";
import RegisterForm from "./RegisterForm";
import { useLogin } from "../hooks/useLogin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/registerSchema";
import { flexBox, flexCol } from "../../../styles/globalStyles";
import { ChevronRight, Visibility, VisibilityOff } from "@mui/icons-material";
import LoginIdentifier from "./LoginForm";
import LoginPasswordStep from "./LoginPasswordStep";
import PasswordRecoveryStep from "./PasswordRecoveryStep";
import OtpStep from "./OtpStep";
import LoginForm from "./LoginForm";

function AuthModal({ isOpen }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [step, setStep] = useState("identifier");
  const [loginType, setLoginType] = useState("email");

  function handleClose() {
    setStep("identifier");
    setLoginType("email");
    dispatch(closeAuthModal());
  }

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        sx={authModalDialog}
        disableScrollLock
      >
        <Logo />
        {(step === "identifier" || step === "password") && (
          <LoginForm
            key={loginType}
            step={step}
            setStep={setStep}
            loginType={loginType}
            setLoginType={setLoginType}
          />
        )}
        {step === "recovery" && <PasswordRecoveryStep setStep={setStep} />}
        {step === "otp" && <OtpStep setStep={setStep} />}
        {step === "register" && <RegisterForm setStep={setStep} />}
      </Dialog>
    </>
  );
}

export default AuthModal;
