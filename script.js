const form = document.getElementById("form")
const email= document.getElementById("email");

form.addEventListener('submit', e => {
    e.preventDefault();

    var emailVal= email.value.trim();


    if(emailVal === ""){
        errorFunc(email, "Email Address cannot be empty");
    }


})


function errorFunc(req, message){
    const formControl = req.parentElement
    console.log('formcontrol',formControl);

    const span = formControl.querySelector('span')
    console.log('span',span);

    span.innerText = message
    // req.className = "error"
    span.className = 'error-text'

    const errorBorder= document.querySelector('input');
    errorBorder.className+='errorinput'
    console.log('error',errorBorder);

    

    // const expand= document.getElementById("formcard")
    // expand.className="expandformerror"
}