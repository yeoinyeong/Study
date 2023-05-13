// TS는 변수를 선언할 때 타입 수적(type annotation)을 사용
let el: number = 1;
console.log(`x = ${el}`);

//ts 파일 실행 1:
// (1) tsc xyz.ts - TS를 JS로 변환
// (2) node xyz.js -> js를 node 환경에서 실행.

// ts 파일 실행2:
// ts-node xyz.ts -> 변환과 실행을 동시에

// x = 'hello';
// TS에서는 타입이 다른 값을 재할당 할 수 없음.
// JS에 비해서 TS는 자유롭지 않음

// TS는 타입 추론 기능이 있음.
// 변수 선언 후 값을 저장하면 할당하는 값을 가지고 변수의 타입을 결정
let msg = 'hello';
console.log(msg);

// number 타입을 문자열 타입에 할당할 수 없음 -> 추론 기능
// msg = 123;

// 타입스크립트는 허용하지 않음 -> 어떤 타입이 들어갈지 모르기 때문에
// 함수를 사용 할 때는 타입 추론 기능이 안됨 -> 타입을 지정해줘야함
// TS를 정의할 때 파라미터의 타입은 추론이 안됨. 리턴 타입은 추론이 가능.
const plusOne = (x: number) => x + 1;
console.log(plusOne(10));

const user = {
  id: 1,
  name: 'guest',
};

//객체가 갖는 프로퍼티들의 타입을 선언 - 객체의 모양 선언.
//자바 interface와 용도가 다름
//값을 안 넣음
interface User {
  id: number;
  name: string;
}

function showUser(user: User) {
  console.log(`id = ${user.id}, name= ${user.id}`);
}

showUser(user);

// Union(합집합) 기능을 사용해서, 간단한 타입들을 조합한 새로운 타입을 선언
type LockState = 'locked' | 'unlocked';
let isLocked: LockState = 'locked'; //할당 가능한 값 'locked'와 'unlocked'

// Union(합집합) 기능을 함수 파라미터 타입 주석에서도 활용
function getLength(x: string | string[]) {
  return x.length;
}

console.log(getLength('hello'));
console.log(getLength(['a', 'b', 'c']));

//변수의 타입을 알아내고자 할 때 typeof를 사용
// e.g. typeof x === 'string', typeof x === 'number, typeof x === 'undefined'
// typeof x === 'function'
// 배열인 경우에는 Array.isArray(x) 함수를 이용

function wrap(x: string | string[]) {
  if (typeof x === 'string') {
    return [x];
  }
  return x;
}
