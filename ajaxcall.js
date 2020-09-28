$(document).ready(function(){
    $("#ajaxcall").click(function(){   
        $.get("https://restcountries.eu/rest/v2/name/eesti", function(data, status){ console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        });
    });
});