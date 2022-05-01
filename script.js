function showtime(){
    const date = new Date();
    // console.log(date);
    // console.log(date.getHours(), date.getMinutes());


    const hour = date.getHours();
    const minute = date.getMinutes();
    console.log(hour, minute);
    var timepass = "AM"


    if (hour>=12){ timepass = "PM"}
    console.log(timepass);
    
    if (hour ==0) { hour=12}

    if (hour>12){hour=hour-12 }
    console.log(hour);





}

showtime()