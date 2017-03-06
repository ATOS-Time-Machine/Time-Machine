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

    var token;
    var contract, future, exdate, stime, duration, usd, wbs, reasonfree, otreason, nothours, rate, manager, revenue, paying;
    var toastContent = $('<span>I am toast content</span>');

    $("#resultsTable").append(
        "<tr>" +
        "<td>Alvin</td>" +
        "<td>Eclair</td>"+
        "<td><button type=\"button\" class=\"btn light-blue lighten-1 waves-effect waves-light\" id=\"submit\">Submit</button></td>" +
        "</tr>"
    );

    $("#submit").click(function() {
        token = document.cookie;

        contract=$("#contract").val();
        future=$("#future").val();
        exdate=$("#exdate").val();
        stime=$("#stime").val();
        duration=$("#duration").val();
        usd=$("#usd").val();
        wbs=$("#wbs").val();
        reasonfree=$("#reasonfree").val();
        otreason=$("#otreason").val();
        nothours=$("#nothours").val();
        rate=$("#rate").val();
        manager=$("#manager").val();
        revenue=$("#revenue").val();
        paying=$("#paying").val();
        
        $.post("http://localhost:3000/request", 
        {
            token: token,
            contract: contract,
            future: future,
            exdate: exdate,
            stime: stime,
            duration: duration,
            usd: usd,
            wbs: wbs,
            reasonfree: reasonfree,
            otreason: otreason,
            nothours: nothours,
            rate: rate,
            manager: manager,
            revenue: revenue,
            paying: paying
        }, function(data){
            if (data.success) {
                document.cookie = data.token;
                Materialize.toast(toastContent, 5000);
            }
        });
    });


    

});