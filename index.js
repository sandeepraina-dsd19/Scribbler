var modal_createpost = document.getElementById("createpostModal");
var btn_allposts = document.getElementById("all-posts");
var btn_createpost = document.getElementById("create-post");
var span_createpost = document.getElementsByClassName("close-createpost")[0];

console.log(btn_createpost.innerHTML);

btn_allposts.onclick = function() {
    location.href = './html/bloglist.html';
}

btn_createpost.onclick = function() {
    console.log("click");
    modal_createpost.style.display = "block";
}

span_createpost.onclick = function() {
    modal_createpost.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal_createpost) {
        modal_createpost.style.display = "none";
    }
}