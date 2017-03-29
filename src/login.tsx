import * as Messages from "./messages";
import * as React from "react";
import * as ReactDOM from "react-dom";

$(function () {
    $("#reg").parent().click(function () {
        //TODO: needs id changes
        ReactDOM.render(
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <label htmlFor="name">Staff ID</label>
                        <input type="text" className="validate" id="new_id" />
                    </div>
                    <div className="input-field col s12">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className="validate" id="new_email" />
                    </div>
                    <div className="input-field col s12">
                        <label htmlFor="password">New Password</label>
                        <input type="password" className="validate" id="new_password" />
                    </div>
                </div>

                <div className="card-action right-align">
                    <button type="button" className="btn light-blue lighten-1 waves-effect waves-light" id="register">Recover</button>
                </div>
            </div>,
            document.getElementById("reg")
        );
    });

    $("#login").click(function () {
        $.post("http://localhost:3000/authenticate",
            {
                id: $("#log_id").val(),
                password: $("#log_password").val()
            }, function (data) {
                if (data.success) {
                    document.cookie = data.token;
                    window.location.href = "home.html";
                } else {
                    Materialize.toast(Messages.toastFailure, 5000);
                }
            });
    });
});