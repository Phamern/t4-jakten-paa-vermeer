//Page starts on this id section on load
function load() {
  window.location.href = "#pentomino-rectangel-start";
}

function toggleImage(pentomino) {
  if (pentomino.style.display === "none") {
    pentomino.style.display = "block";
  } else {
    pentomino.style.display = "none";
  }
}

function wPentomino() {
  var xAll = document.querySelectorAll('.w');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

function yPentomino() {
  var xAll = document.querySelectorAll('.y');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

function uPentomino() {
  var xAll = document.querySelectorAll('.u');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

function xPentomino() {
  var xAll = document.querySelectorAll('.x');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

function tPentomino() {
  var xAll = document.querySelectorAll('.t');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

function zPentomino() {
  var xAll = document.querySelectorAll('.z');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

function iPentomino() {
  var xAll = document.querySelectorAll('.i');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

function fPentomino() {
  var xAll = document.querySelectorAll('.f');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

function vPentomino() {
  var xAll = document.querySelectorAll('.v');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

function pPentomino() {
  var xAll = document.querySelectorAll('.p');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

function lPentomino() {
  var xAll = document.querySelectorAll('.l');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

function nPentomino() {
  var xAll = document.querySelectorAll('.n');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

const pentominoRectangelStory = document.getElementById("pentomino-rectangel-story");

pentominoRectangelStory.onclick = function () {
  if (innerWidth >= 1430) {
    return;
  }

  var xAll = document.querySelectorAll('.x');
  xAll.forEach(pentomino => toggleImage(pentomino));

  var xAll = document.querySelectorAll('.z');
  xAll.forEach(pentomino => toggleImage(pentomino));

  var xAll = document.querySelectorAll('.t');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

const pentominoRectangelWriter = document.getElementById("pentomino-rectangel-writer");

pentominoRectangelWriter.onclick = function () {
  if (innerWidth >= 1430) {
    return;
  }

  var xAll = document.querySelectorAll('.i');
  xAll.forEach(pentomino => toggleImage(pentomino));

  var xAll = document.querySelectorAll('.f');
  xAll.forEach(pentomino => toggleImage(pentomino));

  var xAll = document.querySelectorAll('.v');
  xAll.forEach(pentomino => toggleImage(pentomino));

}

const pentominoRectangelCode = document.getElementById("pentomino-rectangel-code");

pentominoRectangelCode.onclick = function () {
  if (innerWidth >= 1430) {
    return;
  }
  var xAll = document.querySelectorAll('.p');
  xAll.forEach(pentomino => toggleImage(pentomino));

  var xAll = document.querySelectorAll('.l');
  xAll.forEach(pentomino => toggleImage(pentomino));

  var xAll = document.querySelectorAll('.n');
  xAll.forEach(pentomino => toggleImage(pentomino));
}

const pentominoRectangelExcerpt = document.getElementById("pentomino-rectangel-excerpt");

pentominoRectangelExcerpt.onclick = function () {
  if (innerWidth >= 1430) {
    return;
  }

  var xAll = document.querySelectorAll('.w');
  xAll.forEach(pentomino => toggleImage(pentomino));

  var xAll = document.querySelectorAll('.y');
  xAll.forEach(pentomino => toggleImage(pentomino));

  var xAll = document.querySelectorAll('.u');
  xAll.forEach(pentomino => toggleImage(pentomino));

}
