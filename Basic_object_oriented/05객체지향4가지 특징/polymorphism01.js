//기존 코딩은 프리미엄 회원 5%할인된 가격으로 구매 가능
//프리미엄 회원 도 원래 가격으로 구매 해야하고 대신 포인트를 가져가는 형식으로 변경하기

class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

class PremiumUser extends User {//point추가
  constructor(email, birthdate, level, point) {
    super(email, birthdate);
    this.level = level;
    this.point = point;
  }

  buy(item) {//오바라이딩했지만 그위의 콘솔을 super로 가져올수 잇다. 
    super.buy(item);// console.log(`${this.email} buys ${item.name}`);와 같은 의미
    this.point += item.price * 0.05;
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