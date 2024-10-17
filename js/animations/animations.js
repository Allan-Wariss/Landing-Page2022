//Esconder NavBar quando rolar
var prevScrollpos = window.pageYOffset;
document.querySelector(".header__container").style.top = "0";
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header__container").style.top = "0";
  } else {
    document.querySelector(".header__container").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}


// Fade blur Eixo X
const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } // else {
        //     entry.target.classList.remove('show');
        // }
    });
});
// Desce Eixo Y Rápido
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } //else {
        //     entry.target.classList.remove('show2');
        // }
    });
});
// Fade Eixo Y Lento
const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer2.observe(el));

const observer3 = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
        } //else {
            //entry.target.classList.remove('show3');
        //}
    });
});

const hiddenElements3 = document.querySelectorAll('.hidden3');
hiddenElements3.forEach((el) => observer3.observe(el));