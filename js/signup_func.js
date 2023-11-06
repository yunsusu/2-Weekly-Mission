import {eye1,eye2,pwd1, pwd2, mail, email_format, pwd_ei,upform} from "./sign_let.js"
import {wrong, setmessage} from "./sign.js"
// import
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
function mail_focusout(a){
    let mailWarning = mail.nextElementSibling;
    let mail_null = setmessage("이메일을 입력해주세요.", 'mail');
    let mail_wrong = setmessage("올바른 이메일 주소가 아닙니다.",'mail');
    let mail_eight = setmessage("이미 사용 중인 이메일입니다.",'mail');

    if(mail.value === ""){
        mail.style.borderColor = "#ff5b56";
        wrong(mail_null,mailWarning,mail);
    }else if(mail.value === "test@codeit.com"){
        mail.style.borderColor = "#ff5b56";
        wrong(mail_eight,mailWarning,mail);
    }else if(!email_format.test(mail.value)){
        mail.style.borderColor = "#ff5b56";
        wrong(mail_wrong,mailWarning,mail)
    }else {
        mail.style.borderColor = "#ccd5e3";
        mail.parentElement.removeChild(mail.nextElementSibling);
    }
}

function pwd_focusout(pwd, eye) {
    let pwdWarning = eye.nextElementSibling;
    let pwdWarning2 = eye2.nextElementSibling;
    let pwd_null = setmessage("비밀번호를 입력해주세요.",'pwd');
    let pwd_no = setmessage("비밀번호가 일치하지 않아요.",'pwd')
    let pwd_eight = setmessage("비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.",'pwd')
    pwd.style.borderColor = "#ff5b56";

    if(pwd.value === ""){
        wrong(pwd_null,pwdWarning,pwd)
    }else if(pwd1.value !== pwd2.value && pwd2.value !== "" && pwd === pwd2){
        wrong(pwd_no,pwdWarning,pwd)
    }else if(pwd.value.length < 8 || pwd_ei.test(pwd.value)){
        wrong(pwd_eight,pwdWarning,pwd)
    }else if(pwd.value.length > 8 || !pwd_ei.test(pwd.value) && pwd1.value == pwd2.value && pwd1.value!==""&& pwd2.value!==""){
        pwd1.style.borderColor = "#ccd5e3";
        pwd2.style.borderColor = "#ccd5e3";
        pwdWarning.remove();
        pwdWarning2.remove();
    }else{
        pwd.style.borderColor = "#ccd5e3";
        if (pwdWarning) pwdWarning.remove();
    }
}
function input_ing(e) {
    if (e.target.name === "pwd1" || e.target.name === "pwd2") {
        const eye = (e.target.name === "pwd1") ? eye1 : eye2;
        eye.nextElementSibling.remove();
    }
}

function login_go(e){
    if(mail.value === "test@codeit.com" || mail.value === "" || pwd1.value === "" || pwd1.value !== pwd2.value){
        e.preventDefault()
        alert("다시 확인하고 해주세요")
    }
}
function keyenter(e){
    if(e.key === 'Enter'){
        console.log(123)
        upform.submit()
    }
}
export {eye_toggle, mail_focusout, pwd_focusout, input_ing,login_go,keyenter}