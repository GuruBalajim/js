function checking(){
        
    var userbox = document.getElementById("first-name");
    var passbox = document.getElementById("password");
    var username = document.getElementById("first-name").value;
    var password = document.getElementById("password").value;
    var result = document.getElementById("result-1");

    if (username == '' || password == '') {
        result.innerHTML = "Username or password cannot be empty"
        result.className = "red";
        userbox.className = "border";
        passbox.className = "border";
    }
    else if (username.length < 4) {
        result.innerHTML = "Username must contain minimum 4 characters"
        result.className = "red";
        userbox.className = "border";
    }
    else if (password.length < 6 || password.length > 12) {
        result.innerHTML = "Password must contain 6 to 12 characters"
        result.className = "red";
        passbox.className = "border";
    }
    else {
        result.innerHTML = "Successful"
        result.className = "green";
         }}