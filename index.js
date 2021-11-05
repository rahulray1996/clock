function displayTime() {
    var date = new Date();
    var hour = date.getHours(); //in 24hrs (0-23) format
    var min = date.getMinutes(); //from 0-59
    var sec = date.getSeconds(); //from 0-59
    var session = "AM";
  
    console.log(hour, min, sec);
  
    if (hour == 0) {
      hour = 12;
    }
  
    if (hour > 12) {
      hour = hour - 12;
      session = "PM";
    }
  
    hour = hour < 10 ? "0" + hour : hour; //ternary operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    var finalTimeString = hour + ":" + min + ":" + sec + " " + session;
    document.getElementById("clockDisplay").innerHTML = finalTimeString;
    setTimeout(displayTime, 1000); //recursive way of calling functions
  }
  
  displayTime();
  