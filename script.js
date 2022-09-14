window.onload = function() {
  document.getElementById('countdown-timer').style.display = 'none';
};

function ApprenticeCountdownTimer(){
    var countDownDate = new Date("Mar 1, 2023 17:00").getTime();
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("countdown-timer").innerHTML = days + " days " + hours + " hours "
        + minutes + " minutes " + seconds + " seconds ";
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown-timer").innerHTML = "Hand your work in!!";
        }
      }, 1000);
}

function countdownTimerShowHide(){
    var x = document.getElementById("countdown-timer");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}