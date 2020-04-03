/*function getSpanContent(num) {
    let fragment = new DocumentFragment();

    for (let i = 1; i < num; i++) {
        let span = document.createElement('span');
        fragment.append(span);
    }

    return fragment;

};
14,15,13,13,9;
document.body.insertAdjacentHTML('afterbegin', '<div id="keyboard" class="keyboard-wrapper"></div>');
document.body.insertAdjacentHTML('afterbegin', '<div class="area"><textarea id="area" class="textarea"></textarea></div>');
for(var i = 0; i < 5; i++) {
    keyboard.insertAdjacentHTML('afterbegin','<div class="keyboard-row"></div>');
};
let key_row = document.querySelectorAll('.keyboard-row');
for (let i = 0; i < 5; i++) {
    if (i == 0) {key_row[i].append(getSpanContent(14))};
    if (i == 1) {key_row[i].append(getSpanContent(15))}
}*/

let clickclack = document.querySelectorAll('.keyTextDown');
clickclack.forEach(elem => elem.addEventListener('click', function(event) {
    area.value += elem.innerText;
}));

let upper = document.querySelector('.keyShiftLeft')

upper.addEventListener('mousedown', function(event) {
    document.querySelectorAll('.keyTextDown').forEach(elem => {
        elem.classList.add('hidden');
    });
    document.querySelectorAll('.keyTextUp').forEach(elem => {
        elem.classList.remove('hidden');
    });
});

upper.addEventListener('mouseup', function(event) {
    document.querySelectorAll('.keyTextDown').forEach(elem => {
        elem.classList.remove('hidden');
    });
    document.querySelectorAll('.keyTextUp').forEach(elem => {
        elem.classList.add('hidden');
    });
})