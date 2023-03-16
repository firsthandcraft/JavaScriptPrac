//실습 설명
/*현재 코드잇 실행기에는 '은행 계좌'를 의미하는 BankAccount 클래스가 정의되어 있습니다. 이 클래스 안의 _balance 프로퍼티는 해당 계좌의 잔액을 의미하는 프로퍼티인데요.

이 _balance 프로퍼티에 직접 접근해서 값을 수정하는 것은 매우 위험한 일입니다. 따라서 이 프로퍼티를 캡슐화하려고 하는데요. 지금 balance라는 getter 함수는 정의되어 있습니다. balance라는 setter 함수도 정의해 보세요. 그리고 해당 setter 함수 안에서 아래 내용들을 구현해 주세요.

파라미터로 전달된 금액이 0 이상일 때만 _balance 프로퍼티의 값으로 설정한다.
음수일 때 'You cannot set negative number for balance'라는 문장을 출력한다.*/
class BankAccount {
  constructor(name, money) {
    this.holder = name;
    this.balance = money;
  }

  get balance() {
    return this._balance;
  }

  deposit(money) {
    this.balance += money;
  }

  withdraw(money) {
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
    }
  }

  transfer(money, anotherAccount) {
    const account = anotherAccount;
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
      account.balance += money;
    }
  }
}

const account1 = new BankAccount('Michael', 10000);
account1.balance = 20000;
account1.balance = -5000;
//
//
function createBankAccount(name, money) {
    const holder = name;
    let _balance = money;

  const account ={
    get balance() {
      return _balance;
    },
    set balance(money){
      if(money >= 0){
        _balance = money;
      } else {
        console.log('You cannot set negative number for balance');
      }
    },

  deposit(money) {
    this.balance += money;
  },

  withdraw(money) {
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
    }
  },

  transfer(money, anotherAccount) {
    const account = anotherAccount;
    if (this.balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this.balance -= money;
      account.balance += money;
    }
  }
};
  return account;
};


const account1 = new BankAccount('Michael', 10000);
account1.balance = 20000;
account1.balance = -5000;