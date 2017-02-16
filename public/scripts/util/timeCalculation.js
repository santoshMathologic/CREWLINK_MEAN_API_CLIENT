/**
 * 
 *    This function is used to convert time from string to minutes
 *    @param timeString
 *    eg : (15:45 - >  945) 
 * 
 */

function timeToMinuts(time) {
    time = time.split(":");
    return parseInt(time[0]) * 60 + parseInt(time[1]);
}

function calculateDiffBetweenTwoTimes(startTime, startDay, endTime, endDay) {

    var totalDuration = 0;

    var departure = startTime.split(":");
    var depHour = $.trim(departure[0]);
    var depMin = $.trim(departure[1]);

    var arrival = endTime.split(":");
    var arrHour = $.trim(arrival[0]);
    var arrMin = $.trim(arrival[1]);

    var departureInMinutes = parseInt(depHour * 60) + parseInt(depMin);
    var arrivalInMinutes = parseInt(arrHour * 60) + parseInt(arrMin);


    var diffDayValue = endDay - startDay - 1;
    if (diffDayValue >= 0) {
        totalDuration = diffDayValue * 24 * 60 + 24 * 60 - departureInMinutes
            + arrivalInMinutes;
    } else if (diffDayValue == -1) {
        totalDuration = (arrivalInMinutes - departureInMinutes);
    } else {
        diffDayValue = Days.length - 1 - startDay + endDay;
        totalDuration = diffDayValue * 24 * 60 + 24 * 60 - departureInMinutes
            + arrivalInMinutes;
    }

    return totalDuration;
}

function minutestoHour(minutes) {
    var mins = Math.round(parseInt((((minutes / 60) % 1).toFixed(2).substring(2))) * 0.6);
    mins = (mins < 10) ? "0" + mins : mins;
    var hrs = Math.floor(minutes / 60);
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    return hrs + "h " + mins + "m";
}
function minutesToTimeFormat(minutes){
	var mins = Math.round(parseInt((((minutes/60) % 1).toFixed(2).substring(2)))*0.6);
	  mins = (mins<10)?"0"+mins:mins;
	var hrs = Math.floor(minutes/60);
	 hrs = (hrs<10)?"0"+hrs:hrs;
	  return hrs+":"+mins;
}
/**
 * This function is used to find out difference between two times with day
 */
function diffBetweenTwoTimes(time1,day1,time2,day2){
    var result = 0;
	time1 = timeToMinuts(time1);
    time2 = timeToMinuts(time2);

    if(day1 == day2){
        if(time1 < time2){
            result = time2-time1;
        }else if(time1 > time2){
            result = 6*24*60+time2+(24*60-time1);
        }else{
            result = 0;
        }
    }else if(day2>day1){
        result = (day2-day1-1)*24*60+(24*60-time1)+time2;
    }else{
        result = (6-day1+day2)*24*60+(24*60-time1)+time2;
    }
    return result;
}

/**
 * This function is used to find out difference between two times without day
 */
function diffTwoTimesWithoutDay(time1,time2){
	var result = 0;
	time1 = timeToMinuts(time1);
    time2 = timeToMinuts(time2);
    if(time1<=time2){
    	result = time2-time1;
    }else{
    	result = time2+1440-time1;
    }
    return result;
}