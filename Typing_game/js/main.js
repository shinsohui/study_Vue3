// 사용할 Dom 먼저 선언하기
const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const messageDisplay = document.querySelector("#message")

const GAME_TIME = 5;

const API_URL = "https://random-word-api.herokuapp.com/word?number=100";

let words = ["banana", "key", "car", "javascript", "sohui"]
let score = 0
let time = 0;
let timeInterval;
let isPlaying = false;
let isReady = false;

init()

// function init(){
//     //promise 문법
//     //return해주는 내용을 res로 넘겨받고 then을 이용해 다시 넘긴다.
//     //간결한 코드 사용을 위해 괄호, return 삭제
//     // const res = fetch(API_URL).then((res)=> {return res.json()}).then((data)=>console.log(data));
//     const res = fetch(API_URL).then(res => res.json()).then((data) => words = data);
// }

//async await (ES6 문법) 
// 비동기 함수 callback과 promise의 단점을 보완하기 위해 추가됨
async function init(){
    // fecth가 다 실행된 후에 res에 담김
    const res = await fetch(API_URL);
    const data = await res.json();
    words = data.filter(item => item.length < 7)
    isReady = true;
}

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
    //time가 0 일 때는 끝
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