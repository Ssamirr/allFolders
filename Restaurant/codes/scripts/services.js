$('.parallax-window').parallax({
    naturalWidth: '500',
    naturalHeight: '300',
    positionX: '',
});
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.inhamburger').classList.toggle('show');
})
document.querySelector('.hamburger-x').addEventListener('click', function() {
    document.querySelector('.inhamburger').classList.toggle('show');
})
function scrollPage(){
    jQuery(window).trigger('resize').trigger('scroll');

}
$(document).ready(function(){
    scrollPage();
})