var userHeader = document.querySelector('#userHeader');
function handleEditTitle(username) {
    var head = document.querySelector('head');
    head.innerHTML += "<title>" + username + "</title>";
}
function getUserName() {
    try {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var username = urlParams.get('username');
        return username;
    }
    catch (error) {
        console.error(error);
    }
}
function EditHeader(username) {
    userHeader.innerHTML = "Welcome Back " + username + "!";
}
function onPageLoad() {
    var username = getUserName();
    handleEditTitle(username);
    EditHeader(username);
}
