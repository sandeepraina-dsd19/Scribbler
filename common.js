createHeader();
signUpModal();
signInModal();

// Get the modal
var modal_signup = document.getElementById("signupModal");

// Get the modal
var modal_signin = document.getElementById("signinModal");

// Get the button that opens the modal
var btn_signup = document.getElementById("sign-up");

// Get the button that opens the modal
var btn_signin = document.getElementById("sign-in");

// Get the <span> element that closes the modal
var span_signup = document.getElementsByClassName("signUp-close")[0];

// Get the <span> element that closes the modal
var span_signin = document.getElementsByClassName("signIn-close")[0];

var signup_href = document.getElementById("signUpButtonLink");

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

function createHeader() {
    var button_signin = document.createElement("button");
    button_signin.setAttribute("id", "sign-in");
    button_signin.setAttribute("class", "topButtons");
    button_signin.innerHTML = "Sign In";

    var button_signup = document.createElement("button");
    button_signup.setAttribute("id", "sign-up");
    button_signup.setAttribute("class", "topButtons");
    button_signup.innerHTML = "Sign Up";

    var paragraphTitle = document.createElement("p");
    paragraphTitle.setAttribute("id", "pageTitle");
    paragraphTitle.setAttribute("class", "logo-title");
    paragraphTitle.innerHTML = "ScriBBler";

    var paragraphSubTitle = document.createElement("p");
    paragraphSubTitle.setAttribute("id", "pageSubTitle");
    paragraphSubTitle.setAttribute("class", "middleText");
    paragraphSubTitle.innerHTML = "Explore, Imagine, Create";

    var headerNode = document.getElementsByClassName("header")[0];
    headerNode.appendChild(button_signin);
    headerNode.appendChild(button_signup);
    headerNode.appendChild(paragraphTitle);
    headerNode.appendChild(paragraphSubTitle);
}

function signUpModal() {
    var signUp_Modal = '<div class="modal-dialog modal-dialog-centered">';
    signUp_Modal += '<div class="modal-content">';
    signUp_Modal +=	'<div class="modal-header">';
    signUp_Modal += '<h5 class="modal-title">Get Started</h5>';
    signUp_Modal += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    signUp_Modal += '<span class="signUp-close fa fa-times" aria-hidden="true"></span>';
    signUp_Modal += '</button>';
    signUp_Modal += '</div>';
    signUp_Modal += '<div class="modal-body">';
    signUp_Modal += '<form>';
    signUp_Modal += '<div class="form-row">';
    signUp_Modal += '<label for="name"><b>Name</b></label>';
    signUp_Modal += '<input type="text" id="name" class="form-control" placeholder="Enter your name" required>';
    signUp_Modal += '</div>';
    signUp_Modal += '<div class="form-row">';
    signUp_Modal += '<label for="username"><b>Username</b></label>';
    signUp_Modal += '<input type="text" id="username" class="form-control" placeholder="Enter your username" required>';
    signUp_Modal += '</div>';
    signUp_Modal += '<div class="form-row">';
    signUp_Modal += '<label for="password"><b>Password</b></label>';
    signUp_Modal += '<input type="password" id="password" class="form-control" placeholder="Enter your password" required>';
    signUp_Modal += '</div>';
    signUp_Modal += '<div class="form-row">';
    signUp_Modal += '<label for="confirm-password"><b>Confirm Password</b></label>';
    signUp_Modal += '<input type="password" id="confirm-password" class="form-control" placeholder="Re-enter your password" required>';
    signUp_Modal += '</div>';
    signUp_Modal += '<div class="form-row">';
    signUp_Modal += '<button class="btn btn-success btn-block btn-success-custom" type="submit">Sign Up</button>';
    signUp_Modal += '</div>';
    signUp_Modal += '</form>';
    signUp_Modal += '</div>';
    signUp_Modal += '</div>';
    signUp_Modal += '</div>';

    var signupModal = document.getElementById("signupModal");
    signupModal.innerHTML = signUp_Modal;
}

function signInModal() {
    var signIn_Modal = '<div class="modal-dialog modal-dialog-centered">'
    signIn_Modal += '<div class="modal-content">'
    signIn_Modal += '<div class="modal-header">'
    signIn_Modal += '<h5 class="modal-title">Welcome Back!</h5>'
    signIn_Modal += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
    signIn_Modal += '<span class="signIn-close fa fa-times" aria-hidden="true"></span>'
    signIn_Modal += '</button>'
    signIn_Modal += '</div>'
    signIn_Modal += '<div class="modal-body">'
    signIn_Modal += '<form>'
    signIn_Modal += '<div class="form-row">'
    signIn_Modal += '<label for="login-username"><b>Username</b></label>'
    signIn_Modal += '<input type="text" id="login-username" class="form-control" placeholder="Enter your username" required>'
    signIn_Modal += '</div>'
    signIn_Modal += '<div class="form-row">'
    signIn_Modal += '<label for="login-password"><b>Password</b></label>'
    signIn_Modal += '<input type="password" id="login-password" class="form-control" placeholder="Enter your password" required>'
    signIn_Modal += '</div>'
    signIn_Modal += '<div class="form-row">'
    signIn_Modal += '<button class="btn btn-success btn-block btn-success-custom" type="submit">Sign In</button>'
    signIn_Modal += '</div>'
    signIn_Modal += '</form>'
    signIn_Modal += '<div class="sign-in-footer">'
    signIn_Modal += 'Not a member?'
    signIn_Modal += '<a id="signUpButtonLink" href="#">Sign Up</a>'
    signIn_Modal += '</div>'
    signIn_Modal += '</div>'
    signIn_Modal += '</div>'
    signIn_Modal += '</div>'

    var signinModal = document.getElementById("signinModal");
    signinModal.innerHTML = signIn_Modal;
}