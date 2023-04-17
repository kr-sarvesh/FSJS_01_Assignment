const btn = document.getElementById('button')

btn.addEventListener('click', changeColor)

function changeColor() {
  let value = '0123456789abcdef'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += value[Math.floor(Math.random() * 16)]
  }

  document.body.style.backgroundColor = color
}
