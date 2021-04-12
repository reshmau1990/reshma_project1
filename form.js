let email1 = document.getElementById("exampleInputEmail1");
let pwd1 = document.getElementById("exampleInputPassword1");
let error = document.getElementById("error");
let message = document.getElementById("message");

function validate(){

    let regexp1 = /^([\w\.-]+)@([A-Za-z0-9\-]+)[.]([a-z]{2,3}).(.[a-z]{2,3})?$/;
    let regexp2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(email1.value==""){
        alert("Mandatory fields cannot be empty");
        return false;
    }
    else if(regexp1.test(email1.value)){
        error.innerHTML = "";

        if(pwd1.value==""){
            alert("Mandatory fields cannot be empty");
            return false;
        }
        
        else if(pwd1.value.length<8){
            message.innerHTML = "**Password length must be atleast 8 characters";
            message.style.color = "red";
            return false;
        }

        else if(regexp2.test(pwd1.value)){
            return true;
        }

        else {
            message.innerHTML = "**Password length must be atleast 8 characters, at least one uppercase, and one lower case, must contain at least one number";
            message.style.color = "red";
            return false;
        }
    
    }
    else {
        error.innerHTML = "Invalid email-id";
        error.style.color = "red";
        return false;
    }
}

