let eye = document.querySelector('.eye');
let pwd = document.querySelector('#pwd');
console.log(pwd.type)
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

