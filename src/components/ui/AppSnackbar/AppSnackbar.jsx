import { Alert, Slide, Snackbar, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackbar } from "../../../redux/store/slices/notificationSlice";
import { appSnackAlert } from "./snackbarStyles";
import {
  Error,
  GppBad,
  Info,
  TaskAlt,
  WarningAmber,
} from "@mui/icons-material";

function AppSnackbar() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { open, message, severity } = useSelector(
    (state) => state.notification,
  );

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;

    dispatch(hideSnackbar());
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slots={{
          transition: Slide,
        }}
        slotProps={{
          transition: {
            direction: "left",
            timeout: {
              enter: 300,
              exit: 220,
            },
          },
        }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          iconMapping={{
            success: <TaskAlt />,
            error: <GppBad />,
            warning: <WarningAmber />,
            info: <Info />,
          }}
          variant="standard"
          sx={appSnackAlert(theme, severity)}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default AppSnackbar;
