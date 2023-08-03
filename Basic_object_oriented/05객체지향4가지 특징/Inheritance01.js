/*실습 설명
현재 코드에는 '은행 계좌'를 의미하는 BankAccount 클래스가 정의되어 있습니다. 그런데 이제 새로운 계좌 종류 2 개가 추가되었습니다.

한 달에 한 번씩 잔액에 일정 이자를 더해주는 '저축 계좌'(SavingsAccount)
기부할 목적으로 사용하는 '기부 계좌'(DonationAccount)
두 계좌 모두 BankAccount 클래스의 모든 프로퍼티와 메소드를 필요로 하고, 다음과 같은 추가 사항이 필요합니다.

(1) 저축 계좌(SavingsAccount)

years 프로퍼티: 해당 계좌의 보유 기간, 기본값을 0으로 설정해 주세요.
addInterest 메소드: 해당 계좌의 잔액에 매년 이자를 더해 주는 메소드, addInterest 메소드는 이렇게 생겼습니다. */
addInterest(rate) {
  this.balance *= (1 + (rate * this.years));
}
/**계좌 보유 기간에 이자율을 곱해서, 가입 기간이 오래된 장기 고객일수록 더 많은 이자 혜택을 준다는 것을 알 수 있습니다.

(2) 기부 계좌(DonationAccount)

rate 프로퍼티: 계좌 잔액 중 어느 비율만큼 기부할지를 나타냄
donate 메소드: 매년 계좌 잔액의 일정 금액을 자동으로 기부하는 동작을 나타내는 메소드
 */
donate() {
  this.balance *= (1 - this.rate)
}
//이 설명에 부합하는 저축 계좌(SavingsAccount) 클래스와 기부 계좌(DonationAccount) 클래스를 만들어 보세요.
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

class SavingsAccount {
  // 여기에 코드를 작성하세요
}

class DonationAccount {
  // 여기에 코드를 작성하세요
}

const sa1 = new SavingsAccount('Kate', 50000);
const da1 = new DonationAccount('Mike', 90000, 0.05);

sa1.years++;
sa1.addInterest(0.02);
da1.donate();
sa1.years++; 
sa1.addInterest(0.05);
da1.donate();
sa1.years++;
sa1.addInterest(0.07);
da1.donate();

console.log(Math.floor(sa1.balance));
console.log(Math.floor(da1.balance));


//답
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

class SavingsAccount extends BankAccount{
  // 여기에 코드를 작성하세요
   constructor(name, money){
    super(name, money);
    this.years = 0;
  }
   addInterest(rate) {
    this.balance *= (1 + (rate * this.years));
  }
}

class DonationAccount extends BankAccount{
  // 여기에 코드를 작성하세요
  constructor(name, money, rate){
    super(name, money);
    this.rate = rate;
  }

   donate() {
    this.balance *= (1 - this.rate);
  }
}

const sa1 = new SavingsAccount('Kate', 50000);
const da1 = new DonationAccount('Mike', 90000, 0.05);

sa1.years++;
sa1.addInterest(0.02);
da1.donate();
sa1.years++; 
sa1.addInterest(0.05);
da1.donate();
sa1.years++;
sa1.addInterest(0.07);
da1.donate();

console.log(Math.floor(sa1.balance));
console.log(Math.floor(da1.balance));
/**문제에 제시된 조건과, 그 아래에서 SavingsAccount 클래스와 DonationAccount 클래스를 어떻게 사용했는지를 살펴보면 어렵지 않게 두 클래스를 작성할 수 있습니다.

이렇게 매년 달라지는 이자율과, 계좌의 보유 기간을 모두 고려했을 때 Kate는 저축 계좌를 가진 시점으로부터 3년 후, 67881원의 잔액을 갖게 됩니다.
그리고 3년간 꾸준히 기부를 한 Mike의 기부 계좌 잔액은 77163원이 됩니다. 참고로 Math.floor()는 내장 객체 Math가 가진 함수로, 어떤 수의 소수점 아래를 버리는 함수입니다. */
