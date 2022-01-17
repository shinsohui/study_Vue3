//DOM Document Object Model

// const title = document.getElementById("title");

//object화 
// console.log({title})

// title.style.color = "red"
// console.log({title})

// + script 삽입 시 head가 아닌 body의 하단에 삽입해야 하는 이유 !
// html은 순서대로 랜더링이 되므로 body에 영향을 미치지 못함

// const list = document.getElementsByClassName("list");
// console.log(title, list)

// querySelector -> 하나만 존재할 때 
const title = document.querySelector("#title"); // # 붙이기
const list = document.querySelector(".list");
const items = document.querySelectorAll(".item")
const btn = document.querySelector("#btn");
const naver = document.querySelector(".naver");

btn.innerText = "button"
title.style.backgroundColor = "green"

// innerHTML -> dom 안에 html을 삽입시키는 것
// title.innerHTML = "<input type = 'text'/ >"
title.innerHTML = "text" 

// title.innerText = "<input type = 'text'/ >"

// list.remove()
list.firstElementChild.remove();
list.lastElementChild.innerHTML = "<a>link</a>"

// querySelectorAll -> 여러개가 존재할 때
console.log(title, list, items)

// btn.addEventListener("행위", "작동의 내용")
btn.addEventListener("click", function(){
    alert("탕수육");
})

// event 객체를 사용하여 다양한 기능을 구현 가능
naver.addEventListener("click", (e) => {
    e.preventDefault(); // naver로 이동하는 것을 막아놓음
    console.log(e)
    alert("네이버!!!")
})