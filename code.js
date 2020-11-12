$(document).ready(function() {

    $("input[name=day]").click(schedule);

    function schedule() {

        var dayOfWeek = $("input[name=day]:checked").val();


        switch (dayOfWeek) {
            case "Monday":
                $("#task1").text("Work");
                $("#task2").text("School");
                $("#time1").text("9:00 AM to 5:30 PM");
                $("#time2").text("6:00 PM to 9:50 PM");
                break;
            case "Tuesday":
                $("#task1").text("Work");
                $("#task2").text("School");
                $("#time1").text("9:00 AM to 5:30 PM");
                $("#time2").text("6:00 PM to 10:00 PM");
                break;
            case "Wednesday":
                $("#task1").text("Work");
                $("#task2").text("School");
                $("#time1").text("9:00 AM to 5:30 PM");
                $("#time2").text("6:00 PM to 9:50 PM");
                break;
            case "Thursday":
                $("#task1").text("Work");
                $("#task2").text("School");
                $("#time1").text("9:00 AM to 5:30 PM");
                $("#time2").text("6:00 PM to 8:50 PM");
                break;
            case "Friday":
                $("#task1").text("Work");
                $("#task2").text("Free Time");
                $("#time1").text("9:00 AM to 5:30 PM");
                $("#time2").text("6:00 PM to 11:00 PM");
                break;
            case "Saturday":
                $("#task1").text("Family Time");
                $("#task2").text("Houser Chores");
                $("#time1").text("6:00 AM to 12:00 PM");
                $("#time2").text("1:00 PM to 3:00 PM");
                break;
            case "Sunday":
                $("#task1").text("Church");
                $("#task2").text("Homework");
                $("#time1").text("9:00 AM to 10:00AM");
                $("#time2").text("12:00 PM to 5:00PM");
                break;
        }

    }

});
