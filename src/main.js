$(document).ready(function(){
    console.log("READY");

    $("#motherTounge" ).change(function() {
        var value = $("#motherTounge").val();
        if (value == "YES") {
            $("#chooseMotherTounge").hide(); 
		} else if (value == "NO") {
            $("#chooseMotherTounge").show();
        }
    });

    $("#isAicteApproved" ).change(function() {
        var value = $("#isAicteApproved").val();
        if (value == "YES") {
            $("#forInstituteField").show();
            $("#forInstituteField2").hide();
		} else if (value == "NO") {
            $("#forInstituteField").hide();
            $("#forInstituteField2").show();
        }
    });

    $("#subBtnNonFaculty").click(() => {
        $( "#theForm" ).submit();
    });

    $("#subBtnFaculty").click(() => {
        $( "#theForm2" ).submit();
    });
})