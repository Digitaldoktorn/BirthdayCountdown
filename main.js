var anniversary, eventName, eventDate;
var birthYear, birthMonth, birthDay;

function getInput() {
    var valid = false;
    eventName = prompt("Event Name", "My Event");
     
    // validation
    while(!valid) {
        // anniversary
        while(!valid) {
            anniversary = prompt("Anniversary (1-100)", "50");
            valid = anniversary > 0 && anniversary < 101;
        }
        valid = false;

        // year
        while(!valid) {
            birthYear = prompt("Birth Date Year", "1975");
            valid = birthYear > 0 && birthYear < 2050;
        }
        valid = false;

        // month
        while(!valid) {
            birthMonth = prompt("Birth Date Month (1-12)", "1");
            valid = birthMonth > 0 && birthMonth < 13;
        }
        valid = false;

        // day
        while(!valid) {
            birthDay = prompt("Birth Date Day (1-31)", "1");
            valid = birthDay > 0 && birthDay < 32;
        }
        valid = false;

        // make sure the event date is in the future
        var currentDate = new Date();
        var birthYearInt = parseInt(birthYear);
        var anniversaryInt = parseInt(anniversary);
        var eventYear = birthYearInt + anniversaryInt;
        eventDate = new Date(eventYear + "-" + birthMonth + "-" + birthDay);        
        valid = eventDate.getTime() - currentDate.getTime() > 0;

        // show error alert
        if(!valid) {
            alert("The anniversary must be in the future.")
        }
    }
    
    setInterval(displayCountdown, 1000);
}

function displayCountdown() {
    var currentDate = new Date();
    var timeDiff = eventDate.getTime() - currentDate.getTime();
    var secs = timeDiff / 1000;
    var mins = secs / 60;
    var hours = mins / 60;
    var days = hours / 24;
    var months = days / 30.4;
    var years = days / 365.25;
    

    // calculate the time remaining
    var yearsLeft = Math.floor(years)
    var daysLeft = Math.floor(days);
    var hoursLeft = Math.floor(hours % 24);
    var minsLeft = Math.floor(mins % 60);
    var secsLeft = Math.floor(secs % 60);

    var myBox = document.getElementById("my_box");
    myBox.innerHTML = "<h3>Countdown to " + eventName + " (" + eventDate.toLocaleDateString() + ")<h2>" + daysLeft + " days, " + hoursLeft + " hours, " + minsLeft + " minutes, " + secsLeft + " seconds<br><br><p><small> equals to:</small></p>";
    

    var myBox2 = document.getElementById("my_box2");
    myBox2.innerHTML = "<h2>" + years.toFixed(2) + " years<br><br><p><small> or:</small><h2>" + months.toFixed(2) + " months";

}