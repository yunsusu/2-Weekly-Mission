function setmessage(a,b){
    let message = document.createElement("p");
    message.innerHTML = a;
    message.classList.add("input_warning",b);
    return message;
}
function wrong(a,b,c){
    if(b){
        c.parentElement.replaceChild(a, b);
    }else{
        c.parentElement.append(a);
    }
}

export {setmessage,wrong}