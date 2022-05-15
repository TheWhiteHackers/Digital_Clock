function showtime(){
    const date = new Date();
    // console.log(date);
    // console.log(date.getHours(), date.getMinutes());


    const hour = date.getHours();
    const minute = date.getMinutes();
    var timepass = "AM";


    if (hour>=12){timepass = "PM"}
    
    if (hour ==0) {hour=12}

    if (hour>12){hour=hour-12}
    
    console.log(hour, minute, timepass);


    const ctime= hour + ":" + minute + " " + timepass;
    console.log(ctime);

    document.getElementById("myclock").innerText=ctime;

    setTimeout(showtime, 1000)
}

showtime()