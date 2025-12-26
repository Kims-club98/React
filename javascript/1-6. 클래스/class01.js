// 클래스 - ES6(ECMAScript 2015)
{
  class Fruit{
    // 생성자함수 : new 키워드(java에서...)로 객체를 생성할때 호출되는 함수
    constructor(name, emoji){
      this.name = name
      this.emoji = emoji
    }
    // fucntion display = () => {} X (함수 선언 시 fucntion예약어 사용 불가)
    
    // 사용자 정의 함수
    // 함수 선언 시 function예약어 사용 불가
    display = () => {
      console.log(`${this.name} : ${this.emoji}`)
    }// end of display
  }// end of Fruit

  //insert here(클래스 적용법)
  const tomato = new Fruit("tomato","🍅")
  const kiwi = new Fruit("kiwi","🥝")
  // --> tomato는 Fruit 클래스의 인스턴스

  console.log(tomato.emoji)
  console.log(kiwi.emoji)

  tomato.display()
  kiwi.display()

  // 주의: obj는 인스턴스가 아님.
  const obj = {name : "scott"}
  console.log(obj.name)
}