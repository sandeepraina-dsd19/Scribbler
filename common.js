// Get the modal
var modal_signup = document.getElementById("signupModal");

// Get the modal
var modal_signin = document.getElementById("signinModal");

// Get the button that opens the modal
var btn_signup = document.getElementById("sign-up");

// Get the button that opens the modal
var btn_signin = document.getElementById("sign-in");

// Get the <span> element that closes the modal
var span_signup = document.getElementsByClassName("close-signup")[0];

// Get the <span> element that closes the modal
var span_signin = document.getElementsByClassName("close-signin")[0];

var signup_href = document.getElementsByClassName("modal-showsignup")[0];

// When the user clicks on the button, open the modal
btn_signup.onclick = function() {
    modal_signup.style.display = "block";
}

// When the user clicks on the button, open the modal
btn_signin.onclick = function() {
    modal_signin.style.display = "block";
}

signup_href.onclick = function () {
    modal_signin.style.display = "none";
    modal_signup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_signup.onclick = function() {
    modal_signup.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span_signin.onclick = function() {
    modal_signin.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_signup) {
        modal_signup.style.display = "none";
    }

    if (event.target == modal_signin) {
        modal_signin.style.display = "none";
    }
}