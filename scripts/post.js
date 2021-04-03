var total_likes = 0;

var postTitle = document.getElementById("post-title");
var postAuthor = document.getElementById("post-author");
var postContent = document.getElementById("post-content");
var changePost = document.getElementById("changePost");

loadPostDetail();

function loadPostDetail () {
    postTitle.value = sessionStorage.getItem("title");
    postAuthor.innerHTML = sessionStorage.getItem("author");
    postContent.value = sessionStorage.getItem("content");
}

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

function saveComment() {
    var commentArea = document.getElementById("commentArea");
    var all_comments = document.getElementsByClassName("all-comments")[0];

    all_comments.className = "all-comments";
    all_comments.innerHTML += '<p class="comment-section">' + commentArea.value + '</p>';
}

function updatePostDetail() {
    console.log(changePost.innerText);
    if (changePost.innerText === "Edit ") {
        console.log(changePost.innerText + " inside");
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