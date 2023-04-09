const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const countdown = document.getElementById('countdown')

// function to get a cuurent full year with date and time

const currentYear = new Date().getFullYear()

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`)

// function to get the time difference between current time and new year time

function updateCountdown() {
  const currentTime = new Date()
  // diff. in milliseconds
  const diff = newYearTime - currentTime

  const day = Math.floor(diff / 1000 / 60 / 60 / 24)
  // to get the remainder of the day we have to use the modulo operator
  const hour = Math.floor(diff / 1000 / 60 / 60) % 24
  const min = Math.floor(diff / 1000 / 60) % 60
  const sec = Math.floor(diff / 1000) % 60

  days.innerHTML = day
  hours.innerHTML = hour < 10 ? '0' + hour : hour
  minutes.innerHTML = min < 10 ? '0' + min : min
  seconds.innerHTML = sec < 10 ? '0' + sec : sec
}

setInterval(updateCountdown, 1000)
