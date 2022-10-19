
let date = moment();
$('#currentDay').text(date.format('MMMM Do YYYY'));
let timeBlocks = $(".time-block");
let hour = moment().format('H')
console.log(hour);
//Function that changes color blocks with the current time.
function timeBlockColor() {
    timeBlocks.each(function () {
        let thisBlock = $(this);
        let thisBlockHour = parseInt(thisBlock.attr('data-hour'));

        if (thisBlockHour == hour) {
            thisBlock.addClass('present').removeClass('past future');
        }
        else if (thisBlockHour < hour) {
            thisBlock.addClass('past').removeClass('present future');

        } else if (thisBlockHour > hour) {
            thisBlock.addClass('future').removeClass('past present');
        }
    });

}
timeBlockColor();
//Hour Nine

let hourNine = $('#hournine');
var buttonNine = $('#btnhournine');

function saveHourNine() {
    let time = $("#hournine").attr('data-hour');
    let scheduleHourNine = $('#hournine').val();
    localStorage.setItem(time, scheduleHourNine);
    renderHourNine();
}
function renderHourNine() {
    let toDoHourNine = JSON.parse(localStorage.getItem('scheduleHourNine'));
    if (toDoHourNine !== null) {
        document.getElementById('hournine').textContent = scheduleHourNine.todo;
    } else {
        return;
    }
}
buttonNine.on('click', function () {
    saveHourNine();
    renderHourNine();
})
$('#hournine').val(localStorage.getItem('9'));

/*Hour ten*/
let hourten = $('#hourten');
var buttonten = $('#btnhourten');

function saveHourTen() {
    let time = $("#hourten").attr('data-hour');
    let scheduleHourTen = $('#hourten').val();
    localStorage.setItem(time, scheduleHourTen);
    renderHourTen();
}
function renderHourTen() {
    let toDoHourTen = JSON.parse(localStorage.getItem('scheduleHourTen'));
    if (toDoHourTen !== null) {
        document.getElementById('hourten').textContent = scheduleHourTen.todo;
    } else {
        return;
    }
}
buttonten.on('click', function () {
    saveHourTen();
    renderHourTen();
})
$('#hourten').val(localStorage.getItem('10'));

//Hour eleven
let houreleven = $('#houreleven');
var buttoneleven = $('#btnhoureleven');

function saveHourEleven() {
    let time = $("#houreleven").attr('data-hour');
    let scheduleHourEleven = $('#houreleven').val();
    localStorage.setItem(time, scheduleHourEleven);
    renderHourEleven();
}
function renderHourEleven() {
    let toDoHourEleven = JSON.parse(localStorage.getItem('scheduleHourEleven'));
    if (toDoHourEleven !== null) {
        document.getElementById('houreleven').textContent = scheduleHourEleven.todo;
    } else {
        return;
    }
}
buttoneleven.on('click', function () {
    saveHourEleven();
    renderHourEleven();
})
$('#houreleven').val(localStorage.getItem('11'));
//hour twelve 
let hourtwelve = $('#hourtwelve');
var buttontwelve = $('#btnhourtwelve');

function saveHourTwelve() {
    let time = $("#hourtwelve").attr('data-hour');
    let scheduleHourTwelve = $('#hourtwelve').val();
    localStorage.setItem(time, scheduleHourTwelve);
    renderHourTwelve();
}
function renderHourTwelve() {
    let toDoHourTwelve = JSON.parse(localStorage.getItem('scheduleHourTwelve'));
    if (toDoHourTwelve !== null) {
        document.getElementById('hourtwelve').textContent = scheduleHourTwelve.todo;
    } else {
        return;
    }
}
buttontwelve.on('click', function () {
    saveHourTwelve();
    renderHourTwelve();
})
$('#hourtwelve').val(localStorage.getItem('12'));

//thirteen
let hourthirteen = $('#hourthirteen');
var buttonthirteen = $('#btnhourthirteen');

function saveHourThirteen() {
    let time = $("#hourthirteen").attr('data-hour');
    let scheduleHourThirteen = $('#hourthirteen').val();
    localStorage.setItem(time, scheduleHourThirteen);
    renderHourThirteen();
}
function renderHourThirteen() {
    let toDoHourThirteen = JSON.parse(localStorage.getItem('scheduleHourThirteen'));
    if (toDoHourTwelve !== null) {
        document.getElementById('hourthirteen').textContent = scheduleHourThirteen.todo;
    } else {
        return;
    }
}
buttonthirteen.on('click', function () {
    saveHourThirteen();
    renderHourThirteen();
})
$('#hourthirteen').val(localStorage.getItem('13'));
// hour fourteen
let hourfourteen = $('#hourfourteen');
var buttonfourteen = $('#btnhourfourteen');

function saveHourFourteen() {
    let time = $("#hourfourteen").attr('data-hour');
    let scheduleHourFourteen = $('#hourfourteen').val();
    localStorage.setItem(time, scheduleHourFourteen);
    renderHourFourteen();
}
function renderHourFourteen() {
    let toDoHourFourteen = JSON.parse(localStorage.getItem('scheduleHourFourteen'));
    if (toDoHourFourteen !== null) {
        document.getElementById('hourfourteen').textContent = scheduleHourFourteen.todo;
    } else {
        return;
    }
}
buttonfourteen.on('click', function () {
    saveHourFourteen();
    renderHourFourteen();
})
$('#hourfourteen').val(localStorage.getItem('14'));
//hour fifteen

let hourfifteen = $('#hourfifteen');
var buttonfifteen = $('#btnhourfifteen');

function saveHourFifteen() {
    let time = $("#hourfifteen").attr('data-hour');
    let scheduleHourFifteen = $('#hourfifteen').val();
    localStorage.setItem(time, scheduleHourFifteen);
    renderHourFifteen();
}
function renderHourFifteen() {
    let toDoHourFifteen = JSON.parse(localStorage.getItem('scheduleHourFifteen'));
    if (toDoHourFifteen !== null) {
        document.getElementById('hourfifteen').textContent = scheduleHourFifteen.todo;
    } else {
        return;
    }
}
buttonfifteen.on('click', function () {
    saveHourFifteen();
    renderHourFifteen();
})
$('#hourfifteen').val(localStorage.getItem('15'));
//hour 16
let hoursixteen = $('#hoursixteen');
var buttonsixteen = $('#btnhoursixteen');

function saveHourSixteen() {
    let time = $("#hoursixteen").attr('data-hour');
    let scheduleHourSixteen = $('#hoursixteen').val();
    localStorage.setItem(time, scheduleHourSixteen);
    renderHourSixteen();
}
function renderHourSixteen() {
    let toDoHourSixteen = JSON.parse(localStorage.getItem('scheduleHourSixteen'));
    if (toDoHourSixteen !== null) {
        document.getElementById('hoursixteen').textContent = scheduleHourSixteen.todo;
    } else {
        return;
    }
}
buttonsixteen.on('click', function () {
    saveHourSixteen();
    renderHourSixteen();
})
$('#hoursixteen').val(localStorage.getItem('16'));
//hour seventeen
let hourseventeen = $('#hourseventeen');
var buttonseventeen = $('#btnhourseventeen');

function saveHourSeventeen() {
    let time = $("#hourseventeen").attr('data-hour');
    let scheduleHourSeventeen = $('#hourseventeen').val();
    localStorage.setItem(time, scheduleHourSeventeen);
    renderHourSeventeen();
}
function renderHourSeventeen() {
    let toDoHourSeventeen = JSON.parse(localStorage.getItem('scheduleHourSeventeen'));
    if (toDoHourSeventeen !== null) {
        document.getElementById('hourseventeen').textContent = scheduleHourSeventeen.todo;
    } else {
        return;
    }
}
buttonseventeen.on('click', function () {
    saveHourSeventeen();
    renderHourSeventeen();
})
$('#hourseventeen').val(localStorage.getItem('17'));
