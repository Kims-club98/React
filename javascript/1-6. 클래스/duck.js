export class Duck{
  constructor(name, leg){
    this.name = name
    this.leg = leg
  }
  display = () => {
    console.log("나는 오리입니다")
  }

  swimmingf = () => {
    console.log("모든 오리는 물위를 다닙니다.")
  }
}