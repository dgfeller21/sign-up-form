const pass = document.getElementById("password");
const confirmPass = document.getElementById("confirmPassword");
pass.onfocus = setValue;
pass.oninput = setValue;
confirmPass.onfocus = setValue;
confirmPass.oninput = setValue;
function setValue() {
    if(pass.value != confirmPass.value) {
        pass.style.borderColor = "red";
        confirmPass.style.borderColor = "red";
    }else {
        pass.style.borderColor = "black";
        confirmPass.style.borderColor = "black";
    }
}
confirmPass.onfocus = setValue;