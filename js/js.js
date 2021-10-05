document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener("scroll", function(){
        if(this.window.scrollY > 200){
            document.getElementById('navbar-top').classList.add('fixed-top');
            navbar_height = document.querySelector('.header-box').offsetHeight;
            this.document.body.style.paddingTop = navbar_height + 'px';
        }
        else{
            this.document.getElementById('navbar-top').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    })
})
var formSubmit = () => {
    var btnUser = document.getElementById("btn-user").innerText;
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cPassword = document.getElementById("reEnterPassword").value;

    if(btnUser == "Register"){

        if(fName == ""){

            document.getElementsByClassName("error")[0].style.display = 'block';
            document.getElementById("firstName").focus();
            document.getElementById("firstName").style.borderColor = "red";

        }
        else if(lName == ""){

            document.getElementsByClassName("error")[1].style.display = 'block';
            document.getElementById("lastName").focus();
            document.getElementById("lastName").style.borderColor = "red";

        }
        else if(userName == ""){

            document.getElementsByClassName("error")[2].style.display = 'block';
            document.getElementById("userName").focus();
            document.getElementById("userName").style.borderColor = "red";

        }
        else if(email == ""){

            document.getElementsByClassName("error")[3].style.display = 'block';
            document.getElementById("email").focus();
            document.getElementById("email").style.borderColor = "red";

        }
        else if(password == ""){

            document.getElementsByClassName("error")[4].style.display = 'block';
            document.getElementById("password").focus();
            document.getElementById("password").style.borderColor = "red";
            
        }
        else{

            if(password.toString().trim().length < 6){
                document.getElementsByClassName("error")[4].style.display = 'block';
                document.getElementById("password").focus();
                document.getElementById("password").style.borderColor = "red";
                document.getElementById("strength").style.display = "none";
                document.getElementsByClassName("error")[4].innerHTML = 'Password can not be less than 6 character';

            }

            else if(password.toString().trim() != cPassword.toString().trim()){

                document.getElementsByClassName("error")[5].style.display = 'block';
                document.getElementById("reEnterPassword").focus();
                document.getElementById("reEnterPassword").style.borderColor = "red";

            }
            else if(password.toString().trim() == cPassword.toString().trim()){

                document.getElementsByClassName("error")[5].style.display = 'none';
                document.getElementById("reEnterPassword").style.borderColor = "#88797a";

                if(document.getElementById("tnc").checked == false){
            
                    document.getElementsByClassName("error")[6].style.display = 'block';
                    document.getElementById("tnc-link").style.color = "#cf202d";
                    document.getElementById("tnc").style.borderColor = "#cf202d";
            
                }
                else{
                    console.log("Registration Success");
                }
            }

        }
    }
    else{
        if(email == ""){

            document.getElementsByClassName("error")[3].style.display = 'block';
            document.getElementById("email").focus();
            document.getElementById("email").style.borderColor = "red";

        }
        else if(password == ""){

            document.getElementsByClassName("error")[4].style.display = 'block';
            document.getElementById("password").focus();
            document.getElementById("password").style.borderColor = "red";
            
        }else{
            console.log("form submitted");
        }

    }
    
}
var checkValue = (id, index) =>{
    var inputValue = document.getElementById(id).value;
    if(inputValue == ""){

        document.getElementsByClassName("error")[index].style.display = 'block';
        document.getElementById(id).style.borderColor = "red";
        document.getElementById("strength").style.display = 'none';
    }
    else{

        document.getElementsByClassName("error")[index].style.display = 'none';
        document.getElementById(id).style.borderColor = "#88797a";

        if(id == "password"){

            var btnUser = document.getElementById("btn-user").innerText;
            if(btnUser == "Register"){
                document.getElementById("strength").style.display = 'block';
                var password = document.getElementById(id).value;
                if(password.toString().trim().length < 16){

                    if(password.toString().trim().length < 6){

                        document.getElementById("stren").innerHTML = "Weak";
                        document.getElementById("stren").style.color = "red";
                        document.getElementById("strenLine").style.backgroundColor = "red";
                    }
                    else if(password.toString().trim().length >= 6 && password.toString().trim().length < 10){

                        document.getElementById("stren").innerHTML = "Medium";
                        document.getElementById("stren").style.color = "#ffd35e";
                        document.getElementById("strenLine").style.backgroundColor = "#ffd35e";

                    }
                    else if(password.toString().trim().length >= 10 && password.toString().trim().length < 16){

                        document.getElementById("stren").innerHTML = "Strong";
                        document.getElementById("stren").style.color = "#3abb1c";
                        document.getElementById("strenLine").style.backgroundColor = "#3abb1c";

                    }
                }
            }else{
                document.getElementById("strength").style.display = 'none';
            }

        }
        else if(id == "reEnterPassword"){
            var password = document.getElementById("password").value;
            var cPassword = document.getElementById(id).value;
            if(password.toString().trim() != cPassword.toString().trim()){
                document.getElementsByClassName("error")[index].style.display = 'block';
                document.getElementById("reEnterPassword").style.borderColor = "red";
            }
            else{
                document.getElementById(id).style.borderColor = "#88797a";
            }
        }

    }
}

var showHide = (id) => {
    if(document.getElementById(id).type == "text") {
        document.getElementById(id).type = "password";
    }else{
        document.getElementById(id).type = "text";
    }
}
var tncCheck = () => {
    if(document.getElementById("tnc").checked == false){
        document.getElementsByClassName("error")[6].style.display = 'block';
        document.getElementById("tnc-link").style.color = "#cf202d";
        document.getElementById("tnc").style.borderColor = "#cf202d";
    }
    else{
        document.getElementsByClassName("error")[6].style.display = 'none';
        document.getElementById("tnc-link").style.color = "#7a7a7a";
        document.getElementById("tnc").style.borderColor = "#88797a";
    }
}
var loginSignupForm = (formCat) => {
    var formType = document.getElementById("actionText").innerText;
    formCat == "" ? formType = formType : formType = formCat;
    if(formType == "Log in"){
        document.getElementsByClassName("input-area")[0].style.display = 'none';
        document.getElementsByClassName("input-area")[1].style.display = 'none';
        document.getElementsByClassName("input-area")[2].style.display = 'none';
        document.getElementsByClassName("input-area")[5].style.display = 'none';
        document.getElementsByClassName("input-area")[6].style.display = 'none';
        document.getElementsByClassName("input-area")[3].classList.add("col-lg-12");
        document.getElementsByClassName("input-area")[4].classList.add("col-lg-12");
        document.getElementsByClassName("input-area")[3].classList.add("col-md-12");
        document.getElementsByClassName("input-area")[4].classList.add("col-md-12");
        document.getElementsByClassName("input-area")[4].style.marginBottom = "36px";
        document.getElementById("password").value = "";
        document.getElementById("email").value = "";
        document.getElementById("btn-user").innerHTML = "Login";
        document.getElementById("strength").style.display = 'none';
        document.getElementById("forgotP").style.display = 'block';
        document.getElementById("formHeading").innerHTML = "Log In";
        document.getElementById("optionText").innerHTML = "Not an account?";
        document.getElementById("actionText").innerHTML = "Sign up";
        document.getElementById("formDialog").classList.remove("modal-lg");
        document.getElementById("formDialog").classList.add("modal-md");
        document.getElementById("loginBySocial").style.display="block";

    }
    else if(formType == "Sign up"){
        document.getElementsByClassName("input-area")[0].style.display = 'block';
        document.getElementsByClassName("input-area")[1].style.display = 'block';
        document.getElementsByClassName("input-area")[2].style.display = 'block';
        document.getElementsByClassName("input-area")[5].style.display = 'block';
        document.getElementsByClassName("input-area")[6].style.display = 'block';
        document.getElementsByClassName("input-area")[3].classList.remove("col-lg-12");
        document.getElementsByClassName("input-area")[4].classList.remove("col-lg-12");
        document.getElementsByClassName("input-area")[3].classList.remove("col-md-12");
        document.getElementsByClassName("input-area")[4].classList.remove("col-md-12");
        document.getElementsByClassName("input-area")[4].style.marginBottom = "0px";
        document.getElementById("password").value = "";
        document.getElementById("email").value = "";
        document.getElementById("btn-user").innerHTML = "Register";
        document.getElementById("forgotP").style.display = 'none';
        document.getElementById("formHeading").innerHTML = "Sign Up";
        document.getElementById("optionText").innerHTML = "Already have an account?";
        document.getElementById("actionText").innerHTML = "Log in";
        document.getElementById("formDialog").classList.remove("modal-md");
        document.getElementById("formDialog").classList.add("modal-lg");
        document.getElementById("loginBySocial").style.display="none";

    }
    
}
