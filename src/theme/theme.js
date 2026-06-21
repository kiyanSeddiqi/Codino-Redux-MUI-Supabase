import { createTheme } from "@mui/material";

const getTheme = (mode) => {
  const isDark = mode === "dark";
  return createTheme({
    palette: {
      mode,
      iconAccent: isDark ? "#ff4aff" : "#ff0eff",
      menuItemBg: isDark ? "#bb86fc24" : "#6700e512",
      primary: {
        main: isDark ? "#BB86FC" : "#6700E5",
      },
      secondary: {
        main: isDark ? "#C6B3FF" : "#B388FF",
        light: "#D9CCFF",
        dark: "#B09AFF",
        contrastText: "#160949",
      },
      text: {
        primary: isDark ? "#F5F5F7" : "#1E1E1E",
        secondary: isDark ? "#A8A8C0" : "#4A4A55",
      },
      background: {
        default: isDark ? "#292A33" : "#F6F4FF",
        paper: isDark ? "#1A1A26" : "#FFFFFF",
      },
      divider: isDark ? "#494b55" : "#d7d4ec",
    },
    accent: { main: "#ff4aff" },
    success: { main: "#4CAF50" },
    warning: { main: "#FFB300" },
    error: { main: "#F44336" },
    // direction: "rtl",
    typography: {
      fontFamily: `"Vazirmatn","sans-serif"`,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "contained",
          disableFocusRipple: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: 10,
            "&.Mui-focusVisible": {
              outline: "2px solid #C6B3FF",
              outlineOffset: "0px",
            },
            gap: "8px",
            lineHeight: "1.5",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? "#1A1A26" : "#FFFFFF",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#C6B3FF",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: isDark ? "#2A2A3A" : "#E2DFF5",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: isDark ? "#3A3A52" : "#C8C2EE",
            },
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "xl",
          disableGutters: true,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            paddingLeft: "20px",
            paddingRight: "20px",
            [theme.breakpoints.up("lg")]: {
              paddingLeft: "16px",
              paddingRight: "16px",
            },
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          a: {
            textDecoration: "none",
            borderRadius: "4px",
            color: "inherit",
          },

          "*:focus": {
            outline: "none",
          },

          "*:focus-visible": {
            outline: "2px solid #C6B3FF",
            outlineOffset: "4px",
          },
        },
      },
    },
  });
};

export default getTheme;
