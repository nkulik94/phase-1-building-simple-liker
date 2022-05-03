// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMessage = document.getElementById('modal')
errorMessage.className = 'hidden'
const heartArray = [...document.querySelectorAll('.like-glyph')]

heartArray.map(element => {
  element.addEventListener('click', event => {
    mimicServerCall()
    .then(response => {
      heart = event.target
      console.log(response)
  if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART
    heart.className = 'activated-heart'
  } else if (heart.textContent === FULL_HEART) {
    heart.textContent = EMPTY_HEART
    heart.className = 'like-glyph'
  }
    })
    .catch(error => {
      errorMessage.className = ''
      console.log(error)
      setTimeout(() => errorMessage.className = 'hidden', 3000)
    })
  })
})

function successfulLike(response) {
  console.log(response)
  if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART
    heart.className = 'activated-heart'
  } else if (heart.textContent === FULL_HEART) {
    heart.textContent = EMPTY_HEART
    heart.className = 'like-glyph'
  }
}
function unsuccessfulLike(error) {
  errorMessage.className = ''
  console.log(error)
  setTimeout(() => errorMessage.className = 'hidden', 3000)
}


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
