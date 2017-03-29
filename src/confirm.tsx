import * as React from "react";
import * as ReactDOM from "react-dom";

$(function () {
    $("#present_tab").parent().click(function () {
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

                    <tbody id="present_results"></tbody>
                </table>
            </div>,
            document.getElementById("present")
        );
    });
});
