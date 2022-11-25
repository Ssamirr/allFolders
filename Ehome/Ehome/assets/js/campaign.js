// $('#timer1').syotimer({
//     year: 2021,
//     month: 1,
//     day: 6,
//     hour: 20,
//     minute: 30
//   });
$(document).ready(function() {
let timer_time = document.querySelectorAll('.countdown');
timer_time.forEach(function(e){
    let class_timer = e.getAttribute('id')
    let data_count = e.getAttribute('data-count');


    $('#'+class_timer).countdown({
    date: data_count,
    });
})


timer_time.forEach(function(e){
    let data_count = e.getAttribute('data-count')
    let last_day_campaign = new Date(data_count);


    var current = new Date();


    if(current.getTime()-last_day_campaign.getTime()>0){
        e.closest('.col-md-6').remove();
    }
})

})
