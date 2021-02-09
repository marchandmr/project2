

//ad child elements
var addChildButton = $(".addChild");
var addChildInput = $("input#text-input");

//assign task elements
var cmsForm = $(".submit");
var taskInput = $("#body");
var kidInput = $("#title");


// buttons used to logout, or remove a kid from the database
var logOut = $(".nav-link");
var remove = $(".complete");

/////////////////////////////////////////////////////////////////////////

$(function () {
    // post request to a new child
    addChildButton.on("click", function (event) {
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

    // javascript used for adding a new task
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

    //javascript for deleting a kid from the database
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

// javascript for logging out
logOut.on("click", function (event) {
    event.preventDefault();
    window.location.href = "/logout";
});