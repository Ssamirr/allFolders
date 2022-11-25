$(document).ready(function () {
    var full_date = new Date();
    var year = full_date.getFullYear();
    var month_array = ['0' + 1, '0' + 2, '0' + 3, '0' + 4, '0' + 5, '0' + 6, '0' + 7, '0' + 8, '0' + 9, 10, 11, 12];
    var month = month_array[full_date.getMonth()];
    var date = full_date.getDate();
    if (date < 10) {
        date = '0' + date;
    }
    var day = full_date.toString().split(' ')[0];
    document.querySelector('.date').innerHTML = year + '-' + month + '-' + date + '-' + day;

    let hours = full_date.getHours();
    let minutes = full_date.getMinutes();
    let seconds = parseInt(full_date.getSeconds());

    setInterval(function () {
        if (hours < 10) {
            hours = '0' + hours;
        }
        if(hours==24){
            hours="00";
        }
       if (minutes < 10) {
            minutes = '0' + minutes;
            }
        if(minutes==60){
            minutes='00';
            hours++;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
         if(seconds==60){
            seconds='00';
            minutes++;
        }
        document.querySelector('.time').innerHTML = hours + '-' + minutes + '-' + seconds;
        seconds++;
        minutes=parseInt(minutes);
    }, 1000);

})