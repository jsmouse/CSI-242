"use strict";

//File Name: emailSubscription.js
//File Author: Jeff Smouse

window.onload = createSubscriptionForm;
window.addEventListener("load", function(){
    document.getElementById("submitBtn").onclick = validation;
    document.getElementById("nameInput").oninput = validateName;
    document.getElementById("emailInput").oninput = validateEmail;
});

var styling = document.createElement("link");
styling.setAttribute("rel", "stylesheet");
styling.setAttribute("href", "formstyling.css")
document.head.appendChild(styling);


function createSubscriptionForm(){

    //creating form 
    var emailForm = document.createElement("form");
    emailForm.setAttribute("name", "email");
    emailForm.setAttribute("id", "email");
    emailForm.setAttribute("method", "post");
    emailForm.setAttribute("class", "container");
    //create the fieldset for the form
    var emailInfo = document.createElement("fieldset");
    emailInfo.setAttribute("id", "emailInfo");
    //append the fieldset to the form
    emailForm.appendChild(emailInfo);
    var formHeading = document.createElement("legend");
    //legend text
    formHeading.innerHTML = "Lighthouse News Email Sign-up";
    //append the legend to the fieldset
    emailInfo.appendChild(formHeading);

    var label1 = document.createElement("label");
    label1.setAttribute("for", "subscriberName");
    label1.innerHTML = "Full Name:";
    //append label to the fieldset
    emailInfo.appendChild(label1);

    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("required", "");
    nameInput.setAttribute("id", "nameInput");
    //append name input to the fieldset
    emailInfo.appendChild(nameInput);

    var label2 = document.createElement("label");
    label2.setAttribute("for", "subscriberEmail");
    label2.innerHTML = "Email:";
    //append label to the fieldset
    emailInfo.appendChild(label2);

    var emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("required", "");
    emailInput.setAttribute("id", "emailInput");
    //append email input to the fieldset
    emailInfo.appendChild(emailInput);

    var label3 = document.createElement("label");
    label3.setAttribute("for", "newsletterType");
    label3.innerHTML = "Choose newsletter type:";
    //append label to the fieldset
    emailInfo.appendChild(label3);

    //newsletter dropdown options
    var newsletterChoice = document.createElement("select");
    newsletterChoice.setAttribute("id", "newsletterType");
    newsletterChoice.setAttribute("name", "newsletterType");
    newsletterChoice.setAttribute("required", "");

    var option1 = document.createElement("option");
    option1.setAttribute("value", "Once a month");
    option1.textContent = "Once a month";
    newsletterChoice.add(option1);
    var option2 = document.createElement("option");
    option2.setAttribute("value", "Semi-Annual");
    option2.textContent = "Semi-Annual";
    newsletterChoice.add(option2);
    var option3 = document.createElement("option");
    option3.setAttribute("value", "Annual");
    option3.textContent = "Annual";
    newsletterChoice.add(option3);

    //append dropdown options to fieldset
    emailInfo.appendChild(newsletterChoice);

    var label4 = document.createElement("label");
    label4.setAttribute("for", "comments");
    label4.innerHTML = "Comments/Questions:";
    //append label to the fieldset
    emailInfo.appendChild(label4);

    var commentBox = document.createElement("textarea");
    commentBox.setAttribute("id", "email");
    commentBox.setAttribute("placeholder", "Your comments/question here:");
    //append comment box to fieldset
    emailInfo.appendChild(commentBox);

    var submitButton = document.createElement("input");
    submitButton.setAttribute("value", "Submit");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submitBtn");
    //append to form
    emailForm.appendChild(submitButton);

    var insertPoint = document.getElementsByTagName("div");

    //inserting div element onto page
    document.body.insertBefore(emailForm, insertPoint[3]);

}

function validation(){
    validateName();
    validateEmail();
}

function validateName(){
    var name = document.getElementById("nameInput");
    if(name.validity.valueMissing){
        name.setCustomValidity("Please enter a valid name.");
    }
    else{
        name.setCustomValidity("");
    }
}

function validateEmail(){
    var email = document.getElementById("emailInput");
    if(email.validity.valueMissing){
        email.setCustomValidity("Please enter a valid email address.");
    }
    else{
        email.setCustomValidity("");
    }
}
