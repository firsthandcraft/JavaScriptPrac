/*실습 설명
현재 코드에는 '은행 계좌'를 의미하는 BankAccount 클래스가 정의되어 있습니다.

그리고 이 클래스를 상속받는 두 개의 자식 클래스, SavingsAccount 클래스, DonationAccount 클래스가 있는데요.

각 클래스에서 이체를 담당하는 메소드의 이름은 아래와 같습니다.

(1) BankAccount 클래스의 경우 transfer 
(2) SavingsAccount 클래스의 경우 give
(3) DonationAccount 클래스의 경우 send

이렇게 세 클래스는 이체를 담당하는 메소드의 이름도 다르고, 이체 수수료도 다릅니다. (BankAccount 클래스의 경우 이체 수수료가 없고, SavingsAccount 클래스의 경우 0.5%의 이체 수수료, DonationAccount 클래스의 경우 0.2%의 이체 수수료가 있습니다.)

지금 코드의 아래 부분을 보면 Tom, Jerry, Kate, Alice 이 네 사람은 휴가 때 함께 여행을 가기로 했고, 필요한 공동 경비를 모으기 위해 하나의 통장에 모두 똑같이 800,000원씩을 이체하려고 합니다.

// ~
ba1.transfer(800000, accountForVacation);
sa1.give(800000, accountForVacation);
da1.send(800000, accountForVacation);
sa2.give(800000, accountForVacation);
// ~
지금 각자 가진 계좌의 종류가 달라서 이체를 하는 코드를 한 줄씩 일일이 적어 줘야만 합니다. 다형성을 활용하면 기존의 이 코드를 조금 더 짧은 코드로 바꿀 수 있을 것 같은데요. 여러분이 직접 코드를 수정해서 다형성을 활용하는 짧은 코드로 바꿔 보세요.*/
class BankAccount {
  constructor(name, money) {
    this.holder = name;
    this.balance = money;
  }

  get balance() {
    return this._balance;
  }

  set balance(money) {
    if (money >= 0) {
      this._balance = money;
    } else {
      console.log('Not valid');
    }
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

class SavingsAccount extends BankAccount {
  constructor(name, money) {
    super(name, money);
    this.years = 0;
  }

  addInterest(rate) {
    this.balance *= (1 + (rate * this.years));
  }
  
  give(money, anotherAccount) {
    super.transfer(money, anotherAccount);
    this.balance -= money * 0.005;
  }
}

class DonationAccount extends BankAccount {
  constructor(name, money, rate) {
    super(name, money);
    this.rate = rate;
  }

  donate(rate) {
    this.balance *= (1 - this.rate);
  }

  send(money, anotherAccount) {
    super.transfer(money, anotherAccount);
    this.balance -= money * 0.002;
  }
}

const ba1 = new BankAccount('Tom', 20000000);
const sa1 = new SavingsAccount('Jerry', 10000000);
const da1 = new DonationAccount('Kate', 30000000);
const sa2 = new SavingsAccount('Alice', 9000000);

const accountForVacation = new BankAccount('Vacation', 0);

ba1.transfer(800000, accountForVacation);
sa1.give(800000, accountForVacation);
da1.send(800000, accountForVacation);
sa2.give(800000, accountForVacation);

console.log(ba1.balance);
console.log(sa1.balance);
console.log(da1.balance);
console.log(sa2.balance);
console.log(accountForVacation.balance);

/**새헐
 * 해설
BankAccount 클래스의 transfer 메소드, SavingsAccount 클래스의 give 메소드, DonationAccount 클래스의 send 메소드는 모두 아래와 같은 순서로 작업들을 진행함으로써 이체 기능을 수행합니다.

다른 계좌의 잔액을 이체하는 금액만큼 늘린다.
현재 계좌의 잔액을 이체하는 금액만큼 줄인다.
(SavginsAccount 와 DonationAccount의 경우) 이체 수수료만큼 현재 계좌의 잔액을 더 줄인다.
그리고 자식 클래스들은 1. 2.의 작업을 하기 위해 부모 클래스인 BankAccount 클래스의 transfer 메소드를 호출하고 있습니다. 그런데 지금 각 클래스에서 같은 기능을 하는 메소드의 이름들이 달라서 코드가 불필요하게 길어진 상황이죠?

이럴 때는 두 자식 클래스의 메소드인 give 메소드와 send 메소드도 그 이름을 부모 클래스처럼 transfer로 바꿔주면 다형성을 활용할 수 있습니다. 이런 식으로 말이죠.

class BankAccount {
  constructor(name, money) {
    this.holder = name;
    this.balance = money;
  }

  get balance() {
    return this._balance;
  }

  set balance(money) {
    if (money >= 0) {
      this._balance = money;
    } else {
      console.log('Not valid');
    }
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

class SavingsAccount extends BankAccount {
  constructor(name, money){
    super(name, money);
    this.years = 0;
  }

  addInterest(rate) {
    this.balance *= (1 + (rate * this.years));
  }
  
  transfer(money, anotherAccount) {
    super.transfer(money, anotherAccount);
    this.balance -= money * 0.005;
  }
}

class DonationAccount extends BankAccount {
  constructor(name, money, rate) {
    super(name, money);
    this.rate = rate;
  }

  donate(rate) {
    this.balance *= (1 - this.rate);
  }

  transfer(money, anotherAccount) {
    super.transfer(money, anotherAccount);
    this.balance -= money * 0.002;
  }
}

const ba1 = new BankAccount('Tom', 20000000);
const sa1 = new SavingsAccount('Jerry', 10000000);
const da1 = new DonationAccount('Kate', 30000000);
const sa2 = new SavingsAccount('Alice', 9000000);

const accountForVacation = new BankAccount('Vacation', 0);

const accounts = [ba1, sa1, da1, sa2];

for(account of accounts) {
  account.transfer(800000, accountForVacation);
}

console.log(ba1.balance);
console.log(sa1.balance);
console.log(da1.balance);
console.log(sa2.balance);
console.log(accountForVacation.balance);
지금 모든 클래스에서 이체 기능을 담당하는 메소드의 이름을 transfer로 바꿨고, for문 안에서 account 변수가 매번 가리키는 객체의 transfer 메소드를 호출하고 있습니다. 이렇게 하면 account 변수가 어떤 클래스로 만든 객체를 가리키든 상관없이 아래 코드가 잘 실행됩니다.

 account.transfer(50000, accountForVacation);
이렇게 부모 클래스와 자식 클래스들에서 동일한 기능을 하는 메소드의 이름을 모두 통일시키고, 다형성을 활용하면, 같은 작업을 조금 더 간결한 코드로 수행할 수 있습니다. 이 사실을 잘 기억하세요!
 */