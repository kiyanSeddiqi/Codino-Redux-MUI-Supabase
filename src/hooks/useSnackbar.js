import { useDispatch } from "react-redux";
import { showSnackbar } from "../redux/store/slices/notificationSlice";

export const useSnackbar = () => {
  const dispatch = useDispatch();

  const success = (message) => {
    dispatch(showSnackbar({ message, severity: "success" }));
  };

  const error = (message) => {
    dispatch(showSnackbar({ message, severity: "error" }));
  };

  const warning = (message) => {
    dispatch(showSnackbar({ message, severity: "warning" }));
  };

  const info = (message) => {
    dispatch(showSnackbar({ message, severity: "info" }));
  };

  return {
    success,
    error,
    warning,
    info,
  };
};
