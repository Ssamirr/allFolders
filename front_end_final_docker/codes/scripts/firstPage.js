const prev = document.querySelector('.demo-prev');
const next = document.querySelector('.demo-next');
const today = document.querySelector('.demo-today');
const picked = document.querySelector('.demo-picked');
const last = document.querySelector('.demo-last');

function scrollPage() {
    jQuery(window).trigger('resize').trigger('scroll');

}
$('.parallax-window').parallax({
    positionX: '10px',
    speed: '0.9',
});

function updateInfo() {
    console.log('in update');
    if (this.today) {
        today.innerHTML = '';
        var li = document.createElement('li');
        li.innerHTML = this.today;
        today.appendChild(li);
    }
    if (this.lastSelectedDay) {
        console.log(this.daysSelected)
        picked.innerHTML = '';
        for (days of this.selectedDays) {
            var li = document.createElement('li');
            li.innerHTML = days;
            picked.appendChild(li);
        }

        last.innerHTML = '';
        var li = document.createElement('li');
        li.innerHTML = this.lastSelectedDay;
        last.appendChild(li);
    }
}
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.inhamburger').classList.toggle('show');
})
document.querySelector('.hamburger-x').addEventListener('click', function() {
    document.querySelector('.inhamburger').classList.toggle('show');
})
const myCalendar = new HelloWeek({
    selector: '.hello-week',
    lang: 'en',
    format: 'DD/MM/YYYY',
    monthShort: true,
    weekShort: true,
    disablePastDays: true,
    multiplePick: false,
    // minDate: 1520696057,
    // maxDate: 1522519829,
    onLoad: updateInfo,
    onChange: updateInfo,
    onSelect: updateInfo
});

// prev.addEventListener('click', () => myCalendar.prev());
// next.addEventListener('click', () => myCalendar.next());

$(document).ready(function() {
    document.querySelector('#main-selected').addEventListener('click', function() {
        document.querySelector('.rest-select').classList.add('d-block');
    })

    document.querySelectorAll('.rest-select span').forEach(element =>
        element.addEventListener('click', function() {
            document.querySelector('#choosed-rest-type').innerHTML = this.textContent;
            document.querySelector('.rest-select').classList.remove('d-block');
            let img = 'http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/uploads/sites/2/2019/02/restaurant-02.jpg';
            let img2 = 'http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/uploads/sites/2/2019/02/restaurant-01.jpg';
            if (this.textContent == 'Hill Restaurant') {
                document.querySelector('.hill-rest-img').setAttribute('src', img2);
            } else {
                document.querySelector('.hill-rest-img').setAttribute('src', img);
            }
        }))
    let counter = parseInt(document.querySelector('.number').innerHTML);
    document.querySelector('.plus').addEventListener('click', function() {
        counter++;
        document.querySelector('.number').innerHTML = counter;
    })
    document.querySelector('.minus').addEventListener('click', function() {
        counter--;
        if (counter === 0) {
            counter = 1;
        }
        document.querySelector('.number').innerHTML = counter;
    })

    document.querySelector('.choosed-celebration-type').addEventListener('click', function() {
        document.querySelector('.type-of-celebrations').classList.remove('d-none');
    })
    document.querySelectorAll('.name-of-celeb').forEach(element =>
        element.addEventListener('click', function() {
            document.querySelector('.not-set').innerHTML = this.textContent;
            document.querySelector('.type-of-celebrations').classList.add('d-none');
            document.querySelectorAll('.name-of-celeb').forEach(element =>
                element.classList.remove('for-black-bg'));
            this.classList.add('for-black-bg');
        }))
    document.querySelectorAll('.in-the-button').forEach(element =>
        element.addEventListener('click', function() {
            document.querySelectorAll('.in-the-button').forEach(element =>
                element.classList.remove('buttons-bg'));
            this.classList.add('buttons-bg');
        }))

    document.querySelector('.bk-table').addEventListener('click', function() {
        let typeOfRest = document.querySelector('#choosed-rest-type').textContent;
        let countOfGuests = document.querySelector('.number').textContent;
        let time = document.querySelector('.buttons-bg').textContent;
        let date = myCalendar.lastSelectedDay;
        let occasion = document.querySelector('.not-set').textContent;
        let selected = document.querySelector('#choosed-rest-type').textContent;
        document.querySelector('.hello-week').classList.add('d-none');
        document.querySelector('.about-occasion').classList.add('d-none');
        document.querySelector('.about-time').classList.add('d-none');
        document.querySelector('.all-inputs').classList.remove('d-none');
        document.querySelector('.parent-of-hello').classList.add('adding-tr-bg');
        document.querySelector('.counting-guests').classList.add('d-none');
        document.querySelector('.availabness').classList.add('d-none');
        document.querySelector('.details').classList.remove('d-none');
        document.querySelector('.h1-details').classList.remove('d-none');
        document.querySelector('.count-of-guests').innerHTML = countOfGuests;
        document.querySelector('.time-of-order').innerHTML = time;
        document.querySelector('.type-of-occasion').innerHTML = occasion;
        document.querySelector('.date-of-order').innerHTML = date;
        document.querySelector('.select-rest-type').innerHTML = '';
        document.querySelector('.select-rest-type').classList.add('new-selected');
        document.querySelector('.select-rest-type').innerHTML = selected;

        scrollPage();
    })


    document.querySelector('.check-button').addEventListener('click', function() {
        let name = document.querySelector('.name-input').value;
        document.querySelector('.name-input').value = '';
        let surname = document.querySelector('.surname-input').value;
        document.querySelector('.surname-input').value = '';
        let email = document.querySelector('.email-input').value;
        document.querySelector('.email-input').value = '';
        let phone = document.querySelector('.number-input').value;
        document.querySelector('.number-input').value = '';
        let description = document.querySelector('.textarea-input').value;
        document.querySelector('.name-of-guest').innerHTML = name;
        document.querySelector('.surname-of-guest').innerHTML = surname;
        document.querySelector('.email-of-guest').innerHTML = email;
        document.querySelector('.phone-of-guest').innerHTML = phone;
        document.querySelector('.all-inputs').classList.add('d-none');
        document.querySelector('.pay-details').classList.remove('d-none');
        document.querySelector('.details-2').classList.remove('d-none');
        scrollPage();
    })

    document.querySelectorAll('.nd_rst_margin_top_6').forEach(element =>
        element.addEventListener('click', function() {
            let attr_minus = 'http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/plugins/nd-shortcodes/img/icons/icon-less-white.png';
            let attr_plus = 'http://www.nicdarkthemes.com/themes/restaurant/wp/demo/restaurant/wp-content/plugins/nd-shortcodes/img/icons/icon-add-white.png';
            if (this.getAttribute('src') == attr_plus) {
                this.setAttribute('src', attr_minus);
            } else {
                this.setAttribute('src', attr_plus);
            }
        }))

    document.querySelector('.send-request').addEventListener('click', function() {
        let countOfGuests = document.querySelector('.count-of-guests').textContent;
        let occasion = document.querySelector('.type-of-occasion').textContent;
        let time = document.querySelector('.time-of-order').textContent;
        let date = document.querySelector('.date-of-order').textContent;
        let name = document.querySelector('.name-of-guest').textContent;
        let surname = document.querySelector('.surname-of-guest').textContent;
        let email = document.querySelector('.email-of-guest').textContent;
        let phone = document.querySelector('.phone-of-guest').textContent;


        document.querySelector('.hill-rest').classList.add('d-none');
        document.querySelector('.parent-of-hello').classList.add('d-none');
        document.querySelector('.about-time').classList.add('d-none');
        document.querySelector('.after-request').classList.remove('d-none');



        document.querySelector('.cnt-of-guests').innerHTML = countOfGuests;
        document.querySelector('.dt-of-order').innerHTML = date;
        document.querySelector('.tm-of-order').innerHTML = time;
        document.querySelector('.nm-of-guests').innerHTML = name;
        document.querySelector('.srnme-of-guests').innerHTML = surname;
        document.querySelector('.mail-of-guests').innerHTML = email;
        document.querySelector('.phn-of-guests').innerHTML = phone;
        document.querySelector('.occasion-of-guests').innerHTML = occasion;
        scrollPage();
    })
})