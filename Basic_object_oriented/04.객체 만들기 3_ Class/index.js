//function class 비교 
/*function User(email, birthdate) {
  this.email = email;
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name}`); 
  };
} */
//class 로 정의 해서 객체를 만들 수 있다. 
class User {
  //constructor: 생성자 
  //this 같은 프로퍼티는 constructor안에 메소드는 밖에 생성
  constructor(email, birthdate) {
    //this 매번생성되는 객체
    this.email = email;
    this.birthdate = birthdate;
  }
  buy(item) {//해당 객체의 메소드 
    console.log(`${this.email} buys ${item.name}`); 
  }
}

const item = {
  name: '스웨터',
  price: 300000,
};

const user1 =  new User('christ1234@google.com', '1992-03-21');

console.log(user1.email);
console.log(user1.birthdate);
user1.buy(item);

const user2 = new User('jerry99@gmail.com', '1995-07-19');

console.log(user2.email);
console.log(user2.birthdate);
user2.buy(item);