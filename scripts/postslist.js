// Store the selected post-Id
var selected_postID = "";

// Get the delete post modal window element
var modal_deletepostDialog = document.getElementById("deletepostModal");

// Get the no button from the delete post modal window
var modal_deletepostNo = document.getElementById("deleteNo");

// Get the yes button from the delete post modal window
var modal_deletepostYes = document.getElementById("deleteYes");

//Calls updatePost() function to dynamically load the updated contents and title of a post for a selected post-id
updatePost();

// When the user clicks no button on delete post modal window
modal_deletepostNo.onclick = function () {
    modal_deletepostDialog.style.display = "none";
}

// When the user clicks yes button on delete post modal window
modal_deletepostYes.onclick = function () {
    if (sessionStorage.getItem("id") !== null && sessionStorage.getItem("id") !== "") {
        if (sessionStorage.getItem("id") === selected_postID) {
            sessionStorage.removeItem("id");
            sessionStorage.removeItem("author");
            sessionStorage.removeItem("title");
            sessionStorage.removeItem("content");
        }
    }

    var getcard_byID = document.getElementById(selected_postID);
    getcard_byID.remove();

    modal_deletepostDialog.style.display = "none";
}

// When the user clicks delete post icon for a selected post to display the delete post modal window
function deletePost(id) {
    selected_postID = id;
    modal_deletepostDialog.style.display = "block";
}

// Store the contents and title of a post for a selected post-id and opens the post web-page
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

// Dynamically loads the updated contents and title of a post for a selected post-id
function updatePost() {
    if (sessionStorage.getItem("id") !== null && sessionStorage.getItem("id") !== "") {
        var getPostID = document.getElementById(sessionStorage.getItem("id"));

        var getPostContent = getPostID.getElementsByClassName("post-content")[0];
        var getPostTitle = getPostContent.getElementsByClassName("post-title")[0];
        var getTitle = getPostTitle.getElementsByTagName("p")[0];

        var getContentData = getPostContent.getElementsByClassName("content-data")[0];

        getTitle.innerHTML = sessionStorage.getItem("title");
        getContentData.innerHTML = sessionStorage.getItem("content");
    }
}