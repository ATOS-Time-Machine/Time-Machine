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
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toastSuccess = $('<span>Success</span>');
exports.toastFailure = $('<span>Failure</span>');


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Messages = __webpack_require__(2);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(1);
$(function () {
    var oldDate = null;
    var oldTime = null;
    var confirmFill = function () {
        $.get("api/present/" + JSON.parse(document.cookie).token, function (data) {
            var rows = [];
            var _loop_1 = function () {
                var res = data.results[i];
                rows.push(React.createElement("tr", null,
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
                        res.Contract,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.OvertimeReason,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.Supervisor,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.Status,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.Comment,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.RequestDate,
                        " "),
                    React.createElement("td", null,
                        React.createElement("a", { onClick: function (e) { oldDate = res.RequestDate; oldTime = res.RequestTime; }, type: 'button', href: '#confirmModal', className: 'btn light-blue lighten-1 waves-effect waves-light' }, "Process"))));
            };
            for (var i = 0; i < data.results.length; i++) {
                _loop_1();
            }
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
                    React.createElement("tbody", null, rows))), document.getElementById("present"));
        });
    };
    $("#present_tab").parent().click(function () {
        confirmFill();
    });
    ReactDOM.render(React.createElement("div", null,
        React.createElement("div", { className: "modal-content" },
            React.createElement("h5", null, "Confirm Overtime Request"),
            React.createElement("div", { className: "row" },
                React.createElement("form", { className: "col s12" },
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("select", { id: "confirm_rate" },
                                React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                React.createElement("option", { value: "1" }, "Option 1"),
                                React.createElement("option", { value: "2" }, "Option 2"),
                                React.createElement("option", { value: "3" }, "Option 3")),
                            React.createElement("label", { htmlFor: "confirm_rate" }, "Actual Rate"))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "confirm_date" }, "Actual Date"),
                            React.createElement("input", { id: "confirm_date", type: "date", className: "datepicker" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "confirm_time" }, "Actual Start Time"),
                            React.createElement("input", { id: "confirm_time", className: "timepicker", type: "time" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "confirm_duration" }, "Actual Duration"),
                            React.createElement("input", { id: "confirm_duration", type: "text", className: "validate" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "confirm_comment" }, "Comment"),
                            React.createElement("textarea", { id: "confirm_comment", className: "materialize-textarea", "data-length": "250" })))))),
        React.createElement("div", { className: "modal-footer" },
            React.createElement("a", { id: "confirm_process", className: "modal-action modal-close waves-effect waves-teal btn-flat" }, "Process Request"))), document.getElementById("confirmModal"));
    $("#confirm_process").click(function () {
        $.post("api/present", {
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
            }
            else {
                Materialize.toast(Messages.toastFailure, 5000);
            }
        });
    });
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Messages = __webpack_require__(2);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(1);
$(function () {
    $("#reg").parent().click(function () {
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
        $.post("api/authenticate", {
            id: $("#log_id").val(),
            password: $("#log_password").val()
        }, function (data) {
            if (data.success) {
                console.log(data.admin);
                document.cookie = JSON.stringify(data);
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
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(1);
$(function () {
    var confirmFill = function () {
        $.get("api/past/" + JSON.parse(document.cookie).token, function (data) {
            var rows = [];
            for (var i = 0; i < data.results.length; i++) {
                var res = data.results[i];
                rows.push(React.createElement("tr", null,
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
                        res.Contract,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.OvertimeReason,
                        " "),
                    React.createElement("td", null,
                        " ",
                        res.Supervisor,
                        " ")));
            }
            ReactDOM.render(React.createElement("div", { className: "col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4" },
                React.createElement("table", null,
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", { "data-field": "present_date_plan" }, "Date"),
                            React.createElement("th", { "data-field": "present_time" }, "Time"),
                            React.createElement("th", { "data-field": "present_duration" }, "Duration"),
                            React.createElement("th", { "data-field": "present_contract" }, "Contract"),
                            React.createElement("th", { "data-field": "present_reason" }, "Reason"),
                            React.createElement("th", { "data-field": "present_approver" }, "Approver"))),
                    React.createElement("tbody", null, rows)),
                React.createElement("div", { className: "card-action right-align" },
                    React.createElement("a", { href: "#claimModal", className: "btn light-blue lighten-1 waves-effect waves-light" }, "Special Claims"))), document.getElementById("past"));
        });
    };
    $("#past_tab").parent().click(function () {
        confirmFill();
    });
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Messages = __webpack_require__(2);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(1);
$(function () {
    var codeFill = function () {
        $.get("api/code/" + JSON.parse(document.cookie).token, function (data) {
            var rows = [];
            for (var i = 0; i < data.results.length; i++) {
                var res = data.results[i];
                rows.push(React.createElement("option", { value: res.WBSCode }, res.WBSCode));
            }
            ReactDOM.render(React.createElement("div", { className: "col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4" },
                React.createElement("form", null,
                    React.createElement("div", { className: "card-content" },
                        React.createElement("div", { className: "card-title center-align valign-wrapper" },
                            React.createElement("span", { className: "valign" }, "Overtime Request Form")),
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("select", { id: "request_contract" },
                                    React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                    React.createElement("option", { value: "1" }, "Customer 1"),
                                    React.createElement("option", { value: "2" }, "Customer 2"),
                                    React.createElement("option", { value: "3" }, "Customer 3")),
                                React.createElement("label", { htmlFor: "request_contract" }, "Select a Contract")),
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("select", { id: "request_future" },
                                    React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                    React.createElement("option", { value: "1" }, "Future"),
                                    React.createElement("option", { value: "2" }, "Retrospective")),
                                React.createElement("label", { htmlFor: "request_future" }, "Future or Retrospective")),
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("label", { htmlFor: "request_date" }, "Expected Date"),
                                React.createElement("input", { id: "request_date", type: "date", className: "datepicker" })),
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("label", { htmlFor: "request_time" }, "Start Time"),
                                React.createElement("input", { id: "request_time", className: "timepicker", type: "time" })),
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("label", { htmlFor: "request_duration" }, "Expected Duration"),
                                React.createElement("input", { id: "request_duration", type: "text", className: "validate" })),
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("label", { htmlFor: "request_usd" }, "USD Ticket No"),
                                React.createElement("input", { id: "request_usd", type: "text", className: "validate" })),
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("select", { id: "request_wbs" },
                                    React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                    rows),
                                React.createElement("label", { htmlFor: "request_wbs" }, "WBS Code")),
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("label", { htmlFor: "request_reason_free" }, "Reason Free Form"),
                                React.createElement("textarea", { id: "request_reason_free", className: "materialize-textarea", "data-length": "250" })),
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("select", { id: "request_reason_overtime" },
                                    React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                    React.createElement("option", { value: "1" }, "Fix on Fail"),
                                    React.createElement("option", { value: "2" }, "Holiday Cover"),
                                    React.createElement("option", { value: "3" }, "Not enough time in the day"),
                                    React.createElement("option", { value: "4" }, "Out of hours planned change"),
                                    React.createElement("option", { value: "5" }, "Planned BAU change"),
                                    React.createElement("option", { value: "6" }, "Planned Project change"),
                                    React.createElement("option", { value: "7" }, "Service Desk Reason"),
                                    React.createElement("option", { value: "8" }, "Sickness cover"),
                                    React.createElement("option", { value: "9" }, "Tavel Time")),
                                React.createElement("label", { htmlFor: "request_reason_overtime" }, "Reason for Overtime")),
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("select", { id: "request_reason_hours" },
                                    React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                    React.createElement("option", { value: "1" }, "Customer Change Window"),
                                    React.createElement("option", { value: "2" }, "Customer Requirement"),
                                    React.createElement("option", { value: "3" }, "Project Deadline Approaching")),
                                React.createElement("label", { htmlFor: "request_reason_hours" }, "Reason Cannot Done in Hours")),
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("select", { id: "request_rate" },
                                    React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                    React.createElement("option", { value: "1" }, "Overtime 1.5 Hours"),
                                    React.createElement("option", { value: "2" }, "Overtime 2.0 Hours"),
                                    React.createElement("option", { value: "3" }, "Overtime - Time and 1/3"),
                                    React.createElement("option", { value: "4" }, "Overtime - Trave Time @ BR"),
                                    React.createElement("option", { value: "5" }, "Call Out 1.5 Hours"),
                                    React.createElement("option", { value: "6" }, "Call Out 2.0 Hours")),
                                React.createElement("label", { htmlFor: "request_rate" }, "Overtime Rate")),
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("label", { htmlFor: "request_manager" }, "Project Manager"),
                                React.createElement("input", { type: "text", className: "validate", id: "request_manager" })),
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("select", { id: "request_revenue" },
                                    React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                    React.createElement("option", { value: "1" }, "Yes"),
                                    React.createElement("option", { value: "2" }, "No")),
                                React.createElement("label", { htmlFor: "request_revenue" }, "Work Revenue Generating")),
                            React.createElement("div", { className: "input-field col s12" },
                                React.createElement("select", { id: "request_paying" },
                                    React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                    React.createElement("option", { value: "1" }, "Account"),
                                    React.createElement("option", { value: "2" }, "Customer")),
                                React.createElement("label", { htmlFor: "request_paying" }, "Who is paying?"))),
                        React.createElement("div", { className: "card-action right-align" },
                            React.createElement("button", { type: "button", className: "btn light-blue lighten-1 waves-effect waves-light", id: "request_submit" }, "Submit"))))), document.getElementById("request"));
            $('select').material_select();
            $('.datepicker').pickadate({
                selectMonths: true,
                selectYears: 15
            });
            $('.timepicker').pickatime();
            $(".dropdown-button").dropdown();
            $("#request_submit").click(function () {
                console.log("submitting overtime request");
                $.post("api/request", {
                    token: JSON.parse(document.cookie).token,
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
    };
    codeFill();
    function add_code(e) {
        e.preventDefault();
        $("#wbsModal").modal('close');
        $.post("api/code", {
            token: JSON.parse(document.cookie).token,
            code: $("#wbs_code").val()
        }, function (data) {
            if (data.success) {
                Materialize.toast(Messages.toastSuccess, 5000);
                codeFill();
            }
            else {
                Materialize.toast(Messages.toastFailure, 5000);
            }
        });
    }
    ReactDOM.render(React.createElement("div", null,
        React.createElement("div", { className: "modal-content" },
            React.createElement("h5", null, "Add WBS Code"),
            React.createElement("div", { className: "row" },
                React.createElement("form", { className: "col s12", onSubmit: add_code },
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("input", { id: "wbs_code", type: "text", className: "validate" }),
                            React.createElement("label", { htmlFor: "wbs_code" }, "WBS code")))))),
        React.createElement("div", { className: "modal-footer" },
            React.createElement("a", { id: "add_code", className: "modal-action modal-close waves-effect waves-teal btn-flat" }, "Add"))), document.getElementById("wbsModal"));
    $("#add_code").click(add_code);
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Messages = __webpack_require__(2);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(1);
$(function () {
    var das = null;
    var date = null;
    var time = null;
    var reviewFill = function () {
        $.get("api/review/" + JSON.parse(document.cookie).token, function (data) {
            var rows = [];
            var _loop_1 = function () {
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
                        React.createElement("a", { onClick: function (e) { das = res.StaffID; date = res.RequestDate; time = res.RequestTime; }, type: 'button', href: '#approveModal', className: 'btn light-blue lighten-1 waves-effect waves-light', id: 'process_approve' }, "Process"))));
            };
            for (var i = 0; i < data.results.length; i++) {
                _loop_1();
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
    };
    $("#review_tab").parent().click(function () {
        reviewFill();
    });
    ReactDOM.render(React.createElement("div", null,
        React.createElement("div", { className: "modal-content" },
            React.createElement("h5", null, "Process Overtime Request"),
            React.createElement("div", { className: "row" },
                React.createElement("form", { className: "col s12" },
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "approve_status" }, "Status"),
                            React.createElement("input", { id: "approve_status", type: "text", className: "validate" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "approve_comment" }, "Comment"),
                            React.createElement("textarea", { id: "approve_comment", className: "materialize-textarea", "data-length": "250" })))))),
        React.createElement("div", { className: "modal-footer" },
            React.createElement("a", { id: "approve_process", className: "modal-action modal-close waves-effect waves-teal btn-flat" }, "Process Request"))), document.getElementById("approveModal"));
    $("#approve_process").click(function () {
        $.post("api/review", {
            token: JSON.parse(document.cookie).token,
            status: $("#approve_status").val(),
            comment: $("#approve_comment").val(),
            das: das,
            date: date,
            time: time
        }, function (data) {
            if (data.success) {
                Materialize.toast(Messages.toastSuccess, 5000);
                reviewFill();
            }
            else {
                Materialize.toast(Messages.toastFailure, 5000);
            }
        });
    });
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Messages = __webpack_require__(2);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(1);
$(function () {
    var das = JSON.parse(document.cookie).token;
    var profileFill = function () {
        $.get("api/profile/" + das, function (data) {
            console.log(das);
            $("#profile_first_name").val(data.results.FirstName);
            $("#profile_last_name").val(data.results.LastName);
            $("#profile_pay_roll").val(data.results.PayRoll);
            $("#profile_location").val(data.results.Location);
            $("#profile_email").val(data.results.Email);
        });
    };
    var staffFill = function () {
        $.get("api/staff/" + JSON.parse(document.cookie).token, function (data) {
            var rows = [];
            var _loop_1 = function () {
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
                        React.createElement("a", { onClick: function (e) { das = res.StaffID; profileFill(); }, type: 'button', href: '#profileModal', className: 'btn light-blue lighten-1 waves-effect waves-light', id: 'process_confirm' }, "Edit Profile"))));
            };
            for (var i = 0; i < data.results.length; i++) {
                _loop_1();
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
                    React.createElement("tbody", null, rows)),
                React.createElement("div", { className: "card-action right-align" },
                    React.createElement("a", { href: "#reportModal", className: "btn light-blue lighten-1 waves-effect waves-light" }, "Group Report"))), document.getElementById("staff"));
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
    //Update profile form
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
                            React.createElement("select", { id: "profile_access" },
                                React.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
                                React.createElement("option", { value: "1" }, "Team Leader"),
                                React.createElement("option", { value: "2" }, "User")),
                            React.createElement("label", { htmlFor: "profile_access" }, "Access Level")))))),
        React.createElement("div", { className: "modal-footer" },
            React.createElement("a", { id: "profile_update", className: "modal-action modal-close waves-effect waves-teal btn-flat" }, "Update"),
            React.createElement("a", { className: "modal-action modal-close waves-effect waves-teal btn-flat" }, "Change Password"))), document.getElementById("profileModal"));
    $("#staff_tab").parent().click(function () {
        staffFill();
    });
    //Add a New User
    $("#user_add").click(function () {
        console.log($("#user_access").val());
        $.post("api/adduser", {
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
            token: JSON.parse(document.cookie).token
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
    $("#profile_menu").parent().click(function () {
        das = JSON.parse(document.cookie).token;
        profileFill();
    });
    $("#profile_update").click(function () {
        $.post("api/profile", {
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
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(1);
__webpack_require__(4);
__webpack_require__(6);
__webpack_require__(5);
__webpack_require__(3);
__webpack_require__(8);
__webpack_require__(7);
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
    console.log(JSON.parse(document.cookie).admin);
    if (JSON.parse(document.cookie).admin == 2) {
        $("#review_tab").hide();
        $("#staff_tab").hide();
    }
    ReactDOM.render(React.createElement("div", null,
        React.createElement("div", { className: "modal-content" },
            React.createElement("h5", null, "Generate Special Claims Form"),
            React.createElement("div", { className: "row" },
                React.createElement("form", { className: "col s12" },
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "claim_start_date" }, "Start Date"),
                            React.createElement("input", { id: "claim_start_date", type: "date", className: "datepicker" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "claim_end_date" }, "End Date"),
                            React.createElement("input", { id: "claim_end_date", type: "date", className: "datepicker" })))))),
        React.createElement("div", { className: "modal-footer" },
            React.createElement("a", { id: "generate_claim", className: "modal-action modal-close waves-effect waves-teal btn-flat" }, "Generate"))), document.getElementById("claimModal"));
    ReactDOM.render(React.createElement("div", null,
        React.createElement("div", { className: "modal-content" },
            React.createElement("h5", null, "Generate Group Report"),
            React.createElement("div", { className: "row" },
                React.createElement("form", { className: "col s12" },
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "report_start_date" }, "Start Date"),
                            React.createElement("input", { id: "report_start_date", type: "date", className: "datepicker" }))),
                    React.createElement("div", { className: "row modal-form-row" },
                        React.createElement("div", { className: "input-field col s12" },
                            React.createElement("label", { htmlFor: "report_end_date" }, "End Date"),
                            React.createElement("input", { id: "report_end_date", type: "date", className: "datepicker" })))))),
        React.createElement("div", { className: "modal-footer" },
            React.createElement("a", { id: "generate_report", className: "modal-action modal-close waves-effect waves-teal btn-flat" }, "Generate"))), document.getElementById("reportModal"));
    $("#generate_claim").click(function () {
        var start_date = $("#claim_start_date").val();
        var end_date = $("#claim_end_date").val();
        if (start_date !== "" && end_date !== "") {
            window.location.href = "api/claim/" + JSON.parse(document.cookie).token + "/" + start_date + "/" + end_date;
        }
    });
    $("#generate_report").click(function () {
        var start_date = $("#report_start_date").val();
        var end_date = $("#report_end_date").val();
        if (start_date !== "" && end_date !== "") {
            window.location.href = "api/report/" + JSON.parse(document.cookie).token + "/" + start_date + "/" + end_date;
        }
    });
    $("#logout").click(function () {
        document.cookie = "";
        window.location.href = "index.html";
    });
});


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map