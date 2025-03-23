let homeScoreDisp = document.getElementById("home-score");
let guestScoreDisp = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

// Home Score

function homePlusOne() {
  homeScore += 1;
  homeScoreDisp.textContent = homeScore;
}

function homePlustwo() {
  homeScore += 2;
  homeScoreDisp.textContent = homeScore;
}

function homePlusthree() {
  homeScore += 3;
  homeScoreDisp.textContent = homeScore;
}

// Guest Score

function guestPlusOne() {
  guestScore += 1;
  guestScoreDisp.textContent = guestScore;
}

function guestPlustwo() {
  guestScore += 2;
  guestScoreDisp.textContent = guestScore;
}

function guestPlusthree() {
  guestScore += 3;
  guestScoreDisp.textContent = guestScore;
}
