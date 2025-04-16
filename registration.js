let form = document.querySelector("form");
let uname = document.querySelector("#uname");
let mail = document.querySelector("#email");
let phno = document.querySelector("#phno");
let pwd = document.querySelector("#password");
let cpwd = document.querySelector("#cpassword");
let cap = document.querySelector("#cap");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formValidation()) {
    if (saveUser()) {
      setTimeout(() => {
        window.location = "regsuccess.html";
      }, 500);
    }
  }
});

function formValidation() {
  return (
    uname_valid(uname) &&
    phno_valid(phno) &&
    cpwd_valid(pwd, cpwd) &&
    captcha_valid(cap)
  );
}

function uname_valid(uname) {
  let un = uname.value.trim();
  if (un.length < 3 || un.length > 12) {
    alert("Username should be 3-12 characters.");
    uname.focus();
    return false;
  }
  let letters = /^[A-Za-z]+$/;
  if (!un.match(letters)) {
    alert("Username should only contain alphabets.");
    uname.focus();
    return false;
  }
  return true;
}

function phno_valid(phno) {
  let phone = phno.value.trim();
  if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
    alert("Phone number must be exactly 10 digits.");
    phno.focus();
    return false;
  }
  return true;
}

function cpwd_valid(pwd, cpwd) {
  if (pwd.value !== cpwd.value) {
    alert("Passwords do not match.");
    cpwd.focus();
    return false;
  }
  return true;
}

function captcha_valid(cap) {
  if (cap.value.trim() !== "4") {
    alert("Wrong captcha.");
    cap.focus();
    return false;
  }
  return true;
}

// Save user details to localStorage
function saveUser() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const email = mail.value.trim();
  const phone = phno.value.trim();

  const duplicate = users.some(
    (u) => u.email === email || u.phone === phone
  );

  if (duplicate) {
    alert("User already registered with this email or phone.");
    return false;
  }

  users.push({
    username: uname.value.trim(),
    email: email,
    phone: phone,
    password: pwd.value
  });

  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful ✅");
  return true;
}

// Optional: Generate XML from users for debugging
function generateUserXML() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  let xml = "<users>\n";
  users.forEach(u => {
    xml += `  <user>\n`;
    xml += `    <username>${u.username}</username>\n`;
    xml += `    <email>${u.email}</email>\n`;
    xml += `    <phone>${u.phone}</phone>\n`;
    xml += `    <password>${u.password}</password>\n`;
    xml += `  </user>\n`;
  });
  xml += "</users>";
  console.log(xml);
}
