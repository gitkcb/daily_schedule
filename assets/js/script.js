
let date = moment();
$('#currentDay').text(date.format('MMMM Do YYYY, h:mm:ss a'));
let timeBlocks = $(".time-block");
let hour = moment().format('H')
console.log(hour); 
function timeBlockColor(){
    timeBlocks.each(function(){
        let thisBlock = $(this);
        let thisBlockHour = parseInt(thisBlock.attr('data-hour'));
    
    if(thisBlockHour == hour){
        thisBlock.addClass('present').removeClass('past future');
    }
    else if(thisBlockHour < hour){
        thisBlock.addClass('past').removeClass('present future');

    }else if(thisBlockHour > hour){
        thisBlock.addClass('future').removeClass('past present');
    }
});

}
timeBlockColor();

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





