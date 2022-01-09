console.log("hello javascript")
// alert("hello")

// var, let, const
// var 과거에 많이 사용했던 변수 선언 키워드
// ES6 발표 이후 let, const를 사용 -> var는 global 변수
// 변경 위치를 탐색할 수 없어 var를 사용하지 않게 됨

// ex 
// var name = "sohui"

// for(var i = 0; i<10; i++){
//     var name = "sohui"
//     var engName = "sxhxx"
// }

// console.log(name, engName)

// for문 안에서 선언된 var는 for문 안에서만 쓰여야 하는데
// 밖에서 console로 찍히게 됨 

// let은 언제 쓰는가 ? 
// 어떠한 변수 값의 변경이 빈번할 때 사용
// 변수 값의 재정의가 필요하다고 판단될 때 
let score = 0;

score = score + 1;

console.log(score)

//const는 언제 사용하는가 ? 
// 값의 변화를 일으킬 필요가 없을 때
// const name = "sohui"
// name = "sohuii"

// console.log(name)

// let은 block 안에서 생성됐을 때는 밖에서 호출 불가
// block 밖에서 생성됐을 때는 안에서 호출 가능
// 즉 let, const는 블럭 단위로 생성된다.
let eng = "blcok"
{
    console.log(eng)
}

// String, Number, boolean, null, undefined, symbol
// symbol은 가장 최근에 추가된 데이터 타입

// String - 문자열
const name = "sohui";
const age = 30;
const isMale = true;
const isFemale = false;
let money = null;
let girlFriend = undefined; // 값이 선언되지 않은 상태

// typeof -> 데이터의 타입을 확인할 수 있음
console.log(typeof isMale)

console.log(name, age, isMale)

console.log("my name is" + name + "and i am" + age)

//ES6 이후에는 템플릿 문법인 backtick을 사용해
//불필요한 + 기호를 사용하지 않아도 된다.

console.log(`내 이름은 ${name}이고 나이는 ${age}입니다.`)

// substring을 사용하여 문자열 자르기
// const animal = "tiger";
// console.log(animal.substring(0, 2))

// split()을 사용하여 문자열 자르기
// let fruits = "사과, 딸기, 포도, 참외";
// fruits = fruits.split(", ");
// console.log(fruits)
// console.log(fruits[2])

// array
// js는 문자열과 숫자를 혼합한 배열 생성이 가능 
// const animals = ["lion", "rabbit", "monkey", 5];
// animals[3] = "tiger";
// animals.push("tiger")
// animals.unshift("dog")
// animals.pop()
// animals.pop()
// console.log(animals)

// 배열인지 아닌지 판단할 때 - isArray()
const fruits = "apple, banana, strawberry";
console.log(Array.isArray(fruits));

// 배열 요소의 인덱스를 확인하고 싶을 때
// console.log(animals.indexOf("rabbit"));

// const animals = ["lion", "rabbit", "monkey", "dog", "cat"];

// splice, slice
// splice() 
// animals.splice(0, 2); // 0번째부터 2개를 작은 인덱스부터 제거
// animals.splice(animals.indexOf("monkey"), 3); //monkey의 인덱스부터 3개를 제거

// console.log(animals)

// slice() - 값을 반환
// const silicedAnimals = animals.slice(0, 2)

// console.log(silicedAnimals, animals)

// object
const monkey = {
    name: 'kike',
    age : 5,
    weight: 40,
    gender: 'male',
    isCute: true,
    food: ["banana", "carrot", "potato"], // property 선언 가능
    // object 안에 또 다른 object도 선언 가능
    home: {
        location: "zoo",
        size: "big",
        price: 3000
    }
}
console.log(monkey)
// object는 인덱스가 없다 key로 접근해야 함 
// object의 property에 접근하고 싶다면, .과 각 key를 적어준다.
console.log(monkey.weight)

// 값의 변경 
// object의 "값"의 변경일 때
monkey.gender = "female"
console.log(monkey.gender) 

// monkey = {gender: 'male'} // object 자체를 재정의하는 것은 오류

console.log(monkey.food[1])

// json (javascript Object Notation)
// 데이터를 주고 받을 때(전송)

console.log(monkey)
// JSON화 하는 함수 
const monkeyJSON = JSON.stringify(monkey);

// JSON으로 받은 데이터를 사용하기 위해 parsing 해줘야 한다.
const parsedJSON = JSON.parse(monkeyJSON)
console.log(parsedJSON) // JSON -> object 변환
console.log(parsedJSON.name)

// function
const item1 = 3000;
const item2 = 2000;
const item3 = 5000;

const loyalty = 1000;

// function showPrice(price){
//     // console.log(price + loyalty)
//     return price + loyalty;
// }

// const price1 = showPrice(item1)
// const price2 = showPrice(item2)
// console.log(price1)
// console.log(price2)

// const showPrice = function(price){
//     return price + loyalty;
// }
// console.log(showPrice(item1))

// ES6에 추가된 => 함수
// const showPrice = function(){}
// lexical scope
const showPrice2 = (price) => { 
    console.log(price + loyalty)
}
// showPrice1(item1)
console.log(window)

// 두 방법의 차이점
// 기존 방식은 window 상에 등록되어, 함수 선언 전에도 호출 가능
// ES6 방식은 window에 등록되지 않아, 함수 선언 전에 호출시 에러 발생

console.log(this) //window 객체가 찍힘

const obj = {
    name: 'test',
    test1: function(){
        console.log(this)
    },
    test2: () => {
        console.log(this)
    }
}

obj.test1(); // object를 가리킴
obj.test2(); // window를 가리킴

// 같은 object 안에서 선언되었지만 다름 

const a = obj.test1;
const b = obj.test2;

// 둘 다 window를 가리킴
a();
b(); 

// 조건문
const animals = [
    {name:'lion', size: 'big'},
    {name: 'monkey', size: 'medium'},
    {name: 'dog', size: 'small'},
] 

const num = 10;

if(num === 10){
    console.log('10입니다')
}

// == vs ===
// 데이터 타입 비교 안함 vs 데이터 타입까지 비교함
// 보통의 경우 === 를 사용하는 것이 오류 방지 목적에서 추천

if (num < 10){
    console.log('10보다 작습니다.')
}
else{
    console.log('10보다 크거나 같습니다.')
}

const animal = animals[2].name;

// switch - case
switch(animal){
    case 'lion':
        console.log('사자입니다.');
        break;
    case 'monkey':
        console.log('원숭이입니다.');
        break;
    default:
        console.log('동물이 아닙니다.');
        break;
}

for(let i=0; i < animals.length; i++){
    console.log(animals[i])
}

for(let m of animals){
    console.log(m.name)
}

let i = 0;

while(i < 10){ // 조건을 만족할 때 까지만 실행
    console.log(i);
    i++; // js에서는 ; 이 없어도 실행됨 
}

// 삼항 연산자 (react나 vue에서 자주 사용)
// (조건) ? 성립 시 : 성립 안할 시
num > 10 ? console.log(true) : console.log(false)

