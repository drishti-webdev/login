// Register function
function register() {

    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;

    if(username === "" || password === "") {
        document.getElementById("message").innerText = "Please fill all fields";
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    document.getElementById("message").innerText = "Registration successful! Go to login.";
}


// Login function
function login() {

    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if(username === storedUsername && password === storedPassword) {

        localStorage.setItem("loggedIn", "true");

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("message").innerText = "Invalid credentials";

    }
}


// Check login status
function checkLogin() {

    if(localStorage.getItem("loggedIn") !== "true") {

        window.location.href = "login.html";

    }

}


// Logout function
function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href = "index.html";

}