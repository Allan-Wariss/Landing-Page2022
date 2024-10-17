//Script para Abrir Popup Reserva
var reserva = document.querySelector("#button-home")
var reservaAcao = document.querySelector(".modal__modal-main")
var reservaAcao2 = document.querySelector(".modal")
reserva.addEventListener("click",function(){

    reservaAcao.classList.toggle("modal__modal-main-open")
    reservaAcao2.classList.toggle("modal-open")
    console.log("Abrir clicado")
    
})
//Abrir com o botão do Header
var reserva = document.querySelector(".button__modal-desktop")
var reservaAcao = document.querySelector(".modal__modal-main")
var reservaAcao2 = document.querySelector(".modal")
reserva.addEventListener("click",function(){

    reservaAcao.classList.toggle("modal__modal-main-open")
    reservaAcao2.classList.toggle("modal-open")
    console.log("Abrir clicado")
    
})

//Abrir com o botão do Header
var reserva = document.querySelector(".button__modal-mobile")
var reservaAcao = document.querySelector(".modal__modal-main")
var reservaAcao2 = document.querySelector(".modal")
reserva.addEventListener("click",function(){

    reservaAcao.classList.toggle("modal__modal-main-open")
    reservaAcao2.classList.toggle("modal-open")
    console.log("Abrir clicado")
    
})

//Abrir com o botão da descrição
var reserva = document.querySelector("#button-description")
var reservaAcao = document.querySelector(".modal__modal-main")
var reservaAcao2 = document.querySelector(".modal")
reserva.addEventListener("click",function(){

    reservaAcao.classList.toggle("modal__modal-main-open")
    reservaAcao2.classList.toggle("modal-open")
    console.log("Abrir clicado")
    
})
// Fechar POPUP CLICANDO no X
var fecharreserva = document.querySelector("#close-button")
fecharreserva.addEventListener("click",function(){

    reservaAcao.classList.toggle("modal__modal-main-open")
    reservaAcao2.classList.toggle("modal-open")
    console.log("Fechar clicado")
})

// Fechar POPUP CLICANDO FORA
var fecharreserva = document.querySelector("#modal__close-area")
fecharreserva.addEventListener("click",function(){

    reservaAcao.classList.toggle("modal__modal-main-open")
    reservaAcao2.classList.toggle("modal-open")
    console.log("Fechar clicado")
})

// Fechar POPUP Com a tecla ESC
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === "Escape") {
        reservaAcao.classList.remove("modal__modal-main-open")
        reservaAcao2.classList.remove("modal-open")
    }
});

// Verificação de INPUTS
function success() {
    var labelEmail = document.querySelector("#label__email")
    var labelName = document.querySelector("#label__name")
    var labelTel = document.querySelector("#label__tel")
    var inputName = document.getElementById("modal__input-name")
    var inputEmail = document.getElementById("modal__input-email")
    var inputTel = document.getElementById("modal__input-tel")

    if (inputName.value === "") {
        document.getElementById('modal__button').disabled = true;
        labelName.classList.add("labels_red")
    }
    else{
        document.getElementById('modal__button').disabled = false
        labelName.classList.remove("labels_red")
    }
    if (inputEmail.value === "") {
        document.getElementById('modal__button').disabled = true;
        labelEmail.classList.add("labels_red") 
    }
    else{
        document.getElementById('modal__button').disabled = false;
        labelEmail.classList.remove("labels_red")
    }
    if (inputTel.value === "") {
        document.getElementById('modal__button').disabled = true;
        labelTel.classList.add("labels_red")
    }
    else{
        document.getElementById('modal__button').disabled = false
        labelTel.classList.remove("labels_red")
    }
    if (inputName.value === "" || inputEmail.value === "" || inputTel.value === ""){
        document.getElementById('modal__button').disabled = true;
    }
    else{
        document.getElementById('modal__button').disabled = false;
        
        let data = {
            "name": inputName.value,
            "email":inputEmail.value,
            "phoneNumber": inputTel.value
        };
        
        fetch('http://18.230.66.203/Stakeholder',{
            method: 'POST',
            headers:{
                Accept: "application/json",
                "Content-Type":"application/json"},
            body: JSON.stringify(data)
        });
    }
}
// Verificação de E-MAIL valido no INPUT
function checkEmail() {
    var email = document.querySelector('#modal__input-email');
    var error = document.querySelector('#error-email');

    if (!email.checkValidity()) {
        error.innerHTML = "Email inválido!";
    }
    else{
        success()
    }
}

function redefineMsg() {
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Email inválido!") {
        error.innerHTML = "";
    }
}

