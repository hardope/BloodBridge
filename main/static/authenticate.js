function toggle(block) {
    $(".blocks").hide();
    $(block).show();
}
function sign_in(){
    $('#login_message').html('Logging in...');
    $('#login_button').html('<image src="/static/images/loading.gif" width="60px">')
    var username = $("#login #username").val();
    var password = $("#login #password").val();
    $.ajax({
        url: "/authenticate/",
        method: "POST",
        data: {
            action: "login",
            username: username,
            password: password
        },
        headers: {
            "X-CSRFToken": csrftoken
        },
        success: function(data){
            console.log(data.success);
            if(data.success){
                window.location.href = "/";
            }
            else{
                $('#login_button').html('Login');
                $("#login_message").html(data.message);
            }
        }
    });
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function sign_up(){
    $('sign_up_message').html('Signing up...');
    $('sign_up_button').html('<image src="/static/images/loading.gif" width="60px">')
    var username = $("#sign_up #username").val();
    var password = $("#sign_up #password").val();
    var email = $("#sign_up #email").val();
    var confirm_password = $("#sign_up #confirm_password").val();
    if (username.length < 1){
        $("#sign_up_message").html("Username cannot be empty");
        $('#sign_up_button').html('Sign Up');
    }
    if (password != confirm_password){
        $("#sign_up_message").html("Passwords don't match");
        $('#sign_up_button').html('Sign Up');
        return;
    }
    if (password.length < 8){
        $("#sign_up_message").html("Password must be atleast 8 characters long");
        $('#sign_up_button').html('Sign Up');
        return;
    }
    if (email.length < 1){
        $("#sign_up_message").html("Email cannot be empty");
        $('#sign_up_button').html('Sign Up');
    }
    if (validateEmail(email) == false){
        $("#sign_up_message").html("Invalid email");
        $('#sign_up_button').html('Sign Up');
    }
    $.ajax({
        url: "/authenticate/",
        method: "POST",
        data: {
            action: "sign_up",
            username: username,
            password: password,
            email: email,
            confirm_password: confirm_password
        },
        headers: {
            "X-CSRFToken": csrftoken
        },
        success: function(data){
            console.log(data.success);
            if(data.success){
                $('.blocks').hide();
                $('#verify_otp').show();
            }
            else{
                $("#sign_up_message").html(data.message);
                $('#sign_up_button').html('Sign Up');
            }
        }
    });
}

function verify_otp(){
    $("#verify_otp_message").html('Verifying OTP...');
    $("#verify_otp_button").html('<image src="/static/images/loading.gif" width="60px">')
    var otp = $("#otp").val();
    var username = $("#sign_up #username").val();
    var password = $("#sign_up #password").val();
    var email = $("#sign_up #email").val();
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    if (otp.length != 6){
        $("#verify_otp_message").html("OTP must be 6 digits long");
        $("#verify_otp_button").html('Verify OTP');
        return;
    }
    if (first_name.length < 1 || last_name.length < 1){
        $("#verify_otp_message").html("First name and last name cannot be empty");
        $("#verify_otp_button").html('Verify OTP');
        return;
    }
    $.ajax({
        url: "/authenticate/",
        method: "POST",
        data: {
            action: "verify_otp",
            otp: otp,
            username: username,
            password: password,
            email: email,
            first_name: first_name,
            last_name: last_name
        },
        headers: {
            "X-CSRFToken": csrftoken
        },
        success: function(data){
            console.log(data.success);
            if(data.success){
                window.location.href = "/";
            }
            else{
                $("#verify_otp_message").html(data.message);
                $("#verify_otp_button").html('Verify OTP');
            }
        }
    });
}
