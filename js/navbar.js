$(document).ready(function() {
    $.get("/content/navbar.html", function(data){
        $("#navbar").replaceWith(data);
    });
});

function searchTutors () {
    window.open("/content/tutors.html", "_self");
}

function expandNav () {
    var width = window.innerWidth;
    if (width < 600) {
        var isHidden = $("#main").attr("hidden");
        if (isHidden) {
            $("#main").attr("hidden", false);
        }
        else {
            $("#main").attr("hidden", true);
        }
    }
}
