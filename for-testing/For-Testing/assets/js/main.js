let new_student_input = document.querySelector('.add-student');
let add_button = document.querySelector('.add-button');
let num_student = 0;
let student_info = document.querySelector('.student-info');
let main = document.querySelector('.mainn');


add_button.addEventListener('click', function () {
    let new_student_input_value = new_student_input.value;
    if (new_student_input_value) {
        event.preventDefault();
        console.log(new_student_input_value);
        num_student++;
        student(num_student, new_student_input_value);

    }
    new_student_input.value = '';
})


function student(number_student, student_input_value) {
    let parent_div = document.createElement('div');
    parent_div.classList.add('d-flex', 'pt-3', 'pb-3');
    parent_div.style.borderBottom = '1px solid rgba(0,0,0,.1)';
    student_info.appendChild(parent_div);

    let student_name_col = document.createElement('div');
    student_name_col.classList.add('col-width');
    parent_div.appendChild(student_name_col);

    let num_student_span = document.createElement('span');
    num_student_span.classList.add('num-student');
    num_student_span.innerText = number_student;
    student_name_col.appendChild(num_student_span);

    let stu_name = document.createElement('span');
    stu_name.classList.add('col-name-student', 'stu-name');
    stu_name.innerText = student_input_value;
    student_name_col.appendChild(stu_name);

    let lesson_name_col = document.createElement('div');
    lesson_name_col.classList.add('col-width');
    parent_div.appendChild(lesson_name_col);

    let lesson_name = document.createElement('span');
    lesson_name.classList.add('col-name-student', 'lesson-name', 'exam-name');
    lesson_name.innerText = 'Imtahan';
    lesson_name.setAttribute('data-toggle', 'modal');
    lesson_name.setAttribute('data-target', '#modal' + num_student);
    lesson_name_col.appendChild(lesson_name);

    let stu_min_col = document.createElement('div');
    stu_min_col.classList.add('col-width');
    parent_div.appendChild(stu_min_col);

    let stu_min = document.createElement('span');
    stu_min.classList.add('col-name-student', 'stu_min');
    stu_min.innerText = '';
    stu_min_col.appendChild(stu_min);

    let stu_max_col = document.createElement('div');
    stu_max_col.classList.add('col-width');
    parent_div.appendChild(stu_max_col);

    let stu_max = document.createElement('span');
    stu_max.classList.add('col-name-student', 'stu_max');
    stu_max.innerText = '';
    stu_max_col.appendChild(stu_max);

    let stu_ave_col = document.createElement('div');
    stu_ave_col.classList.add('col-width');
    parent_div.appendChild(stu_ave_col);

    let stu_ave = document.createElement('span');
    stu_ave.classList.add('col-name-student', 'stu_ave');
    stu_ave.innerText = '';
    stu_ave_col.appendChild(stu_ave);


    // ....................................modal..................................
    let modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.setAttribute('id', 'modal' + num_student);
    modal.setAttribute('aria-hidden', 'true');
    main.appendChild(modal);

    let modal_dialog = document.createElement('div');
    modal_dialog.classList.add('modal-dialog');
    modal_dialog.setAttribute('role', 'document');
    modal.appendChild(modal_dialog);

    let modal_content = document.createElement('div');
    modal_content.classList.add('modal-content');
    modal_dialog.appendChild(modal_content);

    let modal_header = document.createElement('div');
    modal_header.classList.add('modal-header');
    modal_header.innerHTML = ` <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                                                    </button>`
    modal_content.appendChild(modal_header);

    let modal_body = document.createElement('div');
    modal_body.classList.add('modal-body');
    modal_content.appendChild(modal_body);

    let exam_point = document.createElement('div');
    exam_point.classList.add('d-flex', 'justify-content-between', 'align-items-end');
    modal_body.appendChild(exam_point);

    let exam_point_form = document.createElement('form');
    exam_point_form.classList.add('d-flex', 'justify-content-between', 'align-items-end', 'w-100');
    exam_point.appendChild(exam_point_form);

    let exam_point_child = document.createElement('div');
    exam_point_child.classList.add('d-flex');
    exam_point_child.style.width = '50%';
    exam_point_form.appendChild(exam_point_child);

    let name_exam = document.createElement('div');
    name_exam.style.width = "50%";
    name_exam.style.padding = '0px 5px';
    exam_point_child.appendChild(name_exam);

    let name_exam_span = document.createElement('span');
    name_exam_span.innerText = 'İmtahan';
    name_exam.appendChild(name_exam_span);

    let choose_exam = document.createElement('div');
    name_exam.appendChild(choose_exam);

    let select_exam = document.createElement('select');
    select_exam.classList.add('select-style');
    choose_exam.appendChild(select_exam);

    let select_option_first = document.createElement('option');
    select_option_first.innerText = 'Tarix';
    select_exam.appendChild(select_option_first);

    let select_option_second = document.createElement('option');
    select_option_second.innerText = 'Fizika';
    select_exam.appendChild(select_option_second);

    let select_option_third = document.createElement('option');
    select_option_third.innerText = 'Riyaziyyat';
    select_exam.appendChild(select_option_third);

    let point_exam = document.createElement('div');
    point_exam.style.width = "50%";
    point_exam.style.padding = '0px 5px';
    exam_point_child.appendChild(point_exam);

    let point_exam_span = document.createElement('span');
    point_exam_span.innerText = 'Qiymət';
    point_exam.appendChild(point_exam_span);

    let point_exam_div = document.createElement('div');
    point_exam.appendChild(point_exam_div);

    let point_exam_input = document.createElement('input');
    point_exam_input.classList.add('select-style');
    point_exam_input.required = 'True';
    point_exam_input.setAttribute('type', 'number');
    point_exam_input.setAttribute('min', '0');
    point_exam_input.setAttribute('max', '100');
    point_exam_div.appendChild(point_exam_input);

    let add_button_modal_div = document.createElement('div');
    exam_point_form.appendChild(add_button_modal_div);

    let add_button_modal = document.createElement('button');
    add_button_modal.classList.add('add-button-modal');
    add_button_modal.setAttribute('type', 'submit');
    add_button_modal.innerText = 'Əlavə et';
    add_button_modal_div.appendChild(add_button_modal);

    let all_exam = document.createElement('div');
    modal_body.appendChild(all_exam);

    let all_exam_point = document.createElement('div');
    all_exam_point.classList.add('d-flex', 'mt-3');
    all_exam_point.style.padding = '10px 0px';
    all_exam.appendChild(all_exam_point);

    let all_exam_point_col_first = document.createElement('div');
    all_exam_point_col_first.classList.add('col-4');
    all_exam_point.appendChild(all_exam_point_col_first);

    let all_exam_point_col_second = document.createElement('div');
    all_exam_point_col_second.classList.add('col-4');
    all_exam_point_col_second.style.fontWeight = 'Bold';
    all_exam_point_col_second.innerText = 'İmtahan';
    all_exam_point.appendChild(all_exam_point_col_second);

    let all_exam_point_col_third = document.createElement('div');
    all_exam_point_col_third.classList.add('col-4');
    all_exam_point_col_third.style.fontWeight = 'Bold';
    all_exam_point_col_third.innerText = 'Qiymət';
    all_exam_point.appendChild(all_exam_point_col_third);


    let modal_footer = document.createElement('div');
    modal_footer.classList.add('modal-footer');
    modal_footer.innerHTML = `<button type="button" class="close-button-modal" data-dismiss="modal">Bağla</button>`;
    modal_content.appendChild(modal_footer);

    let exam_nummber = 0;
    let sum_points = 0;
    let min_point;
    let max_point;
    // .........................................add point...........................................
    add_button_modal.addEventListener('click', function () {
        let point_exam_input_value = point_exam_input.value;

        if (point_exam_input_value) {
            point_exam_input_value = parseInt(point_exam_input_value);
            event.preventDefault();
            sum_points += point_exam_input_value;

            if (!(min_point || max_point)) {
                console.log('a')
                min_point = point_exam_input_value;
                max_point = point_exam_input_value;
            }

            if (min_point > point_exam_input_value) {
                min_point = point_exam_input_value;
            }
            if (max_point < point_exam_input_value) {
                max_point = point_exam_input_value;
            }

            console.log(min_point);
            console.log(max_point);


            exam_nummber++;
            let new_exam_name = select_exam.value;
            let ave_point = sum_points / exam_nummber;

            afterAddPoint(stu_min, stu_max, stu_ave,min_point, max_point, ave_point);

            addPoint(all_exam, new_exam_name, point_exam_input_value, exam_nummber);

            point_exam_input.value = '';
        }
    })



}

function addPoint(all_exam, new_exam_name, point_exam_input_value, exam_nummber) {
    let exams_point = document.createElement('div');
    exams_point.classList.add('d-flex');
    exams_point.style.padding = '10px 0px';
    exams_point.style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
    all_exam.appendChild(exams_point);

    let new_examm_num = document.createElement('div');
    new_examm_num.classList.add('col-4');
    new_examm_num.innerText = exam_nummber;
    exams_point.appendChild(new_examm_num);

    let new_examm_name = document.createElement('div');
    new_examm_name.classList.add('col-4');
    new_examm_name.innerText = new_exam_name;
    exams_point.appendChild(new_examm_name);

    let new_examm_point = document.createElement('div');
    new_examm_point.classList.add('col-4');
    new_examm_point.innerText = point_exam_input_value;
    exams_point.appendChild(new_examm_point);

}

function afterAddPoint(stu_min, stu_max, stu_ave, min_point, max_point, ave_point) {
    stu_min.innerText = min_point;
    stu_max.innerText = max_point;
    stu_ave.innerText = ave_point;
}