
function e(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const Cpassword = document.getElementById("Cpassword").value;

    if(password!=Cpassword){
        document.getElementById("wrong").innerHTML="Passwords do not match";
        document.getElementById("password").style.backgroundColor="#FF4444";
        document.getElementById("Cpassword").style.backgroundColor="#FF4444";
    }

    else{
    console.log("Name : "+name)
    console.log("Email : "+email)
    console.log("Password : "+password)
    document.getElementById("wrong").innerHTML="";
    document.getElementById("password").style.backgroundColor="#EFEFEF";
    document.getElementById("Cpassword").style.backgroundColor="#EFEFEF";
    }

       
}