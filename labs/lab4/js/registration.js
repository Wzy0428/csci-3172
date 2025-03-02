//Initialize validUsers Map (this is your in-memory map)
const validUsers = new Map([
    ["user1", "userpassworD1!"],
    ["user2", "PasswordUser2!"],
    ["admin", "Admin123456Haha!"]
]);

const registrationForm = document.getElementById("registrationForm");
const usernameInput = registrationForm.querySelector("#username");
const passwordInput = registrationForm.querySelector("#password");
const confirmPasswordInput = registrationForm.querySelector("#confirmPassword");
const emailInput = registrationForm.querySelector("#email");

const usernameError = registrationForm.querySelector("#usernameError");
const passwordError = registrationForm.querySelector("#passwordError");
const confirmPasswordError = registrationForm.querySelector("#confirmPasswordError");
const emailError = registrationForm.querySelector("#emailError");
const successMessage = document.getElementById("successMessage");

//Validation RegEx patterns
//. can be any character except newline
const usernameRegex = /^[A-Za-z]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{12,}$/;
const emailRegex = /[A-Za-z0-9]+([.-][A-Za-z0-9]+)*@[A-Za-z0-9-]+\.[A-Za-z]{2,8}/;

registrationForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    //Get the values from the input fields
    const { value: username } = usernameInput;
    const { value: password } = passwordInput;
    const { value: confirmPassword } = confirmPasswordInput;
    const { value: email } = emailInput;

    try {
        //Reset error messages
        usernameError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";
        emailError.textContent = "";
        successMessage.textContent = "";

        //Validate Email
        if (email.trim() === "") {
            throw new Error("Email is required");
        } else if (!emailRegex.test(email)) {
            throw new Error("Invalid email format");
        }

        //Validate Username
        if (username.trim() === "") {
            throw new Error("Username cannot be empty");
        } else if (!usernameRegex.test(username)) {
            throw new Error("Username can only contain letters");
        } else if (validUsers.has(username)) {
            throw new Error("Username already exists");
        }

        //Validate Password
        if (password.trim() === "") {
            throw new Error("Password cannot be empty");
        } else if (!passwordRegex.test(password)) {
            throw new Error("Password must contain at least one number, one uppercase letter, one lowercase letter, one special character, and be at least 12 characters long");
        }

        //Validate Confirm Password
        if (confirmPassword.trim() === "") {
            throw new Error("Confirm Password cannot be empty");
        } else if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }

        //Add the new user to the validUsers map
        validUsers.set(username, password);

        //Object.fromEntries() method transforms a map into an object
        //Store the updated validUsers map in localStorage
        const validUsersObject = Object.fromEntries(validUsers); 
        localStorage.setItem("validUsers", JSON.stringify(validUsersObject));

        //Display success message
        successMessage.textContent = "You've been successfully registered! Directing to login page...";
        successMessage.style.color = "green";

        console.log("Updated validUsers object:", validUsers);

        //Redirect to login page after 2 seconds
        setTimeout(() => {
        window.location.href = "login.html"; 
        }, 2000);

    } catch (error) {
        console.error("Error during registration:", error.message);

        if (error.message === "Username cannot be empty" || error.message === "Username can only contain letters" || error.message === "Username already exists") {
            usernameError.textContent = error.message;
        } else if (error.message === "Password cannot be empty" || error.message === "Password must contain at least one number, one uppercase letter, one lowercase letter, one special character, and be at least 12 characters long") {
            passwordError.textContent = error.message;
        } else if (error.message === "Confirm Password cannot be empty" || error.message === "Passwords do not match") {
            confirmPasswordError.textContent = error.message;
        } else if (error.message === "Invalid email format") {
            emailError.textContent = error.message;
        } else {
            console.error(error);
        }
    }
});
