"use strict";

//File Name: script.js
//Author Name: Jeff Smouse

window.addEventListener("load", setStyle);

//creating and appending stlye sheet
var calendarStyle = document.createElement("link");
    calendarStyle.setAttribute("rel", "stylesheet");
    calendarStyle.setAttribute("href", "ss_insert.css");
    document.head.appendChild(calendarStyle);

    
//creating new date object
var date = new Date();

//list of events
var events = ["", "<p>Lighthouse Appreciation Day</p>", "", "", "", "", "<p>Lighthouse History Talk</p>", 
"<p>Lighthouse Museum Fundraiser</p>", "", "<p>Lighthouse Museum Board Meeting</p>", "", "", "", "<p>Lighthouse History Talk</p>", "", "", "", "", "",
"", "<p>Lighthouse History Talk</p>", "", "", "", "", "", "", "<p>Lighthouse History Talk</p>", "", "", "", "<p>Lighthouse Movie Night</p>"];

//Self-Invoking Function for Date() Object
(function createDate(){
    //creating a DOM element to append the date to
    var subText = document.createElement("p");
    //getting just the date portion of the date object and creating a text node to append to 
    //the paragraph node I created above
    var displayDate = document.createTextNode(date.toDateString());
    //adjusting the font size to a smaller size relative to the page title
    subText.style.fontSize = "x-large";
    //appending the text node to the paragraph node
    subText.appendChild(displayDate);
    //appending the paragraph node to the first instance of h1
    document.body.querySelector("h1").appendChild(subText);
})();

function setStyle(){

    var styleLocation = document.createElement("div");
    styleLocation.setAttribute("id", "styleLocation");
    
    var originalButton = document.createElement("input");
    originalButton.setAttribute("type", "button");
    originalButton.setAttribute("value", "Original View");
    styleLocation.appendChild(originalButton);

    var calendarButton = document.createElement("input");
    calendarButton.setAttribute("type", "button");
    calendarButton.setAttribute("value", "Calendar View");
    styleLocation.appendChild(calendarButton);

    var insertPoint = document.getElementsByTagName("div");

    //inserting div element onto page
    document.body.insertBefore(styleLocation, insertPoint[3]);

    document.styleSheets[document.styleSheets.length-1].insertRule(
        "div#styleLocation {position: static;}", 0); //insert at the start of the style sheet
     
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "div#styleLocation input {\
        background-color: #3f51b5;\
        border: 3px solid rgba(0, 24, 123, 0.9);\
        cursor: url(/img/480px-Lighthouse_icon.svg.png), pointer;\
        color: #f44336;\
        font-size: 1.2em;\
        height: 50px;\
        margin: 5px 10px;\
        width: 150px;\
        }", 1);

    originalButton.onclick = function(){
        //remove calendar
        var calendarRemove = document.getElementById("calendar");
        if(document.body.contains(calendarRemove)){
           document.body.removeChild(calendarRemove);
        }
        else{

        }
        }
        calendarButton.onclick = function(){
        //show Calendar
        var calendarPosition = document.getElementById("styleLocation");
        var tableCheck = document.getElementById("calendar");

        if(document.body.contains(tableCheck)){
                
        }
        else{
            calendarPosition.insertAdjacentHTML("afterend", displayCalendar(date));
        }
    }
}

function displayCalendar(date){
    var calendar = "<table id = 'calendar'>";

    calendar += calendarHeader();
    calendar += calendarDays(date);
    calendar += "</table>";
    return calendar;
}

function calendarHeader(){
    var days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
    var header = "<tr>";

    for(var i = 0; i < days.length; i++){
        header += "<th class = 'daysOfWeek'>" + days[i] + "</th>";
    }
    header += "</tr>";
    return header;
}

function daysOfMonth(date){
    var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var thisYear = date.getFullYear();
    var thisMonth = date.getMonth();

    //calculate the leap year
   if(thisYear % 4 === 0){
    if(thisYear % 100 !== 0 || thisYear % 400 === 0){
       dayCount[1] = 29;
    }
 }
 
 return dayCount[thisMonth];
}

function calendarDays(date){
    //get the first day of the current month
   var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

   //0-6(Sunday-Saturday)
   var weekDay = firstDay.getDay(); 
   
   var htmlCode = "<tr>";
   for(var i = 0; i < weekDay; i++){
        htmlCode += "<td></td>";
    }

    //number of days of the month
    var totalDays = daysOfMonth(date);

    //loop through the total number of days
   for(var i = 1; i <= totalDays; i++){
        //total days in the month
       firstDay.setDate(i); 

       weekDay = firstDay.getDay();
       //if it's Sunday create a new row
       if(weekDay === 0){
           htmlCode += "<tr>";
       }
       htmlCode += "<td class = 'calendar_dates'>" + i + events[i] + "</td>";
       //if it's Saturday end the row
       if(weekDay === 6){
           htmlCode += "</tr>";
       }
   }

   return htmlCode;
}
