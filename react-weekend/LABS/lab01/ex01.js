//변수 선언과 할당
var x = 1;
x = "hello";

console.log(x);
var x = 100; // 같은 이름으로 두 번 선언된 거 아님
var x;

console.log(x);
//var : 변수 재할당 가능함

//ES2015에서 let(변수 선언), const(상수 선언)가 제공
let y = 123;
//let y; 변수를 두 번 선언하는 것으로 판단함 -> 같은 이름으로 두 번 사용불가

y = "안녕하세요"; //문자열이나 다른 형태로 재할당 가능

//var과 let 사용범위 다름
//함수 안에서 let을 사용할 경우 해당 스코프 안에서만 작동
//var은 전역으로 사용함

//const는 상수로 값 재할당이 불가능함
const pi = 3.14;
//pi = 3.1415; 실행할 때 TypeError가 발생
//배열에 사용할 경우 오브젝트를 찾아가는 값이 상수
//배열 자체가 상수 X
console.log(pi);

//문자열 템플릿(string template)
let name = "인영";
let age = 13;
// let hi = "만나서 반갑습니다" + name;

let hello = `안녕하세요, ${name} 제 나이는 ${age}...`;
console.log(hello);

//연산자
//비교 연산자 ==, === 차이
let a = 1; //숫자 타입 1
let b = "1"; //문자열 타입 '1'
console.log(a == b); //숫자를 문자열로 바꿔서(자동 타입 변환) 비교함
console.log(a === b); //타입과 값이 모두 같은지 비교 -> 엄격하게 비교해야할 때 사용
