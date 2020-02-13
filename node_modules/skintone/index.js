
/*
 * Pulled into a separate npm module from
 * https://github.com/pa7/nude.js/blob/master/noworker.nude.js
 * by Param Aggarwal (http://paramaggarwal.com)
 * 
 * Original License:
 * Nude.js - Nudity detection with Javascript and HTMLCanvas
 * 
 * Author: Patrick Wied ( http://www.patrick-wied.at )
 * Version: 0.1  (2010-11-21)
 * License: MIT License
 */


function isSkin (r, g, b) {

  // classify based on RGB
  var rgbClassifier = ((r > 95) && (g > 40 && g < 100) && (b > 20) && ((Math.max(r, g, b) - Math.min(r, g, b)) > 15) && (Math.abs(r - g) > 15) && (r > g) && (r > b));

  // classify based on normalized RGB
  var sum = r + g + b;
  var nr = (r / sum),
    ng = (g / sum),
    nb = (b / sum),
    normRgbClassifier = (((nr / ng) > 1.185) && (((r * b) / (Math.pow(r + g + b, 2))) > 0.107) && (((r * g) / (Math.pow(r + g + b, 2))) > 0.112));

  // classify based on hue
  var h = 0,
    mx = Math.max(r, g, b),
    mn = Math.min(r, g, b),
    dif = mx - mn;

  if (mx == r) {
    h = (g - b) / dif;
  } else if (mx == g) {
    h = 2 + ((g - r) / dif)
  } else {
    h = 4 + ((r - g) / dif);
  }
  h = h * 60;
  if (h < 0) {
    h = h + 360;
  }
  var s = 1 - (3 * ((Math.min(r, g, b)) / (r + g + b)));
  var hsvClassifier = (h > 0 && h < 35 && s > 0.23 && s < 0.68);

  // match either of the classifiers
  return (rgbClassifier || normRgbClassifier || hsvClassifier); // 
}

module.exports = isSkin;