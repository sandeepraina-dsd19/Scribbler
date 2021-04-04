// User likes click counter
var total_likes = 0;

// Get the post title text input element
var postTitle = document.getElementById("post-title");

// Get the post author text element
var postAuthor = document.getElementById("post-author");

// Get the post content text-area element
var postContent = document.getElementById("post-content");

// Get the Edit/Save button element
var changePost = document.getElementById("changePost");

// Calls the loadPostDetail() function to load the details of the blog post of a particular user at page load
loadPostDetail();

// Load the details of the blog post of a particular user
function loadPostDetail () {
    postTitle.value = sessionStorage.getItem("title");
    postAuthor.innerHTML = sessionStorage.getItem("author");
    postContent.value = sessionStorage.getItem("content");
}

// Update the user likes details on click of Like button
function updateLike() {
    total_likes++;

    var likeButton = document.getElementById("likeButton");
    var likestext = document.getElementById("likestext");

    likeButton.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked';

    if (total_likes > 1)
        likestext.innerHTML = total_likes + " people like this!";
    else
        likestext.innerHTML = total_likes + " person likes this!";
}

// Save a user comment under all comments section
function saveComment() {
    var commentArea = document.getElementById("commentArea");
    var all_comments = document.getElementsByClassName("all-comments")[0];

    if (commentArea.value !== "") {
        all_comments.className = "all-comments";
        all_comments.innerHTML += '<p class="comment-section">' + commentArea.value + '</p>';
    }

    commentArea.value = "";
}

// Update the post details for following sceanrios
// If user clicks the edit button then title and contents text-inputs become editable, save button is visible and edit button hides
// If user clicks the save button then title and contents text-inputs become non-editable, save button hides and edit button is visible
function updatePostDetail() {
    if (changePost.innerText === "Edit ") {
        postTitle.className = "title-editable";
        postTitle.removeAttribute("readonly");

        postContent.className = "content-editable";
        postContent.removeAttribute("readonly");

        changePost.innerHTML = 'Save <i class="fa fa-save"></i>';
    }
    else {
        sessionStorage.setItem("title", postTitle.value);
        sessionStorage.setItem("content", postContent.value);

        postTitle.className = "title-default";
        postTitle.setAttribute("readonly", "readonly");

        postContent.className = "content-default";
        postContent.setAttribute("readonly", "readonly");

        changePost.innerHTML = 'Edit <i class="fa fa-edit"></i>';
    }
}