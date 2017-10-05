$(document).ready(function() {
    $.get("/content/navbar.html", function(data){
        $("#navbar").replaceWith(data);
    });
});
