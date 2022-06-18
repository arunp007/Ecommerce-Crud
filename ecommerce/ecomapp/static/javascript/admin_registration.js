function validation(){
    var status = 1
    var user = document.getElementById('username')
    var pass = document.getElementById('password')
    var email = document.getElementById('email')

    if(user.value == ""){
        document.getElementById('username').style.borderColor="red"
        document.getElementById('user_error').innerHTML="** Please Enter Your Username **"
        document.getElementById('user_error').style.color="red"
        document.getElementById('user_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('username').style.borderColor="black"
        document.getElementById('user_error').style.display="none"
        var status = 1
    }

    if(pass.value == ""){
        document.getElementById('password').style.borderColor="red"
        document.getElementById('password_error').innerHTML="** Please Enter Your Password **"
        document.getElementById('password_error').style.color="red"
        document.getElementById('password_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('password').style.borderColor="black"
        document.getElementById('password_error').style.display="none"
        var status = 1
    }

    if(email.value == ""){
        document.getElementById('email').style.borderColor="red"
        document.getElementById('email_error').innerHTML="** Please Enter Your Email Id **"
        document.getElementById('email_error').style.color="red"
        document.getElementById('email_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('email').style.borderColor="black"
        document.getElementById('email_error').style.display="none"
        var status = 1
    }

    if(status == 1){
        return true
    }

    if(status == 0){
        return false
    }
}

function uservalid(){
    var user = document.getElementById('username').value

    if(isNaN(user)){
        document.getElementById('username').style.borderColor="black"
        document.getElementById('user_error').style.display="none"
    }

    else{
        document.getElementById('username').style.borderColor="red"
        document.getElementById('user_error').innerHTML="** Please Enter A Valid Username **"
        document.getElementById('user_error').style.color="red"
        document.getElementById('user_error').style.display="block"
    }
}

function passvalid(){
    var pass = document.getElementById('password').value

    if(pass.length <= 0){
        document.getElementById('password').style.borderColor="red"
        document.getElementById('password_error').innerHTML="** Password Must Have 8 Digits **"
        document.getElementById('password_error').style.color="red"
        document.getElementById('password_error').style.display="block"
    }

    if(pass.length == 8){
        document.getElementById('password').style.borderColor="green"
        document.getElementById('password_error').innerHTML="** You Enter A Perfect Password **"
        document.getElementById('password_error').style.color="green"
        document.getElementById('password_error').style.display="block"
    }

    if(pass.length == 9){
        document.getElementById('password').style.borderColor="red"
        document.getElementById('password_error').innerHTML="** Please Enter A Valid Password **"
        document.getElementById('password_error').style.color="red"
        document.getElementById('password_error').style.display="block"
    }
}

function emailvalid(){
    var email = document.getElementById('email').value

    if(isNaN(email)){
        document.getElementById('email').style.borderColor="black"
        document.getElementById('email_error').style.display="none"
    }

    else{
        document.getElementById('email').style.borderColor="red"
        document.getElementById('email_error').innerHTML="** Please Enter A Valid Email Id **"
        document.getElementById('email_error').style.color="red"
        document.getElementById('email_error').style.display="block"
    }
}