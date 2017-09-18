$(window).on("load", function () { 
    $(document).ready(function () {
        $("#cal").click(function () {
            if ($("#calendar").css("display") === "block") {
                $("#calendar").css("display", "none");
            } else {
                $("#calendar").css("display", "block");
            }
        });
    });
});

window.onload = function () {
    var page_height = window.innerHeight; 
    var cal_height = page_height - 130; 
    var num_rows = 5; 
    var day = Date.today().clearTime().moveToFirstDayOfMonth().getDayName();
    var day_number = 0;
    switch (day) {
        case "Saturday":
            day_number--;
        case "Friday": 
            day_number--;
        case "Thursday":
            day_number--;
        case "Wednesday": 
            day_number--;
        case "Tuesday":
            day_number--;
        case "Monday": 
            day_number--;
        }
    
    var j; 
    for (j = 0; j < 5; j++){
        var div =    document.createElement("div");
        var i; 
        for(i = 0; i < 7; i++){
            div = document.createElement("div");
            div.style.height = (cal_height / num_rows) + "px";
            div.style.width = "14.2%";
            div.style.backgroundColor = "#ffffff";
            div.style.position = "relative";
            div.style.float = "left";
            div.style.borderLeft = "solid .1px #000000";
            div.style.borderBottom = "solid .1px #000000";
            if(day_number++ >= 0){
                div.innerHTML = day_number;
            }
            document.getElementById("master_calendar_container").appendChild(div);
        }
     
    }
    
    
};