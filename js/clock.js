var date_data = document.querySelectorAll('#date')
var item = document.querySelectorAll('.item');

var days_list = [
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT',
    'SUN'
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
    //date.day 는 1~7 == 월 ~ 일
    setDays(date.day);
    window.requestAnimationFrame(setClock)

}

function showScreen(date) {
    date_data[0].innerHTML = fillZero(date.year);
    date_data[1].innerHTML = fillZero(date.month + 1);
        
    date_data[2].innerHTML = fillZero(date.date);
    item[0].innerHTML = day;
    item[1].innerHTML = fillZero(date.hours)
    item[2].innerHTML = fillZero(date.minuts);
    item[3].innerHTML = fillZero(date.sec)
}

//숫자가 한자리가 되면 앞에 0을 채워주는 함수
function fillZero(date){
    var data = `${date < 10 ? `0${date}` : `${date}`}`;
    return data;
}

function setDays(days) {

    switch (days) {
        case 1:
            day = days_list[0];
            break;
        case 2:
            day = days_list[1];
            break;
        case 3:
            day = days_list[2];
            break;
        case 4:
            day = days_list[3];
            break;
        case 5:
            day = days_list[4];
            break;
        case 6:
            day = days_list[5];
            break;
        case 7:
            day = days_list[6];
            break;
        default:
            console.log('error');
            break;
    }
}

init()