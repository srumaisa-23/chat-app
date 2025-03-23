// Initialize Netlify Identity
if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
        if (!user) {
            document.getElementById("logout-btn").style.display = "none";
        } else {
            document.getElementById("login-btn").style.display = "none";
            document.getElementById("logout-btn").style.display = "block";
        }
    });

    window.netlifyIdentity.on("login", user => {
        console.log("User logged in:", user);
        window.location.href = "/public/chat.html";
    });

    window.netlifyIdentity.on("logout", () => {
        console.log("User logged out");
        window.location.href = "/";
    });
}

// Login button
document.getElementById("login-btn").addEventListener("click", () => {
    netlifyIdentity.open();
});

// Logout button
document.getElementById("logout-btn").addEventListener("click", () => {
    netlifyIdentity.logout();
});
