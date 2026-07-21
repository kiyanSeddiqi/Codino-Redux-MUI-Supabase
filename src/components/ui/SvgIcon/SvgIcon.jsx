import { useTheme } from "@emotion/react";

const icons = import.meta.glob("../../../assets/images/icons/*.svg", {
  query: "?react",
  import: "default",
  eager: true,
});

function SvgIcon({ name, size = 30, color = "inherit", accentColor }) {
  const theme = useTheme();
  const Svg = icons[`../../../assets/images/icons/${name}.svg`];

  return Svg ? (
    <>
      <Svg
        width={size}
        height={size}
        style={{
          color,
          "--accent-clr": accentColor ?? theme.palette.iconAccent,
          transition: "0.2s ease",
        }}
      />
    </>
  ) : null;
}

export default SvgIcon;
