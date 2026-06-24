import { useTheme } from "@emotion/react";

const icons = import.meta.glob("../../../assets/images/icons/*.svg", {
  query: "?react",
  import: "default",
  eager: true,
});

function SvgIcon({ name, size = 30, color = "inherit" }) {
  const theme = useTheme();
  const Svg = icons[`../../../assets/images/icons/${name}.svg`];

  return Svg ? (
    <>
      <Svg
        width={size}
        height={size}
        style={{
          color,
          "--accent-clr": theme.palette.iconAccent,
          transition: "all 0.3s ease",
        }}
      />
    </>
  ) : null;
}

export default SvgIcon;
