function formValidation() {
   
    var uemail = document.forms["login"]["email"].value;
      var upw = document.forms["login"]["password"].value;
    
/**Email validation */
    if(uemail == ""){
        alert("Error: Email field required!");
            return false;
    }

/**Check @ sign of email */
    if(uemail !== ""){
        var check = uemail.indexOf('@')


        if(check < 0 || check == 0){
            alert("Error: Please enter valid email address!");
                return false;
        }
    }

/**Password validation */
    if(upw == ""){
        alert("Error: Password field required!");
        return false;
    }   
}
