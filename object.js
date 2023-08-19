/**## 객체

객체는 배열처럼 여러 개의 데이터를 하나로 관리해주는 데이터 형태이며, 배열과의 차이점이라면 데이터를 key와 value로 구분한다는 것입니다.

key와 value를 합쳐서 프로퍼티(property, 속성)라고 합니다. */
let obj1 = {};
let obj2 = {name:"철수", age:20}
/**### 객체와 반복문

객체의 데이터를 하나씩 접근하기 위해서 반복문을 활용할 수 있습니다. */
let obj0 = {name:"철수", age:20}
for(let key in obj0){
  console.log(`객체의 Key는 : ${key}, 값은 ${obj0[key]}입니다. `); 
}

//동적으로 객체의 key, value를 추가할 수 있습니다.

`javascript
let obj1 = {};
obj1.name = "철수"; // 또는 obj1["name"] = "철수";
obj1.age  = 20;    // 또는 obj1["age"]  = 20;`

//삭제
let obj5 = {
    name:"철수",
    age : 20
  };
  delete obj5.name; // 또는 delete obj1['name']



/**3.객체 안에 함수가 포함된 데이터

객체안에 포함된 함수를 다른 용어로 '메서드(method)'라고 부릅니다. */
let obj = {
    name : "철수", 
    address : {
      zipcode : "131809", 
      addr1 : "서울시 강남구",
      addr2 : "한경빌딩 4층 개발팀"
    },
    likeFoods:['banana','apple','oragne'],
    getAge : function(){
      return 20;
    },
    getLikeFood(){
    console.log(this)
        return `${obj.name}은 ${obj.likeFoods[0]}을 좋아한다.` // `${this.name}은 ${this.likeFoods[0]}을 좋아한다.`
    } // es6에서는 getLikeFood: function(){} 같다. 
    
    /*,getLikeFood :() =>{
        return `${this.name}은 ${this.likeFoods[0]}을 좋아한다.`
    }*/
    //화살표 함수는 this가 안된다.
  }
  console.log(obj.getAge());
  console.log(obj.getLikeFood());

