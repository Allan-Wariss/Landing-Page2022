let toggleButton = document.querySelector('#toggle-menu-button')
let hamburguerLine = document.querySelector('.global__hamburguer-line')
let navBar = document.querySelector('#nav-bar')

toggleButton.addEventListener('click', () => {
  hamburguerLine.classList.toggle('active')
  navBar.classList.toggle('active')
})