// Calls the pageBodyContainer() function to dynamically create page body section at runtime
pageBodyContainer();

// Get the create-post modal element
var modal_createpost = document.getElementById("createpostModal");

// Get the button that directs to/opens the blog post web-page
var btn_allposts = document.getElementById("all-posts");

// Get the button that opens the create post modal window
var btn_createpost = document.getElementById("create-post");

// Get close [x] button of create-post modal
var createpost_modalclose = document.getElementsByClassName("createPost-close")[0];

// When the user clicks all-post button to open the blog post web-page
btn_allposts.onclick = function() {
    location.href = './html/bloglist.html';
}

// When the user clicks create-post button to open the create-post modal window
btn_createpost.onclick = function() {
    modal_createpost.style.display = "block";
}

// When the user clicks close [x] button from the create-post modal window to close the modal window
createpost_modalclose.onclick = function() {
    modal_createpost.style.display = "none";
}

// Dynamically creates the page body section at runtime
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