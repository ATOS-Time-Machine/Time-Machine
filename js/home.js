$(document).ready(function () {
    var toastSuccess = $('<span>Success</span>');
    var toastFailure = $('<span>Failure</span>');

    //Form Options
    $('select').material_select();

    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15
    });

    $('.timepicker').pickatime({
        default: 'now',
        twelvehour: false,
        donetext: 'OK',
        autoclose: false,
        vibrate: true
    });

    $(".dropdown-button").dropdown();

    $('.modal').modal();

    //Add a New User
    $("#user_add").click(function () {
        var user_das = $("#user_das").val();
        var user_password = $("#user_password").val();
        var user_confirm = $("#user_confirm").val();
        var user_first_name = $("#user_first_name").val();
        var user_last_name = $("#user_last_name").val();
        var user_pay_roll = $("#user_pay_roll").val();
        var user_location = $("#user_location").val();
        var user_email = $("#user_email").val();
        var user_alerts = $("#user_alerts").val();
        var user_role = $("#user_role").val();
        var user_access = $("#user_access").val();
        var supervisor = document.cookie;

        $.post("http://localhost:3000/adduser", 
        {
            user_das: user_das,
            user_password: user_password,
            user_confirm: user_confirm,
            user_first_name: user_first_name,
            user_last_name: user_last_name,
            user_pay_roll: user_pay_roll,
            user_location: user_location,
            user_email: user_email,
            user_alerts: user_alerts,
            user_role: user_role,
            user_access: user_access,
            supervisor: supervisor
        }, function(data){
            if (data.success) {
                Materialize.toast(toastSuccess, 5000);
            } else {
                Materialize.toast(toastFailure, 5000);
            }
        });
    });

    //Request Submit
    $("#request_submit").click(function() {
        var das = document.cookie;
        var request_contract=$("#request_contract").val();
        var request_future=$("#request_future").val();
        var request_date=$("#request_date").val();
        var request_time=$("#request_time").val();
        var request_duration=$("#request_duration").val();
        var request_usd=$("#request_usd").val();
        var request_wbs=$("#request_wbs").val();
        var request_reason_free=$("#request_reason_free").val();
        var request_reason_overtime=$("#request_reason_overtime").val();
        var request_reason_hours=$("#request_reason_hours").val();
        var request_rate=$("#request_rate").val();
        var request_manager=$("#request_manager").val();
        var request_revenue=$("#request_revenue").val();
        var request_paying=$("#request_paying").val();

        $.post("http://localhost:3000/request", 
        {
            das: das,
            request_contract: request_contract,
            request_future: request_future,
            request_date: request_date,
            request_time: request_time,
            request_duration: request_duration,
            request_usd: request_usd,
            request_wbs: request_wbs,
            request_reason_free: request_reason_free,
            request_reason_overtime: request_reason_overtime,
            request_reason_hours: request_reason_hours,
            request_rate: request_rate,
            request_manager: request_manager,
            request_revenue: request_revenue,
            request_paying: request_paying
        }, function(data){
            if (data.success) {
                Materialize.toast(toastSuccess, 5000);
            }
        });

        $.get("http://localhost:3000/review/"+document.cookie, function(data) {
            for (var i = 0; i < data.results.length; i++) {
                $("#review_results").append(
                    "<tr>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                    "</tr>"
                )
            }
        });
    });

    $.get("http://localhost:3000/review/"+document.cookie, function(data) {
            for (var i = 0; i < data.results.length; i++) {
                $("#review_results").append(
                    "<tr>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                        "<td>Eclair</td>" +
                    "</tr>"
                )
            }
    });
    

    // $("#resultsTable").append(
    //     "<tr>" +
    //         "<td>Alvin</td>" +
    //         "<td>Eclair</td>"+
    //         "<td><button type=\"button\" class=\"btn light-blue lighten-1 waves-effect waves-light\" id=\"submit\">Submit</button></td>" +
    //     "</tr>"
    // );
});