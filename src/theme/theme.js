import { createTheme } from "@mui/material";

const getTheme = (mode) => {
  const isDark = mode === "dark";
  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? "#BB86FC" : "#6700E5",
      },
      secondary: {
        main: "#D9CCFF",
        dark: "#B09AFF",
        contrastText: "#360077",
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
      iconAccent: isDark ? "#ff4aff" : "#ff0eff",
      bgAccent: isDark ? "#bb86fc24" : "#6700e512",
      accent: { main: "#ff4aff" },
      badgeWarning: {
        main: isDark ? "#ff9560" : "#b33b00",
        light: isDark ? "#54342B" : "#FFDECE",
      },
      badgeSuccess: {
        main: isDark ? "#08e9d6" : "#007e04",
        light: isDark ? "#00d0bf33" : "#CCF6F2",
      },
      bgDanger: isDark ? "#4D2B32" : "#F8D5D5",
      success: {
        main: "#22C55E",
      },
      warning: { main: "#F59E0B" },
      error: {
        main: isDark ? "#ff5050" : "#ec0606",
      },
      info: { main: "#3B82F6" },
    },
    typography: {
      fontFamily: `"Vazirmatn","Arial","sans-serif"`,
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
              outline: "1px solid #C6B3FF",
              outlineOffset: "0px",
            },
            gap: "8px",
            lineHeight: "1.5",
          },
        },
        variants: [
          {
            props: { variant: "contained", color: "primary" },
            style: {
              backgroundColor: "#6700E5",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#5a00cc",
              },
            },
          },
        ],
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
      MuiTooltip: {
        defaultProps: {
          arrow: true,
          placement: "top",
        },
        styleOverrides: {
          tooltip: {
            fontSize: "14px",
            backgroundColor: "background.default",
            fontWeight: 400,
          },
          arrow: {
            color: "background.default",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
            padding: "4px 8px",
            fontSize: "12px",
            height: "auto",
            display: "flex",
            border: "1px solid transparent",
            gap: 4,
            "& .MuiChip-label": {
              padding: 0,
            },
          },
          colorSuccess: ({ theme }) => ({
            backgroundColor: theme.palette.badgeSuccess.light,
            color: theme.palette.badgeSuccess.main,
          }),
          colorWarning: ({ theme }) => ({
            backgroundColor: theme.palette.badgeWarning.light,
            color: theme.palette.badgeWarning.main,
          }),
          colorNormal: ({ theme }) => ({
            backgroundColor: theme.palette.bgAccent,
            color: theme.palette.primary.light,
          }),
          outlined: ({ theme }) => ({
            backgroundColor: "transparent",
            border: `1px solid ${theme.palette.divider}`,
          }),
        },
      },
    },
  });
};

export default getTheme;
