// https://covid19api.com/

// http request 
// http로 api 통신하기
const url = "https://api.covid19api.com/country/south-korea/status/confirmed?from=2021-09-01T00:00:00Z&to=2021-09-09T00:00:00Z"
// const corona = fetch(url).then(function(res){
//     // console.log(res)
//     return res.json()
// }).then(data => console.log(data)) // 인자가 1개일 때는 생략 가능 !

// json()
// 응답(response stream)을 받아 읽고 
// json 데이터를 파싱(Parsing)하여
// 자바스크립트 Object를 만들어주는 메소드

const corona = fetch(url).then(res => res.json())
.then(data => console.log(data)) // 인자가 1개일 때는 생략 가능 !