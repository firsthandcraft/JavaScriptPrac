export const title ="codeprinter";
// export하면 다른 파일 js 에서도 모듈문법으로 불러지면 사용가능
// export function print(value){
//     console.log(value);
// }
function print(value){
        console.log(value);
    }
    // export {title as printerTitle, print}
    export default {title,print};
    //export default {title :title, print : print};

