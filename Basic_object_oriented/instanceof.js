//instanceof    상태확인

class User {
    constructor(email, birthdate) {
      this.email = email;
      this.birthdate = birthdate;
    }
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    }
  }
  
  class PremiumUser extends User {
    constructor(email, birthdate, level, point) {
      super(email, birthdate);
      this.level = level;
      this.point = point;
    }
  
    buy(item) {
      super.buy(item);
      this.point += item.price * 0.05;
    }
  
    streamMusicForFree() {
      console.log(`Free music streaming for ${this.email}`);
    }
  }
  const item = {
    name: '스웨터',
    price: 300000,
  };
  
  const user1 = new User('chris123@google.com', '19920321');
  const user2 = new User('rache@google.com', '19880516');
  const user3 = new User('brian@google.com', '20051125');
  
  const pUser1 = new PremiumUser('tommy@google.com', '19901207', 3);
  const pUser2 = new PremiumUser('helloMike@google.com', '19900915', 2);
  const pUser3 = new PremiumUser('alicekim@google.com', '20010722', 5);
  
  const users = [user1, pUser1, user2, pUser2, user3, pUser3];
  
  users.forEach((user) => {
    //console.log(user instanceof PremiumUser);//PremiumUser로 만든것만 true
    console.log(user instanceof User);//6개 true ->user와 PremiumUser로 만든것 다 true
  });