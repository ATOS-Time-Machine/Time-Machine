import * as Messages from "./messages";
import * as React from "react";
import * as ReactDOM from "react-dom";

$(function () {
    let das = document.cookie;

    let profileFill = function () {
        $.get("http://localhost:3000/profile/" + das, function (data) {
            console.log(das);
            $("#profile_first_name").val(data.results.FirstName);
            $("#profile_last_name").val(data.results.LastName);
            $("#profile_pay_roll").val(data.results.PayRoll);
            $("#profile_location").val(data.results.Location);
            $("#profile_email").val(data.results.Email);
        });
    }

    let staffFill = function () {
        $.get("http://localhost:3000/staff/" + document.cookie, function (data) {
            let rows = [];
            for (var i = 0; i < data.results.length; i++) {
                let res = data.results[i];
                rows.push(
                    <tr>
                        <td> {res.StaffID} </td>
                        <td> {res.FirstName} </td>
                        <td> {res.LastName} </td>
                        <td> {res.Supervisor} </td>
                        <td> {res.Location} </td>
                        <td> {res.Email} </td>
                        <td> {res.Access} </td>
                        <td>
                            <a onClick={function (e) { das = res.StaffID; profileFill(); }} type='button' href='#profileModal' className='btn light-blue lighten-1 waves-effect waves-light' id='process_confirm'>
                                Edit Profile
                            </a>
                        </td>
                    </tr>
                );
            }
            ReactDOM.render(
                <div className="col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4">
                    <div className="card-action right-align">
                        <a type="button" href="#userModal" className="btn light-blue lighten-1 waves-effect waves-light" id="staff_add">Add User</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th data-field="staff_id">Staff ID</th>
                                <th data-field="staff_first_name">First Name</th>
                                <th data-field="staff_last_name">Surname</th>
                                <th data-field="staff_group">Group</th>
                                <th data-field="staff_location">Location</th>
                                <th data-field="staff_email">E-Mail</th>
                                <th data-field="staff_access">Access Level</th>
                                <th data-field="staff_actions">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                    <div className="card-action right-align">
                        <a href="#reportModal" className="btn light-blue lighten-1 waves-effect waves-light" id="request_submit">Group Report</a>
                    </div>
                </div>,
                document.getElementById("staff")
            );
        });
    }

    //Add user form
    ReactDOM.render(
        <div>
            <div className="modal-content">
                <h5>Add New User</h5>

                <div className="row">
                    <form className="col s12">
                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="user_das">DAS ID</label>
                                <input id="user_das" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="user_password">Password</label>
                                <input type="password" className="validate" id="user_password" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="user_confirm">Confirm Password</label>
                                <input type="password" className="validate" id="user_confirm" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="user_first_name">First Name</label>
                                <input id="user_first_name" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="user_last_name">Last Name</label>
                                <input id="user_last_name" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="user_pay_roll">Pay Roll</label>
                                <input id="user_pay_roll" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="user_location">Location</label>
                                <input id="user_location" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <label htmlFor="user_email">Email</label>
                                <input id="user_email" type="text" className="validate" />
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <select id="user_alerts">
                                    <option value="" disabled selected>Please Select</option>
                                    <option value="1">On</option>
                                    <option value="2">Off</option>
                                </select>
                                <label htmlFor="user_alerts">Email Alerts</label>
                            </div>
                        </div>

                        <div className="row modal-form-row">
                            <div className="input-field col s12">
                                <select id="user_role">
                                    <option value="" disabled selected>Please Select</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                                <label htmlFor="user_role">Role</label>
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
                <a id="user_add" className="modal-action modal-close waves-effect waves-teal btn-flat">Add User</a>
            </div>
        </div>,
        document.getElementById("userModal")
    );

    //Update profile form
    ReactDOM.render(
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
    );

    $("#staff_tab").parent().click(function () {
        staffFill();
    });

    //Add a New User
    $("#user_add").click(function () {
        $.post("http://localhost:3000/adduser",
            {
                das: $("#user_das").val(),
                password: $("#user_password").val(),
                confirm: $("#user_confirm").val(),
                first_name: $("#user_first_name").val(),
                last_name: $("#user_last_name").val(),
                pay_roll: $("#user_pay_roll").val(),
                location: $("#user_location").val(),
                email: $("#user_email").val(),
                alerts: $("#user_alerts").val(),
                role: $("#user_role").val(),
                access: $("#user_access").val(),
                token: document.cookie
            }, function (data) {
                if (data.success) {
                    Materialize.toast(Messages.toastSuccess, 5000);
                    staffFill();
                } else {
                    Materialize.toast(Messages.toastFailure, 5000);
                }
            });
    });

    $("#profile_menu").parent().click(function () {
        das = document.cookie;
        profileFill();
    });

    $("#profile_update").click(function () {
        $.post("http://localhost:3000/profile",
            {
                first_name: $("#profile_first_name").val(),
                last_name: $("#profile_last_name").val(),
                pay_roll: $("#profile_pay_roll").val(),
                location: $("#profile_location").val(),
                email: $("#profile_email").val(),
                alerts: $("#profile_alerts").val(),
                role: $("#profile_role").val(),
                token: das
            }, function (data) {
                if (data.success) {
                    Materialize.toast(Messages.toastSuccess, 5000);
                    staffFill();
                } else {
                    Materialize.toast(Messages.toastFailure, 5000);
                }
            });
    });
});