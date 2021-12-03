function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let git1 = randomInteger(1, 6);
let git2 = randomInteger(1, 6);
let tet1 = document.getElementById("11");
let tet2 = document.getElementById("12");
let tet3 = document.getElementById("13");
let tet4 = document.getElementById("14");
let tet5 = document.getElementById("15");
let tet6 = document.getElementById("16");
let xtet1 = document.getElementById("21");
let xtet2 = document.getElementById("22");
let xtet3 = document.getElementById("23");
let xtet4 = document.getElementById("24");
let xtet5 = document.getElementById("25");
let xtet6 = document.getElementById("26");
let win1 = document.getElementById("winf")
let win2 = document.getElementById("wins")
let draw = document.getElementById("draw")
draw.style.display = (git1 == git2) ? "block" : "none";
winf.style.display = (git1 > git2) ? "block" : "none";
wins.style.display = (git2 > git1) ? "block" : "none";
if (git1 == 1) {
	tet1.style.display = "block";
} else if (git1 == 2) {
	tet2.style.display = "block";
} else if (git1 == 3) {
	tet3.style.display = "block";
} else if (git1 == 4) {
	tet4.style.display = "block";
} else if (git1 == 5) {
	tet5.style.display = "block";
} else if (git1 == 6) {
	tet6.style.display = "block";
}
if (git2 == 1) {
	xtet1.style.display = "block";
} else if (git2 == 2) {
	xtet2.style.display = "block";
} else if (git2 == 3) {
	xtet3.style.display = "block";
} else if (git2 == 4) {
	xtet4.style.display = "block";
} else if (git2 == 5) {
	xtet5.style.display = "block";
} else if (git2 == 6) {
	xtet6.style.display = "block";
}
