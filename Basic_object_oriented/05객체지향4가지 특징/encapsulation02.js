// 1. 완벽한 캡슐화를 하는 법
// 이전 영상에서는 다음 코드로 캡슐화를 배웠습니다.
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }

  get email() {
    return this._email;
  }

  set email(address) {
    if (address.includes('@')) {
      this._email = address;
    } else {
      throw new Error('invalid email address');
    }
  }
}

const user1 = new User('chris123@google.com', '1992-03-21');
user1.email = 'newChris123@google.com';
console.log(user1.email);
/*이제 이 코드를 보면 _email 프로퍼티에 직접 접근하지 말고, email이라는 getter/setter 메소드로만 접근해야 한다는 것이 눈에 잘 보입니다. 하지만 사실 완벽한 캡슐화가 된 상태는 아닙니다. 왜냐하면 보호하려는 프로퍼티 _email에
console.log(user1._email);
user1._email = 'chris robert';
이런 식으로 여전히 직접 접근할 수는 있기 때문입니다.

사실 자바스크립트에는 캡슐화를 자체적으로 지원하는 문법이 아직 없습니다.(Java는 private이라는 키워드가 있어서 언어의 문법 차원에서 캡슐화를 지원합니다.)

하지만 JavaScript에서도 다른 방식으로 우회해서 완벽한 캡슐화를 할 수는 있는데요. 클로저(Closure)라고 하는 개념을 응용해서 적용하면 됩니다. 잠깐 아래 코드를 보세요.
 */
function createUser(email, birthdate) {
  let _email = email;//_email

  const user = {
    birthdate,

    get email() {
      return _email;
    },

    set email(address) {
      if (address.includes('@')) {
        _email = address;
      } else {
        throw new Error('invalid email address');
      }
    },
  };

  return user;
}

const user1 = createUser('chris123@google.com', '19920321');
console.log(user1.email);
/**지금 이 코드를 보면 createUser라고 하는 Factory function이 보입니다. 그런데 생성하려는 user 객체 안에 _email 프로퍼티가 있는 게 아니라,

(1) createUser 함수 안에, 
(2) 그리고 user 객체 바깥에 _email이라는 변수가 있죠?

대신에 user 객체 안에는 _email 변수의 값을 읽고 쓸 수 있는 email이라는 getter/setter 메소드가 있습니다.

지금 마지막 부분에서 createUser라는 Factory function으로 user1이라는 객체를 생성하고, user1 객체의 email getter 메소드를 호출했는데요. 이 코드의 실행 결과를 확인해보면,
chris123@google.com
이렇게 _email 변수의 값이 잘 출력됩니다. 함수 안의 변수의 값을 이미 리턴된 객체에서 읽은 건데요. 어떻게 이게 가능한 걸까요? 이것은 자바스크립트의 클로저(Closure)라고 하는 것 덕분에 가능합니다.

클로저란 자바스크립트에서 어떤 함수와 그 함수가 참조할 수 있는 값들로 이루어진 환경을 하나로 묶은 것을 의미하는데요. 예를 들어, 지금 createUser 함수가 실행되는 시점에 email이라는 getter/setter 메소드는 _email 이라는 변수의 값에 접근할 수 있는 상태입니다. 그리고 여기서 핵심은 이 email getter/setter 메소드들은 메소드를 갖고 있는 객체가 리턴된 이후더라도 여전히 _email에 접근하는 것이 가능하다는 점입니다. 바로 이렇게 함수가 정의된 당시에 참조할 수 있었던 변수들을 계속 참조할 수 있는 상태의 함수를 클로저라고 합니다. 이 클로저는 다른 프로그래밍 언어에서는 쉽게 찾아보기 힘든 자바스크립트만의 특징인데요.(물론 클로저 개념이 있는 다른 언어들도 있습니다)

보통 다른 프로그래밍 언어였다면 createUser 함수 내부가 실행될 때만 email getter/setter 메소드가 _email 변수에 접근할 수 있었겠지만, 자바스크립트에서는 클로저라는 개념으로 해당 환경을 함수와 함께 그대로 유지시켜주는 것입니다.

만약 클로저가 아닌 경우에는 _email 변수에 접근할 수 없습니다. 만약 이런 식으로
const user = {
    birthdate,

    get email() {
      return _email;
    },

    set email(address) {
      if (address.includes('@')) {
        _email = address;
      } else {
        throw new Error('invalid email address');
      }
    },
  };

  return user;
}

const user1 = createUser('chris123@google.com', '19920321');
console.log(user1._email); // _ 추가

user1 객체의 _email 프로퍼티에 접근하려고 하면, user1 객체 자체 내에는 _email이라고 하는 프로퍼티가 없고, 바깥의 _email 변수에 현재 접근할 수도 없기 때문에

undefined가 출력됩니다.

이런 식으로 자바스크립트에서는 클로저를 사용해서 완벽한 캡슐화를 할 수 있습니다. 신기하죠? 사실 자바스크립트로 프로그래밍을 할 때 캡슐화가 얼마나 중요한지, 꼭 해야하는지에 관해서는 논란이 많습니다. 하지만 어떤 상황이든 이런 식으로 완벽하게 캡슐화를 할 수 있다 정도는 알아두는 게 좋습니다.
*/