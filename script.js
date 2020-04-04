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

let clickClack = document.querySelectorAll('.keyTextDown');
clickClack.forEach(elem => elem.addEventListener('click', function(event) {
    area.value += elem.innerText;
}));

let clickClackUp = document.querySelectorAll('.keyTextUp');
clickClackUp.forEach(elem => elem.addEventListener('click', function(event) {
    area.value += elem.innerText;
}));

let clickClackCaps = document.querySelectorAll('.keyTextCaps');
clickClackCaps.forEach(elem => elem.addEventListener('click', function(event) {
    area.value += elem.innerText;
}));

let shift = document.querySelector('.ShiftLeft');

shift.addEventListener('mousedown', function(event) {
    document.querySelectorAll('.keyTextDown').forEach(elem => {
        elem.classList.add('hidden');
    });
    document.querySelectorAll('.keyTextUp').forEach(elem => {
        elem.classList.remove('hidden');
    });
});

shift.addEventListener('mouseup', function(event) {
    document.querySelectorAll('.keyTextDown').forEach(elem => {
        elem.classList.remove('hidden');
    });
    document.querySelectorAll('.keyTextUp').forEach(elem => {
        elem.classList.add('hidden');
    });
});

let caps_lock = document.querySelector('.CapsLock');

caps_lock.addEventListener('click', function(event) {
    if (document.querySelector('.keyTextDown').className.split(' ')[1] != 'hidden') {
        document.querySelectorAll('.keyTextDown').forEach(elem => {
            elem.classList.add('hidden');
        });
        document.querySelectorAll('.keyTextCaps').forEach(elem => {
            elem.classList.remove('hidden');
        });
    } else {
        document.querySelectorAll('.keyTextDown').forEach(elem => {
            elem.classList.remove('hidden');
        });
        document.querySelectorAll('.keyTextCaps').forEach(elem => {
            elem.classList.add('hidden');
        });
    }
   
});

document.addEventListener('keydown', function(event) {
    area.focus();
    for (item of document.querySelectorAll('.key')) {
        if (event.code == item.className.split(' ')[0]) {
            item.classList.add('active');
        }
    };
    if (event.code == 'Tab') {
        area.value += '\t';
    } else
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        document.querySelectorAll('.keyTextDown').forEach(elem => {
            elem.classList.add('hidden');
        });
        document.querySelectorAll('.keyTextUp').forEach(elem => {
            elem.classList.remove('hidden');
        });
    } else
    if (event.code == 'CapsLock') {
        if (document.querySelector('.keyTextDown').className.split(' ')[1] != 'hidden') {
            document.querySelectorAll('.keyTextDown').forEach(elem => {
                elem.classList.add('hidden');
            });
            document.querySelectorAll('.keyTextCaps').forEach(elem => {
                elem.classList.remove('hidden');
            });
        } else {
            document.querySelectorAll('.keyTextDown').forEach(elem => {
                elem.classList.remove('hidden');
            });
            document.querySelectorAll('.keyTextCaps').forEach(elem => {
                elem.classList.add('hidden');
            });
        }
    } else
    if (event.code == 'Tab') {
        area.value += '\t';
    } else
    if (event.code == 'Enter') {
        area.value += '\n';
    } else 
    if (event.code == 'Backspace') {
        area.value = area.value.substring(0, area.value.length - 1) ;
    } else {
        area.value += event.key;
    }
    
});

document.addEventListener('keyup', function(event) {
    area.focus();
    for (item of document.querySelectorAll('.key')) {
        if (item.className.split(' ')[2] == 'active') {
            item.classList.remove('active');
        }
    };
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        document.querySelectorAll('.keyTextDown').forEach(elem => {
            elem.classList.remove('hidden');
        });
        document.querySelectorAll('.keyTextUp').forEach(elem => {
            elem.classList.add('hidden');
        });
    };
});

document.addEventListener('mousedown', function(event) {
    if (event.target.innerText == 'TAB') {
        area.value += '\t';
    };
    if (event.target.innerText == 'Enter') {
        area.value += '\n';
    };
    if (event.target.innerText == 'Backspace') {
        area.value = area.value.substring(0, area.value.length - 1) ;
    };
    for (item of document.querySelectorAll('.key')) {
        if(event.target.parentNode.className.split(' ')[0] == item.className.split(' ')[0]) {
            item.classList.add('active');
        }
    };
});

document.addEventListener('mouseup', function(event) {
    for (item of document.querySelectorAll('.key')) {
        if (item.className.split(' ')[2] == 'active') {
            item.classList.remove('active');
        }
    }
});
