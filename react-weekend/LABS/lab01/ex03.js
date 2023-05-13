//함수
//function functionName(param ...) { ... }
//파라미터 : 함수에서 선언하는 변수
//아규먼트 : 파라미터에 입력되는 값

//타입 검사하지 않음
//파라미터 갯수와 아규먼트 갯수를 일치 안 해도 됨
function add(x, y) {
  console.log(`x = ${x}, y = ${y}`);
  return x + y;
}

let result = add(1, 2);
console.log(result);

result = add("abc", 1);
//js 함수는 argument 타입을 검사하지 않음.
//문자열을 붙여줌

console.log(result);

result = add(1);
console.log(result); //NaN 결과갑이 숫자가 아님 -> js 함수는 argument 갯수를 검사하지 않음.

result = add(1, 2, 3); //더 많은 갯수를 넘겨도 상관없음
console.log(result);

console.log("-----------");

//default argument:
function add2(x = 0, y = 0) {
  return x + y;
}
console.log(add2(1, 2)); //x, y에 새로운 값을 넣어줌
console.log(add2()); //가지고 있던 초기값으로 계산

console.log("-----------");

const myFunc = add2; //함수로 사용
console.log(myFunc);
console.log(myFunc()); //함수 호출
console.log(myFunc(2, 3)); //함수 값 입력으로 함수 값 반환

function plusN(n) {
  //이름이 없는 함수
  //함수 안에서 얼마든지 함수를 선언할 수 있다
  //함수는 객체기 때문에 변수에 저장할 수 있음
  //다른 변수를 argument로 전달하는 것 가능함

  //return 값이 함수가 됨
  let f = function (x) {
    return x + n; //x+10을 반환하는 함수가 만들어짐
  };
  return f;
}

let plusOne = plusN(1);
console.log(plusOne(100)); //x = 100이 되어 101을 반환함

console.log("-----------");

let plusTen = plusN(10);
console.log(plusTen(100));

/*
    plusTen에 대항하는 함수
        function (x) {
            return x + n; 
        }; 
    x = 100
    n = 10
    = 110
*/

console.log("-----------");

//화살표 함수
//파라미터가 있고, 파라미터를 이용해서 리턴값을 간단하게 표현가능할 때 사용하는 함수

let multiply = (x, y) => x * y;
//let mutiply = function(x, y) {return x * y;};

console.log(multiply(1, 3));

//let hello = function () { return '안녕하세요';};
let hello = () => "안녕하세요";
console.log(hello());

console.log("-----------");

function myFilter(arr, func) {
  const result = [];
  for (let x of arr) {
    if (func(x)) {
      result.push(x);
    }
  }
  return result;
}

const numbers = [1, 2, -3, -4, 5, 6];
result = myFilter(numbers, function (x) {
  return x > 0;
});
//함수란 객체를 파라미터에 전달함 -> 익명함수는 func에 저장됨
//익명함수의 값이 양수일 때, result 값에 임력
//result 값이 반환됨
console.log(result);

result = myFilter(numbers, (x) => x < 0);

console.log(result);
