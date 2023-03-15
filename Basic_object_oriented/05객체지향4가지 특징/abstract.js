/*어떤 구체적인 존재를 원하는 방향으로 간략화 해서 나타내는 것 
유저의 객체의 속성- 프로퍼티 
유저의 객체의 행동 - 메소드 
*/
  class BankAccount {
    constructor(name, money) {
      // 소유주
      this.holder = name;
      // 잔액
      this.balance = money;
    }
    // 입금하기
    deposit(money) {
      this.balance += money;
    }
    //출금하기
    withdraw(money) {
      if (this.balance - money < 0) {
        console.log('Insufficient balance');
      } else {
        this.balance -= money;
      }
    }
    // 이체하기
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
/*이렇게 프로퍼티와 메소드에 간단한 주석을 달아 보았는데요.
객체를 만들 때 중요한 것은, 누구나 쉽게 이해할 수 있는 적절한 프로퍼티 이름과 메소드 이름을 지어주는 것입니다. 이것만으로 부족하다고 느껴질 때, 이렇게 주석을 달거나 별도의 설명 문서를 남기는 것이죠.
사실 개발자들이 가장 어려워하는 것 중 하나가 바로 이렇게 프로퍼티와 메소드의 이름을 짓는 일입니다. 좋은 이름일 수록 나중에 코드를 해석할 때 드는 시간적인 비용이 줄어들기 때문입니다.
개발자는 이름을 잘 짓는 사람이 되어야한다는 사실, 잊지 맙시다!
 */