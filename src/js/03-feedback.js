var throttle = require('lodash.throttle');

const feedbackForm =document.querySelector(".feedback-form");
const emailInput = feedbackForm.querySelector('[type = "email"]');
const messageInput = feedbackForm.querySelector('[name = "message"]');

let formData = {};

feedbackForm.addEventListener('submit', pushBtnSubmit);
feedbackForm.addEventListener('input', throttle(saveForm, 500) )


function saveForm(event) {
    event.preventDefault()
    formData.email = emailInput.value;
    formData.message = messageInput.value; 

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));}

function inputSaveForm(){
    const saveFormData = localStorage.getItem("feedback-form-state");
    const parsedSaveFormData = JSON.parse(saveFormData);
    if (parsedSaveFormData){ 
    emailInput.value = parsedSaveFormData.email;
    messageInput.value = parsedSaveFormData.message;}}
inputSaveForm();   

function pushBtnSubmit (evt) {
    evt.preventDefault(); 
    let loginInfo = {};

    loginInfo.email = emailInput.value;
    loginInfo.message = messageInput.value; 
    console.log(loginInfo);

    feedbackForm.reset(); 
    localStorage.removeItem("feedback-form-state")};
        