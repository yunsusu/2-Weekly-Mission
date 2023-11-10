let eye1 = document.querySelector('.eye1');
let eye2 = document.querySelector('.eye2');
// let eye = document.querySelector('.eye');
let pwd1 = document.querySelector('.pwd1');
let pwd2 = document.querySelector('.pwd2');
let mail = document.querySelector("#mail");
let submit = document.querySelector("#submit");
let input = document.querySelectorAll("input");
let pwdWarning1 = eye1.nextElementSibling;
let pwdWarning2 = eye2.nextElementSibling;
let mailWarning = mail.nextElementSibling;
let email_format = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
const pwd_ei = /^[A-Za-z]+$|^\d+$/;

function eye_toggle(eye, pwd){
    for(let i = 0; i<eye.children.length; i++){
        eye.children[i].classList.toggle("eye_none");
    }
    
    if(pwd.type == 'password'){
        pwd.type = 'text';
    }else{
        pwd.type = 'password';
    };
}
eye1.addEventListener('click', function () {
    eye_toggle(eye1, pwd1);
});

eye2.addEventListener('click', function () {
    eye_toggle(eye2, pwd2);
});

function setmessage(a){
    let message = document.createElement("p");
    message.innerHTML = a;
    message.classList.add("input_warning");
    return message;
}
function mailwrong(a){
    if(mailWarning){
        mail.parentElement.replaceChild(a, mailWarning);
    }else{
        mail.parentElement.append(a);
    }
}
function pwdwrong(a,b){
    if(b){
        pwd.parentElement.replaceChild(a, b);
    }else{
        pwd.parentElement.append(a);
    }
}

function mail_focusout(a){
    let mail_null = setmessage("이메일을 입력해주세요.");
    let mail_wrong = setmessage("올바른 이메일 주소가 아닙니다.");
    let mail_eight = setmessage("이미 사용 중인 이메일입니다.");

    if(mail.value === ""){
        mail.style.borderColor = "#ff5b56";
        mailwrong(mail_null);
    }else if(mail.value === "test@codeit.com"){
        mail.style.borderColor = "#ff5b56";
        mailwrong(mail_eight);
    }else if(!email_format.test(mail.value)){
        mail.style.borderColor = "#ff5b56";
        mailwrong(mail_wrong)
    }else {
        mail.style.borderColor = "#ccd5e3";
        mail.parentElement.removeChild(mail.nextElementSibling);
    }
}

function pwd_focusout(pwd, eye) {

let pwdWarning = eye.nextElementSibling;
    let pwd_null = setmessage("비밀번호를 입력해주세요.");
    let pwd_no = setmessage("비밀번호가 일치하지 않아요.")
    let pwd_eight = setmessage("비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.")

    if (pwd1.value !== pwd2.value && pwd2.value !== "") {
        pwd2.style.borderColor = "#ff5b56";pwd2.parentElement.append(pwd_no);
        if (pwdWarning) pwdWarning.remove();
    }else if (pwd1.value === pwd2.value && pwd2.value !== "") {
        pwd2.style.borderColor = "#ccd5e3";
        if (pwdWarning) pwdWarning.remove();
    }

    if (pwd.value === "") {
        pwd.style.borderColor = "#ff5b56";
        if (pwdWarning) {
            pwd.parentElement.replaceChild(pwd_null, pwdWarning);
        } else {
            pwd.parentElement.append(pwd_null);
            if (pwdWarning) pwdWarning.remove();
        }
    } else if (pwd1.value.length < 8 || !pwd_ei.test(pwd1.value)) {
        pwd.style.borderColor = "#ff5b56";
        if (pwdWarning) {
            pwd.parentElement.replaceChild(pwd_eight, pwdWarning);
        } else {
            pwd.parentElement.append(pwd_eight);
            if (pwdWarning) pwdWarning.remove();
        }
    } else {
        pwd.style.borderColor = "#ccd5e3";
        if (pwdWarning) pwdWarning.remove();
    }
}


pwd1.addEventListener("focusout", function(){
    pwd_focusout(pwd1, eye1, pwdWarning1)
});
pwd2.addEventListener("focusout", function(){
    pwd_focusout(pwd2, eye2, pwdWarning2)
});

function input_ing(e) {
    if (e.target.name === "pwd1" || e.target.name === "pwd2") {
        const eye = (e.target.name === "pwd1") ? eye1 : eye2;
        eye.nextElementSibling.remove();
    } else {
        // e.target.parentElement.removeChild(e.target.nextElementSibling);
    }
}


function login_go(e){
    if(mail.value === "test@codeit.com" || mail.value === "" || pwd1.value === "" || pwd1.value !== pwd2.value){
        e.preventDefault()
        alert("다시 확인하고 해주세요")
    }
}

mail.addEventListener("focusout",mail_focusout);
mail.addEventListener("input",input_ing)
pwd1.addEventListener("input",input_ing)
pwd2.addEventListener("input",input_ing)
submit.addEventListener("click",login_go);