
$(document).ready(function () {
    // live time clock
    function update() {
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    
    setInterval(update, 1000);

    // specify what in HTML relates to current time
    let currentHour = moment().hour();
    let time = [
        hour0800, hour0900, hour1000, hour1100, hour1200, 
        hour1300, hour1400, hour1500, hour1600, hour1700, 
        hour1800, hour1900, hour2000];
    for (let i = 0; i < time.length; i++) {
        if (currentHour < time[i]) {
            $("#" + time[i]);
            removeClass("present")
            addClass("future");
        }
        
        else if (currentHour > time[i]) {
            $("#" + time[i])
            removeClass("present")
            addClass("past");
        }
    }
});


// locale storage
$(".saveBtn").val(localStorage.getItem(""));