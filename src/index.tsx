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

    ReactDOM.render(
        <div>
            <div className="modal-content">
                <h5>Add WBS Code</h5>

                <div className="row">
                    <form className="col s12">
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

    $("#add_code").click(function () {
        $.post("http://localhost:3000/code",
            {
                token: document.cookie,
                code: $("#wbs_code").val()
            }, function (data) {
                if (data.success) {
                    Materialize.toast(Messages.toastSuccess, 5000);
                } else {
                    Materialize.toast(Messages.toastFailure, 5000);
                }
            });
    });
});