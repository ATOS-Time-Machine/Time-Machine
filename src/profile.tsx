import * as Messages from "./messages";
import * as React from "react";
import * as ReactDOM from "react-dom";

$(function () {
    /*ReactDOM.render(
        <div>
            <div className="modal-content">
                <h5>My Profile</h5>

                <div className="row">
                    <form className="col s12">
                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="profile_first_name">First Name</label>
                                <input id="profile_first_name" placeholder="" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="profile_last_name">Last Name</label>
                                <input id="profile_last_name" placeholder="" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="profile_pay_roll">Pay Roll</label>
                                <input id="profile_pay_roll" placeholder="" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="profile_location">Location</label>
                                <input id="profile_location" placeholder="" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="profile_email">Email</label>
                                <input id="profile_email" placeholder="" type="email" className="validate" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <select id="profile_alerts">
                                    <option value="" disabled selected>Please Select</option>
                                    <option value="1">On</option>
                                    <option value="2">Off</option>
                                </select>
                                <label htmlFor="profile_alerts">Email Alerts</label>
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <select id="profile_role">
                                    <option value="" disabled selected>Please Select</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                                <label htmlFor="profile_role">Role</label>
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <select id="user_access">
                                    <option value="" disabled selected>Please Select</option>
                                    <option value="1">Team Leader</option>
                                    <option value="2">User</option>
                                </select>
                                <label htmlFor="user_access">Access Level</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-footer">
                <a id="profile_update" className="modal-action modal-close waves-effect waves-teal btn-flat">Update</a>
                <a className="modal-action modal-close waves-effect waves-teal btn-flat">Change Password</a>
            </div>
        </div>,
        document.getElementById("profileModal")
    );*/

    // $("#profile_update").click(function () {
    //     $.post("http://localhost:3000/profile",
    //         {
    //             first_name: $("#profile_first_name").val(),
    //             last_name: $("#profile_last_name").val(),
    //             pay_roll: $("#profile_pay_roll").val(),
    //             location: $("#profile_location").val(),
    //             email: $("#profile_email").val(),
    //             alerts: $("#profile_alerts").val(),
    //             role: $("#profile_role").val(),
    //             token: document.cookie
    //         }, function (data) {
    //             if (data.success) {
    //                 Materialize.toast(Messages.toastSuccess, 5000);
    //             } else {
    //                 Materialize.toast(Messages.toastFailure, 5000);
    //             }
    //         });
    //     profileFill();
    // });

    // $("#profile_menu").parent().click(function () {
    //     profileFill();
    // });
});