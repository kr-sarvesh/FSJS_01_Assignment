let convertBtn = document.getElementById('convert-btn')

convertBtn.addEventListener('click', input)

function input() {
  let text = document.getElementById('text').value

  document.getElementById('camel-case').innerText = camelCase(text)
  document.getElementById('pascal-case').innerText = pascalize(text)
  document.getElementById('snake-case').innerText = snakeCase(text)
  document.getElementById('screaming-snake-case').innerText =
    screamingSnakeCase(text)
  document.getElementById('kebab-case').innerText = snakeCase(text)
  document.getElementById('screaming-kebab-case').innerText =
    screamingSnakeCase(text)
}

function camelCase(text) {
  let str = text.toLowerCase()
  let words = str.split(' ')
  let finalstr = ''
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      finalstr += words[i].toLowerCase()
    } else {
      finalstr += words[i][0].toUpperCase() + words[i].substring(1)
    }
  }
  return finalstr
}

function pascalize(text) {
  let str = text.toLowerCase()
  let words = str.split(' ')
  let finalstr = ''
  for (let i = 0; i < words.length; i++) {
    finalstr += words[i][0].toUpperCase() + words[i].substring(1)
  }
  return finalstr
}
function snakeCase(text) {
  let str = text.toLowerCase()
  let finalstr = str.replaceAll(' ', '_')
  return finalstr
}

// Screaming Snake Case function
function screamingSnakeCase(text) {
  let str = text.toUpperCase()
  let finalstr = str.replaceAll(' ', '_')
  return finalstr
}

// Kebab Case function
function snakeCase(text) {
  let str = text.toLowerCase()
  let finalstr = str.replaceAll(' ', '-')
  return finalstr
}

// Screaming Kebab Case function
function screamingSnakeCase(text) {
  let str = text.toUpperCase()
  let finalstr = str.replaceAll(' ', '-')
  return finalstr
}
