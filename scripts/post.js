loadPostDetail();

var total_likes = 0;

function loadPostDetail () {
    var postTitle = document.getElementById("post-title");
    var postAuthor = document.getElementById("post-author");
    var postContent = document.getElementById("post-content");

    postTitle.innerHTML = sessionStorage.getItem("title");
    postAuthor.innerHTML = sessionStorage.getItem("author");
    postContent.innerHTML = sessionStorage.getItem("content");
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