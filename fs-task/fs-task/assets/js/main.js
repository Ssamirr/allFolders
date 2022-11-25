const item = document.querySelector('.item');

item.addEventListener('mousedown', mousedown);

function mousedown(e) {

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        item.style.left = item.offsetLeft - newX + 'px';
        item.style.top = item.offsetTop - newY + 'px';

        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseup() {
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
    }

}

document.querySelector('.top-page-location').addEventListener('click', function () {
    item.style.left = '50%';
    item.style.top = '60px';
})

let all_categories = document.querySelector('.all-categories');
let child_main_category = document.createElement('ul');
child_main_category.classList.add('child-main-category');
all_categories.appendChild(child_main_category);

document.querySelector('.add-child-category').querySelector('i').addEventListener('click', function () {
    document.querySelector('.main-category-name').classList.add('main-category-name-add');
    let section_subcategory = document.createElement('li');
    section_subcategory.classList.add('section-subcategory');
    child_main_category.appendChild(section_subcategory);

    addCategory(section_subcategory);

})

function addCategory(section_subcategory) {
    let subcategory_form = document.createElement('form');
    section_subcategory.appendChild(subcategory_form);
    let subcategory = document.createElement('div');
    subcategory.classList.add('subcategory');
    subcategory_form.appendChild(subcategory);
    let subcategory_name_input = document.createElement('div');
    subcategory_name_input.classList.add('subcategory-name-input');
    subcategory.appendChild(subcategory_name_input);
    let subcategory_input = document.createElement('input');
    subcategory_input.classList.add('subcategory-input');
    subcategory_input.setAttribute('required', 'true');
    subcategory_input.setAttribute('placeholder', 'Add category');
    subcategory_name_input.appendChild(subcategory_input);
    let input_delete = document.createElement('div');
    input_delete.classList.add('child-delete');
    subcategory.appendChild(input_delete);
    let input_delete_icon = document.createElement('i');
    input_delete_icon.classList.add('fas', 'fa-remove');
    input_delete_icon.setAttribute('onclick', 'deleted(this)')
    input_delete.appendChild(input_delete_icon);

    let input_save = document.createElement('div');
    input_save.classList.add('child-save');
    subcategory.appendChild(input_save);
    let input_save_icon = document.createElement('button');
    input_save_icon.setAttribute('type', 'submit');
    input_save_icon.classList.add('fa', 'fa-check');
    input_save_icon.setAttribute('onclick', 'saveItem(this)');
    input_save.appendChild(input_save_icon);
    let child_main_category2 = document.createElement('ul');
    child_main_category2.classList.add('child-main-category');
    section_subcategory.appendChild(child_main_category2);
}

function deleted(x) {
    x.closest('.section-subcategory').remove();
    let section_subcategory = document.querySelector('.section-subcategory');
    if (!section_subcategory) {
        document.querySelector('.main-category-name').classList.remove('main-category-name-add');
    }
}

function saveItem(x) {
    let input_value = x.closest('.subcategory').querySelector('.subcategory-input').value
    if (input_value) {
        event.preventDefault();
        let subcategory_name = document.createElement('div');
        subcategory_name.classList.add('subcategory-name');
        x.closest('.subcategory').appendChild(subcategory_name);
        let subcategory_name_span = document.createElement('span');
        subcategory_name_span.innerText = x.closest('.subcategory').querySelector('.subcategory-input').value;
        subcategory_name.appendChild(subcategory_name_span);
        let add_child_main_category = document.createElement('div');
        add_child_main_category.classList.add('add-child-main-category');
        x.closest('.subcategory').appendChild(add_child_main_category);
        let add_child_main_category_icon = document.createElement('i');
        add_child_main_category_icon.classList.add('fa', 'fa-plus');
        add_child_main_category_icon.setAttribute('onclick', 'addSubCategory(this)');
        add_child_main_category.appendChild(add_child_main_category_icon);
        let child_name_edit = document.createElement('div');
        child_name_edit.classList.add('child-name-edit');
        x.closest('.subcategory').appendChild(child_name_edit);
        let child_name_edit_icon = document.createElement('button');
        child_name_edit_icon.classList.add('fas', 'fa-pen');
        child_name_edit.setAttribute('onclick', 'editItem(this)')
        child_name_edit.appendChild(child_name_edit_icon);
        let input_delete = document.createElement('div');
        input_delete.classList.add('child-delete');
        x.closest('.subcategory').appendChild(input_delete);
        let input_delete_icon = document.createElement('i');
        input_delete_icon.classList.add('fas', 'fa-remove');
        input_delete_icon.setAttribute('onclick', 'deleted(this)')
        input_delete.appendChild(input_delete_icon);


        x.closest('.subcategory').querySelector('.subcategory-name-input').remove();
        x.closest('.subcategory').querySelector('.child-delete').remove();
        x.closest('.subcategory').querySelector('.child-save').remove();
    }
}

function editItem(x) {
    event.preventDefault();
    // let section_subcategory = x.closest('li')
    let subcategory = document.createElement('div');
    subcategory.classList.add('subcategory');
    x.closest('form').appendChild(subcategory);
    let subcategory_name_input = document.createElement('div');
    subcategory_name_input.classList.add('subcategory-name-input');
    subcategory.appendChild(subcategory_name_input);
    let subcategory_input = document.createElement('input');
    subcategory_input.classList.add('subcategory-input');
    subcategory_input.setAttribute('required', 'true');
    subcategory_input.setAttribute('placeholder', 'Change category');
    subcategory_name_input.appendChild(subcategory_input);
    let input_delete = document.createElement('div');
    input_delete.classList.add('child-delete');
    subcategory.appendChild(input_delete);
    let input_delete_icon = document.createElement('i');
    input_delete_icon.classList.add('fas', 'fa-remove');
    input_delete_icon.setAttribute('onclick', 'deleted(this)')
    input_delete.appendChild(input_delete_icon);

    let input_save = document.createElement('div');
    input_save.classList.add('child-save');
    subcategory.appendChild(input_save);
    let input_save_icon = document.createElement('button');
    input_save_icon.setAttribute('type', 'submit');
    input_save_icon.classList.add('fa', 'fa-check');
    input_save_icon.setAttribute('onclick', 'saveItem(this)');
    input_save.appendChild(input_save_icon);

    x.closest('.subcategory').remove();
}

function addSubCategory(x) {
    let section_subcategory = document.createElement('li');
    section_subcategory.classList.add('section-subcategory');
    let closet_section_subcategory = x.closest('.section-subcategory');
    closet_section_subcategory.querySelector('.child-main-category').appendChild(section_subcategory);

    addCategory(section_subcategory);
}



document.querySelector('.up-arrow').querySelector('i').setAttribute('onmouseover', 'up()');
document.querySelector('.up-arrow').querySelector('i').setAttribute('onmouseout', 'removeUp()');
var time_up;
function up() {
    item.style.top = item.offsetTop - 1 + 'px';
    time_up = setTimeout(up, 100);
}

function removeUp() {
    clearTimeout(time_up);
}

document.querySelector('.down-arrow').querySelector('i').setAttribute('onmouseover', 'down()');
document.querySelector('.down-arrow').querySelector('i').setAttribute('onmouseout', 'removeDown()');
var time_down;
function down() {
    item.style.top = item.offsetTop + 1 + 'px';
    time_down = setTimeout(down, 100);
}

function removeDown() {
    clearTimeout(time_down);
}

document.querySelector('.left-arrow').querySelector('i').setAttribute('onmouseover', 'left()');
document.querySelector('.left-arrow').querySelector('i').setAttribute('onmouseout', 'removeLeft()');
var time_left;
function left() {
    item.style.left = item.offsetLeft - 1 + 'px';
    time_left = setTimeout(left, 100);
}

function removeLeft() {
    clearTimeout(time_left);
}

document.querySelector('.right-arrow').querySelector('i').setAttribute('onmouseover', 'right()');
document.querySelector('.right-arrow').querySelector('i').setAttribute('onmouseout', 'removeRight()');
var time_right;
function right() {
    item.style.left = item.offsetLeft + 1 + 'px';
    time_right = setTimeout(right, 100);
}

function removeRight() {
    clearTimeout(time_right);
}

var zoom_size = parseInt(document.querySelector('.zoom-size').querySelector('span').innerText);
console.log(zoom_size);

document.querySelector('.zoom-out').addEventListener('click', function () {
    zoom_size = zoom_size - 5;
    document.querySelector('.zoom-size').querySelector('span').innerText = zoom_size + '%';
    document.querySelector('.all-categories').style.transform = 'scale' + '(' + zoom_size + '%)';
    document.querySelector('.all-categories').style.webkitTransform = 'scale' + '(' + zoom_size + '%)';
    document.querySelector('.all-categories').style.msTransform = 'scale' + '(' + zoom_size + '%)';
})

document.querySelector('.zoom-in').addEventListener('click', function () {
    zoom_size = zoom_size + 5;
    document.querySelector('.zoom-size').querySelector('span').innerText = zoom_size + '%';
    document.querySelector('.all-categories').style.transform = 'scale' + '(' + zoom_size + '%)';
    document.querySelector('.all-categories').style.webkitTransform = 'scale' + '(' + zoom_size + '%)';
    document.querySelector('.all-categories').style.msTransform = 'scale' + '(' + zoom_size + '%)';
})

document.querySelector('.zoom-size-inner').querySelectorAll('li').forEach(function (e) {
    e.addEventListener('click', function () {
        zoom_size = parseInt(e.innerText);
        document.querySelector('.zoom-size').querySelector('span').innerText = zoom_size + '%';
        document.querySelector('.all-categories').style.transform = 'scale' + '(' + zoom_size + '%)';
        document.querySelector('.all-categories').style.webkitTransform = 'scale' + '(' + zoom_size + '%)';
        document.querySelector('.all-categories').style.msTransform = 'scale' + '(' + zoom_size + '%)';
    })
})


document.querySelector('.zoom-size').addEventListener('click', function () {
    if(document.querySelector('.zoom-size-inner').querySelector('ul').classList.contains('ul-show')){
        document.querySelector('.zoom-size-inner').querySelector('ul').classList.remove('ul-show');
    }else{
        document.querySelector('.zoom-size-inner').querySelector('ul').classList.add('ul-show');
    }
    event.stopPropagation();
})

document.querySelector('.zoom-size-inner').querySelector('ul').addEventListener('click', function () {
    event.stopPropagation();
})

document.querySelector('body').addEventListener('click', function () {
    document.querySelector('.zoom-size-inner').querySelector('ul').classList.remove('ul-show');
})

document.querySelectorAll('.subcategory-input').forEach(function(e){
    e.closest('subcategory').classList.add('for-two');
})

