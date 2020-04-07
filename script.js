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

let shiftLeft = document.querySelector('.ShiftLeft');

shiftLeft.addEventListener('mousedown', function(event) {
    document.querySelectorAll('.keyTextDown').forEach(elem => {
        elem.classList.add('hidden');
    });
    document.querySelectorAll('.keyTextUp').forEach(elem => {
        elem.classList.remove('hidden');
    });
});

shiftLeft.addEventListener('mouseup', function(event) {
    document.querySelectorAll('.keyTextDown').forEach(elem => {
        elem.classList.remove('hidden');
    });
    document.querySelectorAll('.keyTextUp').forEach(elem => {
        elem.classList.add('hidden');
    });
});

let shiftRight = document.querySelector('.ShiftRight');

shiftRight.addEventListener('mousedown', function(event) {
    document.querySelectorAll('.keyTextDown').forEach(elem => {
        elem.classList.add('hidden');
    });
    document.querySelectorAll('.keyTextUp').forEach(elem => {
        elem.classList.remove('hidden');
    });
});

shiftRight.addEventListener('mouseup', function(event) {
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
        event.preventDefault();
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
    if (event.code == 'Enter') {
        area.value + '\n';
    } else 
    if (event.code == 'AltLeft' || event.code == 'AltRight' || event.code == 'ControlLeft' || event.code == 'ControlRight' || event.code == 'MetaLeft') {
        event.preventDefault();
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



/********* Обработка мыши **********/



document.addEventListener('mousedown', function(event) {
    if (event.target.innerText == 'TAB') {
        area.value += '\t';
    } else
    if (event.target.innerText == 'Enter') {
        area.value += '\n';
    } else
    if (event.target.innerText == 'TAB') {
        area.value += '\t';
    } else 
    if (event.target.innerText == 'Backspace') {
        area.value = area.value.substring(0, area.value.length - 1) ;
    }
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
