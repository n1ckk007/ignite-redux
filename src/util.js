// media resize
export const smallImage = (imagePath, size) => {
  // check the path of the url, match it so if it matches media screenshots replace it
  let image;
  if (imagePath) {
    image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("/media/games", `/media/resize/${size}/-/games`);
  } else {
    image = imagePath;
  }
  return image;
};
