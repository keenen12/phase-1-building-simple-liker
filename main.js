// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector('#modal')


// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  console.log("dom has been loaded")
  const errorModal = document.querySelector('#modal')

  // FIND LIKES
  clickListener();

})

function hideError(){
  errorModal.classList.add('hidden')
}

function findLikes(){
  const likeArr = document.querySelectorAll('.like-glyph')

  likeArr.forEach((singularLike) => {
    singularLike.addEventListener('click', () => console.log('YOU FOUND ME!') )
  })
}

function clickListener(){
  document.addEventListener('click', (event) => {
    if(event.target.classList[0] === 'like-glyph'){
      mimicServerCall()
      .then(resp => {
       const activated = event.target.classList.contains('activated-heart');
        activated 
        ? event.target.classList.remove('activated-heart')
        : event.target.classList.add('activated-heart');
      })
      .catch(error => {
        errorModal.classList.remove('hidden')
        setTimeout(() => {
          hideError();
      }, 3000)

      })
    }
  })
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
