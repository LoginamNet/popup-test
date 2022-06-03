"use strict"

/*Показать и спрятать popup*/

let popupBack = document.querySelector(".popup-back-image");
popupBack.addEventListener('click', popupVisiblity);

function popupVisiblity() {
    let popupMagic = document.getElementById("show-me-magic");
    popupMagic.classList.toggle("hidden");
}

/*Счетчик букв в textarea*/

let textarea = document.querySelector("textarea");
let counter = document.querySelector(".letter-counter");
let textareaCounter = document.querySelector(".text-area-counter");

textarea.addEventListener('input', countLetters);

function countLetters(evt) {
    let length = evt.target.value.length;
    counter.textContent = length;

    if (length <= 9) {textareaCounter.style.marginRight = '0px'};
    if (length > 9) {textareaCounter.style.marginRight = '7px'};
    if (length > 99) {textareaCounter.style.marginRight = '14px'};
}

/*Показать/скрыть пароли*/

let yourName = document.getElementById("popup-your-name");
let yourTown = document.getElementById("popup-your-town");
let yourPhone = document.getElementById("popup-your-tel");
let yourMail = document.getElementById("popup-your-mail");
let regexPhone = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/;
let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let eyeImg = document.getElementById("eye");
let nameBtn = document.getElementById("name-button");
let townBtn = document.getElementById("town-button");
let phoneBtn = document.getElementById("phone-button");
let mailBtn = document.getElementById("mail-button");
let pass1Btn = document.getElementById("pass1-button");
let pass2Btn = document.getElementById("pass2-button");
let eyeImgRepeat = document.getElementById("eye-repeat");
let nameWarningImg = document.getElementById("warning-name");
let townWarningImg = document.getElementById("warning-town");
let phoneWarningImg = document.getElementById("warning-phone");
let mailWarningImg = document.getElementById("warning-mail");
let lentgthPassImg = document.getElementById("warning-length");
let warningPassImg = document.getElementById("warning-pass");
let password = document.getElementById("popup-your-pass");
let passwordRep = document.getElementById("popup-your-pass-repeat");

yourName.oninput = function nameLength() {
    if (yourName.value.length != 0) {
        yourName.classList.remove("input-invalid");
        nameWarningImg.classList.add("hidden");
        nameBtn.style.display = 'none';
    }
}

passwordRep.oninput = function passwordRepetition() {
    if (password.value != passwordRep.value) {
        passwordRep.classList.add("input-invalid");
        warningPassImg.classList.remove("hidden");
        pass2Btn.style.display = 'block';
    } else if (password.value === passwordRep.value) {
        warningPassImg.classList.add("hidden");
        passwordRep.classList.remove("input-invalid");
        pass2Btn.style.display = 'none';
    }
}

password.oninput = function passwordLength() {
    if (password.value.length < 8 || password.value.length > 16) {
        password.classList.add("input-invalid");
        lentgthPassImg.classList.remove("hidden");
        pass1Btn.style.display = 'block';
    } else {
        password.classList.remove("input-invalid");
        lentgthPassImg.classList.add("hidden");
        pass1Btn.style.display = 'none';
    }
}

yourTown.oninput = function townEntering() {
    if (yourTown.value.length === 0) {
        yourTown.classList.add("input-invalid");
        townWarningImg.classList.remove("hidden");
        townBtn.style.display = 'block';
    } else if (yourTown.value.length != 0) {
        yourTown.classList.remove("input-invalid");
        townWarningImg.classList.add("hidden");
        townBtn.style.display = 'none';
    }
}

yourPhone.oninput = function phoneEntering() {

    if (!regexPhone.test(yourPhone.value)) {
        yourPhone.classList.add("input-invalid");
        phoneWarningImg.classList.remove("hidden");
        phoneBtn.style.display = 'block';
    } else {
        yourPhone.classList.remove("input-invalid");
        phoneWarningImg.classList.add("hidden");
        phoneBtn.style.display = 'none';
    }
}

yourMail.oninput = function mailEntering() {

    if (!regexEmail.test(yourMail.value)) {
        yourMail.classList.add("input-invalid");
        mailWarningImg.classList.remove("hidden");
        mailBtn.style.display = 'block';
    } else {
        yourMail.classList.remove("input-invalid");
        mailWarningImg.classList.add("hidden");
        mailBtn.style.display = 'none';
    }
}

function submitForm(event){
    if (yourName.value.length === 0) {
        event.preventDefault();
        event.stopImmediatePropagation();
        yourName.classList.add("input-invalid");
        nameWarningImg.classList.remove("hidden");
        nameBtn.style.display = 'block';
    } else {
        yourName.classList.remove("input-invalid");
    }

    if (yourTown.value.length === 0) {
        event.preventDefault();
        event.stopImmediatePropagation();
        yourTown.classList.add("input-invalid");
        townWarningImg.classList.remove("hidden");
        townBtn.style.display = 'block';
    } 

    if (!regexPhone.test(yourPhone.value)) {
        event.preventDefault();
        yourPhone.classList.add("input-invalid");
        phoneWarningImg.classList.remove("hidden");
        phoneBtn.style.display = 'block';

    }

    if (!regexEmail.test(yourMail.value)) {
        event.preventDefault();
        yourMail.classList.add("input-invalid");
        mailWarningImg.classList.remove("hidden");
        mailBtn.style.display = 'block';
    }

    if (password.value.length < 8 || password.value.length > 16) {
        event.preventDefault();
        event.stopImmediatePropagation();
        password.classList.add("input-invalid");
        lentgthPassImg.classList.remove("hidden");
        pass1Btn.style.display = 'block';
    }


    if (password.value != passwordRep.value) {
        event.preventDefault();
        event.stopImmediatePropagation();
        passwordRep.classList.add("input-invalid");
        warningPassImg.classList.remove("hidden");
        pass2Btn.style.display = 'block';
    }


}

function passwordShowHide(passInput, logo) {

    if (passInput.type == "password") {
        passInput.type = "text";
        logo.src = "img/icons/eye-off.svg";
    } else {
        passInput.type = "password";
        logo.src = "img/icons/eye.svg";
    }
}


