let sign=document.querySelectorAll('#sign');
let overlay=document.querySelector(".overlay");
let signIn=document.querySelector(".Sign-in");
let eror=document.querySelector(".error");
let password=document.querySelector("#password");
let confirmPassword=document.querySelector("#confirm");
let name=document.getElementById("firstname");
let submit=document.querySelector(".sign button");

sign.forEach(element=>{
    element.addEventListener("click",function(e){
        overlay.classList.toggle("show");
        signIn.classList.toggle("show");
    });
});

function check(pass,confirmPass)
{
    if(pass.length>5 && confirmPass.length>5)
    {
        console.log(pass);
        console.log(confirmPass);
        if(pass!=confirmPass)
        {
            password.classList.remove("green");
            confirmPassword.classList.remove("green");
            confirmPassword.classList.add("wrong");
            password.classList.add("wrong");
            console.log('gey');
            return false;
        }
        password.classList.add("green");
        confirmPassword.classList.add("green");
        confirmPassword.classList.remove("wrong");
        password.classList.remove('wrong');
        return true;
    }
    password.classList.remove("green");
    confirmPassword.classList.remove("green");
    confirmPassword.classList.add("wrong");
    password.classList.add("wrong");
    return false;
}

submit.addEventListener('click',function(e){
    let pass=document.getElementById("password").value;
    let confirmPass=document.getElementById("confirm").value;
    if(!check(pass,confirmPass))
    {
       eror.textContent="password error try again please ";
    }
    else
    {
        eror.textContent='';
    }
});

confirmPassword.addEventListener("focusout",function(e){
    check(password.value,confirmPassword.value);
});
password.addEventListener("focusout",function(e){
    check(password.value,confirmPassword.value);
});
