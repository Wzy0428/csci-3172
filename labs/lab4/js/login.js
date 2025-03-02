//Fetch users from localStorage or use an empty object if not found
const storedUsers = localStorage.getItem("validUsers");
const validUsers = storedUsers ? new Map(Object.entries(JSON.parse(storedUsers))) : new Map();

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const loginUsername = document.getElementById("username").value;
    const loginPassword = document.getElementById("password").value;

    console.log("Entered Username: ", loginUsername); 
    console.log("Entered Password: ", loginPassword); 
    
    if (validUsers.has(loginUsername) && validUsers.get(loginUsername) === loginPassword) {
        console.log("Login successful");
        document.getElementById("loginSuccessMessage").textContent = "Login successful!";
        document.getElementById("loginSuccessMessage").style.color = "green";
    } else {
        console.error("Invalid username or password");
        document.getElementById("loginUsernameError").textContent = "Invalid username or password.";
    }
});
