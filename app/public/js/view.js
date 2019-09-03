$("#search-btn").on("click", function () {

    var searchedCharacter = $("#character-search").val().trim();

    searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

    $.get("/api/" + searchedCharacter, function (data) {

        $("#well-section").empty();

        if (!data) {
            $("#well-section").append("<h2> the force is not enough </h2>");
        } else {
            $("#well-section").append("<h2>character name: " + data.name + " </h2>");
            $("#well-section").append("<h3>character age: " + data.age + " </h3>");
            $("#well-section").append("<h3>character role: " + data.role + " </h3>");
            $("#well-section").append("<h3>character forcePoints: " + data.forcePoints + " </h3>");
        }
    });





});