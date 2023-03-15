export const title ="codeprinter";
// export하면 다른 파일 js 에서도 모듈문법으로 불러지면 사용가능
function print(value){
    console.log(value);
}
//한꺼번에 내보내기 
// export {title ,print}
export {title as printerTitle, print}