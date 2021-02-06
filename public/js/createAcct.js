$(document).ready(() => {
    // Getting references to our form and input
    const signUpForm = $(".submit");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");
    const familyName = $("input#family-name-input")

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("click", event => {
        event.preventDefault();
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            familyName: familyName.val().trim()

        };
        console.log(userData.email, userData.password, userData.familyName);
        if (!userData.email || !userData.password || !userData.familyName) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.email, userData.password, userData.familyName);
        emailInput.val("");
        passwordInput.val("");
        familyName.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, familyName) {
        $.post("/api/signup", {
            email: email,
            password: password,
            familyName: familyName
        })
            .then(() => {
                window.location.replace("/home");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});