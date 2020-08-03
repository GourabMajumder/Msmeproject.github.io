
// function strength() {
//     var strength = document.getElementById('length');
//     var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*W).*$", "g");
//     var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
//     var enoughRegex = new RegExp("(?=.{6,}).*", "g");
//     var pwd = document.getElementById("password");
//     if (pwd.value.length == 0) {
//         strength.innerHTML = 'Type Password';
//     } else if (false == enoughRegex.test(pwd.value)) {
//         strength.innerHTML = 'More Characters';
//     } else if (strongRegex.test(pwd.value)) {
//         strength.innerHTML = '<span style="color:green">Strong!</span>';
//     } else if (mediumRegex.test(pwd.value)) {
//         strength.innerHTML = '<span style="color:orange">Medium!</span>';
//     } else {
//         strength.innerHTML = '<span style="color:red">Weak!</span>';
//     }
// }


    function strength() {
        var password = document.getElementById('password');
        var status = document.getElementById('length');
        var barBack = document.getElementById('mback');
        var barFront = document.getElementById('mfront');
        var cpassword = document.getElementById('cpassword');
        var val = password.value;
        var val2 = cpassword.value;
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        var counter = 0;
    
        if (val != "") {
            if (false == enoughRegex.test(val)) { counter = 1;}
            else if (strongRegex.test(val)) { counter = 4; }
            else if (mediumRegex.test(val)) { counter = 3; }
            else { counter = 2; }
    
    
            if (counter == 1 ) {
                status.innerHTML = "More Characters";
                status.style.background = "transparent ";
                status.style.color = "black";
                barBack.style.display = "none";
            }
    
            else if (counter == 2 ) {
                status.innerHTML = "Strength: WEAK";
                status.style.background = "transparent ";
                status.style.color = "black";
                barBack.style.display = "block";
                barFront.style.width = "30%";
                barFront.style.background = "red";
            }
    
            else if (counter == 3) {
                status.innerHTML = "Strength: MEDIUM";
                status.style.background = "transparent ";
                status.style.color = "black";
                barBack.style.display = "block";
                barFront.style.width = "60%";
                barFront.style.background = "#1898F7";
            }
    
            if (counter == 4 ) {
                status.innerHTML = "Strength: STRONG";
                status.style.background = "transparent ";
                status.style.color = "black";
                barBack.style.display = "block";
                barFront.style.width = "100%";
                barFront.style.background = "green";
            }
        }
        else {
            status.innerHTML = "Type a Password";
            status.style.background = "transparent ";
            status.style.color = "black";
            barBack.style.display = "none";
        }

        
    }

    // function register() {
    //     var password = document.getElementById('password');
    //     var cpassword = document.getElementById('cpassword');
    //     var val = password.value;
    //     var val2 = cpassword.value;
    //     if(val == "") {
    //         alert("Input Password");
    //     }else if(val == val2){
    //         alert('Done');
    //     }else {
    //         alert("Password don't matches");
    //     }
    // }

    //password visibility function
    function toogle() {
        var tooglePassword = document.getElementById('toogleview');
        var tooglePassword2 = document.getElementById('toogleview2');
        var password = document.getElementById('password');
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

    function toogleLogin() {
        var tooglePassword = document.getElementById('toogleview');
        var tooglePassword2 = document.getElementById('toogleview2');
        var password = document.getElementById('veripassword');
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
   

    
