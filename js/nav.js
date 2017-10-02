$(document).ready(function() {
    $.get("/content/nav.html", function(data){
        $("#nav").replaceWith(data);
    });
});
