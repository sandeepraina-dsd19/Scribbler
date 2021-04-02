pageBodyContainer();

var modal_createpost = document.getElementById("createpostModal");
var btn_allposts = document.getElementById("all-posts");
var btn_createpost = document.getElementById("create-post");
var span_createpost = document.getElementsByClassName("createPost-close")[0];

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

function pageBodyContainer() {
    var buttonGroup = document.createElement("div");
    buttonGroup.setAttribute("class", "buttoncenter");

    var button_allposts = document.createElement("button");
    button_allposts.setAttribute("id", "all-posts");
    button_allposts.setAttribute("class", "pageButtons");
    button_allposts.innerHTML = "All Posts";

    var button_createpost = document.createElement("button");
    button_createpost.setAttribute("id", "create-post");
    button_createpost.setAttribute("class", "pageButtons");
    button_createpost.innerHTML = "Create Post";

    var pageContainer = document.getElementsByClassName("pagecontainer")[0];
    pageContainer.appendChild(buttonGroup);
    buttonGroup.appendChild(button_allposts);
    buttonGroup.appendChild(button_createpost);
}