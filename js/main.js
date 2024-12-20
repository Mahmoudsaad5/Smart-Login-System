let userName = document.getElementById("inputName")
let userEmail = document.getElementById("inputEmail")
let userPassword = document.getElementById("inputPassword")
let userEmail2 = document.getElementById("inputEmail2")
let userPassword2 = document.getElementById("inputPassword2")
let loginButton = document.getElementById("loginButton")
let signupButton = document.getElementById("signupButton")
let signinButton = document.getElementById("signinButton")
let validationName = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
let validationEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,3}$/;
let validationPassword  = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
let userList = [];
let newUser = [];
var userData = {}
var userlog = {}

// signup form
signupButton.addEventListener("click" , function addUser() {
     userData = {
        userName: userName.value,
        userEmail: userEmail2.value,
        userPassword: userPassword2.value
    }
    newUser.push(userData)
    localStorage.setItem("list",JSON.stringify(userList))
    console.log(newUser)
} )
// login form
loginButton.addEventListener("click" , function addUser() {
    userlog = {
        userEmail: userEmail.value,
        userPassword: userPassword.value
    }
    userList.push(userlog)
    console.log(userList)
} )
// validate login email
function validateloginEmail(){
    if(validationEmail.test(userEmail.value) == true){
        document.getElementById("alertEmail").classList.add("d-none")
        userEmail.classList.add("is-valid")
        userEmail.classList.remove("is-invalid")
        loginButton.classList.remove("disabled")
    }else{
        document.getElementById("alertEmail").classList.remove("d-none")
        userEmail.classList.remove("is-valid")
        userEmail.classList.add("is-invalid")
        loginButton.classList.add("disabled")
    }
}
document.getElementById("inputEmail").addEventListener("change", validateloginEmail)
// validate login password
function validateloginPassword() {
    let minNumberofChars = 8;
    let maxNumberofChars = 16;
    if(userPassword.value < minNumberofChars || userPassword.value > maxNumberofChars){
        document.getElementById("alertPassword").classList.remove("d-none")
        userPassword.classList.add("is-invalid")
        userPassword.classList.remove("is-valid")
        document.getElementById("alertPassword").innerHTML ="Password Must be between 8-16 character, contain at least one character of: [A-Z,a-z] Letters, Numbers ,Special characters.";
    }
    if(validationPassword.test(userPassword.value) == true){
        document.getElementById("alertPassword").classList.add("d-none")
        userPassword.classList.add("is-valid")
        userPassword.classList.remove("is-invalid")
        loginButton.classList.remove("disabled")
    }else{
        document.getElementById("alertPassword").classList.remove("d-none")
        userPassword.classList.remove("is-valid")
        userPassword.classList.add("is-invalid")
        loginButton.classList.add("disabled")
        document.getElementById("alertPassword").innerHTML ="Password Must be between 8-16 character and contain at least one character of:[A-Z,a-z] Letters, Numbers ,Special characters.";
    }
}
document.getElementById("inputPassword").addEventListener("change", validateloginPassword)
// validate signup username
function validateName(){
    if(validationName.test(userName.value) == true){
        document.getElementById("alertName").classList.add("d-none")
        userName.classList.add("is-valid")
        userName.classList.remove("is-invalid")
        signupButton.classList.remove("disabled")
    }else{
        document.getElementById("alertName").classList.remove("d-none")
        userName.classList.remove("is-valid")
        userName.classList.add("is-invalid")
        signupButton.classList.add("disabled")
    }
}
document.getElementById("inputName").addEventListener("change", validateName)
// validate signup email
function validatesignupEmail(){
    if(validationEmail.test(userEmail2.value) == true){
        document.getElementById("alertEmail2").classList.add("d-none")
        userEmail2.classList.add("is-valid")
        userEmail2.classList.remove("is-invalid")
        signupButton.classList.remove("disabled")
    }else{
        document.getElementById("alertEmail2").classList.remove("d-none")
        userEmail2.classList.remove("is-valid")
        userEmail2.classList.add("is-invalid")
        signupButton.classList.add("disabled")
    }
}
document.getElementById("inputEmail2").addEventListener("change", validatesignupEmail)
// validate signup password
function validatesignupPassword() {
    let minNumberofChars = 8;
    let maxNumberofChars = 16;
    if(userPassword2.value < minNumberofChars || userPassword2.value > maxNumberofChars ){
        document.getElementById("alertPassword2").classList.remove("d-none")
        userPassword2.classList.add("is-invalid")
        userPassword2.classList.remove("is-valid")
        document.getElementById("alertPassword2").innerHTML ="Password Must be between 8-16 character, contain at least one character of :[A-Z,a-z] Letters, Numbers ,Special characters.";
    }
    if(validationPassword.test(userPassword2.value) == true){
        document.getElementById("alertPassword2").classList.add("d-none")
        userPassword2.classList.add("is-valid")
        userPassword2.classList.remove("is-invalid")
        signupButton.classList.remove("disabled")
    }else{
        document.getElementById("alertPassword2").classList.remove("d-none")
        userPassword2.classList.remove("is-valid")
        userPassword2.classList.add("is-invalid")
        signupButton.classList.add("disabled")
        document.getElementById("alertPassword2").innerHTML ="Password Must be between 8-16 character and contain at least one character of:[A-Z,a-z] Letters, Numbers ,Special characters.";
    }
}
document.getElementById("inputPassword2").addEventListener("change", validatesignupPassword)
// transfer from login page to sign up page 
function transferToSignup(){
    document.getElementById("login-page").classList.add("d-none")
    document.getElementById("home-page").classList.add("d-none")
    document.getElementById("signup-page").classList.remove("d-none")
}
// transfer from signup page to login page 
function transferTologin(){
    document.getElementById("login-page").classList.remove("d-none")
    document.getElementById("signup-page").classList.add("d-none")
    document.getElementById("home-page").classList.add("d-none")
}
// transfer from login page to home page 
function transferTohome(){
    document.getElementById("login-page").classList.add("d-none")
    document.getElementById("signup-page").classList.add("d-none")
    document.getElementById("home-page").classList.remove("d-none")
    document.getElementById("content").innerHTML="Welcome" 
}
// transfer from home page to login page
function logout(){
    document.getElementById("login-page").classList.remove("d-none")
    document.getElementById("home-page").classList.add("d-none")
    document.getElementById("signup-page").classList.add("d-none")
}
// function signup(){
//     if(validationName.test(userName.value) == true && validationEmail.test(userEmail2.value) == true && validationPassword.test(userPassword2.value) == true && (userPassword2.value) != null ) {
//         transferTologin()
//     }else{
//         document.getElementById("signupButton").classList.add("disabled")
//         alert("Errorrrrrrrr")
//     }
// }
// function login(){
//     if(validationEmail.test(userEmail.value) == true && validationPassword.test(userPassword.value) == true){
//         transferTohome()
//     }else{
//         document.getElementById("signupButton").classList.add("disabled")
//         alert("Errorrrrrrrr")
//     }
// }

