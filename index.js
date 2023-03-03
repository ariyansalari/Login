//ins Dom
const registerlink=document.querySelector(".register-link")
const Loginlink=document.querySelector(".login-link");
const wrapper=document.querySelector(".wrapper");
const btnLogin=document.querySelector(".btnLogin")
const closeicon=document.querySelector(".icon-close")

registerlink.addEventListener("click",(e)=>{
wrapper.classList.add("active");
})
Loginlink.addEventListener("click",(e)=>{
    wrapper.classList.remove("active")
})

btnLogin.addEventListener("click",(e)=>{
    wrapper.classList.add("actived")
})
closeicon.addEventListener("click",(e)=>{
    wrapper.classList.remove("actived")
})