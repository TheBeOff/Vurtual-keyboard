/*const words1 = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'];
const classKey1 = ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace'];
const classKey2 = ['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash'];
const classKey3 = ['CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Qoute','Enter'];
const classKey4 = ['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight'];
const classKey5 = ['ControlLeft','MetaLeft','AltLeft','Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight'];

let div_wrapper = document.createElement('div');
let div_row;
let span_key;
let span_key_down;

div_wrapper.classList.add('keyboard-wrapper');

document.body.append(div_wrapper);

function createKeyRow(num) {
    for(var i = 0; i < num; i++) {
        div_row = document.createElement('div');
        div_row.classList.add('keyboard-row');
        div_wrapper.append(div_row);
        if (i == 0) {
            createKey(14, classKey1);
        } else
        if (i == 1) {
            createKey(14, classKey2);
        } else
        if (i == 2) {
            createKey(13, classKey3);
        } else 
        if (i == 3) {
            createKey(13, classKey4);
        } else 
        if (i == 4) {
            createKey(9, classKey5);
        };
        
    }
};
createKeyRow(5);

function createKey(num, name) {        
    for(var i = 0; i < num; i++) {
        span_key = document.createElement('span');
        span_key.classList.add(name[i]);
        span_key.classList.add('key');
        div_row.append(span_key);
        createKeyDown();
    }
};

function createKeyDown() {
    span_key_down = document.createElement('span');
    span_key_down.classList.add('keyTextDown');
    span_key.append(span_key_down);
};*/


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
