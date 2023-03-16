// 2. 메소드도 캡슐화할 수 있어요
// 이때까지 우리는 프로퍼티를 보호하기 위해 getter/setter 메소드를 활용하거나, 좀더 완벽한 캡슐화를 위해 클로저를 사용할 수 있다는 것을 배웠습니다. 그런데 사실 프로퍼티 뿐만 아니라 메소드를 캡슐화하는 것도 가능합니다. 잠깐 이 코드를 볼까요?
function createUser(email, birthdate) {
  const _email = email;
  let _point = 0;//

  function increasePoint() {//increasePoint라는 메소드 캠술화 하기
    //보호받는 함수임
    _point += 1;
  }

  const user = {
    birthdate,

    get email() {
      return _email;
    },

    get point() {
      return _point;
    },

    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
      increasePoint();
    },
  };

  return user;
}

const item = {
  name: '스웨터',
  price: 30000,
};

const user1 = createUser('chris123@google.com', '19920321');
user1.buy(item);
user1.buy(item);
user1.buy(item);
console.log(user1.point);
/*저는 _point라는 변수를 추가했는데요. 사용자가 물건을 살 때마다 1포인트씩 적립해 줄 목적으로 만든 변수입니다. 그리고 point getter 메소드도 지금 정의해둔 상태입니다. _point 변수를 1씩 늘려주는 함수는 바로 밑에 보이는 increasePoint라는 함수입니다.

이 increasePoint 라는 함수는 유저 객체의 buy 메소드 안에서 쓰이고 있는데요. buy 메소드를 실행할 때 그 안에서 increasePoint 함수도 호출을 해주는 겁니다. 맨 마지막 부분의 코드들을 보면 user1 객체의 buy 메소드를 호출하고 point getter 메소드를 호출하고 있는데요. 이 코드를 실행해보면

chris123@google.com buys 스웨터
chris123@google.com buys 스웨터
chris123@google.com buys 스웨터
3

이렇게 스웨터를 3번 구매했을 때, 포인트는 총 3점이 쌓이게 됩니다.

자, 여기서 중요한 점은 지금 increasePoint라는 함수가 보호받고 있는 함수라는 점입니다. 지금 user1 객체로 바로 increasePoint 함수를 호출할 수는 없습니다. 호출하려고 하면
 */
function createUser(email, birthdate) {
  const _email = email;
  let _point = 0;

  function increasePoint() {
    _point += 1;
  }

  const user = {
    birthdate,

    get email() {
      return _email;
    },

    get point() {
      return _point;
    },

    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
      increasePoint();
    },
  };

  return user;
}

const item = {
  name: '스웨터',
  price: 30000,
};

const user1 = createUser('chris123@google.com', '19920321');
user1.buy(item);
user1.buy(item);
user1.buy(item);
console.log(user1.point);
user1.increasePoint(); // user1 객체로 increasePoint 직접 호출

/*uncaught Type Error: user1.increasePoint is not a function at <anonymous>:40:7
이렇게 그런 함수가 없다는 에러가 출력됩니다. 왜냐하면 user1 객체에는 increasePoint라는 메소드가 없기 때문입니다. 지금 저는 increasePoint가 유저 객체 안에서 적절한 곳에 사용되어야 하고, 아무렇게나 함부로 호출해서는 안 되는 메소드라고 가정하고 이렇게 캡슐화를 한 것입니다. 이런 식으로 메소드(정확하게 말하자면 increasePoint가 메소드는 아니니까 함수라고 할 수 있겠죠?)도 프로퍼티와 마찬가지로 클로저를 통해 캡슐화를 해서 보호할 수 있다는 사실, 잘 기억하세요.
*/