console.log('Vs코드에서 터미널 콘솔실행하기 ');
console.log('1)node -v 와  npm -v 설치하고 버전확인');
console.log('코드러너설치후 ctrl+alt+N 으로 실행  ');
console.log('반드시 자바스크립트로 언어로 실행해야한다.');
console.log('멈출경우 ctrl+alt+M');
console.log('다시시작시 전체 ctrl+a -> Ctrl+alt+N');
console.log('---------------------------------------------------');

//step1 
//날짜 알기
let date= new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getMonth()+1);//숫자는 0부터 시작이라서 +1을 해줘야한다.
/*  document.cookie = "Name=Value; Expires=값"
	날짜 춫출(반환) date.getDate()
	날짜 지정 date.setDate(새로운 날짜)
*/
//============쿠키 만들기 
date.setDate(date.getDate() + 7);
console.log(date);//+7이 되었다.

var setCookie='';
//setCookie =setCookie+'CookieName=ABC';//쿠키네임 만들어줌
setCookie += 'CookieName=ABC;';//쿠키네임과 벨류를 만들어줌
setCookie += 'Expires =' + date.toUTCString();//GMT방식이 아닌UTC방식으로 바꿔줘야한다.
console.log("UTC방식")
console.log(date.toUTCString());
console.log('---------');


document.cookie=setCookie;//쿠키 설정 ,생성
//아래 콘솔 코드는 안보임(쿠키는 서버에 있는거라 라이브 서버에서만 보인다. openin default Browser에서는 안보임)
console.log('document.cookie확인==='+document.cookie);//쿠키확인->document.cookie확인===CookieName=ABC
//============쿠키 만들기 

//step2
// 쿠키 삭제 - 만기 시간을 과거로 되돌린다.
function delCookie() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    var setCookie = '';
    setCookie += 'CookieName=ABC;';
    setCookie += 'Expires=' + date.toUTCString();
    document.cookie = setCookie;
}

document.getElementById('delCookie').addEventListener('click', function () {
    delCookie();
    alert("Deleted");
});
//쿠키를 삭제하면 다름 새로 사이트를 열때 나타난다. 기존의 쿠키사이트는 쿠키생성이 있어 따로 만들어 준다. 
//브라우저 중심으로 크롬이라는 브라우저에 쿠키가 따로 저장되어있어서 다른 사이트로 열어도 쿠키가 있다. 
//쿠키 저장한곳은 탐색기 -> 보기 -> 옵션-> 보기 -> 숨김 파일 폴더-> 보호된 운영체제 파일 숨기긱 체크 해제 . 숨김 파일 폴더및 드라이브 표시는 체크하기 
//그러나 브라우져만 인식하는 파일이라서 다른 파일로 열어 볼수가 없다. 
// 정리 : 쿠키는 어느 사이트나 만들어두면 같은 곳에 저장이 된다. 

//step3
//쿠키를 직접 지정하지 않고 함수로 쿠키 만들기 

