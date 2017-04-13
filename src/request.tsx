import * as Messages from "./messages";
import * as React from "react";
import * as ReactDOM from "react-dom";

$(function () {
    let codeFill = function () {
        $.get("api/code/" + JSON.parse(document.cookie).token, function (data) {
            var rows = [];
            for (var i = 0; i < data.results.length; i++) {
                let res = data.results[i];
                rows.push(
                    <option value={res.WBSCode}>{res.WBSCode}</option>
                );
            }

            ReactDOM.render(
                <div className="col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4">
                    <form>
                        <div className="card-content">
                            <div className="card-title center-align valign-wrapper">
                                <span className="valign">Overtime Request Form</span>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <select id="request_contract">
                                        <option value="" disabled selected>Please Select</option>
                                        <option value="1">Customer 1</option>
                                        <option value="2">Customer 2</option>
                                        <option value="3">Customer 3</option>
                                    </select>
                                    <label htmlFor="request_contract">Select a Contract</label>
                                </div>

                                <div className="input-field col s12">
                                    <select id="request_future">
                                        <option value="" disabled selected>Please Select</option>
                                        <option value="1">Future</option>
                                        <option value="2">Retrospective</option>
                                    </select>
                                    <label htmlFor="request_future">Future or Retrospective</label>
                                </div>

                                <div className="input-field col s12">
                                    <label htmlFor="request_date">Expected Date</label>
                                    <input id="request_date" type="date" className="datepicker" />
                                </div>

                                <div className="input-field col s12">
                                    <label htmlFor="request_time">Start Time</label>
                                    <input id="request_time" className="timepicker" type="time" />
                                </div>

                                <div className="input-field col s12">
                                    <label htmlFor="request_duration">Expected Duration</label>
                                    <input id="request_duration" type="text" className="validate" />
                                </div>

                                <div className="input-field col s12">
                                    <label htmlFor="request_usd">USD Ticket No</label>
                                    <input id="request_usd" type="text" className="validate" />
                                </div>

                                <div className="input-field col s12">
                                    <select id="request_wbs">
                                        <option value="" disabled selected>Please Select</option>
                                        {rows}
                                    </select>
                                    <label htmlFor="request_wbs">WBS Code</label>
                                </div>

                                <div className="input-field col s12">
                                    <label htmlFor="request_reason_free">Reason Free Form</label>
                                    <textarea id="request_reason_free" className="materialize-textarea" data-length="250"></textarea>
                                </div>

                                <div className="input-field col s12">
                                    <select id="request_reason_overtime">
                                        <option value="" disabled selected>Please Select</option>
                                        <option value="1">Fix on Fail</option>
                                        <option value="2">Holiday Cover</option>
                                        <option value="3">Not enough time in the day</option>
                                        <option value="4">Out of hours planned change</option>
                                        <option value="5">Planned BAU change</option>
                                        <option value="6">Planned Project change</option>
                                        <option value="7">Service Desk Reason</option>
                                        <option value="8">Sickness cover</option>
                                        <option value="9">Tavel Time</option>
                                    </select>
                                    <label htmlFor="request_reason_overtime">Reason for Overtime</label>
                                </div>

                                <div className="input-field col s12">
                                    <select id="request_reason_hours">
                                        <option value="" disabled selected>Please Select</option>
                                        <option value="1">Customer Change Window</option>
                                        <option value="2">Customer Requirement</option>
                                        <option value="3">Project Deadline Approaching</option>
                                    </select>
                                    <label htmlFor="request_reason_hours">Reason Cannot Done in Hours</label>
                                </div>

                                <div className="input-field col s12">
                                    <select id="request_rate">
                                        <option value="" disabled selected>Please Select</option>
                                        <option value="1">Overtime 1.5 Hours</option>
                                        <option value="2">Overtime 2.0 Hours</option>
                                        <option value="3">Overtime - Time and 1/3</option>
                                        <option value="4">Overtime - Trave Time @ BR</option>
                                        <option value="5">Call Out 1.5 Hours</option>
                                        <option value="6">Call Out 2.0 Hours</option>
                                    </select>
                                    <label htmlFor="request_rate">Overtime Rate</label>
                                </div>

                                <div className="input-field col s12">
                                    <label htmlFor="request_manager">Project Manager</label>
                                    <input type="text" className="validate" id="request_manager" />
                                </div>

                                <div className="input-field col s12">
                                    <select id="request_revenue">
                                        <option value="" disabled selected>Please Select</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                    <label htmlFor="request_revenue">Work Revenue Generating</label>
                                </div>

                                <div className="input-field col s12">
                                    <select id="request_paying">
                                        <option value="" disabled selected>Please Select</option>
                                        <option value="1">Account</option>
                                        <option value="2">Customer</option>
                                     </select>
                                    <label htmlFor="request_paying">Who is paying?</label>
                                </div>
                            </div>

                            <div className="card-action right-align">
                                <button type="button" className="btn light-blue lighten-1 waves-effect waves-light" id="request_submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>,
                document.getElementById("request")
            );
            $('select').material_select();
            $('.datepicker').pickadate({
                selectMonths: true,
                selectYears: 15
            });
            $('.timepicker').pickatime();
            $(".dropdown-button").dropdown();
            $("#request_submit").click(function () {
                console.log("submitting overtime request");
                $.post("api/request",
                    {
                        token: JSON.parse(document.cookie).token,
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
    }

    codeFill();

    function add_code(e) {
        e.preventDefault();
        $("#wbsModal").modal('close');
        $.post("api/code",
            {
                token: JSON.parse(document.cookie).token,
                code: $("#wbs_code").val()
            }, function (data) {
                if (data.success) {
                    Materialize.toast(Messages.toastSuccess, 5000);
                    codeFill();
                } else {
                    Materialize.toast(Messages.toastFailure, 5000);
                }
            });
    }

    ReactDOM.render(
        <div>
            <div className="modal-content">
                <h5>Add WBS Code</h5>

                <div className="row">
                    <form className="col s12" onSubmit={add_code}>
                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <input id="wbs_code" type="text" className="validate" />
                                <label htmlFor="wbs_code">WBS code</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-footer">
                <a id="add_code" className="modal-action modal-close waves-effect waves-teal btn-flat">Add</a>
            </div>
        </div>,
        document.getElementById("wbsModal")
    );

    $("#add_code").click(add_code);
});
