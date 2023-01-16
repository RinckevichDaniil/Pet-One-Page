//anchors
$(document).ready(function(){
    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    })
})

//timer
let time = 7200;

const timer = document.querySelector('.timer');

setInterval(updateTimer, 1000);

function updateTimer() {
    let hours = Math.floor(time/60/60);
    let minutes = Math.floor(time/120)
    let seconds = time % 60;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.innerHTML = `${hours}:${minutes}:${seconds}`;

    time--;
}

//mask
$(function(){
    $("#phone").mask("+38(099) 999-9999");
  });

  function zero_first_format(value)
  {
      if (value < 10)
      {
          value='0'+value;
      }
      return value;
  }

  //date
  function date_time()
  {
      var current_datetime = new Date();
      var day = zero_first_format(current_datetime.getDate());
      var month = zero_first_format(current_datetime.getMonth()+1);
      var year = current_datetime.getFullYear();

      return 'Order date: '+ day+"."+month+"."+year+" ";
  }

  document.querySelector('.order_date').innerHTML = date_time();