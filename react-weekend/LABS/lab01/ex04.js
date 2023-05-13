//ESNext - ECMAScript2015 이후

//전개 연산자(spread operator)
const arr1 = [1,2];
const arr2 = [3,4,5];
const combinedArray = [...arr1, ...arr2]; // [1, 2, 3, 4, 5]
//두 개의 배열을 합쳐서 하나의 배열로 만듦

console.log(combinedArray);

const [x, y, ...remains] = combinedArray; //구조분해 할당
//배열을 분해해서 변수에 할당한다
console.log(`one = ${x}`); //1
console.log(`two = ${y}`); //2
console.log(`others = ${remains}`); //3,4,5

//arguement가 몇 개든 처음은 first, 다른 것들은 others
function f1(...args) {
    const [first, ...others] = args;
    console.log(`first = ${first}`);
    console.log(`others = ${others}`);
}

f1(1,2,3);
f1(1,2,3,4,5);

//객체 전개 연산자
const obj1 = {
    one: 1,
    two: 2,
    zero: 0,
};
const obj2 = {
    three: 3,
    four: 4,
    zero: -1,
};

const combinedObject = {...obj1, ...obj2};
console.log(combinedObject); 
//합쳐져서 하나의 object가 됨
//같은 key로 값을 2개를 넣으면 마지막 값만 남음

const combinedObject2 = {...obj2, ...obj1};
console.log(combinedObject2);
//객체에서는 중복된 키 값은 마지막에 사용된 값으로 덮어씀

//객체의 구조 분해 할당
const {one, two, ...others} = combinedObject;
console.log(`one = ${one}`, `two = ${two}`, `others = ${others}`); //one = 1, two = 2, others = [object Object]

const employee = {
    empId: 100,
    empName: '홍길동',
    salary: 300,
};

function displayEmployee(e) {
    console.log(`사번 : ${e.empID}, 이름 : ${e.empName}, 급여: ${e.salary}`);
}

displayEmployee(employee); //employee 변수의 내용이 argument로 들어가고, 그 내용을 console로 불러냄

//구조분해 할당을 이용한 함수 argument 선언 :
//세 개의 key 값을 가지고 있는 argument가 들어올 것이다 선언하게 됨
function displayEmployee2({empId, empName, salary}){
    console.log(`id: ${empId}, name : ${empName}, salary: ${salary}`);
}
displayEmployee2(employee);
