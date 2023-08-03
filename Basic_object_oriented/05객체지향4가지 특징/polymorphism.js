//다형성, 많은 형태를 가지고 있는 성질
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
class User {
    constructor(email, birthdate) {
      this.email = email;
      this.birthdate = birthdate;
    }
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    }
  }
  
  class PremiumUser extends User {
    constructor(email, birthdate, level) {
      super(email, birthdate);
      this.level = level;
    }
  //5%할인된가격을 추가하는 것 여기가 다형성
    buy(item) {//오버라이딩 - 덮어쓰기
      console.log(`${this.email} buys ${item.name} with a 5% discount`);
    }
  
    streamMusicForFree() {
      console.log(`Free music streaming for ${this.email}`);
    }
  }
  const item = {
    name: '스웨터',
    price: 300000,
  };
  
  const user1 = new User('chris123@google.com', '19920321');
  const user2 = new User('rache@google.com', '19880516');
  const user3 = new User('brian@google.com', '20051125');
  
  const pUser1 = new PremiumUser('tommy@google.com', '19901207', 3);
  const pUser2 = new PremiumUser('helloMike@google.com', '19900915', 2);
  const pUser3 = new PremiumUser('alicekim@google.com', '20010722', 5);
  
  const users = [user1, pUser1, user2, pUser2, user3, pUser3];
  
  users.forEach((user) => {
    user.buy(item);
  });