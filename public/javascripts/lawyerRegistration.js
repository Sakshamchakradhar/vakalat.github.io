function validateForm() {
    let x = document.forms["regform"]["firstName"].value;
    let x2 = document.forms["regform"]["email"].value;
    let x3 = document.forms["regform"]["password"].value;
    let x4 = document.forms["regform"]["birthDate"].value;
    let x5 = document.forms["regform"]["address"].value;
    let x6 = document.forms["regform"]["phoneNumber"].value;
    let x7 = document.forms["regform"]["lawyertype"].value;
    let x8 = document.forms["regform"]["experience"].value;
    let x9 = document.forms["regform"]["picbutton"].value;
    let x10 = document.forms["regform"]["filebutton"].value;
    let x11 = document.forms["regform"]["state"].value;
    let x12 = document.forms["regform"]["pincode"].value;


    if (x == "" || x2 == "" || x3 == "" || x4 == "" || x5 == "" || x6 == "" || x7 == "" || x8 == "" || x9 == "" || x10 == "" || x11 == "" || x12 == "") {
        alert("Please fill the required fields");
        return false;
    }

    matchpass()

}




var firstpassword = document.regform.password.value;
var secondpassword = document.regform.password2.value;
function matchpass() {

    if (firstpassword == secondpassword) {
        return true;
    }
    else {
        alert("password must be same!");
        return false;
    }
} 