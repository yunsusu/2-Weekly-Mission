let eye = document.querySelector('.eye');
let pwd = document.querySelector('#pwd');
let mail = document.querySelector("#mail");
let submit = document.querySelector("#submit");
let pwdWarning = eye.nextElementSibling;
let mailWarning = mail.nextElementSibling;
let email_format = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

function eye_toggle(){
    for(let i = 0; i<eye.children.length; i++){
        eye.children[i].classList.toggle("eye_none");
    }
    
    if(pwd.type == 'password'){
        pwd.type = 'text';
    }else{
        pwd.type = 'password';
    };
}

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

function pwdwrong(a){
    if(pwdWarning){
        pwd.parentElement.replaceChild(a, pwdWarning);
    }else{
        pwd.parentElement.append(a);
    }
}

function mail_focusout(a){
    let mail_null = setmessage("이메일을 입력해주세요.")
    let mail_wrong = setmessage("올바른 이메일 주소가 아닙니다.");
    if(mail.value === ""){
        mail.style.borderColor = "#ff5b56";
        mailwrong(mail_null);
    }else if(!email_format.test(mail.value)){
        mail.style.borderColor = "#ff5b56";
        mailwrong(mail_wrong);
    }else{
        mail.style.borderColor = "#ccd5e3";
        mail.parentElement.removeChild(mail.nextElementSibling);
    }
}

function login_wrong_pwd(){
    pwd.style.borderColor = "#ff5b56";
    let pwd_noligin = setmessage("비밀번호를 확인해주세요.")
    if(pwdWarning || mailWarning){
        pwd.parentElement.replaceChild(pwd_noligin, pwdWarning);
    }else if(pwdWarning && !mailWarning){
        pwd.parentElement.replaceChild(pwd_noligin, pwdWarning);
    }else if(!pwdWarning && mailWarning){
        pwd.parentElement.append(pwd_noligin);
    }else{
        pwd.parentElement.append(pwd_noligin);
    }
}

function login_wrong_mail(){
    let mail_noligin = setmessage("이메일을 확인해주세요.");
    mail.style.borderColor = "#ff5b56";
    if(pwdWarning || mailWarning){
        mail.parentElement.replaceChild(mail_noligin, mailWarning);
    }else if(pwdWarning && !mailWarning){
        mail.parentElement.append(mail_noligin);
    }else if(!pwdWarning && mailWarning){
        mail.parentElement.replaceChild(mail_noligin, mailWarning);
    }else{
        mail.parentElement.append(mail_noligin);
    }
}

function login_go(e){
    if(mail.value === "test@codeit.com" && pwd.value === "codeit101"){
        
    }else if(mail.value === "test@codeit.com" && pwd.value != "codeit101"){
        e.preventDefault()
        login_wrong_pwd()
    }else {
        e.preventDefault()
        login_wrong_mail()
        login_wrong_pwd()
    }
}

function pwd_focusout(){
    let pwd_null = setmessage("비밀번호를 입력해주세요.")
    if(pwd.value === ""){
        pwd.style.borderColor = "#ff5b56";
        pwdwrong(pwd_null)
    }else{
        pwd.style.borderColor = "#ccd5e3";
        pwdWarning.remove()
    }
}

function input_ing(e){
    if(e.target.name === "pwd"){
        eye.nextElementSibling.remove()
    }else{
        e.target.parentElement.removeChild(e.target.nextElementSibling);
    }
}

eye.addEventListener('click', eye_toggle);
mail.addEventListener("focusout",mail_focusout);
submit.addEventListener("click",login_go);
pwd.addEventListener("focusout", pwd_focusout);
mail.addEventListener("input",input_ing)
pwd.addEventListener("input",input_ing)