const files = import.meta.glob(
  "../assets/images/Products/*.{webp,png,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  },
);

export const productsImgs = Object.fromEntries(
  Object.entries(files).map(([path, image]) => [
    path.split("/").pop().split(".")[0],
    image,
  ]),
);
