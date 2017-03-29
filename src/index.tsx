import * as Messages from "./messages";
import * as React from "react";
import * as ReactDOM from "react-dom";

import "./login"
import "./confirm"
import "./staff"
import "./review"
import "./profile"
import "./request"

$(function () {
    //Form Options
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15
    });
    $('.timepicker').pickatime();
    $(".dropdown-button").dropdown();
    $('.modal').modal();

    // $.get("http://localhost:3000/present/" + document.cookie, function (data) {
    //     console.log(data.results);
    //     for (var i = 0; i < data.results.length; i++) {
    //         $("#present_results").append(
    //             "<tr>" +
    //             "<td>" + data.results[i].RequestDate + "</td>" +
    //             "<td>" + data.results[i].RequestTime + "</td>" +
    //             "<td>" + data.results[i].Duration + "</td>" +
    //             "<td>" + data.results[i].Contract + "</td>" +
    //             "<td>" + data.results[i].OvertimeReason + "</td>" +
    //             "<td>" + data.results[i].Supervisor + "</td>" +
    //             "<td>" + data.results[i].Status + "</td>" +
    //             "<td>" + data.results[i].Comment + "</td>" +
    //             "<td>" + data.results[i].RequestDate + "</td>" +
    //             "<td><a type='button' href='#confirmModal' class='btn light-blue lighten-1 waves-effect waves-light' id='process_confirm'>Process</a></td>" +
    //             "</tr>"
    //         )
    //     }
    // });

    // $.get("http://localhost:3000/staff/" + document.cookie, function (data) {
    //     for (var i = 0; i < data.results.length; i++) {
    //         $("#staff_results").append(
    //             "<tr>" +
    //             "<td>" + data.results[i].StaffID + "</td>" +
    //             "<td>" + data.results[i].FirstName + "</td>" +
    //             "<td>" + data.results[i].LastName + "</td>" +
    //             "<td>" + data.results[i].Supervisor + "</td>" +
    //             "<td>" + data.results[i].Location + "</td>" +
    //             "<td>" + data.results[i].Email + "</td>" +
    //             "<td>" + data.results[i].Access + "</td>" +
    //             "<td><a type='button' href='#userModal' class='btn light-blue lighten-1 waves-effect waves-light' id='process_confirm'>Edit Profile</a></td>" +
    //             "</tr>"
    //         )
    //     }
    // });

    // $.get("http://localhost:3000/profile/" + document.cookie, function (data) {
    //     $("#profile_first_name").val(data.results.FirstName);
    //     $("#profile_last_name").val(data.results.LastName);
    //     $("#profile_pay_roll").val(data.results.PayRoll);
    //     $("#profile_location").val(data.results.Location);
    //     $("#profile_email").val(data.results.Email);
    // });
});