class User {
    constructor(email, birthdate) {
      this.email = email;
      this.birthdate = birthdate;
    }
    buy(item) {
      console.log(`${this.email} buys ${item.name}`); 
    }
  
    get email() {
      return `Email Address is ${this._email}`;
    }
  //코드 추가 
    set email(address) {//email함수가 시작됨
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
  console.log(user1.email);