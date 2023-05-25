function toggle(block) {
    $(".blocks").hide();
    $(block).show();
}
function sign_in(){
    $('#login_message').html('Logging in...');
    $('#login_button').html('<image src="/static/images/loading.gif" width="20px" height="20px">')
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
function sign_up(){
    $('sign_up_message').html('Signing up...');
    var username = $("#sign_up #username").val();
    var password = $("#sign_up #password").val();
    var email = $("#sign_up #email").val();
    var confirm_password = $("#sign_up #confirm_password").val();
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
            }
        }
    });
}

function verify_otp(){
    var otp = $("#otp").val();
    var username = $("#sign_up #username").val();
    var password = $("#sign_up #password").val();
    var email = $("#sign_up #email").val();
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
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
            }
        }
    });
}
