// 표현식, 할당문, 선언문 구분

let b // 선언문

b = 2 // 표현문, 할당문

let a = (b = 2)
console.log(a) // 2 출력됨.

// 스코프 연산자
{
// 할당연산자(Assigment)
let a = 1
a = a + 2
console.log(a) // a 는 1, a 에서 2를 더함 == a는 3

a+=2
console.log(a)// a에서 2 더함

a-=2
console.log(a)// a(현5)에서 2을 뺌

a *=2
console.log(a) // a(현3)에서 2를 곱함
}

/*
  - 동등비교관계 연산자(Equality operators)
  == 값이 같다
  != 값이 다르다
  === 값과 타입(type)이 둘 다 같다
  !== 값과 타입이 둘 다 다르다
*/
{
  const obj1 ={
    name:"js"
  }
  const obj2 = {
    name:"js"
  }
  console.log(obj1 == obj2)
  console.log(obj1 === obj2)
// -> 객체가 아닌 함수에 대한 비교로 false가 출력 ("주소번지가 다르다!!!")

  console.log(obj1.name == obj2.name)
  console.log(obj1.name === obj2.name)
// -> 각각의 객체 js에 대한 비교로 true값이 출력

let obj3 =obj2
console.log(obj3 == obj2)
console.log(obj3 === obj2)
// -> 둘은 주소번지를 공유하기 떄문에, type도 같고, 값도 같다!!!

}

