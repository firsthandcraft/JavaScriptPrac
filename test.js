console.log("<----홀짝 구분하기---->")
let number =0;
console.log(number);
while(number<=15){
    if(number%2==0){
        let numberResult = number + "짝수입니다.";
        number++;
    } else {
         numberResult = number + "홀수입니다.";
        number++;
    }
    console.log(numberResult);
    
}