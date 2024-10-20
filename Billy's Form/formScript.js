// Check if the inputs are empty.
function validate() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let search = document.getElementById("search").value;
    let issue = document.getElementById("issue").value;

    if (firstName == "" || lastName == "" || email == "" || search == "" || issue == "") {
        return false;
    }
    return true;
}

// When the user inputs an issue, this shows at the bottom of the page (see html)
function showMessage() {
    if (validate()) {
        document.getElementById("message").innerHTML = "Sorry, we couldn't find a solution so we threw it into google!";
    }
}

// When you reset, clear the message. (see html)
function clearMessage(){
    document.getElementById("message").innerHTML = "";
}