// Validate data when form is submitted
document.getElementById("guest-book").onsubmit = function() {
    clearErrors()
    let isValid = true;

    // Validate first name
    let name = document.getElementById("first-name").value;
    if (name == ""){
        let errSpan = document.getElementById("err-name");
        errSpan.style.display="inline";
        isValid = false;
    }

    // Validate last name
    let lname = document.getElementById("last-name").value;
    if (lname == ""){
        let errSpan = document.getElementById("err-lname");
        errSpan.style.display="inline";
        isValid = false;
    }

    // Validate email if mailing list is checked
    let email = document.getElementById("email").value;
    let checkbox = document.getElementById("mailingList").checked;
    if (checkbox && email === "") {
        let errSpan = document.getElementById("err-checkbox");
        errSpan.style.display = "inline";
        isValid = false;
    } else if (email && (!email.includes("@") || !email.includes("."))) {
        let errSpan = document.getElementById("err-email");
        errSpan.style.display = "inline";
        isValid = false;
    }

    // Validate LinkedIn URL
    let linkedin = document.getElementById("linkedin").value;
    if (linkedin && !linkedin.startsWith("https://linkedin.com/in/")) {
        let errSpan = document.getElementById("err-linkedin-format");
        errSpan.style.display = "inline";
        isValid = false;
    }

    // Validate "How we met"
    let meet = document.getElementById("meet").value;
    if (meet === "") {
        let errSpan = document.getElementById("err-meet");
        errSpan.style.display = "inline";
        isValid = false;
    }

    // Validate if "Other" is selected
    if (meet === "other") {
        const other = document.getElementById("other").value;
        if (other === "") {
            let errSpan = document.getElementById("err-other");
            errSpan.style.display = "inline";
            isValid = false;
        }
    }

    // Stop form from submitting if data is invalid
    return isValid;
}

// This will require the user to provide an email when box is checked
// Resource on "onchange" property https://blog.hubspot.com/website/onchange
// which can also be used for dropdown list
document.getElementById("mailingList").onchange = function() {
    document.getElementById("email-format").style.display = this.checked ? "block" : "none";
};

// This will show or hide the options for selecting "Other"
document.getElementById("meet").onchange = function() {
    document.querySelector(".other").style.display = this.value === "other" ? "block" : "none";
};

// Clear all the errors from the page
function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for (let i=0; i< errors.length; i++){
        errors[i].style.display = "none";
    }
}
