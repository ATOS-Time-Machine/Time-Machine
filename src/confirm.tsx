import * as Messages from "./messages";
import * as React from "react";
import * as ReactDOM from "react-dom";

$(function () {
    let oldDate = null;
    let oldTime = null;

    let confirmFill = function () {
        $.get("api/present/" + JSON.parse(document.cookie).token, function (data) {
            let rows = [];
            for (var i = 0; i < data.results.length; i++) {
                let res = data.results[i];
                rows.push(
                    <tr>
                        <td> {res.RequestDate} </td>
                        <td> {res.RequestTime} </td>
                        <td> {res.Duration} </td>
                        <td> {res.Contract} </td>
                        <td> {res.OvertimeReason} </td>
                        <td> {res.Supervisor} </td>
                        <td> {res.Status} </td>
                        <td> {res.Comment} </td>
                        <td> {res.RequestDate} </td>
                        <td>
                            <a onClick={ function(e) { oldDate = res.RequestDate; oldTime = res.RequestTime } } type='button' href='#confirmModal' className='btn light-blue lighten-1 waves-effect waves-light'>
                                Process
                            </a>
                        </td>
                    </tr>
                );
            }
            ReactDOM.render(
                <div className="col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4">
                    <table>
                        <thead>
                            <tr>
                                <th data-field="present_date_plan">Planned Date</th>
                                <th data-field="present_time">Planned Time</th>
                                <th data-field="present_duration">Estimated Duration</th>
                                <th data-field="present_contract">Contract</th>
                                <th data-field="present_reason">Reason</th>
                                <th data-field="present_approver">Approver</th>
                                <th data-field="present_status">Approval Status</th>
                                <th data-field="present_comment">Approver Comment</th>
                                <th data-field="present_date_approved">Date Approved</th>
                                <th data-field="present_confirm">Confirm</th>
                            </tr>
                        </thead>

                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>,
                document.getElementById("present")
            );
        });
    }

    $("#present_tab").parent().click(function () {
        confirmFill();
    });

    ReactDOM.render(
        <div>
            <div className="modal-content">
                <h5>Confirm Overtime Request</h5>

                <div className="row">
                    <form className="col s12">
                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <select id="confirm_rate">
                                    <option value="" disabled selected>Please Select</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                                <label htmlFor="confirm_rate">Actual Rate</label>
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="confirm_date">Actual Date</label>
                                <input id="confirm_date" type="date" className="datepicker" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="confirm_time">Actual Start Time</label>
                                <input id="confirm_time" className="timepicker" type="time" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="confirm_duration">Actual Duration</label>
                                <input id="confirm_duration" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="confirm_comment">Comment</label>
                                <textarea id="confirm_comment" className="materialize-textarea" data-length="250"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-footer">
                <a id="confirm_process" className="modal-action modal-close waves-effect waves-teal btn-flat">Process Request</a>
            </div>
        </div>,
        document.getElementById("confirmModal")
    );

    $("#confirm_process").click(function () {
        $.post("api/present",
            {
                token: JSON.parse(document.cookie).token,
                oldDate: oldDate,
                oldTime: oldTime,
                rate: $("#confirm_rate").val(),
                newDate: $("#confirm_date").val(),
                newTime: $("#confirm_time").val(),
                duration: $("#confirm_duration").val()
            }, function (data) {
                if (data.success) {
                    Materialize.toast(Messages.toastSuccess, 5000);
                    confirmFill();
                } else {
                    Materialize.toast(Messages.toastFailure, 5000);
                }
            });
    });
});
