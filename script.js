function showtime(){
    const date = new Date();
    // console.log(date);
    // console.log(date.getHours(), date.getMinutes());


    var hour = date.getHours();
    var minute = date.getMinutes();
    var timepass = "AM";
    //var sec = date.getSeconds();


    if (hour>=12){timepass = "PM"}
    
    if (hour ==0) {hour=12}

    if (hour>12){hour=hour-12}

    if (minute < 10) {minute= "0" + minute}
    
    console.log(hour, minute, timepass);


    const ctime= hour + ":" + minute + " " + timepass;
    console.log(ctime);

    document.getElementById("myclock").innerText=ctime;

    setTimeout(showtime, 1000)
}

showtime()