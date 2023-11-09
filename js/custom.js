let eye = document.querySelector('.eye');
let pwd = document.querySelector('#pwd');
let mail = document.querySelector("#mail");
let submit = document.querySelector("#submit");

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
eye.addEventListener('click', eye_toggle);


function mail_focusout(a){
    let email_format = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    let mailWarning = mail.nextElementSibling;

    let mail_null = document.createElement("p");
    mail_null.innerHTML = "이메일을 입력해주세요.";
    mail_null.classList.add("input_warning");

    let mail_wrong = document.createElement("p");
    mail_wrong.innerHTML = "올바른 이메일 주소가 아닙니다.";
    mail_wrong.classList.add("input_warning");

    if(mail.value === ""){
        mail.style.borderColor = "#ff5b56";
        if(mailWarning){
            mail.parentElement.replaceChild(mail_null, mailWarning);
        }else{
            mail.parentElement.append(mail_null);
        }
    }else if(!email_format.test(mail.value)){
        mail.style.borderColor = "#ff5b56";
        if(mailWarning){
            mail.parentElement.replaceChild(mail_wrong, mailWarning);
        }else{
            mail.parentElement.append(mail_wrong);
        }
    }else{
        mail.style.borderColor = "#ccd5e3";
        mail.parentElement.removeChild(mail.nextElementSibling);
    }
}

mail.addEventListener("focusout",mail_focusout);


function login_go(e){
    let pwdWarning = eye.nextElementSibling;
    let mailWarning = mail.nextElementSibling;

    let mail_noligin = document.createElement("p");
    mail_noligin.innerHTML = "이메일을 확인해주세요.";
    mail_noligin.classList.add("input_warning");

    let pwd_noligin = document.createElement("p");
    pwd_noligin.innerHTML = "비밀번호를 확인해주세요.";
    pwd_noligin.classList.add("input_warning");

    if(mail.value === "test@codeit.com" && pwd.value === "codeit101"){
        
    }else {
        e.preventDefault()
        pwd.style.borderColor = "#ff5b56";
        mail.style.borderColor = "#ff5b56";
        if(pwdWarning || mailWarning){
            if(pwdWarning && !mailWarning){
                mail.parentElement.append(mail_noligin);
                pwd.parentElement.replaceChild(pwd_noligin, pwdWarning);
            }else if(!pwdWarning && mailWarning){
                pwd.parentElement.append(pwd_noligin);
                mail.parentElement.replaceChild(mail_noligin, mailWarning);
            }else{
                pwd.parentElement.replaceChild(pwd_noligin, pwdWarning);
                mail.parentElement.replaceChild(mail_noligin, mailWarning);
            }
        }else{
            mail.parentElement.append(mail_noligin);
            pwd.parentElement.append(pwd_noligin);
        }
    }
}

submit.addEventListener("click",login_go);

function pwd_focusout(){
    let pwdWarning = eye.nextElementSibling;

    let pwd_null = document.createElement("p");
    pwd_null.innerHTML = "비밀번호를 입력해주세요.";
    pwd_null.classList.add("input_warning");

    if(pwd.value === ""){
        pwd.style.borderColor = "#ff5b56";
        if(pwdWarning){
            pwd.parentElement.replaceChild(pwd_null, pwdWarning);
        }else{
            pwd.parentElement.append(pwd_null);
        }
    }else{
        pwd.style.borderColor = "#ccd5e3";
        eye.nextElementSibling.remove()
    }
}
pwd.addEventListener("focusout", pwd_focusout);

function input_ing(e){
    if(e.target.name === "pwd"){
        eye.nextElementSibling.remove()
    }else{
        e.target.parentElement.removeChild(e.target.nextElementSibling);
    }
}

mail.addEventListener("input",input_ing)
pwd.addEventListener("input",input_ing)