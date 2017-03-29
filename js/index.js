/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toastSuccess = $('<span>Success</span>');
exports.toastFailure = $('<span>Failure</span>');


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(2);
$(function () {
    $("#present_tab").parent().click(function () {
        ReactDOM.render(React.createElement("div", { className: "col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4" },
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { "data-field": "present_date_plan" }, "Planned Date"),
                        React.createElement("th", { "data-field": "present_time" }, "Planned Time"),
                        React.createElement("th", { "data-field": "present_duration" }, "Estimated Duration"),
                        React.createElement("th", { "data-field": "present_contract" }, "Contract"),
                        React.createElement("th", { "data-field": "present_reason" }, "Reason"),
                        React.createElement("th", { "data-field": "present_approver" }, "Approver"),
                        React.createElement("th", { "data-field": "present_status" }, "Approval Status"),
                        React.createElement("th", { "data-field": "present_comment" }, "Approver Comment"),
                        React.createElement("th", { "data-field": "present_date_approved" }, "Date Approved"),
                        React.createElement("th", { "data-field": "present_confirm" }, "Confirm"))),
                React.createElement("tbody", { id: "present_results" }))), document.getElementById("present"));
    });
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Messages = __webpack_require__(0);
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(2);
$(function () {
    $("#reg").parent().click(function () {
        //TODO: needs id changes
        ReactDOM.render(React.createElement("div", null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "input-field col s12" },
                    React.createElement("label", { htmlFor: "name" }, "Staff ID"),
                    React.createElement("input", { type: "text", className: "validate", id: "new_id" })),
                React.createElement("div", { className: "input-field col s12" },
                    React.createElement("label", { htmlFor: "email" }, "Email Address"),
                    React.createElement("input", { type: "email", className: "validate", id: "new_email" })),
                React.createElement("div", { className: "input-field col s12" },
                    React.createElement("label", { htmlFor: "password" }, "New Password"),
                    React.createElement("input", { type: "password", className: "validate", id: "new_password" }))),
            React.createElement("div", { className: "card-action right-align" },
                React.createElement("button", { type: "button", className: "btn light-blue lighten-1 waves-effect waves-light", id: "register" }, "Recover"))), document.getElementById("reg"));
    });
    $("#login").click(function () {
        $.post("http://localhost:3000/authenticate", {
            id: $("#log_id").val(),
            password: $("#log_password").val()
        }, function (data) {
            if (data.success) {
                document.cookie = data.token;
                window.location.href = "home.html";
            }
            else {
                Materialize.toast(Messages.toastFailure, 5000);
            }
        });
    });
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Messages = __webpack_require__(0);
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(2);
$(function () {
    ReactDOM.render(React.createElement("div", null,
        React.createElement("div", { className: "modal-content" },
            React.createElement("h5", null, "My Profile"),
            React.createElement("div", { className: "row" },
                React.createElement("form", { className: "col s12" },
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "profile_first_name" }, "First Name"),
                            React.createElement("input", { id: "profile_first_name", placeholder: "", type: "text", className: "validate" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "profile_last_name" }, "Last Name"),
                            React.createElement("input", { id: "profile_last_name", placeholder: "", type: "text", className: "validate" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "profile_pay_roll" }, "Pay Roll"),
                            React.createElement("input", { id: "profile_pay_roll", placeholder: "", type: "text", className: "validate" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "profile_location" }, "Location"),
                            React.createElement("input", { id: "profile_location", placeholder: "", type: "text", className: "validate" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "profile_email" }, "Email"),
                            React.createElement("input", { id: "profile_email", placeholder: "", type: "email", className: "validate" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("select", { id: "profile_alerts" },
                                React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                React.createElement("option", { value: "1" }, "On"),
                                React.createElement("option", { value: "2" }, "Off")),
                            React.createElement("label", { htmlFor: "profile_alerts" }, "Email Alerts"))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("select", { id: "profile_role" },
                                React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                React.createElement("option", { value: "1" }, "Option 1"),
                                React.createElement("option", { value: "2" }, "Option 2"),
                                React.createElement("option", { value: "3" }, "Option 3")),
                            React.createElement("label", { htmlFor: "profile_role" }, "Role"))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("select", { id: "user_access" },
                                React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                React.createElement("option", { value: "1" }, "Team Leader"),
                                React.createElement("option", { value: "2" }, "User")),
                            React.createElement("label", { htmlFor: "user_access" }, "Access Level")))))),
        React.createElement("div", { className: "modal-footer" },
            React.createElement("a", { id: "profile_update", className: "modal-action modal-close waves-effect waves-teal btn-flat" }, "Update"),
            React.createElement("a", { className: "modal-action modal-close waves-effect waves-teal btn-flat" }, "Change Password"))), document.getElementById("profileModal"));
    $("#profile_update").click(function () {
        $.post("http://localhost:3000/profile", {
            first_name: $("#profile_first_name").val(),
            last_name: $("#profile_last_name").val(),
            pay_roll: $("#profile_pay_roll").val(),
            location: $("#profile_location").val(),
            email: $("#profile_email").val(),
            alerts: $("#profile_alerts").val(),
            role: $("#profile_role").val(),
            token: document.cookie
        }, function (data) {
            if (data.success) {
                Materialize.toast(Messages.toastSuccess, 5000);
            }
            else {
                Materialize.toast(Messages.toastFailure, 5000);
            }
        });
        profileFill();
    });
    $("#profile_menu").parent().click(function () {
        profileFill();
    });
    var profileFill = function () {
        $.get("http://localhost:3000/profile/" + document.cookie, function (data) {
            $("#profile_first_name").val(data.results.FirstName);
            $("#profile_last_name").val(data.results.LastName);
            $("#profile_pay_roll").val(data.results.PayRoll);
            $("#profile_location").val(data.results.Location);
            $("#profile_email").val(data.results.Email);
        });
    };
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Messages = __webpack_require__(0);
$(function () {
    $("#request_submit").click(function () {
        $.post("http://localhost:3000/request", {
            token: document.cookie,
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
            }
            else {
                Materialize.toast(Messages.toastFailure, 5000);
            }
        });
    });
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(2);
$(function () {
    $("#review_tab").parent().click(function () {
        var rows = [];
        console.log(document.cookie);
        $.get("http://localhost:3000/review/" + document.cookie, function (data) {
            for (var i = 0; i < data.results.length; i++) {
                var res = data.results[i];
                rows.push(React.createElement("tr", null,
                    React.createElement("td", null,
                        " ",
                        res.StaffID,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.RequestDate,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.RequestTime,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.Duration,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.Rate,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.Contract,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.USD,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.OvertimeReason,
                        " "),
                    React.createElement("td", null,
                        React.createElement("a", { type: 'button', href: '#approveModal', className: 'btn light-blue lighten-1 waves-effect waves-light', id: 'process_approve' }, "Process"))));
            }
            ReactDOM.render(React.createElement("div", { className: "col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4", id: "review_results" },
                React.createElement("table", null,
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", { "data-field": "review_employee" }, "Employee"),
                            React.createElement("th", { "data-field": "review_date" }, "Date"),
                            React.createElement("th", { "data-field": "review_time" }, "Time"),
                            React.createElement("th", { "data-field": "review_duration" }, "Duration"),
                            React.createElement("th", { "data-field": "review_rate" }, "Rate"),
                            React.createElement("th", { "data-field": "review_contract" }, "Contract"),
                            React.createElement("th", { "data-field": "review_usd" }, "USD Ticket"),
                            React.createElement("th", { "data-field": "review_reason" }, "Reason"),
                            React.createElement("th", { "data-field": "review_commands" }, "Commands"))),
                    React.createElement("tbody", null, rows))), document.getElementById("review"));
        });
    });
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Messages = __webpack_require__(0);
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(2);
$(function () {
    var staffFill = function () {
        var rows = [];
        $.get("http://localhost:3000/staff/" + document.cookie, function (data) {
            for (var i = 0; i < data.results.length; i++) {
                var res = data.results[i];
                rows.push(React.createElement("tr", null,
                    React.createElement("td", null,
                        " ",
                        res.StaffID,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.FirstName,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.LastName,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.Supervisor,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.Location,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.Email,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.Access,
                        " "),
                    React.createElement("td", null,
                        React.createElement("a", { type: 'button', href: '#userModal', className: 'btn light-blue lighten-1 waves-effect waves-light', id: 'process_confirm' }, "Edit Profile"))));
            }
            ReactDOM.render(React.createElement("div", { className: "col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4" },
                React.createElement("div", { className: "card-action right-align" },
                    React.createElement("a", { type: "button", href: "#userModal", className: "btn light-blue lighten-1 waves-effect waves-light", id: "staff_add" }, "Add User")),
                React.createElement("table", null,
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", { "data-field": "staff_id" }, "Staff ID"),
                            React.createElement("th", { "data-field": "staff_first_name" }, "First Name"),
                            React.createElement("th", { "data-field": "staff_last_name" }, "Surname"),
                            React.createElement("th", { "data-field": "staff_group" }, "Group"),
                            React.createElement("th", { "data-field": "staff_location" }, "Location"),
                            React.createElement("th", { "data-field": "staff_email" }, "E-Mail"),
                            React.createElement("th", { "data-field": "staff_access" }, "Access Level"),
                            React.createElement("th", { "data-field": "staff_actions" }, "Actions"))),
                    React.createElement("tbody", null, rows))), document.getElementById("staff"));
        });
    };
    //Add user form
    ReactDOM.render(React.createElement("div", null,
        React.createElement("div", { className: "modal-content" },
            React.createElement("h5", null, "Add New User"),
            React.createElement("div", { className: "row" },
                React.createElement("form", { className: "col s12" },
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "user_das" }, "DAS ID"),
                            React.createElement("input", { id: "user_das", type: "text", className: "validate" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "user_password" }, "Password"),
                            React.createElement("input", { type: "password", className: "validate", id: "user_password" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "user_confirm" }, "Confirm Password"),
                            React.createElement("input", { type: "password", className: "validate", id: "user_confirm" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "user_first_name" }, "First Name"),
                            React.createElement("input", { id: "user_first_name", type: "text", className: "validate" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "user_last_name" }, "Last Name"),
                            React.createElement("input", { id: "user_last_name", type: "text", className: "validate" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "user_pay_roll" }, "Pay Roll"),
                            React.createElement("input", { id: "user_pay_roll", type: "text", className: "validate" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "user_location" }, "Location"),
                            React.createElement("input", { id: "user_location", type: "text", className: "validate" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "user_email" }, "Email"),
                            React.createElement("input", { id: "user_email", type: "text", className: "validate" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("select", { id: "user_alerts" },
                                React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                React.createElement("option", { value: "1" }, "On"),
                                React.createElement("option", { value: "2" }, "Off")),
                            React.createElement("label", { htmlFor: "user_alerts" }, "Email Alerts"))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("select", { id: "user_role" },
                                React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                React.createElement("option", { value: "1" }, "Option 1"),
                                React.createElement("option", { value: "2" }, "Option 2"),
                                React.createElement("option", { value: "3" }, "Option 3")),
                            React.createElement("label", { htmlFor: "user_role" }, "Role"))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("select", { id: "user_access" },
                                React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                React.createElement("option", { value: "1" }, "Team Leader"),
                                React.createElement("option", { value: "2" }, "User")),
                            React.createElement("label", { htmlFor: "user_access" }, "Access Level")))))),
        React.createElement("div", { className: "modal-footer" },
            React.createElement("a", { id: "user_add", className: "modal-action modal-close waves-effect waves-teal btn-flat" }, "Add User"))), document.getElementById("userModal"));
    $("#staff_tab").parent().click(function () {
        staffFill();
    });
    //Add a New User
    $("#user_add").click(function () {
        $.post("http://localhost:3000/adduser", {
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
            }
            else {
                Materialize.toast(Messages.toastFailure, 5000);
            }
        });
    });
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Messages = __webpack_require__(0);
__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(8);
__webpack_require__(7);
__webpack_require__(5);
__webpack_require__(6);
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
    // $.get("http://localhost:3000/present/" + document.cookie, function (data) {
    //     console.log(data.results);
    //     for (var i = 0; i < data.results.length; i++) {
    //         $("#present_results").append(
    //             "<tr>" +
    //             "<td>" + data.results[i].RequestDate + "</td>" +
    //             "<td>" + data.results[i].RequestTime + "</td>" +
    //             "<td>" + data.results[i].Duration + "</td>" +
    //             "<td>" + data.results[i].Contract + "</td>" +
    //             "<td>" + data.results[i].OvertimeReason + "</td>" +
    //             "<td>" + data.results[i].Supervisor + "</td>" +
    //             "<td>" + data.results[i].Status + "</td>" +
    //             "<td>" + data.results[i].Comment + "</td>" +
    //             "<td>" + data.results[i].RequestDate + "</td>" +
    //             "<td><a type='button' href='#confirmModal' class='btn light-blue lighten-1 waves-effect waves-light' id='process_confirm'>Process</a></td>" +
    //             "</tr>"
    //         )
    //     }
    // });
    // $.get("http://localhost:3000/staff/" + document.cookie, function (data) {
    //     for (var i = 0; i < data.results.length; i++) {
    //         $("#staff_results").append(
    //             "<tr>" +
    //             "<td>" + data.results[i].StaffID + "</td>" +
    //             "<td>" + data.results[i].FirstName + "</td>" +
    //             "<td>" + data.results[i].LastName + "</td>" +
    //             "<td>" + data.results[i].Supervisor + "</td>" +
    //             "<td>" + data.results[i].Location + "</td>" +
    //             "<td>" + data.results[i].Email + "</td>" +
    //             "<td>" + data.results[i].Access + "</td>" +
    //             "<td><a type='button' href='#userModal' class='btn light-blue lighten-1 waves-effect waves-light' id='process_confirm'>Edit Profile</a></td>" +
    //             "</tr>"
    //         )
    //     }
    // });
    // $.get("http://localhost:3000/profile/" + document.cookie, function (data) {
    //     $("#profile_first_name").val(data.results.FirstName);
    //     $("#profile_last_name").val(data.results.LastName);
    //     $("#profile_pay_roll").val(data.results.PayRoll);
    //     $("#profile_location").val(data.results.Location);
    //     $("#profile_email").val(data.results.Email);
    // });
    $("#approve_process").click(function () {
        var approve_status = $("#approve_status").val();
        var approve_comment = $("#approve_comment").val();
        $.post("http://localhost:3000/review", {
            approve_status: approve_status,
            approve_comment: approve_comment
        }, function (data) {
            if (data.success) {
                Materialize.toast(Messages.toastSuccess, 5000);
                window.location.href = "home.html";
            }
        });
    });
    $("#confirm_process").click(function () {
        var confirm_rate = $("#confirm_rate").val();
        var confirm_date = $("#confirm_date").val();
        var confirm_time = $("#confirm_time").val();
        var confirm_duration = $("#confirm_duration").val();
        var das = document.cookie;
        $.post("http://localhost:3000/present", {
            confirm_rate: confirm_rate,
            confirm_date: confirm_date,
            confirm_time: confirm_time,
            confirm_duration: confirm_duration,
            das: das
        }, function (data) {
            if (data.success) {
                Materialize.toast(Messages.toastSuccess, 5000);
                window.location.href = "home.html";
            }
        });
    });
});


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map