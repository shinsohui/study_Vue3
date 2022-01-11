const inputText = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list")

const likeButtons = document.querySelectorAll(".like")

// likeButtons.forEach(like => {
//     like.addEventListener("click", ()=>{
//         console.log('clicked')
//     })
// })

function addItem(){
    // 빈 내용일 때는 작성되지 못하게 하기 위함
    // trim() 공백을 제거해주는 함수 -> 스페이스바를 치고 등록되는 것 방지
    if(inputText.value.trim()  === "") return;

    //like
    const like = document.createElement("span");
    const likeIcon = document.createElement("i");
    like.classList.add("like");
    likeIcon.classList.add("material-icons");
    likeIcon.innerText = "favorite_border";
    like.appendChild(likeIcon);

    // item
    const item = document.createElement("span");
    item.classList.add("item")
    item.innerText = inputText.value;

    // manage
    const manage = document.createElement("span");
    const checkIcon = document.createElement("i");
    const clearIcon = document.createElement("i");
    checkIcon.classList.add("material-icons", "check");
    clearIcon.classList.add("material-icons", "clear");
    checkIcon.innerText = "check"
    clearIcon.innerText = "clear"
    manage.classList.add("manage")
    manage.appendChild(checkIcon)
    manage.appendChild(clearIcon)

    const li = document.createElement("li");

    //addEventListener를 동적으로 등록하기 위해 
    //event : 하트 클릭 시
    like.addEventListener("click", (e)=>{
        //like의 target을 확인하기 위해 일단 e 출력
        const target = e.target;

        //삼항 연산자 사용하기
        const text = target.innerText === "favorite" ? "favorite_border" : "favorite";
        target.innerText = text;
    })
    // 체크 클릭 시 Todo check
    checkIcon.addEventListener("click", (e)=>{
        // console로 찍으면 parentNode의 또 다시 parentNode가 "li"
        //인 것을 확인할 수 있음
        const target = e.target.parentNode.parentNode;
        target.classList.add("done");
    })
    // 클리어 클릭 시 삭제
    clearIcon.addEventListener("click", (e)=>{
        const target = e.target.parentNode.parentNode;
        list.removeChild(target)
    })

    li.appendChild(like)
    li.appendChild(item)
    li.appendChild(manage)
    list.appendChild(li)

    inputText.value = "";

    // 작성 후 텍스트 란에 커서가 맨 앞으로 움직이게 하기 위해
    inputText.focus()

}

inputText.addEventListener("keypress", e =>{
    if(e.keyCode === 13){
        addItem()
    }
})


addButton.addEventListener("click", addItem)

