function toggle(block) {
    $(".blocks").hide();
    $(block).show();
}
function sign_in(){
    var username = $("#username").val();
    var password = $("#password").val();
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
            console.log(data);
            if(data == "success"){
                window.location.href = "/";
            }
            else{
                $("#login_message").html(data);
            }
        }
    });
}