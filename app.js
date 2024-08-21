let form= document.querySelector("form");
let name= form.querySelector("div #name");
let email= form.querySelector("div #email");
let password= form.querySelector("div #password");





form.addEventListener("submit",formHandler)

function formHandler(e){
e.preventDefault();

document.write("Your Name:"+name.value + "<br/>");
document.write("Your Email:"+email.value + "<br/>");
document.write("Your Password:"+password.value + "<br/>");


document.write("Thanks for filling this form!")








}

