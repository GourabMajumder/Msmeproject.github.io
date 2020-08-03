function submit() {
    var username = document.getElementById('username').value;
    var useremail = document.getElementById('useremail').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    var userNameFormat = /^([A-Za-z.\s_-])/;
    var userEmailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var checkUserName = username.match(userNameFormat);
    var checkUserEmail = useremail.match(userEmailFormat);

    if(checkUserName == null) {
        swal({
            icon: "warning",
            tittle: "Error",
            text: "Enter a valid Username"
        });
        return false;
    } else if (checkUserEmail == null) {
        swal({
            icon: "warning",
            tittle: "Error",
            text: "Enter a valid Email Id"
        });
        return false;
    } else if(password != cpassword) {
        swal({
            icon: "warning",
            tittle: "Error",
            text: "Password don't matches"
        });
    } else {
        firebase.auth().createUserWithEmailAndPassword(useremail, password).then((success) =>{
            var user = firebase.auth().currentUser;
            var uid;
            if(user != null) {
                uid = user.uid;
            }

            var userData = {
                username: username,
                useremail: useremail,
                userpassword: password,
                userId: uid,
            }
            firebase.database().ref('users/').child(uid).set(userData);
            swal({
                icon: "success",
                title: "Done",
                text: "Account created sucessfully"
            }).then((value)=> {
                setTimeout(function() {
                    window.location.replace("/login.html");
                }, 1000)
            });
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                icon: "error",
                title: "Something went wrong",
                text: errorMessage
                // text: "Please check your email and password, or there can be already existing with the same Email ID",
            })
        });
    }
}


function login() {
    var loginEmail = document.getElementById('veriemail').value;
    var loginPassword = document.getElementById('veripassword').value;
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword).then((success)=> {
        swal({
            icon: "success",
            title: "Welcome",
            text: "Successfully loged in",
        }).then((value) => {
            setTimeout(function() {
                window.location.replace("/home2.html");
            }, 1000)
        });
    }).catch((error)=> {
        var errorCode = error.code;
        var errorMessage = error.message;
        swal({
            icon: "error",
            text: "Error",
            text: errorMessage
        })
    });
}

firebase.auth().onAuthStateChanged((user)=> {
    if(user) {
        if(user != null) {
            var userId = firebase.auth().currentUser.uid; 
        }
        firebase.database().ref('/users/' + userId).once('value', snap => {
            console.log(snap.val());
            document.getElementById('showname').innerHTML = snap.val().username;
            document.getElementById('showemail').innerHTML = snap.val().useremail;
        })
    } else {

    }
});

function logout() {
    firebase.auth().signOut().then((success)=> {
        swal({
            icon: "success",
            title: "Done"
        })
    })
}

function modalLog() {
    var modalLoginEmail = document.getElementById('modalloginemail').value;
    var modalLoginPass = document.getElementById('modalloginpass').value;
    firebase.auth().signInWithEmailAndPassword(modalLoginEmail, modalLoginPass).then((success) => {
        swal({
            icon: "success",
            title: "Welcome",
            text: "Successfully loged in"
        }).then((value) => {
            setTimeout(function (){
                window.location.replace("/home2.html");
            }, 1000)
        });
    }).catch((error) => {
        var ecode = error.code;
        var emessage = error.message;
        swal({
            icon: "error",
            title: "error",
            text: emessage
        })
    });

}