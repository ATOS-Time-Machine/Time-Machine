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

    console.log(JSON.parse(document.cookie).admin);
    if (JSON.parse(document.cookie).admin == 2) {
        $("#review_tab").hide();
        $("#staff_tab").hide();
    }

    ReactDOM.render(
        <div>
            <div className="modal-content">
                <h5>Generate Special Claims Form</h5>

                <div className="row">
                    <form className="col s12">
                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="claim_start_date">Start Date</label>
                                <input id="claim_start_date" type="date" className="datepicker" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="claim_end_date">End Date</label>
                                <input id="claim_end_date" type="date" className="datepicker" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-footer">
                <a id="generate_claim" className="modal-action modal-close waves-effect waves-teal btn-flat">Generate</a>
            </div>
        </div>,
        document.getElementById("claimModal")
    );

    ReactDOM.render(
        <div>
            <div className="modal-content">
                <h5>Generate Group Report</h5>

                <div className="row">
                    <form className="col s12">
                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="report_start_date">Start Date</label>
                                <input id="report_start_date" type="date" className="datepicker" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="report_end_date">End Date</label>
                                <input id="report_end_date" type="date" className="datepicker" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-footer">
                <a id="generate_report" className="modal-action modal-close waves-effect waves-teal btn-flat">Generate</a>
            </div>
        </div>,
        document.getElementById("reportModal")
    );

    $("#generate_claim").click(function () {
        let start_date = $("#claim_start_date").val();
        let end_date = $("#claim_end_date").val();
        if (start_date !== "" && end_date !== "") {
            window.location.href = "http://localhost:3000/claim/" + JSON.parse(document.cookie).token + "/" + start_date + "/" + end_date;
        }
    });

    $("#generate_report").click(function () {
        let start_date = $("#report_start_date").val();
        let end_date = $("#report_end_date").val();
        if (start_date !== "" && end_date !== "") {
            window.location.href = "http://localhost:3000/report/" + JSON.parse(document.cookie).token + "/" + start_date + "/" + end_date;
        }
    });

    $("#logout").click(function () {
        document.cookie = "";
        window.location.href = "index.html";       
    });
});