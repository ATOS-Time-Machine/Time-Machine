$(document).ready(function () {
    $('select').material_select();

    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15 
    });

    $('.timepicker').pickatime({
        default: 'now',
        twelvehour: false, 
        donetext: 'OK',
        autoclose: false,
        vibrate: true 
    });

    $(".dropdown-button").dropdown();

    $('.modal').modal();
});