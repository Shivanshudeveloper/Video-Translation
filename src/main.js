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
        var cleansing = $("#cleansing").val();
        var isAicteApproved = $("#isAicteApproved").val();
        if (cleansing == "" || isAicteApproved == "") {
            swal({
                title: "Missing Fields",
                text: "Some Fields are missing",
                icon: "error",
            });
        } else {
            $( "#theForm" ).submit();
        }
    });

    $("#subBtnFaculty").click(() => {
        var domain = $("#domain").val();
        var experience = $("#experience").val();
        if (domain == "" || experience == "") {
            swal({
                title: "Missing Fields",
                text: "Some Fields are missing",
                icon: "error",
            });
        } else {
            $( "#theForm2" ).submit();
        }
    });
})