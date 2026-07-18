import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  InputBase,
  Typography,
} from "@mui/material";
import Logo from "../../../components/ui/Logo/Logo";

import { useState } from "react";
import SvgIcon from "../../../components/ui/SvgIcon/SvgIcon";
import { authModalDialog } from "../styles/authStyles";
import { useDispatch } from "react-redux";
import { closeAuthModal } from "../redux/authSlice";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthModal({ isOpen }) {
  const [mode, setMode] = useState("register");
  const dispatch = useDispatch();
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => dispatch(closeAuthModal())}
        sx={authModalDialog}
        disableScrollLock
      >
        <Logo />
        {mode === "login" && <LoginForm />}
        {mode === "register" && <RegisterForm setMode={setMode} />}
      </Dialog>
    </>
  );
}

export default AuthModal;
