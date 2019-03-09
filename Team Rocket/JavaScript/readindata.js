$(document).ready(function(){
    $.ajax({url: "/highlights.txt", 
        success: function(result){
            $("#div1").html(result);
        }, 
        error: function(result){
            alert("Error loading data");
        }
    });
});