// Get the modal
var selected_postID = "";
var modal_deletepostDialog = document.getElementById("deletepostModal");
var modal_deletepostNo = document.getElementById("deleteNo");
var modal_deletepostYes = document.getElementById("deleteYes");

updatePost();

modal_deletepostNo.onclick = function () {
    modal_deletepostDialog.style.display = "none";
}

modal_deletepostYes.onclick = function () {
    var getcard_byID = document.getElementById(selected_postID);
    getcard_byID.remove();
    modal_deletepostDialog.style.display = "none";
}

function deletePost(id) {
    selected_postID = id;
    modal_deletepostDialog.style.display = "block";
}

function loadPost(id) {
    var getPostID = document.getElementById(id);
    var getUser = getPostID.getElementsByClassName("user")[0];
    var getAuthor = getUser.getElementsByTagName("p")[0];

    var getPostContent = getPostID.getElementsByClassName("post-content")[0];
    var getPostTitle = getPostContent.getElementsByClassName("post-title")[0];
    var getTitle = getPostTitle.getElementsByTagName("p")[0];

    var getContentData = getPostContent.getElementsByClassName("content-data")[0];

    sessionStorage.setItem("id", id);
    sessionStorage.setItem("author", getAuthor.innerHTML);
    sessionStorage.setItem("title", getTitle.innerHTML);
    sessionStorage.setItem("content", getContentData.innerHTML);

    window.location.href = "../html/post.html";
}

function updatePost() {
    if (sessionStorage.getItem("id") !== "") {
        var getPostID = document.getElementById(sessionStorage.getItem("id"));

        var getPostContent = getPostID.getElementsByClassName("post-content")[0];
        var getPostTitle = getPostContent.getElementsByClassName("post-title")[0];
        var getTitle = getPostTitle.getElementsByTagName("p")[0];

        var getContentData = getPostContent.getElementsByClassName("content-data")[0];

        getTitle.innerHTML = sessionStorage.getItem("title");
        getContentData.innerHTML = sessionStorage.getItem("content");
    }
}