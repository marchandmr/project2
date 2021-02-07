

//ad child elements
var addChildButton = $(".addChild");
var addChildInput = $("input#text-input");

//assign chore elements
var cmsForm = $("#cms");
var childSelect = $("#author");
var bodyInput = $("#body");
var titleInput = $("#title");

//add prize elements
var addPrizeButton = $(".addPrize");
var addPrizeInput = $("input#prize-input");
var addPrizeValue = $("input#prize-value");

//delete prize button
var deletePrize = $(".deletePrize");

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
                console.log("added child!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    //post request to add a new prize
    addPrizeButton.on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newPrize = {
            name: addPrizeInput.val().trim(),
            value: addPrizeValue.val().trim(),
        };
        console.log(newPrize.name);
        // Send the POST request.
        $.post("/api/prizes", {
            name: newPrize.name,
            value: newPrize.value
        }).then(
            function () {
                console.log("added Prize!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    //post request to assign a child a new chore (needs work)
    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a body, title, or author
        if (!titleInput.val().trim() || !bodyInput.val().trim() || !childSelect.val()) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newChore = {
            child: childSelect
                .val()
                .trim(),
            body: bodyInput
                .val()
                .trim(),
            AuthorId: authorSelect.val()
        };
        console.log(newChore.body, newChore.AuthorId);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newChore
        }).then(
            function () {
                console.log("assigned chore!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    }
    cmsForm.on("submit", handleFormSubmit());

});

