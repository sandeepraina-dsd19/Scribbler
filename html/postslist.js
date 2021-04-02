// Get the modal
var selected_postID = "";
var modal_deletepostDialog = document.getElementById("deletepostModal");
var modal_deletepostNo = document.getElementById("deleteNo");
var modal_deletepostYes = document.getElementById("deleteYes");

modal_deletepostNo.onclick = function () {
    modal_deletepostDialog.style.display = "none";
}

modal_deletepostYes.onclick = function () {
    var getcard_byID = document.getElementById(selected_postID);
    getcard_byID.style.display = "none";
    modal_deletepostDialog.style.display = "none";
}

function deletePost(id) {
    selected_postID = id;
    modal_deletepostDialog.style.display = "block";
}

function loadPost(id) {
    window.location.href = "./post.html";
}