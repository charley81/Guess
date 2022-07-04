'use strict'

// place cursor in guess input
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.guess').focus()
})

let randomNumber = Math.floor(Math.random() * 20) + 1
let highscore = 0
let score = 20

// create message function
const message = text => (document.querySelector('.message').textContent = text)

const submit = document
  .querySelector('.submit')
  .addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value)

    // if no number is entered
    if (!guess) {
      message('⛔️ You must enter a number')
    }

    // if guess does not equal random number
    else if (guess !== randomNumber) {
      if (score > 5) {
        guess > randomNumber ? message('👆 Too high') : message('👇 Too low')
        score -= 5
        document.querySelector('.current-score').textContent = score
        document.querySelector('.guess').value = ''
        document.querySelector('.guess').focus()
      } else {
        document.querySelector('.guess').disabled = true
        message('🥲 GAME OVER')
        document.querySelector('.current-score').textContent = 0
      }
    }

    // user won
    else {
      message('🎉 Congrats, you won')
      document.querySelector('.guess').disabled = true
      document.querySelector('.number').textContent = randomNumber
      document.querySelector('body').style.backgroundColor = '#066163'

      if (score > highscore) {
        document.querySelector('.high-score').textContent = score
      }
    }
  })

const again = document
  .querySelector('.again')
  .addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 20) + 1
    document.querySelector('.guess').disabled = false
    score = 20
    document.querySelector('.current-score').textContent = score
    document.querySelector('.guess').value = ''
    document.querySelector('.guess').focus()
    document.querySelector('body').style.backgroundColor = '#383838'
  })
