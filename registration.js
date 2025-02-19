let form=document.querySelector("form")
let uname = document.querySelector("#uname")
let mail = document.querySelector("#email")
let phno = document.querySelector("#phno")
let pwd = document.querySelector("#password")
let cpwd = document.querySelector("#cpassword")
let cap= document.querySelector('#cap')
form.addEventListener("submit",(event)=>{
event.preventDefault();
if(formValidation()){
    window.location.reload()
    setTimeout(function () { window.location = "regsuccess.html" }, 1);
}
})
function formValidation(){
    if(uname_valid(uname) && phno_valid(phno) && cpwd_valid(pwd,cpwd) && captcha_valid(cap))
    {
        return true
    }
    else{
        return false
    }
}

function uname_valid(uname){
    let un=uname.value
    if (un.length<3 || un.length>12)
    {
        alert("username should contain minimum 3, maximum 12 characters")
        uname.focus()
        return false
    }
    var letters = /^[A-Za-z]+$/
    if(!un.match(letters)){
        alert("Username should only contain alphabets")
        uname.focus()
        return false
    }
    return true
}

function phno_valid(phno)
{
    if(phno.value.length!=10)
    {
        alert("Invalid phone number")
        return false
    }
    let num=/^[0-9]+$/
    if(!phno.value.match(num))
    {
        alert("Enter valid phone number")
        return false
    }
    return true

}
function cpwd_valid(pwd,cpwd)
{
    if(pwd.value===cpwd.value)
    {
        console.log(pwd.value,cpwd.value)
        return true

    }
    else{
        alert("passwords should be similar in confirm password field ")
        return false
    }
}
function captcha_valid(cap)
{
    if(cap.value!=4)
    {   
        alert("Wrong captcha")
        return false
    }
    return true
}

