//캡슐화 : 객체의 특정 프로퍼티에 직접 접근하지 못하도록 막는것
class User {
    constructor(email, birthdate) {
      this.email = email;
      this.birthdate = birthdate;
    }
    buy(item) {
      console.log(`${this.email} buys ${item.name}`); 
    }
  
    get email() {//getter method 프로퍼티의 값을 읽는 기능
      return `Email Address is ${this._email}`;
    }
  //코드 추가 settet method
    set email(address) {//email함수가 시작됨
        //user1.email = 'chirs_robert';에서 @를 포함시키기 위한 메서드 추가
      if (address.includes('@')) {
        this._email = address;
      } else {
        throw new Error('invalid email address');
      }
    }
  }
  
  
  const item = {
    name: '스웨터',
    price: 300000,
  };
  
  const user1 =  new User('christ1234@google.com', '1992-03-21');
  user1.email = 'chirs_robert@google.com';//email프로퍼티에 값 설정
  //user1.email = 'chirs_robert'; -> @을 안붙일 경우 이메일 객체이지만 객체에 @을 맘대로 안붙여도 설정이 가능해서 객체가 접근이 쉬워짐
  console.log(user1.email);