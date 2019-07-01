function fnameIsValid(fname) {
    return fname.length > 0;
}
function lnameIsValid(lname) {
    return lname.length > 0;
}
function emailIsValid(email) {
    return email.length > 0 && email.includes('@');
}
function passIsValid(pass) {
    return pass.length > 0;
}
function cpassIsValid(cpass, pass) {
    return cpass.length > 0 && cpass === pass;
}