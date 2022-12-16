// 1 Задача я не смог !!
const block = document.querySelector(".block")

let positionX = 0
let positionY = 0

 const move = () => {
     if (positionX <= 440){
         positionX += 15
         block.style.left = `${positionX}px`
         setTimeout(move, 100)
     }else if (positionX >= 440 && positionY <= 440) {
         positionY += 15
         block.style.top = `${positionY}px`
         setTimeout(move, 100)
     }else if (positionX >= 440) {
         positionX -= 15
         block.style.left = `${positionX}px`
         setTimeout(move, 100)
     }
}
move()


// 2 Задача
let i = 0

const interval =  setInterval(() => {
     i++
     console.log("Прошло "+ i +" ceкунд")
    if (i === 60){
        clearInterval(interval)
 }}, 1000);





