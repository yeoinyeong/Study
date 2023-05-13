// 배열
// mutable vs immutable
// 원본 배열 변경 vs 원본 배열 유지, 새로운 배열 리턴

const arr1 = [];
const newLength = arr1.push(100);
// push - element 배열 뒷 쪽에 추가 및 바뀐 배열의 길이를 return 
// 원본 배열 arr1에 새로운 원소를 추가하고, 새로운 배열의 길이를 리턴함 -> mutable

console.log(arr1);
console.log(`lenth = ${newLength}`); //배열의 길이를 리턴

const arr2 = [];
const newArr = arr2.concat(100); 
const newArr2 = arr2.concat(100).concat(50);
// 배열로 호출하기 때문에 .concat().concat.concat ..... 가능 
// concat은 원본 배열을 변경하지 않고, 원소를 추가한 새로운 배열을 만들어서 리턴.
console.log(arr2);
console.log(newArr);
console.log(newArr2);

const arr3 = [1, 2, 3, 4, 5];
const popResult = arr3.pop(); 
// 삭제한 값을 리턴함
// pop()은 배열의 가장 마지막 원소를 삭제(꺼냄), 원본 배열이 변경됨
// 리턴 값은 배열에서 꺼내진(삭제된) 값. 만약 빈 배열인 경우에는 undefined를 리턴.
console.log(arr3);
console.log(`popResult = ${popResult}`);

const arr4 = [1, 2, 3, 4, 5];
const sliced = arr4.slice(0, arr4.length-1); 
// 인덱스 0 이상 4미만 범위의 원소들을 자름.
// slice()는 잘라낸 배열의 복사본을 리턴
// 원본배열은 잘리지 않고 잘린 새로운 배열을 리턴해줌
console.log(arr4);
console.log(sliced);

// ES6에서 새롭게 추가된 Array 함수들
// forEach, filter, map, reduce
// forEach(callback), filter(callback), map(callback)
// forEach, filter, map의 argument로 전달되는 callback 함수 argument들:
// - value: 배열에서 반복하면서 순서대로 꺼내는 값
// - index: 배열의 인덱스
// - array: 배열자체
// callback을 작성할 때는 필요한 argument들만 선언해도 됨

const Front = ['HTML', 'CSS', 'JavaScript', 'TypeScript'];

//forEach: 순서대로 반복하면서 수행할 작업
//함수에 문장이 하나 밖에 없을 경우 중괄호 생략 가능
//배열에서 값을 꺼냈을 때 함수가 호출이 되고, 값이 argument로 들어가고, 함수가 실행됨 -> forEach는 이 과정을 반복
//순서대로 배열을 꺼냄 -> iteration 한다
Front.forEach((value, index)=> console.log(`[${index}] ${value}`)); 
Front.forEach(function(value){
    console.log(value);
});

const filtered = Front.filter((value) => value.length >= 5);

//filter: 순서대로 반복하면서 조건에 맞는 원소들 찾음.
///원본 배열에 가지고 있는 원소를 가지고서 새로운 배열에 들어갈 원소를 정해주는 것
//배열에 원소가 들어왔을 때 그 원소로 새로운 배열에 넣을 건지 말건지 true, false 판단
//true값은 새로운 배열에 추가가 되고 false는 따로 됨
//원소의 갯수만큼 불리게 됨

console.log(filtered);

// map: 순서대로 반복하면서 원소를 다른 값으로 변환.
// return 값이 배열
// map 하는 값을 filter 할 수도, filter 한 값을 map 할 수도 있음
const mapped = Front.map((value) => value.toLowerCase());
console.log(mapped);

// 배열 front에서 5글자 이상인 문자열들을 대문자로 변환 후 출력
Front
    .filter((value) => value.length >= 5) //return 값만 있을 경우 return도 삭제 가능
    .map((value) => value.toUpperCase())
    .forEach((value) => console.log(value));

/* 
    화살표 함수 쓰는 방법
    arrow function:
    (param, ...) => {statement; ...} //실행문이 여러 개일 때
    (param, ...) => statement //함수 body에 실행문이 한 줄일 경우
    (param, ...) => 리턴값 //함수 body에 실행문이 하나만 있고, 실행문이 리턴문인 경우 
*/

// reduce(callback, initialValue)
// callback 함수의 argument들
// - previousVlue: callback 함수에서 이전에 리턴된 값.
// - currentValue: 반복하고 있는 현재 배열의 값
// -currentIndex: 반복하고 있는 현재 배열의 인덱스
// - array: 반복하고 있는 배열의

const numbers = [1,2,3,4,5];
const sum = numbers.reduce((total, current) => total += current, 0);
console.log(`sum = ${sum}`); 
// 배열에 있는 값들 중에서 하나의 대표값으로 만들어 내겠다고 하는 함수
// total 이전에 리턴한 값, current는 현재 값 (순서대로)
// 최초호출에서 넣어줘야할 값이 없기 때문에 두번째 argument 위치에서 지정 (초기값: 0)
// total 0 current 1 -> 0 + 1 = 1
// 1이 current 값이 됨

// 익명함수 방식
numbers.reduce(function (total, current) {
    total += current;
    return total;
}, 0);

const factorial = numbers.reduce((total, current) => total *= current, 1);
console.log(`factorial = ${factorial}`);

// 쿼리스트링
// url 물음표 뒤 들어가는 내용
const queryString = 'apple=10&banana=20&order=ok'; 

//쿼리스트링을 분석해서 객체로 변환하는 함수
// {apple: 10, banana:20, order: 'ok'}

function parse(qs) {
    let result = {};
    const chunks = qs.split('&'); 
    // 구분자를 기준으로 글자 자르기
    // -> ['apple = 10', 'banana = 20', 'order = ok']
    /*         
        for (let x of chunks) {
            const part = x.split('='); // =을 기준으로 스플릿
            const key = part[0];
            const value = part[1]; 
            result[key] = value; //result 배열 안에 key = value     
        } // 배열의 원소들에 대해서 반복하게 됨
    */
    for (let x of chunks) {
        const [key, value] = x.split('=');
        result[key] = value;
    } // 배열의 원소들에 대해서 반복하게 됨

    return result;
}

function parse2(qs) {
    let result = {};
    qs.split('&').forEach((value) => {
    const[k, v] = value.split('=');
    result[k] = v;
});

    return result;
}

function parse3(qs){
    return qs.split('&')
        .map((value) => { //value ='apple = 10'
            const [k, v] = value.split('=');
            return {k, v}; //{k: k, v: v} 간단히 표기하기 위한 문법 - ES6부터

        });
}

function parse4(qs){
    return qs.split('&') // ['apple = 10', ...]
        .map((value) => {
            const [k, v] = value.split('='); // [k, v] = [apple, 10]
            return {k, v}; // {k: apple, v: 10}
        }) // [{k: apple, v: 10}, {k: banana, v: 20}, ...]
        .reduce((prev, curr) => {
            prev[curr.k] = curr.v; // {apple: 10}
            return prev;
            
        }, {})
}

console.log(parse(queryString));
console.log(parse2(queryString));
console.log(parse3(queryString));
console.log(parse4(queryString));