// 사용할 Dom 먼저 선언하기
const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const messageDisplay = document.querySelector("#message")
const GAME_TIME = 5;

let words = ["banana", "key", "car", "javascript", "sohui"]
let score = 0
let time = 0;
let timeInterval;
let isPlaying = false;

time = GAME_TIME;


wordInput.addEventListener("input", e =>{
    const typedText = e.target.value;
    const currentText = currentWord.innerText;
    if(typedText.toUpperCase() === currentText.toUpperCase()){
        addScore()
        setNewWord()
    }
})

//게임 종료
function gameover(){
    console.log("game over")
    isPlaying = false;
    clearInterval(timeInterval)
    timeInterval = null
    messageDisplay.innerText = "GAME OVER!"
    score = 0;
}

//시간 카운트다운
function countDown(){
    console.log(time)
    time = time -1;
    timeDisplay.innerText = time;
    //time = 0 일 때는 끝
    if(time === 0){
        gameover();
    }
}

function setNewWord(){
    time = GAME_TIME;
    wordInput.value = "";
    messageDisplay.innerText = "Now Playing...!"
    const randomIndex = Math.floor(Math.random()* words.length);
    currentWord.innerText = words[randomIndex]

    if(!isPlaying){
        timeInterval = setInterval(countDown, 1000) // 1초마다 시간이 줄어들게끔!
        isPlaying = true;
    }
}

function addScore(){
    score = score + 1;
    scoreDisplay.innerText = score
}