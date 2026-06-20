import { useTheme } from "@emotion/react";

const icons = import.meta.glob("../../assets/images/icons/*.svg", {
  query: "?react",
  import: "default",
  eager: true,
});

function SvgIcon({ name, size = 30 }) {
  const theme = useTheme();
  const Svg = icons[`../../assets/images/icons/${name}.svg`];

  return Svg ? (
    <>
      <Svg
        width={size}
        height={size}
        style={{
          color: theme.palette.primary.main || "inherit",
          "--accent-clr": theme.palette.iconAccent,
        }}
      />
    </>
  ) : null;
}

export default SvgIcon;
