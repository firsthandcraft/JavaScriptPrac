console.log("HEllo OOp");

//object riteral : 객체를 나타내는 문자열 키,벨류로 구분
const user = {
    email : 'chris123@google.com',
    bitrhdate : '1992-03-21',
    buy(item){//메소드:행동을 나타내는 함수
        console.log(`${this.email} buys ${item.name}`);
    }
};
const item = {
    name : '스웨터',
    price : 30000,
};
console.log(user.email);
console.log(user.birthdate);
user.buy(item);