// 1. 변수 선언과 할당
//     1. 두 개의 변수 **`x`**와 **`y`**를 선언하고, 각각 숫자 10과 20을 할당하세요. 그리고 두 변수를 더한 값을 새로운 변수 **`sum`**에 저장하고 **`sum`**의 값을 콘솔에 출력하세요.
let x =10;
let y=20;
let sum= x+y;
console.log(sum)
// 2. 변수 재할당
//     1. 변수 **`name`**에 "Alice"라는 값을 할당하세요.
//     2. 이후 **`name`** 변수에 "Bob"이라는 값으로 재할당하세요.
//     3. **`name`** 변수의 최종 값을 콘솔에 출력하세요.
let name = "Alice";
name= "bob";

// 3. 상수
//     1. 상수 **`PI`**를 선언하고 값 3.14를 할당하세요.
//     2. **`PI`** 값을 콘솔에 출력하세요.
const PI = 3.14;
console.log("PI"+PI) 

// 4. 변수 스왑
//     1. **`a`**와 **`b`**라는 두 변수를 선언하고 각각 숫자 5와 10을 할당하세요.
//     2. 변수의 값을 서로 교환하여 **`a`**에는 10이, **`b`**에는 5가 저장되도록 코드를 작성하세요.
let a= 5;
let b= 10;
let temp;
temp ==a;
a==b;
b==temp;
console.log("a"+a);
console.log("b"+b);

// ### 👻 연습문제

// 1. 변수 타입 확인
//     1. 다음 변수들의 타입을 확인하여 콘솔에 출력하세요.
    
//     ```jsx
    let num = 42;
    let name4 = "John";
    let isTrue = true;
    let person = { name: "Alice", age: 30 };
    let fruits = ["apple", "banana", "orange"];
//     ```
    console.log(typeof num);
    console.log(typeof name4);
    console.log(typeof isTrue);
    console.log(isTrue);
    console.log(typeof person);
    console.log(typeof fruits);
    
// 2. 다음 주석 친 부분에 주석 왼쪽에 있는 데이터의 자료형을 적어주세요.
let length222 = 16;    // number
let lastName = "Brown";  // string
let score = [10, 20]; //object
let x222 = {
  firstName: "Nick",
  lastName: "Doe"
}; // object



//즉시실행 함수 
(function(x, y) {
    console.log(x + y);
  })(3, 5);
  