function validation(){
    var status = 1
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var contact = document.getElementById('contact')
    var user = document.getElementById('username')
    var pass = document.getElementById('password')
    var cpass = document.getElementById('cpassword')


    if(name.value == ""){
        document.getElementById('name').style.borderColor="red"
        document.getElementById('name_error').innerHTML="** Please Enter Your Name **"
        document.getElementById('name_error').style.color="red"
        document.getElementById('name_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('name').style.borderColor="black"
        document.getElementById('name_error').style.display="none"
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

    if(contact.value == ""){
        document.getElementById('contact').style.borderColor="red"
        document.getElementById('contact_error').innerHTML="** Please Enter Your Contact **"
        document.getElementById('contact_error').style.color="red"
        document.getElementById('contact_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('contact').style.borderColor="black"
        document.getElementById('contact_error').style.display="none"
        var status = 1
    }

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

    if(cpass.value == ""){
        document.getElementById('cpassword').style.borderColor="red"
        document.getElementById('cpassword_error').innerHTML="** Please Enter Your Password **"
        document.getElementById('cpassword_error').style.color="red"
        document.getElementById('cpassword_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('cpassword').style.borderColor="black"
        document.getElementById('cpassword_error').style.display="none"
        var status = 1
    }

    

    if(status == 1){
        return true
    }

    if(status == 0){
        return false
    }
}

function namevalid(){
    var name = document.getElementById('name').value

    if(isNaN(name)){
        document.getElementById('name').style.borderColor="black"
        document.getElementById('name_error').style.display="none"
    }

    else{
        document.getElementById('name').style.borderColor="red"
        document.getElementById('name_error').innerHTML="** Please Enter A Valid Name **"
        document.getElementById('name_error').style.color="red"
        document.getElementById('name_error').style.display="block"
    }
}

function contactvalid(){
    var contact = document.getElementById('contact').value

    if(isNaN(contact)){
        document.getElementById('Contact').style.borderColor="red"
        document.getElementById('contact_error').innerHTML="** Please Enter A Valid Contact **"
        document.getElementById('contact_error').style.color="red"
        document.getElementById('contact_error').style.display="block"
    }

    if(contact.length <= 0){
        document.getElementById('contact').style.borderColor="red"
        document.getElementById('contact_error').innerHTML="** Contact Number Must Be 10 Digits **"
        document.getElementById('contact_error').style.color="red"
        document.getElementById('contact_error').style.display="block"
    }

    if(contact.length == 10){
        document.getElementById('contact').style.borderColor="green"
        document.getElementById('contact_error').innerHTML="** You Entered A Perfect Contact Number **"
        document.getElementById('contact_error').style.color="green"
        document.getElementById('contact_error').style.display="block"
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

function cpassvalid(){
    var pass = document.getElementById('password').value
    var cpass = document.getElementById('cpassword').value

    if(cpass.length <= 0){
        document.getElementById('cpassword').style.borderColor="red"
        document.getElementById('cpassword_error').innerHTML="** Confirm Password Must Have 8 Digits **"
        document.getElementById('cpassword_error').style.color="red"
        document.getElementById('cpassword_error').style.display="block"
    }

    if(cpass.length == 8){
        document.getElementById('cpassword').style.borderColor="green"
        document.getElementById('cpassword_error').innerHTML="** You Enter A Perfect Confirm Password **"
        document.getElementById('cpassword_error').style.color="green"
        document.getElementById('cpassword_error').style.display="block"
    }

    if(cpass.length == 9){
        document.getElementById('cpassword').style.borderColor="red"
        document.getElementById('cpassword_error').innerHTML="** Please Enter A Valid Confirm Password **"
        document.getElementById('cpassword_error').style.color="red"
        document.getElementById('cpassword_error').style.display="block"
    }

    if(pass != cpass){
        document.getElementById('cpassword').style.borderColor="red"
        document.getElementById('cpassword_error').innerHTML="** Password And Confirm Password Must Be Equal **"
        document.getElementById('cpassword_error').style.color="red"
        document.getElementById('cpassword_error').style.display="block"
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