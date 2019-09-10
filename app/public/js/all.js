$.get("/api/all", function (data) {
    for (var i = 0; i < data.length; i++) {
        var wellSection = $("<div>");

        wellSection.addClass("well");
        wellSection.attr("id", "character-well-" + i);

        $("#well-section").append(wellSection);

        $("character-well-" + i).append("<h2> name:" + data[i].name + "</h2>");
        $("character-well-" + i).append("<h3> age: " + data[i].age + "</h3>");
        $("character-well-" + i).append("<h3> role: " + data[i].role + "</h3>");
        $("character-well-" + i).append("<h3> force-points: " + data[i].forcePoints + "</h3>");
    }
});