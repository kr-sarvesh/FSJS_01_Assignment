const jokeBtn = document.getElementById('jokeBtn')
const joke = document.getElementById('joke')

const myHeaders = new Headers()

myHeaders.append('accept', 'application/json')

const jokeUrl = 'https://icanhazdadjoke.com'

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
}

jokeBtn.addEventListener('click', () => {
  const myRequest = new Request(jokeUrl)
  fetch(jokeUrl, myInit)
    .then((response) => response.json())
    .then((data) => {
      joke.innerText = data.joke
    })
})
