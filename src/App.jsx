import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useMemo } from "react";
import getTheme from "./theme/theme";
import { useSelector } from "react-redux";
import { router } from "./routes/router";
import AppSnackbar from "./components/ui/AppSnackbar/AppSnackbar";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  useEffect(() => {
    localStorage.setItem("app-theme", mode);
  }, [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        <AppSnackbar />
      </ThemeProvider>
    </>
  );
}

export default App;
