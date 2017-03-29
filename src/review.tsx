import * as Messages from "./messages";
import * as React from "react";
import * as ReactDOM from "react-dom";

$(function () {
    let das = null;
    let date = null;
    let time = null;

    let reviewFill = function () {
        $.get("http://localhost:3000/review/" + document.cookie, function (data) {
            let rows = [];
            for (var i = 0; i < data.results.length; i++) {
                let res = data.results[i];
                rows.push(
                    <tr>
                        <td> {res.StaffID} </td>
                        <td> {res.RequestDate} </td>
                        <td> {res.RequestTime} </td>
                        <td> {res.Duration} </td>
                        <td> {res.Rate} </td>
                        <td> {res.Contract} </td>
                        <td> {res.USD} </td>
                        <td> {res.OvertimeReason} </td>
                        <td>
                            <a onClick={ function(e) { das = res.StaffID; date = res.RequestDate; time = res.RequestTime } } type='button' href='#approveModal' className='btn light-blue lighten-1 waves-effect waves-light' id='process_approve'>
                                Process
                            </a>
                        </td>
                    </tr>
                );
            }
            ReactDOM.render(
                <div className="col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4" id="review_results">
                    <table>
                        <thead>
                            <tr>
                                <th data-field="review_employee">Employee</th>
                                <th data-field="review_date">Date</th>
                                <th data-field="review_time">Time</th>
                                <th data-field="review_duration">Duration</th>
                                <th data-field="review_rate">Rate</th>
                                <th data-field="review_contract">Contract</th>
                                <th data-field="review_usd">USD Ticket</th>
                                <th data-field="review_reason">Reason</th>
                                <th data-field="review_commands">Commands</th>
                            </tr>
                        </thead>

                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>,
                document.getElementById("review")
            );
        });
    }

    $("#review_tab").parent().click(function () {
        reviewFill();
    });

    ReactDOM.render(
        <div>
            <div className="modal-content">
                <h5>Process Overtime Request</h5>

                <div className="row">
                    <form className="col s12">
                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="approve_status">Status</label>
                                <input id="approve_status" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="approve_comment">Comment</label>
                                <textarea id="approve_comment" className="materialize-textarea" data-length="250"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-footer">
                <a id="approve_process" className="modal-action modal-close waves-effect waves-teal btn-flat">Process Request</a>
            </div>
        </div>,
        document.getElementById("approveModal")
    );

    $("#approve_process").click(function () {
        $.post("http://localhost:3000/review",
            {
                token: document.cookie,
                status: $("#approve_status").val(),
                comment: $("#approve_comment").val(),
                das: das,
                date: date,
                time: time
            }, function (data) {
                if (data.success) {
                    Materialize.toast(Messages.toastSuccess, 5000);
                    reviewFill();
                } else {
                    Materialize.toast(Messages.toastFailure, 5000);
                }
            });
    });
});