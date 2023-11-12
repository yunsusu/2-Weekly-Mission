import { eye_toggle, mail_focusout,login_go,pwd_focusout,input_ing} from "./signin_func.js"

import {eye ,pwd ,mail, submit, pwdWarning,mailWarning,email_format} from "./sign_let.js"

eye.addEventListener('click', eye_toggle);
mail.addEventListener("focusout",mail_focusout);
submit.addEventListener("click",login_go);
pwd.addEventListener("focusout", pwd_focusout);
mail.addEventListener("input",input_ing)
pwd.addEventListener("input",input_ing)