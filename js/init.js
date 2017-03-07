$(document).ready(function () {
    var toastFailure = $('<span>Failure</span>');

    $("#login").click(function () {
        var log_id = $("#log_id").val();
        var log_password = $("#log_password").val();
        $.post("http://localhost:3000/login", { log_id: log_id, log_password: log_password }, function (data) {
            if (data.success) {
                document.cookie = data.token;
                window.location.href = "home.html";
            } else {
                Materialize.toast(toastFailure, 5000);
            }
        });
    });
});
