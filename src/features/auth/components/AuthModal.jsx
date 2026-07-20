import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  InputBase,
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
import LoginIdentifier from "./LoginIdentifier";
import LoginPasswordStep from "./LoginPasswordStep";
import PasswordRecoveryStep from "./PasswordRecoveryStep";
import OtpStep from "./OtpStep";

function AuthModal({ isOpen }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [mode, setMode] = useState("login");
  const [step, setStep] = useState("identifier");
  const [showPassForm, setShowPassForm] = useState(false);
  const [showPassRecovery, setShowPassRecovery] = useState(false);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => dispatch(closeAuthModal())}
        sx={authModalDialog}
        disableScrollLock
      >
        <Logo />
        {step === "identifier" && <LoginIdentifier setStep={setStep} />}
        {step === "password" && <LoginPasswordStep setStep={setStep} />}
        {step === "recovery" && <PasswordRecoveryStep setStep={setStep} />}
        {step === "otp" && <OtpStep setStep={setStep} />}

        {mode === "register" && <RegisterForm setMode={setMode} />}
      </Dialog>
    </>
  );
}

export default AuthModal;
