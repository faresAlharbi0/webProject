const form = document.querySelector("#formid");
const msg = document.querySelector("#msg");

form.addEventListener('submit', e=>{
    let wrongMessages = [];

    wrongMessages = isFilled("#fname", wrongMessages,"First name is missing");
    wrongMessages = isFilled("#lname", wrongMessages,"Last name is missing");
    wrongMessages = isFilled("#email", wrongMessages, " email is missing");
    wrongMessages = isEmail("#email", wrongMessages,"email is in wrong format");
        

    if(wrongMessages.length>0){
        msg.innerHTML = wrongMessages.join(", ");
        e.preventDefault();
    }
    
   
})

function isFilled(selector, wrongMessages,msg){
    const element = document.querySelector(selector).value.trim();
    if (element.length<1){
        wrongMessages.push(msg);
    }
    return wrongMessages;
}

function isEmail(selector, wrongMessages,msg){
    const element = document.querySelector(selector).value.trim();
    if (!element.match("[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}\.*[a-zA-Z]*")){
        wrongMessages.push(msg);
    }
    return wrongMessages;
}