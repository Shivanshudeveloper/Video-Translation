$(document).ready(function(){
    console.log("READY");

    $("#motherTounge" ).change(function() {
        var value = $("#motherTounge").val();
        if (value == "YES") {
            $("#chooseMotherTounge").show(); 
		} else if (value == "NO") {
            $("#chooseMotherTounge").hide();
        }
    
    });

    $("#subBtnNonFaculty").click(() => {
        $( "#theForm" ).submit();
    });

    $("#subBtnFaculty").click(() => {
        $( "#theForm2" ).submit();
    });
})