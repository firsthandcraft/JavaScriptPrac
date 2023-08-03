// static 프로퍼티와 static 메소드
// 클래스에 직접적으로 딸려있는 프로퍼티와 메소드 -> 객체가 아닌 클래스 자체로 접근
class Math{
  static PI = 3.14;
  static getCircleArea(radius){
    return Math.PI * radius * radius;
  }
}
console.log(Math.PI);//3.14
console.log(Math.getCircleArea(5));//이렇게 클래스 이름Math로 바로 접근이 가능 78.5

Math.PI =3.141592;
Math.getRetangleArea =function (width, height){
  return width * height;
}

console.log(Math.PI);//3.141592
console.log(Math.getRetangleArea(4,5));//20
console.log(Date.now());//3.14