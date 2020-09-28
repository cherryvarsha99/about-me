
cfunction add()
{
        var a = parseInt(document.getElementById("value1").value);
        var b = parseInt(document.getElementById("value2").value);
        var c = parseInt(document.getElementById("value3").value);
        var result = document.getElementById("answer");
       
        
        var x = sum(a,b,c);
        result.value = x;
        localStorage.setItem("sum",x);

        document.getElementById("para").innerHTML ='result'+x;

        var y=localStorage.getItem("sum");
        alert(y);

}

function sum(x,y,z) {
    return x+y+z;
}
QUnit.test( "TEST1", function( assert ) {
    var result = sum(2,3,4);
    assert.equal( result, "9", "sum(2,3,4) should be 9." );
});
QUnit.test( "TEST2", function( assert ) {
    var result = sum(1,2,3);
    assert.equal( result, "6", "sum(1,2,3) should be 6." );
});
QUnit.test( "TEST3", function( assert ) {
    var result = sum(5,4,3);
    assert.equal( result, "12", "sum(5,4,3) should be 12." );
});
QUnit.test( "TEST4", function( assert ) {
    var result = sum(10,20,30);
    assert.equal( result, "60", "sum(10,20,30) should be 60." );
});
QUnit.test( "TEST5", function( assert ) {
    var result = sum(-1,5,3);
    assert.equal( result, "7", "sum(-1,5,3) should be 7." );
});

$(document).ready(function(){
    $("#ajaxcall").click(function(){   
        $.get("https://restcountries.eu/rest/v2/name/eesti", function(data, status){ console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        });
    });
});
