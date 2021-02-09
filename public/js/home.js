

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
////////
var logOut = $(".nav-link");
var remove = $(".complete");

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
        console.log(newTask);

        $.ajax({
            url: "/api/kids",
            method: "PUT",
            data: newTask
        })
            .then(
                function () {
                    location.reload();
                }
            );
    });
    remove.on("click", function (event) {
        event.preventDefault();
        var id = this.id;
        console.log(id);
        $.ajax("/api/kids/" + id, {
            type: "DELETE",
            data: id
        })
            .then(
                function () {
                    location.reload("/home");
                }
            );
    });
});


logOut.on("click", function (event) {
    event.preventDefault();
    window.location.href = "/logout";
});