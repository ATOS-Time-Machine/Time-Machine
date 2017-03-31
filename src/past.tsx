import * as Messages from "./messages";
import * as React from "react";
import * as ReactDOM from "react-dom";

$(function () {
    let confirmFill = function () {
        $.get("http://localhost:3000/past/" + document.cookie, function (data) {
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
                    </tr>
                );
            }
            ReactDOM.render(
                <div className="col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4">
                    <table>
                        <thead>
                            <tr>
                                <th data-field="present_date_plan">Date</th>
                                <th data-field="present_time">Time</th>
                                <th data-field="present_duration">Duration</th>
                                <th data-field="present_contract">Contract</th>
                                <th data-field="present_reason">Reason</th>
                                <th data-field="present_approver">Approver</th>
                            </tr>
                        </thead>

                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                    <div className="card-action right-align">
                        <a href="#claimModal" className="btn light-blue lighten-1 waves-effect waves-light" id="request_submit">Special Claims</a>
                    </div>
                </div>,
                document.getElementById("past")
            );
        });
    }

    $("#past_tab").parent().click(function () {
        confirmFill();
    });
});