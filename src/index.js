console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 


// on page load
// fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array

fetch(imgUrl).then(response => response.json).then(json => imgUrl)

