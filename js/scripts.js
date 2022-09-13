//show the menu on click by bringing it on another click make it vanish
var navLinks = document.getElementById("navLinks");
function showMenu(){
    if(navLinks.style.top != "0")
    {navLinks.style.top = "0";}
    else if (navLinks.style.top > "100")
    {navLinks.style.top = "-300";}
}

function validate(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let message = document.getElementById('name');
    let flag = 0;

    if (name.value.length < 5){
    document.getElementById("error").innerHTML = "<p>name must be more than 5 characters</p>";
    flag=1;}
    
    let myemail = email.value.split("@");
    if (myemail[0].length<3 || myemail[1].length<5)
    {
        document.getElementById("error").innerHTML += "<p>email error</p>";
        flag=1;
    }

    if(phone.value.length <8)
    {
        document.getElementById("error").innerHTML += "<p>phone error</p>";
    }
  
    if(message.value.length <100)
    {
        document.getElementById("error").innerHTML += "<p>message error</p>";
    }

    //if one of the above cases happen the eror div will be displayed
    if(flag=1)
    {document.querySelector("#error").classList.remove("error-display")}
}