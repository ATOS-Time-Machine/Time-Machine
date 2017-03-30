import * as Messages from "./messages";
import * as React from "react";
import * as ReactDOM from "react-dom";

import "./login";
import "./request";
import "./past";
import "./confirm";
import "./staff";
import "./review";

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
});