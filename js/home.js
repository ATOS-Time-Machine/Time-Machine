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
            }, function (data) {
                if (data.success) {
                    Materialize.toast(toastSuccess, 5000);
                    window.location.href = "home.html";
                } else {
                    Materialize.toast(toastFailure, 5000);
                }
            }); window.location.href = "home.html";
    });

    //Request Submit
    $("#request_submit").click(function () {
        var das = document.cookie;
        var request_contract = $("#request_contract").val();
        var request_future = $("#request_future").val();
        var request_date = $("#request_date").val();
        var request_time = $("#request_time").val();
        var request_duration = $("#request_duration").val();
        var request_usd = $("#request_usd").val();
        var request_wbs = $("#request_wbs").val();
        var request_reason_free = $("#request_reason_free").val();
        var request_reason_overtime = $("#request_reason_overtime").val();
        var request_reason_hours = $("#request_reason_hours").val();
        var request_rate = $("#request_rate").val();
        var request_manager = $("#request_manager").val();
        var request_revenue = $("#request_revenue").val();
        var request_paying = $("#request_paying").val();

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
            }, function (data) {
                if (data.success) {
                    Materialize.toast(toastSuccess, 5000);
                    window.location.href = "home.html";
                }
            });
    });

    $.get("http://localhost:3000/review/" + document.cookie, function (data) {
        console.log(data.results);
        for (var i = 0; i < data.results.length; i++) {
            $("#review_results").append(
                "<tr>" +
                "<td>" + data.results[i].StaffID + "</td>" +
                "<td>" + data.results[i].RequestDate + "</td>" +
                "<td>" + data.results[i].RequestTime + "</td>" +
                "<td>" + data.results[i].Duration + "</td>" +
                "<td>" + data.results[i].Rate + "</td>" +
                "<td>" + data.results[i].Contract + "</td>" +
                "<td>" + data.results[i].USD + "</td>" +
                "<td>" + data.results[i].OvertimeReason + "</td>" +
                "<td><a type='button' href='#approveModal' class='btn light-blue lighten-1 waves-effect waves-light' id='process_approve'>Process</a></td>" +
                "</tr>"
            )
        }
    });

    $.get("http://localhost:3000/present/" + document.cookie, function (data) {
        console.log(data.results);
        for (var i = 0; i < data.results.length; i++) {
            $("#present_results").append(
                "<tr>" +
                "<td>" + data.results[i].RequestDate + "</td>" +
                "<td>" + data.results[i].RequestTime + "</td>" +
                "<td>" + data.results[i].Duration + "</td>" +
                "<td>" + data.results[i].Contract + "</td>" +
                "<td>" + data.results[i].OvertimeReason + "</td>" +
                "<td>" + data.results[i].Supervisor + "</td>" +
                "<td>" + data.results[i].Status + "</td>" +
                "<td>" + data.results[i].Comment + "</td>" +
                "<td>" + data.results[i].RequestDate + "</td>" +
                "<td><a type='button' href='#confirmModal' class='btn light-blue lighten-1 waves-effect waves-light' id='process_confirm'>Process</a></td>" +
                "</tr>"
            )
        }
    });

    $.get("http://localhost:3000/staff/" + document.cookie, function (data) {
        for (var i = 0; i < data.results.length; i++) {
            $("#staff_results").append(
                "<tr>" +
                "<td>" + data.results[i].StaffID + "</td>" +
                "<td>" + data.results[i].FirstName + "</td>" +
                "<td>" + data.results[i].LastName + "</td>" +
                "<td>" + data.results[i].Supervisor + "</td>" +
                "<td>" + data.results[i].Location + "</td>" +
                "<td>" + data.results[i].Email + "</td>" +
                "<td>" + data.results[i].Access + "</td>" +
                "<td><a type='button' href='#userModal' class='btn light-blue lighten-1 waves-effect waves-light' id='process_confirm'>Edit Profile</a></td>" +
                "</tr>"
            )
        }
    });

    $.get("http://localhost:3000/profile/" + document.cookie, function (data) {
        $("#profile_first_name").val(data.results.FirstName);
        $("#profile_last_name").val(data.results.LastName);
        $("#profile_pay_roll").val(data.results.PayRoll);
        $("#profile_location").val(data.results.Location);
        $("#profile_email").val(data.results.Email);
    });


    $("#approve_process").click(function () {
        var approve_status = $("#approve_status").val();
        var approve_comment = $("#approve_comment").val();

        $.post("http://localhost:3000/review",
            {
                approve_status: approve_status,
                approve_comment: approve_comment
            }, function (data) {
                if (data.success) {
                    Materialize.toast(toastSuccess, 5000);
                    window.location.href = "home.html";
                }
            });
    });

    $("#confirm_process").click(function () {
        var confirm_rate = $("#confirm_rate").val();
        var confirm_date = $("#confirm_date").val();
        var confirm_time = $("#confirm_time").val();
        var confirm_duration = $("#confirm_duration").val();
        var das = document.cookie;
        $.post("http://localhost:3000/present",
            {
                confirm_rate: confirm_rate,
                confirm_date: confirm_date,
                confirm_time: confirm_time,
                confirm_duration: confirm_duration,
                das: das
            }, function (data) {
                if (data.success) {
                    Materialize.toast(toastSuccess, 5000);
                    window.location.href = "home.html";
                }
            });
    });

    $("#profile_update").click(function () {
        var profile_first_name = $("#profile_first_name").val();
        var profile_last_name = $("#profile_last_name").val();
        var profile_pay_roll = $("#profile_pay_roll").val();
        var profile_location = $("#profile_location").val();
        var profile_email = $("#profile_email").val();
        var profile_alerts = $("#profile_alerts").val();
        var profile_role = $("#profile_role").val();
        var das = document.cookie;
        $.post("http://localhost:3000/profile",
            {
                profile_first_name: profile_first_name,
                profile_last_name: profile_last_name,
                profile_pay_roll: profile_pay_roll,
                profile_location: profile_location,
                profile_email: profile_email,
                profile_alerts: profile_alerts,
                profile_role: profile_role,
                das: das
            }, function (data) {
                if (data.success) {
                    Materialize.toast(toastSuccess, 5000);
                    window.location.href = "home.html";
                }
            });
    });
});