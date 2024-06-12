import { data } from '/js/data.js'

const summaryElements = document.getElementById("summary-wrap")
const averageEl = document.getElementById("average-el")
const summaryBtn = document.getElementById("summary-btn")

function renderData(data) {
  let items = ""
  for (let item of data) {
    items += `
      <li class="summary__item">
        <img src="${item.icon}" aria-hidden="true">
        <span>${item.category}</span>
        <p class="clr-black"><strong class="fw-800">${item.score}</strong><span class="opa-80"> / 100</span></p>
      </li>
    `
  }
  summaryElements.innerHTML = items
}

function average(data) {
  let itemSum = 0
  let average = 0

  for (let item of data) {
    itemSum += item.score
    }
  average = itemSum / data.length
  averageEl.textContent = Math.round(average)
}

summaryBtn.addEventListener("mouseenter", function() {
  summaryBtn.classList.add("gradient-bg")
})
summaryBtn.addEventListener("mouseout", function() {
  summaryBtn.classList.remove("gradient-bg")
  })
summaryBtn.addEventListener("focusin", function() {
  summaryBtn.classList.add("gradient-bg")
})
summaryBtn.addEventListener("focusout", function() {
  summaryBtn.classList.remove("gradient-bg")
})

renderData(data)
average(data)