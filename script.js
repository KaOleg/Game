let hintSpan=document.querySelector(".hint")
console.log(hintSpan)
let attemptsSpan=document.querySelector(".attempts")
console.log(attemptsSpan)
let input=document.querySelector("input")
console.log(input)
let checkBtn=document.querySelector(".check")
let newGameBtn=document.querySelector(".new-game")
let secretNumber = getRandomNumber(10, 100)
let attempts=10
newGameBtn.disabled = true
checkBtn.onclick=function() {
    let userNumber=input.value
    if (userNumber==secretNumber) {
      hintSpan.textContent = "Ты победил"
      checkBtn.disabled = true
      newGameBtn.disabled = false
    }
    if (userNumber<secretNumber) {
      hintSpan.textContent = "Секретное число. Больше"
      attempts = attempts - 1
    }
    if (userNumber>secretNumber) {
        hintSpan.textContent = "Секретное число. Меньше"
        attempts = attempts - 1
    }
    attemptsSpan.textContent = attempts 
    if (attempts == 0) {
        hintSpan.textContent = "Ты проиграл. Нажимай новая игра"
        checkBtn.disabled = true
        newGameBtn.disabled = false
    }
    input.value = ""
    
}
    newGameBtn.onclick = function() {
        attempts = 10
        checkBtn.disabled = false
        newGameBtn.disabled = true
        attemptsSpan.textContent = attempts
        hintSpan.textContent = "Я буду подсказывать"
        secretNumber = getRandomNumber(10,100)
    }
    function getRandomNumber (min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    } 
    // 1) Когда человек проиграл, написать ему в подсказках, какое было секретное число
    // 2) Стилизовать нашу игру
