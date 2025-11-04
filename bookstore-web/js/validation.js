// ✅ Simple validation for login & registration

document.addEventListener("DOMContentLoaded", function () {

    // ✅ Login Form Validation
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!username || !password) {
                alert("Please enter both username and password.");
                e.preventDefault();
            }
        });
    }

    // ✅ Registration Form Validation
    const regForm = document.getElementById("regForm");
    if (regForm) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("regEmail");
        const passInput = document.getElementById("regPassword");

        regForm.addEventListener("submit", function (e) {
            let valid = true;

            // ✅ Name Validation
            if (nameInput.value.trim().length < 3) {
                document.getElementById("nameErr").textContent = "Name must be at least 3 characters";
                valid = false;
            } else {
                document.getElementById("nameErr").textContent = "";
            }

            // ✅ Email Validation
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!emailInput.value.match(emailPattern)) {
                document.getElementById("emailErr").textContent = "Enter a valid email";
                valid = false;
            } else {
                document.getElementById("emailErr").textContent = "";
            }

            // ✅ Password Validation
            if (passInput.value.length < 8) {
                document.getElementById("passwordErr").textContent = "Password must be 8+ characters";
                valid = false;
            } else {
                document.getElementById("passwordErr").textContent = "";
            }

            // ❌ Stop form submit if invalid
            if (!valid) {
                e.preventDefault();
                return;
            }

            // ✅ Success Message + Redirect
            alert("Registration Successful!");
            window.location.href = "login.html";
        });
    }
});
