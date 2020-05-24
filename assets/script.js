
$(document).ready(function () {
    // live time clock
    function update() {
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    
    setInterval(update, 1000);

    // specify what in HTML relates to current time
    let currentHour = moment().hour();
    let time = [08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    for (let i = 0; i < time.length; i++) {
        if (currentHour < time[i]) {
            $("#" + time[i])
            .removeClass("present")
            .addClass("future");
        }

        else if (currentHour == time[i]) {
            $("#" + time[i])
            .addClass("present");
        }
        
        else if (currentHour > time[i]) {
            $("#" + time[i])
            .removeClass("present")
            .addClass("past");
        }
    }
});


//local storage
$(".saveBtn").click(function () {
    let Key = $(this).parent().attr("id");
    let Value = $(this).siblings(".dayPlan").val();
    localStorage.setItem(Key, Value);
})

// document.getElementsByClassName(".dayPlan").innerHTML = localStorage.getItem("id");

$("# .dayPlan").val(localStorage.getItem("#"));
$("#09 .dayPlan").val(localStorage.getItem("09"));
$("#10 .dayPlan").val(localStorage.getItem("10"));
$("#11 .dayPlan").val(localStorage.getItem("11"));
$("#12 .dayPlan").val(localStorage.getItem("12"));
$("#13 .dayPlan").val(localStorage.getItem("13"));
$("#14 .dayPlan").val(localStorage.getItem("14"));
$("#15 .dayPlan").val(localStorage.getItem("15"));
$("#16 .dayPlan").val(localStorage.getItem("16"));
$("#17 .dayPlan").val(localStorage.getItem("17"));
$("#18 .dayPlan").val(localStorage.getItem("18"));
$("#19 .dayPlan").val(localStorage.getItem("19"));
$("#20 .dayPlan").val(localStorage.getItem("20"));