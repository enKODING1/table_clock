var date_data = document.querySelectorAll('#date')
var item = document.querySelectorAll('.item');
var sec = document.querySelector('#sec');
let count = 0;

var days_list = [
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT'
];

var day = '';

function init() {
    window.requestAnimationFrame(setClock)

}

function setClock() {
    var now = new Date();

    var date = {
        year: now.getFullYear(),
        month: now.getMonth(),
        date: now.getDate(),
        day: now.getDay(),
        hours: now.getHours(),
        minuts: now.getMinutes(),
        sec: now.getSeconds()
    };

    showScreen(date);
    setDays(date.day);
    window.requestAnimationFrame(setClock)

}

function showScreen(date) {
    updateYear(date);
    updateMonth(date);
    updateDate(date);
    updateDay();
    updateHour(date);
    updateMin(date);
    updateSec(date);
}

function updateYear(date) {
    date_data[0].innerHTML = fillZero(date.year);
    return date_data[0].innerHTML;
}
function updateMonth(date) {
    date_data[1].innerHTML = fillZero(date.month + 1);
    return date_data[1].innerHTML;
}
function updateDate(date) {
    date_data[2].innerHTML = fillZero(date.date);
    return date_data[2].innerHTML;
}
function updateDay() {
    item[0].innerHTML = day;
    return item[0].innerHTML;
}
function updateHour(date) {
    item[1].innerHTML = fillZero(date.hours)
    return item[1].innerHTML;
}
function updateMin(date) {
    item[2].innerHTML = fillZero(date.minuts);
    return item[2].innerHTML;
}
function updateSec(date) {
    item[3].innerHTML = fillZero(date.sec)
    infiniteAni()
    return item[3].innerHTML;
}

//숫자가 한자리가 되면 앞에 0을 채워주는 함수
function fillZero(date) {
    var data = `${date < 10
        ? `0${date}`
        : `${date}`}`;
    return data;
}

function setDays(days) {

    switch (days) {
        case 0:
            day = days_list[0];
            break;
        case 1:
            day = days_list[1];
            break;
        case 2:
            day = days_list[2];
            break;
        case 3:
            day = days_list[3];
            break;
        case 4:
            day = days_list[4];
            break;
        case 5:
            day = days_list[5];
            break;
        case 6:
            day = days_list[6];
            break;
        default:
            console.log('error');
            break;
    }
}
function infiniteAni(dom) {
    dom.style.animation = '1s trans infinite';
}

window.onload = () => {
    init()
}