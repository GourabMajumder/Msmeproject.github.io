
function showModal() {
    var showmodal = document.getElementById('myModal');
    showmodal.style.display = "block";    
}

function closeModal() {
    var showmodal = document.getElementById('myModal');
    showmodal.style.display = "none";
}

window.onclick = function(event) {
    var showmodal = document.getElementById('myModal');
    if(event.target == showmodal) {
        showmodal.style.display = "none";
    }
}

function sign() {
    window.location.replace("/registration.html");
}

function toogleLogin() {
    var tooglePassword = document.getElementById('toogleview');
    var tooglePassword2 = document.getElementById('toogleview2');
    var password = document.getElementById('modalloginpass');
    if(password.type === "password") {
        password.type  = "text";
        tooglePassword.style.display = "none";
        tooglePassword2.style.display = "block";
    } else {
        password.type = "password";
        tooglePassword.style.display = "block";
        tooglePassword2.style.display = "none";
    }
}




