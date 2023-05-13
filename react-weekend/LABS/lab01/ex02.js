//조건문

let age = 26;

if (age < 20) {
  console.log("미성년");
} else {
  console.log("성인");
}

console.log("---------");

//삼항연산자 - if else를 간단히 쓸 수 있음
//세 개의 피 연산자를 받는 유일한 연산자
// (조건식) ? (참인 경우 선택할 값) : (거짓인 경우 선택할 값)
let result = age < 20 ? "미성년" : "성인";
console.log(result);

console.log("--------");

let x = 10;
if (x > 0) {
  console.log("양수");
} else if (x < 11) {
  console.log("음수");
} else {
  console.log("영");
}

console.log("--------");

// switch-case 문장
let today = new Date();
console.log(today);
console.log(today.getDay());

console.log("--------");

//스위치 안 값을 보고 어떤 케이스인지 확인 후 break 만날 때까지 실행함
switch (today.getDate()) {
  case 0:
    console.log("일요일");
    break;
  case 6:
    console.log("토요일");
    break;
  default:
    console.log("일하는 요일");
}

console.log("--------");

switch (today.getDate()) {
  case 0:
    console.log("일요일");
  // break;
  case 6:
    console.log("토요일");
  // break;
  default:
    console.log("일하는 요일");
}
//case나 default는 실행문이 아닌 코드 위치 표시 레이블링이다.

console.log("--------");

//switch-case는 값을 비교할 때 === (타입 & 값)
let num = "1"; //문자열
switch (num) {
  case 0:
    console.log("0");
    break;
  case 1:
    console.log("1");
    break;
  default:
    console.log("unknown");
}

let num1 = "1";
switch (num1) {
  case "0":
    console.log("0");
    break;
  case "1":
    console.log("1");
    break;
  default:
    console.log("unknown");
}

console.log("--------");

//반복문
const arr = [1, 2, 10, 20]; // 배열은 0부터 시작 -> length 보다 하나가 적음 ex) index = 3, length = 4

//조건 검사식이 없으면 무한 반복문
//식은 생략이 가능하지만 ; 생략 불가 -> 무한루프문을 만들 때 식 없이 ;;만 작성

//for 밖에서 i 사용할 수 없음 -> var일 경우는 사용 가능
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("--------");

//for-in
// for (변수선언 in 배열)
//배열의 인덱스를 순회(iteration)함 -> 배열 안의 인덱스를 알려줌
for (let i in arr) {
  console.log(`${i} : ${arr[i]}`);
  //배열의 인덱스 : 인덱스에 해당하는 배열 값
}

console.log("--------");

//for-of
//배열의 원소를 순회
for (let el of arr) {
  console.log(el);
}

console.log("--------");

//white
//조건 검사를 먼저 시작 후 반복할지 말지 결정 -> 반복이 한 번도 안될 수 있음
let i = 1;
while (i <= 5) {
  console.log(`i = ${i}`);
  i++;
}
console.log(i);

console.log("--------");

//조건이 성립하지 않아 반복 안됨 -> 실행문 없음
let i1 = 1;
while (i1 > 5) {
  console.log(`i1 = ${i1}`);
  i++;
}

console.log("--------");

//do-while
//실행 후 조건 검사 -> 반복이 되지 않아도 실행문이 나옴
i = 1;
do {
  console.log(`i = ${i}`);
  i++;
} while (i > 5);

console.log("--------");

//반복문에서 break vs continue
for (i = 0; i < 5; i++) {
  if (i === 3) {
    break; //가장 가까운 반복문을 종료
  }
  console.log(i);
}

console.log("--------");

for (i = 0; i < 5; i++) {
  if (i === 3) {
    continue; //이후 문장을 무시하고 다음 iteration을 계속함 -> 위에 있는 반복 실행
  }
  console.log(i);
}

console.log("--------");
