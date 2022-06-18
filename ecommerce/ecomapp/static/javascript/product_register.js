function validation(){
    var status = 1
    var model = document.getElementById('model')
    var brand = document.getElementById('brand')
    var rate = document.getElementById('rate')
    var image = document.getElementById('image')

    if(model.value == ""){
        document.getElementById('model').style.borderColor="red"
        document.getElementById('model_error').innerHTML="** Please Enter Your Model Name **"
        document.getElementById('model_error').style.color="red"
        document.getElementById('model_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('model').style.borderColor="black"
        document.getElementById('model_error').style.display="none"
        var status = 1
    }

    if(brand.value == ""){
        document.getElementById('brand').style.borderColor="red"
        document.getElementById('brand_error').innerHTML="** Please Enter Your Brand **"
        document.getElementById('brand_error').style.color="red"
        document.getElementById('brand_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('brand').style.borderColor="black"
        document.getElementById('brand_error').style.display="none"
        var status = 1
    }

    if(rate.value == ""){
        document.getElementById('rate').style.borderColor="red"
        document.getElementById('rate_error').innerHTML="** Please Enter Your Rate **"
        document.getElementById('rate_error').style.color="red"
        document.getElementById('rate_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('rate').style.borderColor="black"
        document.getElementById('rate_error').style.display="none"
        var status = 1
    }

    if(image.value == ""){
        document.getElementById('image').style.borderColor="red"
        document.getElementById('image_error').innerHTML="** Please Upload An Image **"
        document.getElementById('image_error').style.color="red"
        document.getElementById('image_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('image').style.borderColor="black"
        document.getElementById('image_error').style.display="none"
        var status = 1
    }

    if(status == 1){
        return true
    }

    if(status == 0){
        return false
    }
}

function modelvalid(){
    var model = document.getElementById('model').value

    if(isNaN(model)){
        document.getElementById('model').style.borderColor="black"
        document.getElementById('model_error').style.display="none"
    }

    else{
        document.getElementById('model').style.borderColor="red"
        document.getElementById('model_error').innerHTML="** Please Enter A Valid Model Name **"
        document.getElementById('model_error').style.color="red"
        document.getElementById('model_error').style.display="block"
    }
}

function brandvalid(){
    var brand = document.getElementById('brand').value

    if(isNaN(brand)){
        document.getElementById('brand').style.borderColor="black"
        document.getElementById('brand_error').style.display="none"
    }

    else{
        document.getElementById('brand').style.borderColor="red"
        document.getElementById('brand_error').innerHTML="** Please Enter A Valid Brand Name **"
        document.getElementById('brand_error').style.color="red"
        document.getElementById('brand_error').style.display="block"
    }
}

function ratevalid(){
    var rate = document.getElementById('rate').value

    if(isNaN(rate)){
        document.getElementById('rate').style.borderColor="red"
        document.getElementById('rate_error').innerHTML="** Please Enter A Valid Rate **"
        document.getElementById('rate_error').style.color="red"
        document.getElementById('rate_error').style.display="block"
    }

    else{
        document.getElementById('rate').style.borderColor="black"
        document.getElementById('rate_error').style.display="none"
    }
}