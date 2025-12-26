// 함수
// function 함수명(매개변수[선택]) {
  // 함수식
  // return 값
//}

{
//1) retun 유무
  function add(a,b){
    const result = a + b
    return result
  }

    function minus(a,b){
    const result = a - b
    
  }

  const result = add(1,2)
  console.log(result)
  console.log(minus(1,2)) // return값이 있어야 값을 함수의 코드를 출력물을 가지고 올 수 있다.
}

// 함수할당
{
  function add(a,b) {
    const result = a + b
    return result

  }
  // sum 변수도 0x11이라는 주소를 가진다.
  const sum = add // sum 함수에 add를 치환하여 sum 함수와 add 함수가 같은 효과를 가지게 되게 함
  console.log(sum(1,2))
  console.log(sum(3,4))

  // 함수를 parameter로 넘길 수 있다...
  function other(tot){
    console.log(tot(2,3))
  }
  other(sum)

}

// 함수에서 return 사용
// return을 함수 중간에 사용하면, 함수가 종료됨!!!
{
  function print2(num){
    if(num < 0){
      return
        // insert here
        console.log("here")

    }
  }

  print2(5) // 이런식으로 양수를 호출 시 retrun을 못본다...
  print2(-3) // 이렇게 하면 return값을 탈출한다.
}

//콜백함수
{
  // 함수에 따라 결과가 달라질 수 있다.
  const add = (a, b) => a + b
  const multiply = (a,b) => a * b
  /*
    - 파라미터로 전달된 action은 콜백함수임
    - 전달될 당시에 함수를 바로 호춣해서 반환된 값을 전달하는 것이 아니라
      함수가 가리키고 있는 함수의 래퍼런스(참조값)이 전달된다.
  */

  function calculator(a,b,action){
    if(a < 0 || b < 0) {// ||는 or을 의미(js), 둘 중 하나만 만족하더라도
    return // 함수를 탈출한다(조건 만족 시)
  }
  let result = action(a,b)
  console.log(`calculator result> ${result}`)
  return result
  }// end of calcultor
  console.log("여기")
// insert here
//어떤 함수를 전달하는가에 따라서 계산 결과가 달라짐!!!

// Q. 3개 중 다른 느낌을 가지는 것은? ==> A. 2번
let r1 = calculator(1,2,add)
let r2 = calculator(-1,-2,add) // a와 brk 음수이므로 return된다.
let r3 = calculator(1,2,multiply)

}
  console.log("======================[[함수 표현식 ,선언문, 화살표 함수]]===================")

// 함수 표현식, 함수 선언문, 화살표 함수
{
  function minus(){}
  const add = function(a,b){
    return a + b
  } // 함수 add는 a와 b를 받아 a+b를 return해준다

  // arrow fucntion
  add = (a,b) => a + b 

  // 즉시 실행 함수
  // 함수는 값으로 계산될 수 있는 표현이다. -> 그래서 즉시 실행함수가 가능함.
  //IIFE(Immedicately - Invoked Function Expressions)
  (function run(){
    console.log('run')
  })()

}




