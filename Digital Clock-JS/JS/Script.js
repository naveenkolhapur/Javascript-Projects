//Function
function ShowTime(){
    //Declaration
    var Time = new Date();
    var Hours = Time.getHours();
    var Minutes = Time.getMinutes();
    var Seconds = Time.getSeconds();
    var Period = "AM";
    var year = Time.getFullYear();
    var date = Time.getDate();
    var week=["Saunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var Month=["January","Feburary","March","April","May","June","July","August","September","October","Novemeber","December"]

    if(Hours>12)
    {
        Hours-=12;
        Period = "PM";
    }
    if(Hours==0)
    {
        Hours=12;
    }

    Hours   = (Hours<10) ? "0" + Hours : Hours;
    Minutes = (Minutes<10) ? "0" + Minutes : Minutes;
    Seconds = (Seconds<10) ? "0" + Seconds: Seconds;

    var CurrentTime = Hours + ":" + Minutes + ":" + Seconds + " " + Period;
    //Time
    document.getElementById("Digital-Clock").innerHTML = CurrentTime;
    //Day
    document.querySelector("#day").innerHTML= week[Time.getDay()];
    //Month
    document.querySelector("#Mon").innerHTML = Month[Time.getMonth()];
    //year
    document.querySelector("#year").innerHTML = year;
    //date
    document.querySelector("#Date").innerHTML = date;

    setTimeout(ShowTime,1000);

}
    //Calling Function
    ShowTime();
    
    