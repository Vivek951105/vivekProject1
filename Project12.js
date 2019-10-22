function signin(){
    var loginlink=document.getElementById("loginlink");
    if(loginlink.innerHTML=="login"){
        var logintext=document.getElementById("warning");
        logintext.innerHTML="Login";
        var logindes=document.getElementById("logindes");
        logindes.innerHTML="login ";
        var repeat=document.getElementById("repeat").style.display="none";
        var repeat1=document.getElementById("repeat1").style.display="none";
        var signupbtn=document.getElementById("signupbtn");
        signupbtn.innerHTML="Login";
        var loginlink=document.getElementById("loginlink");
        loginlink.innerHTML="signup";
    }
    else{
        var logintext=document.getElementById("warning");
        logintext.innerHTML="Sign up";
        var logindes=document.getElementById("logindes");
        logindes.innerHTML="signup";
        var repeat=document.getElementById("repeat").style.display="";
        var repeat1=document.getElementById("repeat1").style.display="";
        var signupbtn=document.getElementById("signupbtn");
        signupbtn.innerHTML="Signup";
        var loginlink=document.getElementById("loginlink");
        loginlink.innerHTML="login";
    }
}
function goBack() {
    window.history.back();
}
