let eye1 = document.querySelector('.eye1');
let eye2 = document.querySelector('.eye2');
let pwd1 = document.querySelector('.pwd1');
let pwd2 = document.querySelector('.pwd2');
let mail = document.querySelector("#mail");
let submit = document.querySelector("#submit");
let input = document.querySelectorAll("input");

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


function mail_focusout(a){
    let email_format = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    let mailWarning = mail.nextElementSibling;

    let mail_null = document.createElement("p");
    mail_null.innerHTML = "이메일을 입력해주세요.";
    mail_null.classList.add("input_warning");

    let mail_wrong = document.createElement("p");
    mail_wrong.innerHTML = "올바른 이메일 주소가 아닙니다.";
    mail_wrong.classList.add("input_warning");

    let mail_eight = document.createElement("p");
    mail_eight.innerHTML = "이미 사용 중인 이메일입니다.";
    mail_eight.classList.add("input_warning");

    if(mail.value === ""){
        mail.style.borderColor = "#ff5b56";
        if(mailWarning){
            mail.parentElement.replaceChild(mail_null, mailWarning);
        }else{
            mail.parentElement.append(mail_null);
        }
    }else if(mail.value === "test@codeit.com"){
        mail.style.borderColor = "#ff5b56";
        if(mailWarning){
            mail.parentElement.replaceChild(mail_eight, mailWarning);
        }else{
            mail.parentElement.append(mail_eight);
        }
    }else if(!email_format.test(mail.value)){
        mail.style.borderColor = "#ff5b56";
        if(mailWarning){
            mail.parentElement.replaceChild(mail_wrong, mailWarning);
        }else{
            mail.parentElement.append(mail_wrong);
        }
    }else {
        mail.style.borderColor = "#ccd5e3";
        mail.parentElement.removeChild(mail.nextElementSibling);
    }

    

}

mail.addEventListener("focusout",mail_focusout);

function login_wrong_pwd(){
    let pwdWarning = eye.nextElementSibling;
    let mailWarning = mail.nextElementSibling;

    pwd.style.borderColor = "#ff5b56";

    let pwd_noligin = document.createElement("p");
    pwd_noligin.innerHTML = "비밀번호를 확인해주세요.";
    pwd_noligin.classList.add("input_warning");

    if(pwdWarning || mailWarning){
        if(pwdWarning && !mailWarning){
            pwd.parentElement.replaceChild(pwd_noligin, pwdWarning);
        }else if(!pwdWarning && mailWarning){
            pwd.parentElement.append(pwd_noligin);
        }else{
            pwd.parentElement.replaceChild(pwd_noligin, pwdWarning);
        }
    }else{
        pwd.parentElement.append(pwd_noligin);
    }
}

function login_wrong_mail(){
    let pwdWarning = eye.nextElementSibling;
    let mailWarning = mail.nextElementSibling;

    let mail_noligin = document.createElement("p");
    mail_noligin.innerHTML = "이메일을 확인해주세요.";
    mail_noligin.classList.add("input_warning");

    mail.style.borderColor = "#ff5b56";
    if(pwdWarning || mailWarning){
        if(pwdWarning && !mailWarning){
            mail.parentElement.append(mail_noligin);
        }else if(!pwdWarning && mailWarning){
            mail.parentElement.replaceChild(mail_noligin, mailWarning);
        }else{
            mail.parentElement.replaceChild(mail_noligin, mailWarning);
        }
    }else{
        mail.parentElement.append(mail_noligin);
    }
}



function pwd_focusout(pwd, eye){
    const pwd_ei = /^[A-Za-z]+$|^\d+$/;
    let pwdWarning = eye.nextElementSibling;

    let pwd_null = document.createElement("p");
    pwd_null.innerHTML = "비밀번호를 입력해주세요.";
    pwd_null.classList.add("input_warning");

    let pwd_no = document.createElement("p");
    pwd_no.innerHTML = "비밀번호가 일치하지 않아요.";
    pwd_no.classList.add("input_warning");
    
    let pwd_eight = document.createElement("p");
    pwd_eight.innerHTML = "비밀번호는 영문,숫자 조합8자 이상 입력해주세요.";
    pwd_eight.classList.add("input_warning");

    if(pwd1.value !== pwd2.value && pwd2.value !== ""){
        pwd2.style.borderColor = "#ff5b56";
        if(pwdWarning){
            pwd2.parentElement.replaceChild(pwd_no, pwdWarning);
        }else if(pwd == pwd2){
            pwd2.parentElement.append(pwd_no)
            pwdWarning.remove()
        }
    }else if(pwd1.value === pwd2.value){
        pwd2.style.borderColor = "#ccd5e3";
        eye2.nextElementSibling.remove()
    }
    if(pwd.value === ""){
        pwd.style.borderColor = "#ff5b56";
        if(pwdWarning){
            pwd.parentElement.replaceChild(pwd_null, pwdWarning);
        }else{
            pwd.parentElement.append(pwd_null);
            pwdWarning.remove();
        }
    }else if(pwd1.value.length < 8 || pwd_ei.test(pwd1.value)){
        pwd.style.borderColor = "#ff5b56";
        if(pwdWarning){
            pwd.parentElement.replaceChild(pwd_eight, pwdWarning);
        }else{
            pwd.parentElement.append(pwd_eight);
            pwdWarning.remove();
        }
    }else {
        pwd.style.borderColor = "#ccd5e3";
        pwdWarning.remove()
    }
}

pwd1.addEventListener("focusout", function(){
    pwd_focusout(pwd1, eye1)
});
pwd2.addEventListener("focusout", function(){
    pwd_focusout(pwd2, eye2)
});
// pwd1.addEventListener("focusout", pwd_test);
// pwd2.addEventListener("focusout", pwd_test);

function input_ing(e){
    if(e.target.name === "pwd1"){
        eye1.nextElementSibling.remove()
    }else if(e.target.name === "pwd2"){
        eye2.nextElementSibling.remove()
    }else{
        e.target.parentElement.removeChild(e.target.nextElementSibling);
    }
}

mail.addEventListener("input",input_ing)
pwd1.addEventListener("input",input_ing)
pwd2.addEventListener("input",input_ing)

function login_go(e){
    console.log(e)
    if(mail.value === "test@codeit.com" || mail.value === "" || pwd1.value === "" || pwd1.value !== pwd2.value){
        e.preventDefault()
        alert("다시 확인하고 해주세요")
    }
}

submit.addEventListener("click",login_go);

input.addEventListener("keypress",function(e){
    console.log(e.key)
})