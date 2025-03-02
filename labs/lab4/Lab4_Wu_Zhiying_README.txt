# Lab 4

* *Date Created*: 13/02/2025
* *Last Modification Date*: 14/02/2025
* Timberlea URL: https://web.cs.dal.ca/~zhiyingw/csci3172/labs/lab4/
* GitLab URL: https://git.cs.dal.ca/zhiyingw/csci-3172/-/tree/main/labs/lab4?ref_type=heads


## Authors
Zhiying Wu
zh617138@dal.ca

## Sources Used

### File Name
index.html

*Lines ## - ##*
Line 1-48

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Registration Form</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h1>Registration Form</h1>
        <form id="registrationForm">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required class="form-control">
                    <span class="error" id="emailError"></span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required class="form-control">
                    <span class="error" id="usernameError"></span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required class="form-control">
                    <span class="error" id="passwordError"></span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" required class="form-control">
                    <span class="error" id="confirmPasswordError"></span>
                </div>        
            </div>
            <button type="submit" class="btn btn-outline-primary btn-lg" id="submitButton">Register</button>
        </form>
		<p id="successMessage"></p>
		<p>Already have an account? <a href="login.html">Login here</a></p>
    </div>
    <script src="js/registration.js"></script>
</body>
</html>

```

- <!---How---> The code in [L10V2-Validation and JSON (Completed) by Gabriella Mosquera](https://dal.brightspace.com/d2l/le/content/361473/Home) was implemented by using the index.html template demonstrated in the lecture. 
- <!---Why---> [L10V2-Validation and JSON (Completed) by Gabriella Mosquera](https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was used because it provides the overall template of the user's registration form.
- <!---How---> [L10V2-Validation and JSON (Completed) by Gabriella Mosquera](https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was modified by referencing a difference javascript file(registration.js) instead of script.js, and a successMessage body is added to the form to display the success message. Also, a link is added in the form so that the user can navigate to the login form.

### File Name
login.html

*Lines ## - ##*
Line 1-29

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h1>Login</h1>
        <form id="loginForm">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" required>
                <span class="error" id="loginUsernameError"></span>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" required>
                <span class="error" id="loginPasswordError"></span>
            </div>
            <button type="submit">Login</button>
        </form>
        <p id="loginSuccessMessage"></p>
    </div>
    <script src="js/login.js"></script>
</body>
</html>


```

- <!---How---> The code in [L10V2-Validation and JSON (Completed) by Gabriella Mosquera](https://dal.brightspace.com/d2l/le/content/361473/Home) was implemented by using the index.html template demonstrated in the lecture. 
- <!---Why---> [L10V2-Validation and JSON (Completed) by Gabriella Mosquera](https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was used because it provides the basic template of the user's login form.
- <!---How---> [L10V2-Validation and JSON (Completed) by Gabriella Mosquera](https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was modified by referencing a difference javascript file(login.js) instead of script.js, and a login successMessage body is added to the form to display the success message. Also, the form is modified to only include the username and password input forms.


### File Name
registration.js

*Lines ## - ##*
Line 1-107

```
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

const usernameRegex = /^[A-Za-z]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{12,}$/;
const emailRegex = /[A-Za-z0-9]+([.-][A-Za-z0-9]+)*@[A-Za-z0-9-]+\.[A-Za-z]{2,8}/;

registrationForm.addEventListener("submit", async (event) => {
    event.preventDefault();

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

        if (email.trim() === "") {
            throw new Error("Email is required");
        } else if (!emailRegex.test(email)) {
            throw new Error("Invalid email format");
        }

        if (username.trim() === "") {
            throw new Error("Username cannot be empty");
        } else if (!usernameRegex.test(username)) {
            throw new Error("Username can only contain letters");
        } else if (validUsers.has(username)) {
            throw new Error("Username already exists");
        }

        if (password.trim() === "") {
            throw new Error("Password cannot be empty");
        } else if (!passwordRegex.test(password)) {
            throw new Error("Password must contain at least one number, one uppercase letter, one lowercase letter, one special character, and be at least 12 characters long");
        }

        if (confirmPassword.trim() === "") {
            throw new Error("Confirm Password cannot be empty");
        } else if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }

        validUsers.set(username, password);

        const validUsersObject = Object.fromEntries(validUsers); 
        localStorage.setItem("validUsers", JSON.stringify(validUsersObject));

        successMessage.textContent = "You've been successfully registered! Directing to login page...";
        successMessage.style.color = "green";

        console.log("Updated validUsers object:", validUsers);

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

```

The code above was created by adapting the code in [L10V2-Validation and JSON (Completed) by Gabriella Mosquera](https://dal.brightspace.com/d2l/le/content/361473/Home) as shown below: 

```
const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

let validUsers = {
  user1: "password1",
  user2: "Password2!",
  admin: "Admin123",
};

const usernameRegex = /^[a-zA-Z0-9_]+$/; // allows for alphanumeric and underscores
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; 

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { value: username } = usernameInput;
  const { value: password } = passwordInput;
  const { value: confirmPassword } = confirmPasswordInput;

  try {
    if (username.trim() === "") {
      throw new Error("Username cannot be empty.");
    } else if (!usernameRegex.test(username)) {
      throw new Error(
        "Invalid username format. Only alphanumeric characters and underscores allowed."
      );
    }

    if (password.trim() === "") {
      throw new Error("Password cannot be empty.");
    } else if (!passwordRegex.test(password)) {
      throw new Error(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
      );
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }

    if (validUsers.hasOwnProperty(username)) {
      throw new Error("Username already exists.");
    }

    validUsers[username] = password;

    const blob = new Blob([JSON.stringify(validUsers)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a"); 
    link.href = url; 
    link.download = "validUsers.json"; 
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link); 

    console.log("Registration successful! Data saved to validUsers.json");
  } catch (error) {

    if (error.message === "Username cannot be empty.") {
      usernameError.textContent = error.message;
    } else if (
      error.message ===
      "Invalid username format. Only alphanumeric characters and underscores allowed."
    ) {
      usernameError.textContent = error.message;
    } else if (error.message === "Password cannot be empty.") {
      passwordError.textContent = error.message;
    } else if (
      error.message ===
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
    ) {
      passwordError.textContent = error.message;
    } else if (error.message === "Passwords do not match.") {
      confirmPasswordError.textContent = error.message;
    } else if (error.message === "Username already exists.") {
      usernameError.textContent = error.message;
    }
  }
});

```

- <!---How---> The code in [L10V2-Validation and JSON (Completed) by Gabriella Mosquera](https://dal.brightspace.com/d2l/le/content/361473/Home) was implemented by adapting the logic for user registration, validating form input (username, password, confirm password, and email), and saving user data.
- <!---Why---> [L10V2-Validation and JSON (Completed) by Gabriella Mosquera](https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was used because it already provided a solid foundation for user registration logic, validation, and handling errors. 
- <!---How---> [L10V2-Validation and JSON (Completed) by Gabriella Mosquera](https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was modified to complete my form by introducing new validation logic such as stronger password requirements (e.g., special characters, numbers, uppercase and lowercase letters), and ensuring that the user data is stored and retrieved properly from localStorage.

### File Name
registration.js and login.js

*Lines ## - ##*
Line 78-79

```
const validUsers = new Map([
    ["user1", "userpassworD1!"],
    ["user2", "PasswordUser2!"],
    ["admin", "Admin123456Haha!"]
]);

validUsers.set(username, password);

const validUsersObject = Object.fromEntries(validUsers); 
localStorage.setItem("validUsers", JSON.stringify(validUsersObject));

const storedUsers = localStorage.getItem("validUsers");
const validUsers = storedUsers ? new Map(Object.entries(JSON.parse(storedUsers))) : new Map();


```

The code above was created by adapting the code in [Lab 4: Creating a User Login Registration System](https://dal.brightspace.com/d2l/le/content/361473/Home) as shown below: 

```
const users = [
 { id: 1, name: "Alice" },
 { id: 2, name: "Bob" }
];

localStorage.setItem("users", JSON.stringify(users));

const storedUsers = JSON.parse(localStorage.getItem("users"));
console.log(storedUsers);

```


- <!---How---> The code in [Lab 4: Creating a User Login Registration System](https://dal.brightspace.com/d2l/le/content/361473/Home) was implemented by adapting the logic for saving user data to localStorage. The original implementation used a simple array of user objects to store user data. I used a Map to store valid users' usernames and passwords. This required converting the Map into a plain object using Object.fromEntries() before saving it to localStorage.
- <!---Why---> [Lab 4: Creating a User Login Registration System](https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was used because it provided the method for saving data to localStorage, which I wanted to apply in my user registration form. The way of saving to localStorage was already established, so I built upon this to handle more complex user data (username-password pairs) with a Map.
- <!---How---> [Lab 4: Creating a User Login Registration System](https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was modified by incorporating the use of Map for handling user data, which can be useful when checking if a username exists. After adding a new username-password pair, the Map was converted into a plain object using Object.fromEntries() to store it as JSON in localStorage. Additionally, the retrieval process was modified to convert the stored object back into a Map using new Map(Object.entries(...)) in the login.js to retrieve the user's name and password.


### File Name
script.js

*Lines ## - ##*
Line 88-90

```
setTimeout(() => {
window.location.href = "login.html"; 
}, 2000);

```

The code above was created by adapting the code in [Lab 4: Creating a User Login Registration System](https://dal.brightspace.com/d2l/le/content/361473/Home) as shown below: 

```
function fetchData(callback) {
 setTimeout(() => {
 callback("Data retrieved successfully!");
 }, 1000);
}

function protectRoute() {
const allowedOrigin = "https://yourwebsite.com/index.html"; // Change this to your ac
tual origin
if (document.referrer !== allowedOrigin) {
window.location.href = "index.html"; // Redirect to login if accessed directly
 }
}

```

- <!---How---> The code in Lab 4: Creating a User Login Registration System](https://dal.brightspace.com/d2l/le/content/361473/Home) was implemented by adapting the use of setTimeout() to redirect the user after a short delay. After successfully registering, the user is redirected to the login page (login.html) after a 2-second delay, signaling successful registration. This pattern was inspired by the setTimeout used in the original code, which delays a callback for fetching data.
- <!---Why---> Lab 4: Creating a User Login Registration System](https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was used because it demonstrates how to use setTimeout() for delayed actions and how to redirect users based on conditions. 
- <!---How---> Lab 4: Creating a User Login Registration System](https://dal.brightspace.com/d2l/le/content/361473/Home)'s Code was modified by implementing the setTimeout() function for a 2-second delay for the redirection after a successful registration. This ensures that the user can see a confirmation message before being redirected to the login page. The window.location.href = "login.html" line was added for the actual redirection.


## Acknowledgments

A special thanks to my professor Gabriella Mosquera, my course TA Hardison Wang, Artun Selcuk and Mehrad Hajati for their examples and inspiration for the implementation and development of the script.