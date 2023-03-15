function User(email, birthdate) {
  this.email = email;
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name}`); 
  };
}

const item = {
  name: '스웨터',
  price: 300000,
};
//   Constructor Fuction : 생성자 함수 
//new 를 꼭 붙여준다. 
const user1 =  new User('christ1234@google.com', '1992-03-21');
const user2 = new User('jerry99@google.com', '1995-07-19');
const user3 = new User('alice@google.com', '1993-12-24');

console.log(user1.email);
console.log(user1.birthdate);
user1.buy(item);
console.log(user2.email);
console.log(user3.email);
/*리턴문을 작성하지 않고 결과물을 함수 밖으로 꺼낼 수 있는 이유
객체타입인 경우에는 임의로 작성한 객체가 반환되어 인스턴스 생성을 목적으로 하는 생성자 함수의 동작 자체에 문제가 생기게 됩니다. 따라서 생성자 함수 내부에서는 return문을 작성하지 않는 것이 올바른 사용 방법입니다.*/ 