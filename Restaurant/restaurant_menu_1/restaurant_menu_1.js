
$(document).ready(function() {
    document.querySelector('.hamburger').addEventListener('click', function () {
        document.querySelector('.inhamburger').classList.toggle('show');
    })
    document.querySelector('.hamburger-x').addEventListener('click', function () {
        document.querySelector('.inhamburger').classList.toggle('show');
    })
    document.querySelector('.close_modal').addEventListener('click', function () {
        $('.modal').modal('toggle'); 
    })
})

