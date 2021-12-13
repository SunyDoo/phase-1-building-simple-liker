// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const heart = document.querySelectorAll('span.like-glyph')
  heart.forEach (heart => {
    heart.addEventListener('click', changeHeart)
  })
  function changeHeart(heart){
    
    mimicServerCall()
    .then ( () => {
      if (heart.target.textContent === EMPTY_HEART){
        heart.target.className = 'activated-heart'
        heart.target.textContent = FULL_HEART
      }
      else if (heart.target.textContent === FULL_HEART){
        heart.target.className = ' '
        heart.target.textContent = EMPTY_HEART
      }
    })
    .catch (() => {
      const error = document.getElementById('modal')
      error.className =' '
      console.log('ERROR')
      setTimeout(() => {
        error.className = 'hidden'},3000)
      })
    }
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
