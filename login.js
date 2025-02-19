let form = document.querySelector("form")
let uname = document.querySelector('#uname')
let pwd = document.querySelector("#pwd")
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(formValidation()){
        window.location.reload()
        setTimeout(function () { window.location = "index.html"}, 1);
    }
})
function formValidation()
{
    if(isValidEmailOrPhone(uname))
    {
        return true
    }
    else{
        return false
    }
}
function isValidEmailOrPhone(uname) {
    // Improved regex for email (more robust)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Basic regex for phone (customize as needed for your region)
    const phoneRegex = /^\d{10}$/; // Example: 10-digit US phone number
  
    if(uname.value.match(emailRegex) || uname.value.match(phoneRegex) )
    {
        return true
    }
    else{
        alert("Enter registered mail id or phone number")
        return false
    }
  }