export const TitleConverter = ({ frontmatter, headings, fileAbsolutePath }) => {
  const splitPath = fileAbsolutePath.split("/");
  let fileName = splitPath.pop().replace(/(.mdx|.md)$/gm, "");

  //If the filename is index.mdx, use the name of it's directory instead.
  if (fileName === "index") {
    fileName = splitPath[splitPath.length - 1];
  }

  const frontMatterTitle =
    frontmatter && frontmatter.title ? frontmatter.title : null;
  const headingsTitle =
    headings && headings.length > 0 ? headings[0].value : null;

  //Classic title rule.
  return frontMatterTitle || headingsTitle || fileName;
};

export const UrlConverter = ({ fileAbsolutePath }) => {
  return fileAbsolutePath
    .slice(fileAbsolutePath.indexOf("/content/") + 8, fileAbsolutePath.length)
    .replace(/(.mdx.md|.md|.mdx|index.mdx)$/gm, "");
};

//NOTE(Rejon): This won't work if the locale is more than 2 characters (en vs enGB)
export const getLocaleFromPath = (path) =>
  path
    .slice(path.indexOf("/content/") + 8, path.indexOf("/content/") + 11)
    .replace(/^\//g, "");

export const getInitialLocale = (locales, DEFAULT_LOCALE) => {
  let initialLocale = DEFAULT_LOCALE;

  if (typeof window === `undefined`) {
    return DEFAULT_LOCALE;
  }

  //Check browser settings for current language.
  const [browserSetting] = navigator.language.split("-");

  //If it is and it exists in the content directory, we've got a valid locale.
  if (locales.indexOf(browserSetting) !== -1) {
    initialLocale = browserSetting;
  }

  return initialLocale;
};

//Check if a Hex Color passes luminance check
//TLDR: If text on a background (hex) should be white or black based on luminance.
//Taken from: https://stackoverflow.com/a/41491220
export const HexLuminanceCheck = (hex) => {
  var color = hex.charAt(0) === "#" ? hex.substring(1, 7) : hex;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  var uicolors = [r / 255, g / 255, b / 255];
  var c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L > 0.179;
};

//Taken from: https://stackoverflow.com/a/24390910
export const colorToRGBA = (color) => {
  // Returns the color as an array of [r, g, b, a] -- all range from 0 - 255
  // color must be a valid canvas fillStyle. This will cover most anything
  // you'd want to use.
  // Examples:
  // colorToRGBA('red')  # [255, 0, 0, 255]
  // colorToRGBA('#f00') # [255, 0, 0, 255]

  //NOTE(Rejon): If the window doesn't exist, just return an empty array.
  //             This is to get around build issues.
  if (typeof window === `undefined`) {
    return [0, 0, 0, 0];
  }

  var cvs, ctx;
  cvs = document.createElement("canvas");
  cvs.height = 1;
  cvs.width = 1;
  ctx = cvs.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  return ctx.getImageData(0, 0, 1, 1).data;
};

//Taken from: https://stackoverflow.com/a/24390910
export const byteToHex = (num) => {
  // Turns a number (0-255) into a 2-character hex number (00-ff)
  return ("0" + num.toString(16)).slice(-2);
};

//Taken from: https://stackoverflow.com/a/24390910
export const colorToHex = (color) => {
  // Convert any CSS color to a hex representation
  // Examples:
  // colorToHex('red')            # '#ff0000'
  // colorToHex('rgb(255, 0, 0)') # '#ff0000'
  var rgba, hex;
  rgba = colorToRGBA(color);
  hex = [0, 1, 2]
    .map(function (idx) {
      return byteToHex(rgba[idx]);
    })
    .join("");
  return "#" + hex;
};

// Capitalize each word
export const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// helper-function to insert comma as separators every 3 digits
export const formatNumber = (num) => {
  return Math.round(num)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
