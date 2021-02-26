var addChildButton = $(".addChild"), addChildInput = $("input#text-input"), cmsForm = $(".submit"), taskInput = $("#body"), kidInput = $("#title"), logOut = $(".nav-link"), remove = $(".complete"); $(function () {
    addChildButton.on("click", function (t) {
        t.preventDefault(); t = { name: addChildInput.val().trim() }; $.post("/api/kids", { name: t.name }).then(function () {
            location.reload()
        })
    }), cmsForm.on("click", function (t) {
        t.preventDefault(); t = { kid: kidInput.val().trim(), task: taskInput.val().trim() }; console.log(t), $.ajax({ url: "/api/kids", method: "PUT", data: t }).then(function () {
            location.reload()
        })
    }), remove.on("click", function (t) {
        t.preventDefault(); t = this.id; console.log(t), $.ajax("/api/kids/" + t, { type: "DELETE", data: t }).then(function () {
            location.reload("/home")
        })
    })
}), logOut.on("click", function (t) {
    t.preventDefault(), window.location.href = "/logout"
});