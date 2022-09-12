//show the menu on click by bringing it on another click make it vanish
var navLinks = document.getElementById("navLinks");
function showMenu(){
    if(navLinks.style.top != "0")
    {navLinks.style.top = "0";}
    else if (navLinks.style.top > "100")
    {navLinks.style.top = "-300";}
}