let homeScoreEl = document.getElementById("home-score-el")
let homeScore = 0
let guestScoreEl = document.getElementById("guest-score-el")
let guestScore = 0

//console.log(homeScoreEl)
function homeOnePointer(){
    homeScore += 1;
    homeScoreEl.textContent = homeScore
}
function homeTwoPointer(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore
}
function homeThreePointer(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore
}

function guestOnePointer(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore
}
function guestTwoPointer(){
    guestScore += 2;
    guestScoreEl.textContent = guestScore
}
function guestThreePointer(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore
}

function newGame(){
     homeScore = 0
     homeScoreEl.textContent = homeScore
     guestScore = 0
     guestScoreEl.textContent = guestScore
}