// 하나의 객체가 다른 객체의 프로퍼티와 메소드를 물려 받을때 
class User {
    constructor(email, birthdate) {
      this.email = email;
      this.birthdate = birthdate;
    }
    buy(item) {
      console.log(`${this.email} buys ${item.name}`); 
    }
  }
  //상속 받을 것 email, birthdate
  class PremiumUser extends User {
    constructor(email, birthdate, level) {
        super(email,birthdate);//부모 클래스의 컨스트럭터를 실행해 주는것
      this.level = level;
    }
    //상송을 통해 buy는 중복 하지 않아도 된다.
    // buy(item) {
    //     console.log(`${this.email} buys ${item.name}`); 
    //   }
    streamMusicForFree() {
      console.log(`Free music streaming for ${this.email}`);
    }
  }
  const item = {
    name: '스웨터',
    price: 300000,
  };
  
  const pUser1 =  new PremiumUser('christ1234@google.com', '1992-03-21', 3);
  console.log(pUser1.email);
  console.log(pUser1.birthdate);
  console.log(pUser1.level);
  pUser1.buy(item);
  pUser1.streamMusicForFree();
  
  /**<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>자바스크립트 객체 지향</title>
</head>
<body>
  <script src="./index.js"></script>
</body>
</html> */

//결과 화면
//christ1234@google.com
//1992-03-21
//3
//christ1234@google.com buys 스웨터
//Free music streaming for christ1234@google.com
