let name = document.getElementById("name");
let email = document.getElementById("email");
let pwd = document.getElementById("password");
let phno = document.getElementById("phno");
let add = document.getElementById("address");
let city = document.getElementById("city");
let error1 = document.getElementById("error1");
let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let type = document.getElementById("type");
let strength1 = document.getElementById("strength1");

function strengthpwd(){
    type.innerHTML = "Type a password";
    type.style.color = "blue";
}

function none(){
    type.innerHTML = "";
}

function str(){
 
let regExp1 = /^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
let regExp2 = /^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/;

    if(regExp1.test(pwd.value)){
    strength1.innerHTML = "<b>Strong password</b>";
    strength1.style.color = "green";
    }

    else if(regExp2.test(pwd.value)){
    strength1.innerHTML = "<b>Strength:Medium</b>";
    strength1.style.color = "orange";
    }
    
    else {
        strength1.innerHTML = "<b>Weak password</b>";
        strength1.style.color = "red";
        }

}


function validate1(){
    
    let regep1 = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)[.]([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regep2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let regep3 = /^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(name.value.trim()==""){
        alert("Name cannot be empty");
        return false;
    }
    else if(email.value==""){
        alert("Email cannot be empty");
        return false;
    }

    else if(pwd.value==""){
        alert("Please create a password");
        return false;
    }

    else if(phno.value==""){
        alert("Contact number cannot be empty");
        return false;
    }

    else if(add.value.trim()==""){
        alert("Please provide your contact address");
        return false;
    }

    else if(city.value.trim()==""){
        alert("Please enter your city");
        return false;
    }

    else if (regep1.test(email.value)){
         
        error1.innerHTML = "";

        if(pwd.value.length<8){
            message1.innerHTML = "**Password length must be atleast 8 characters";
            message1.style.color = "red";
            return false;
        }
        else if (regep2.test(pwd.value)){

            message1.innerHTML = "";

            if(regep3.test(phno.value)){
                return true;
            }
            else {
                message2.innerHTML = "**Invalid Phone number";
                message2.style.color = "red";
                return false;
            }
        }
        else {
            message1.innerHTML = "**Password length must be atleast 8 characters, at least one uppercase, and one lower case, must contain at least one number";
            message1.style.color = "red";
            return false;
        }
    }    
    else {
        error1.innerHTML = "**Invalid email-id";
        error1.style.color = "red";
        return false;
    }
}
