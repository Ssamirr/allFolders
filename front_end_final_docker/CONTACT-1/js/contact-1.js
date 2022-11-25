function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.3842911, 49.8256206),
        zoom: 17,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

document.querySelector('.hamburger').addEventListener('click', function () {
    console.log('aa')
    document.querySelector('.inhamburger').classList.toggle('show');
})
document.querySelector('.hamburger-x').addEventListener('click', function () {
    document.querySelector('.inhamburger').classList.toggle('show');
})
src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBeURXXSVa2EcE5TOQzN_mAIGinmAAW3WE&callback=myMap"