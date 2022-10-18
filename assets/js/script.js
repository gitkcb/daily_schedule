
let time = moment();
$('#currentDay').text(time.format('MMMM Do YYYY, h:mm:ss a'));

/*var scheduleHourNine = $('#hour9');
var buttonNine = $('#btnhour9');
function saveHourNine(){
    let scheduleHourNine = scheduleHourNine.value.trim();
    localStorage.setItem("scheduleHourNine", JSON.stringify(saveHourNine));
}
function renderHourNine(){
    var onScheduleNine = JSON.parse(localStorage.getItem('scheduleHourNine'));
    if(onScheduleNine!== null){
        scheduleHourNine.innerHTML = onScheduleNine;
    }else{
        return;
    }
}
function clickButtonNine(){
    preventDefault();
    saveHourNine();
    renderHourNine();
}
buttonNine.onclick= clickButtonNine;
function init(){
    renderHourNine();
}
init();*/





