
$(document).ready(() => {
    // Getting references to our form and inputs
    const loginForm = $("submit");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("click", event => {
        event.preventDefault();
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        console.log(email, password);
        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        })
            .then(() => {
                window.location.replace("/members");
                // If there's an error, log the error
            })
            .catch(err => {
                console.log(err);
            });
    }
});

$(document).ready(function() {
    
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
   
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      })
        .then(function() {
          window.location.replace("/members");
       
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });
  
