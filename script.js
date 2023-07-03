// function highlight() {
//     //Write your code here


// }


// function return_normal() {
//     //Write your code here

    
// }
function highlight() {
  // Get all the <strong> elements within the paragraph
  const boldWords = document.querySelectorAll('p strong');

  // Change the color of bold words to green
  for (let i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = 'green';
  }
}

function return_normal() {
  // Get all the <strong> elements within the paragraph
  const boldWords = document.querySelectorAll('p strong');

  // Revert the color of bold words back to black
  for (let i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = 'black';
  }
}