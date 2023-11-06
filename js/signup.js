import {eye_toggle, mail_focusout, pwd_focusout, input_ing,login_go,keyenter} from "./signup_func.js"
import {eye1,eye2,pwd1, pwd2, mail, submit, input, email_format, pwd_ei,upform} from "./sign_let.js"

eye1.addEventListener('click', function () {
    eye_toggle(eye1, pwd1);
});
eye2.addEventListener('click', function () {
    eye_toggle(eye2, pwd2);
});
pwd1.addEventListener("focusout", function(){
    pwd_focusout(pwd1, eye1)
});
pwd2.addEventListener("focusout", function(){
    pwd_focusout(pwd2, eye2)
});

mail.addEventListener("focusout",mail_focusout);
mail.addEventListener("input",input_ing)
pwd1.addEventListener("input",input_ing)
pwd2.addEventListener("input",input_ing)
submit.addEventListener("click",login_go);
window.addEventListener("keypress",keyenter)