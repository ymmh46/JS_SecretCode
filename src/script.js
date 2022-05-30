//===Varibles===//

//Player Flex Elements
var avatar = document.getElementById("avatar");

//StartUp Flex Elements
var StartUp = document.getElementById("StartUp").classList; //StartUp Flex classList
var players = document.getElementById("players"); //遊玩人數
var playerLabel = document.getElementById("playerLabel").classList;
var playerWrap = document.getElementById("playerWrap").classList;
var start = document.getElementById("start"); //開始遊玩按鈕

//Playing Flex Elements
var Playing = document.getElementById("Playing").classList; //Playing Flex classList
var PlayingPlayer = document.getElementById("PlayingPlayer"); //Playing Player
var range = document.getElementById("range"); //display range
var ansLabel = document.getElementById("ansLabel").classList;
var ansWrap = document.getElementById("ansWrap").classList;
var yourAns = document.getElementById("yourAns"); //玩家填的答案
var sendAns = document.getElementById("sendAns"); //送出答案按鈕

//EndGame Flex Elements
var EndGame = document.getElementById("EndGame").classList; //EndGame Flex classList
var EndPlayer = document.getElementById("EndPlayer"); //Playing Player
var playAgain = document.getElementById("playAgain"); //再玩一次按鈕

//Other Variables
var current; //當前玩家編號
var correctAns; //正確答案
var min; //最小值
var max; //最大值

//===Startup Functions===//

//Trigger Players Input Field to btn
players.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        start.click();
    }
});

//start btn Function
start.addEventListener("click", function () {
    if (parseInt(players.value) < 1 || parseInt(players.value) > 5 || players.value == "") {
        StartUpTealToRed();
    } else {
        current = 1;
        correctAns = Math.floor(Math.random() * 101);
        min = 0;
        max = 100;
        StartUp.replace("flex", "hidden");
        Playing.replace("hidden", "flex");
        range.innerText = "範圍：" + min + " - " + max;
        PlayingPlayer.innerText = "#Player" + current;
        avatar.src = "/assets/p" + current + ".jpg";
    }
});

function StartUpTealToRed() {
    playerLabel.replace("text-gray-300", "text-red-400");
    playerWrap.replace("border-teal-500", "border-red-400");
    start.classList.replace("bg-teal-500", "bg-red-400");
    start.classList.replace("hover:bg-teal-700", "hover:bg-red-600");
    start.classList.replace("border-teal-500", "border-red-400");
    start.classList.replace("hover:border-teal-700", "hover:border-red-600");
}

function StartUpRedToTeal() {
    playerLabel.replace("text-red-400", "text-gray-300");
    playerWrap.replace("border-red-400", "border-teal-500");
    start.classList.replace("bg-red-400", "bg-teal-500");
    start.classList.replace("hover:bg-red-600", "hover:bg-teal-700");
    start.classList.replace("border-red-400", "border-teal-500");
    start.classList.replace("hover:border-red-600", "hover:border-teal-700");
}

//===Playing Page Functions===//

//Trigger Players Input Field to btn
yourAns.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendAns.click();
    }
});

//sendAns btn Function
sendAns.addEventListener("click", function () {
    if (
        parseInt(yourAns.value) < min ||
        parseInt(yourAns.value) > max ||
        yourAns.value == ""
    ) {
        PlayingTealToRed();
        console.log("輸入錯誤");
    } else if (parseInt(yourAns.value) != correctAns) {
        PlayingRedToTeal();
        refreshRange();
        console.log("Range:" + min + "~" + max);
        changePlayer();
        console.log("Now:" + current);
    } else {
        PlayingRedToTeal();
        EndPlayer.innerText = "#Player" + current;
        Playing.replace("flex", "hidden");
        EndGame.replace("hidden", "flex");
    }
    yourAns.value = "";
});

//Refresh Range Function
function refreshRange() {
    if (parseInt(yourAns.value) < correctAns) {
        min = parseInt(yourAns.value) + 1;
    } else {
        max = parseInt(yourAns.value) - 1;
    }
    range.innerText = "範圍：" + min + " - " + max;
}

function changePlayer() {
    if (current != parseInt(players.value)) {
        current++;
    } else {
        current = 1;
    }
    PlayingPlayer.innerText = "#Player" + current;
    avatar.src = "/assets/p" + current + ".jpg";
}

function PlayingTealToRed() {
    ansLabel.replace("text-gray-300", "text-red-400");
    ansWrap.replace("border-teal-500", "border-red-400");
    sendAns.classList.replace("bg-teal-500", "bg-red-400");
    sendAns.classList.replace("hover:bg-teal-700", "hover:bg-red-600");
    sendAns.classList.replace("border-teal-500", "border-red-400");
    sendAns.classList.replace("hover:border-teal-700", "hover:border-red-600");
}

function PlayingRedToTeal() {
    ansLabel.replace("text-red-400", "text-gray-300");
    ansWrap.replace("border-red-400", "border-teal-500");
    sendAns.classList.replace("bg-red-400", "bg-teal-500");
    sendAns.classList.replace("hover:bg-red-600", "hover:bg-teal-700");
    sendAns.classList.replace("border-red-400", "border-teal-500");
    sendAns.classList.replace("hover:border-red-600", "hover:border-teal-700");
}

//===End Page Function===/

//playAgain btn Function
playAgain.addEventListener("click", function () {
    StartUpRedToTeal();
    players.value = "";
    EndGame.replace("flex", "hidden");
    StartUp.replace("hidden", "flex");
});
