let form = document.querySelector("form");
let uname = document.querySelector("#uname");
let pwd = document.querySelector("#pwd");
let rememberMe = document.querySelector("#rememberMe");

// Restore remembered credentials if any
window.onload = () => {
  const savedUser = JSON.parse(localStorage.getItem("rememberedUser"));
  if (savedUser) {
    uname.value = savedUser.identifier;
    pwd.value = savedUser.password;
    rememberMe.checked = true;
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formValidation()) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const identifier = uname.value.trim();
    const password = pwd.value;

    const matchedUser = users.find(
      (user) =>
        (user.email === identifier || user.phone === identifier) &&
        user.password === password
    );

    if (matchedUser) {
      alert("Login Successful ✅");

      if (rememberMe.checked) {
        localStorage.setItem(
          "rememberedUser",
          JSON.stringify({ identifier, password })
        );
      } else {
        localStorage.removeItem("rememberedUser");
      }

      setTimeout(() => {
        window.location.href = "catalog.html"; // Redirects properly
      }, 500);
    } else {
      alert("Invalid credentials ❌");
    }
  }
});

function formValidation() {
  return isValidEmailOrPhone(uname);
}

function isValidEmailOrPhone(uname) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  if (uname.value.match(emailRegex) || uname.value.match(phoneRegex)) {
    return true;
  } else {
    alert("Enter a registered email or phone number.");
    return false;
  }
}
