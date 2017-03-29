import * as Messages from "./messages";
import * as React from "react";
import * as ReactDOM from "react-dom";

$(function () {
    $("#request_submit").click(function () {
        $.post("http://localhost:3000/request",
            {
                token: document.cookie,
                contract: $("#request_contract").val(),
                future: $("#request_future").val(),
                date: $("#request_date").val(),
                time: $("#request_time").val(),
                duration: $("#request_duration").val(),
                usd: $("#request_usd").val(),
                wbs: $("#request_wbs").val(),
                reason_free: $("#request_reason_free").val(),
                reason_overtime: $("#request_reason_overtime").val(),
                reason_hours: $("#request_reason_hours").val(),
                rate: $("#request_rate").val(),
                manager: $("#request_manager").val(),
                revenue: $("#request_revenue").val(),
                paying: $("#request_paying").val()
            }, function (data) {
                if (data.success) {
                    Materialize.toast(Messages.toastSuccess, 5000);
                } else {
                    Materialize.toast(Messages.toastFailure, 5000);
                }
            });
    });
});
