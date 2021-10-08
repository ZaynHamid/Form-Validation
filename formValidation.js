let inputField = document.getElementById("inputField");
    let pswd = document.getElementById("pswdField");
    let errMessage = document.getElementById("error");
    let regEx =  /[a-z A-Z 0-9]/;

document.getElementById("loginBtn").addEventListener("click", function (e) {
    if (inputField.value == "") {
        errMessage.textContent = "Enter an username or email";
        inputField.focus();
        inputField.style.border = "1px solid red";
        inputField.style.boxShadow = "none";
        return false;
    }

    else if (pswd.value == "") {
        errMessage.textContent = "Please type your password";
        document.getElementById("pswdField").focus();
        pswd.style.boxShadow = "none";
        pswd.style.border = "1px solid red";
        return false;
    }

   else if (inputField.value.length < 8) {
        errMessage.textContent = "Please type an valid input of 8 characters";
        inputField.style.border = "1px solid red";
        inputField.style.boxShadow = "none";
        inputField.focus();
    }

    else if (pswd.value.length < 8) {
        errMessage.textContent = "Please type an valid input of 8 characters";
        pswd.style.boxShadow = "none";
        pswd.style.border = "1px solid red";
        pswd.focus();
   }
   else if (regEx.test(inputField.value) === false) {
        errMessage.textContent = "Please type an valid input";
        inputField.focus();
        inputField.style.border = "1px solid red";
        inputField.style.boxShadow = "none";
        pswd.style.boxShadow = "none";
        pswd.style.border = "1px solid red";
        pswd.focus();
        return false;
    }
    else {
        errMessage.style.color = "#198754";
        errMessage.textContent = "Username and password is valid";
        pswd.style.boxShadow = "none";
        pswd.style.border = "1px solid #198754";
        inputField.style.border = "1px solid #198754";
        inputField.style.boxShadow = "none";
        return true;
    }
  
});
