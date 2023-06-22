// define variables
let topMiles = document.getElementById("topMiles");
let bottomKm = document.getElementById("bottomKm");
let rate;
// create function to convert miles to kilometer
function solveBottomKm(topMilesValue, rate = "1.6") {
  bottomKm.value = topMiles.value * rate;
}
// create function to convert kilometers to miles
function solveTopMiles(kmBottomValue, rate = "0.625") {
  topMiles.value = bottomKm.value * rate;
}
