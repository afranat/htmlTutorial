$(document).ready(function(){
    $("div#test div").each(function( index ) {
        console.log( index + ": enable " + $( this ).attr("menable") );
        if ($(this).attr("menable")=="n") {
            $(this).hide();
        }
    });
    $("button#submit").click(function(){
        $("div#test input").each(function( index ) {
            console.log( index + ": correct " + $( this ).attr("correct") + ": post " + $( this ).val() );
            if ($(this).attr("correct").search($(this).val())!=-1) {
                $("div#question"+index.toString()).removeClass("w3-light-grey").removeClass("w3-red").removeClass("w3-green").addClass("w3-green");
            } else {
                $("div#question"+index.toString()).removeClass("w3-light-grey").removeClass("w3-red").removeClass("w3-green").addClass("w3-red");
            }
        });

    });
});