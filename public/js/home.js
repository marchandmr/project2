

//ad child elements
var addChildButton = $(".addChild");
var addChildInput = $("input#text-input");

//assign task elements
var cmsForm = $(".submit");
var taskInput = $("#body");
var kidInput = $("#title");

//buttons for completing / deleting kids assigned chores
var completeChore = $(".complete");
var deleteChore = $(".delete");

/////////////////////////////////////////////////////////////////////////

$(function () {
    // post request too a new child

    addChildButton.on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newKid = {
            name: addChildInput.val().trim(),
        };
        // Send the POST request.
        $.post("/api/kids", {
            name: newKid.name
        }).then(
            function () {

                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    cmsForm.on("click", function (event) {
        event.preventDefault();
        var newTask = {
            kid: kidInput.val().trim(),
            task: taskInput.val().trim()
        };

        $.ajax("/api/kids", {
            type: "PUT",
            kid: newTask.kid,
            task: newTask.task
        })
            .then(
                function () {
                    location.reload();
                }
            );
    });

});


