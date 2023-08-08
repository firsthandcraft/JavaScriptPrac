//조건식
const num =2;
if(num % 2 == 0){
    console.log(num+"은 짝수입니다.");

} else if(num %3 == 1){
    console.log(`${num}은(는) 홀수입니다.`);
}
else{
    console.log(`다시 해보세요`);
}

/**Q9. 삼항 연산자 활용

1. 변수 **`num`**을 선언하고 어떤 숫자를 할당하세요.
2. **`num`**이 짝수인지 홀수인지 판별하는 삼항 연산자를 사용하여 결과를 **`isEven`** 변수에 저장하고 콘솔에 출력하세요.*/
let  isEven= 8;
isEven %2 === 0 ? "짝수" : "홀수";
console.log(isEven)
/**
[연습문제 - 학점 계산기]

학생의 점수를 저장하는 score 변수의 값에 따라  
학점을 출력하는 코드를 작성해주세요.back

1. score의 점수가 90점 이상이면 A
2. score의 점수가 80점 이상이면 B
3. score의 점수가 70점 이상이면 C
4. score의 점수가 60점 이상이면 D
5. score의 점수가 60점 미만이면 F
*/

let score = Math.floor( Math.random() * 100 );
//let score1 = parseInt(prompt("점수를 입력",""));
let temp = Math.floor(score % 10 * 0.1);
let result = Math.floor(score/10 - temp);
console.log("score : " + score)
console.log("result : " + result)
let grade = "";
switch(result){
    case 10 : 
        break;
    case 9 :
        grade="A";
        break;
    case 8 :
        grade ="B";
        break;
    case 7 :
        grade ="C";
        break;
    case 6 :
        grade ="D";
        break;
    default:
        grade ="F";
        break
}
console.log(grade);


/**1. 불린(boolean) 변수 조합
    1. 세 개의 불린 변수 **`isSunny`**, **`isWarm`**, **`isDry`**를 선언하고 각각 **`true`** 또는 **`false`** 값을 할당하세요.
    2. 이 변수들을 조합하여 "오늘은 날씨가 화창하고(화창하지 않고) 따뜻하며(따듯하지 않으며) 건조합니다(건조하지 않습니다)."라는 문장을 만들어 콘솔에 출력하세요.*/
let isSunny = randomBoolean = Math.random() >= 0.5;
let isSunnyResult;
let isWarm = randomBoolean = Math.random() >= 0.5;
let isWarmResult;
let isDry = randomBoolean = Math.random() >= 0.5;
let isDryResult;
console.log(isSunny)
console.log(isWarm)
console.log(isDry)
if(isSunny){
    isSunnyResult = '화창하고';
} else{
    isSunnyResult = '화창하지 않고';
}
if(isWarm){
    isWarmResult = '따뜻하며';
} else{
    isWarmResult = '따듯하지 않고';
}
if(isDry){
    isDryResult = '건조합니다';
} else{
    isDryResult = '건조하지 않습니다';
}

console.log(`오늘은 날씨가 ${isSunnyResult} ${isWarmResult} ${isDryResult}.`);

//[연습문제 - 1부터 9까지 출력하기]
console.log("<----1부터 9까지 출력하기---->")
console.log("<----for문으로---->")
for(let i=1; i<=9; i++){
    console.log(i);
}
console.log("<----while문으로---->")
let k=0;
while(k<=9){
    k++;
    console.log(k)
}
/*
[연습문제 - 음수 걸러내기]

배열에 음수값이 섞여있습니다. 
음수는 제외하고 양수들만 골라내어 합을 구하세요.
*/
console.log("<----음수 걸러내기---->")
let numArr = [10, -10, 20, -30, 40];
let numPush = [];

//Let`s Do it!
for(let j in numArr){
    //console.log("numArr"+numArr[j]);
    if(numArr[j] > 0){
        numPush.push(numArr[j]);
    }
}
console.log(numPush);

/*
[연습문제 - 홀짝 구분하기]

0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
구분하여 출력하도록 코드를 작성해주세요.

출력 예시 ) 
0 짝수 
1 홀수
2 짝수
3 홀수
4 짝수
... 중략 .. 
15 홀수
*/

for(let i = 0; i<=15; i++){
    if(i%2 === 0){
        console.log(i+' 짝수')
    } else{
        console.log(i+' 홀수')
    }
}
/*
[연습문제 - 암스트롱 수 구하기]
난이도 ★★★★★

100부터 999까지 암스트롱 수를 구하세요

&암스트롱 수란?

암스트롱의 수는 세 자리의 정수 중에서 각 자리의 수를 세 제곱한 수의 합과 자신이 같은 수를 말합니다. 
예를 들어 153 = 1 + 125 + 27 입니다. 
이와 같은 수를 암스트롱의 수라고 말합니다.
*/

//153