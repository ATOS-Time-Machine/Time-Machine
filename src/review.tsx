import * as React from "react";
import * as ReactDOM from "react-dom";

$(function () {
    $("#review_tab").parent().click(function () {
        let rows = [];
        console.log(document.cookie);
        $.get("http://localhost:3000/review/" + document.cookie, function (data) {
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
                            <a type='button' href='#approveModal' className='btn light-blue lighten-1 waves-effect waves-light' id='process_approve'>
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
    });
});