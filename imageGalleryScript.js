"use strict";

//File Name: imageGalleryScript.js
//Author Name: Jeff Smouse


window.onload = init;

function init(){
    //get collection of h5 elements in the document
    var captionsList = document.body.getElementsByTagName("h5");
    //loop through the collection to remove each h5 elements (the captions)
    for(var i = 0; i < captionsList.length; i++){
        //decrement the index or the loop will skip over some of the captions as the collection gets smaller
        captionsList[i].parentNode.removeChild(captionsList[i--]);
    }

    imageHover();

}

//Hover Function for Image Caption w/ Timeout
function imageHover(){
   var images = document.querySelectorAll("img");

   for(var i = 0; i < images.length; i++){
       images[i].addEventListener("mouseover", function(e){
        var caption = e.target.getAttribute("alt");
        var captionElement = document.createTextNode(caption);
        var tempCaption;
         if(e.target.parentNode.lastChild.textContent === caption){

         }
         else{
            tempCaption = e.target.parentNode.appendChild(captionElement);
         }
            setTimeout(function(){
                e.target.parentNode.removeChild(tempCaption);
            }, 2000);
        });

    }
}