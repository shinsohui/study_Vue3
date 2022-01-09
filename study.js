// foreach, map, filter, reduce

const coronaCases = [
    {city : 'Seoul', case: 1000}, // 0번 인덱스
    {city : 'Daejeon', case: 500},
    {city : 'Daegu', case : 300},
    {city : 'Busan', case : 100},
    {city : 'Gwangju', case : 50},
]

coronaCases.forEach(function(corona, index){
    console.log(index)
    // console.log(corona)
    // console.log(corona.case)
    // console.log(corona.city)
})

// map 
// 어떠한 배열을 가공하여 새로운 형태의 배열을 만들 때 사용

const coronaCities = coronaCases.map((corona) => {
    
    // return corona.city
    return `${corona.city}의 확진자 발생 수는 ${corona.case}`;
})

console.log(coronaCities)

// filter
// 배열에서 특정한 값을 가진 데이터를 필터링 할 때 사용
const dangerousCity = coronaCases.filter(function(corona, index){
    return corona.case > 300;
})

console.log(dangerousCity)

// reduce
// 배열의 값을 이용하여 특정 값을 도출하거나 재가공 할 때

const numbers = [10, 20, 30, 40, 50]
const totalNumber = numbers.reduce((acc, cur)=>{
    console.log(acc, cur); //cur은 20부터 시작
    return acc + cur;
})

console.log(totalNumber)

const totalCases = coronaCases.reduce((acc, cur)=>{
    console.log(cur.case) // 1000, 500, 300, 100, 50 순서로 변경
    return acc + cur.case; // {city : 'Seoul', case: 1000} 를 초기값으로 가짐
}, 0) // 0부터 시작을 해라

console.log(totalCases)

// js는 멀티 패러다임 언어 

// function Song(singer, title, release){
//     this.singer = singer; // window에 등록됨 
//     this.title = title;
//     this.release = new Date(release);

//     //construct function()
//     this.getReleaseDay = function(){
//         return this.release.getDay();
//     }
//     // this.getInfo = function(){
//     //     return `이 노래는 ${this.singer}의 노래이고 제목은 ${this.title} 입니다.`
//     // }
//     console.log(this);
// }

// const song1 = new Song(); // new 키워드를 통해 객체를 인스턴스화 시킴 
// 더 이상 window를 가리키지 않음

// const song1 = new Song("bts", "DNA", "2017-09-18");
// const song2 = new Song("EMINEM", "Love Yourself", "2001-05-11");

// console.log(song1.release.getDate())
// console.log(song1.release.getDay()) // 월요일이 1
// console.log(song2.getReleaseDay())
// // console.log(song2.getInfo())

// console.log(song1)

// prototype 
// Song.prototype.getInfo = function(){
//     return `이 노래는 ${this.singer}의 노래이고 제목은 ${this.title} 입니다.`
// }

// console.log(song1.getInfo())

// syntatic sugar
class Song {
    constructor(singer, title, release){
        this.singer = singer;
        this.title = title;
        this.release = new Date(release)
    }
    getReleaseDay(){
        return this.release.getDay();
    }
}

const song1 = new Song("bts", "DNA", "2017-09-18");
const song2 = new Song("EMINEM", "Love Yourself", "2001-05-11");

console.log(song1, song2)