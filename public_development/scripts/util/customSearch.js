'use strict';


/**
 *  String UseFull Functions
 */
String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1, this.length);
}
String.prototype.subsidizeFirstLetter = function () {
    return this.charAt(0).toLowerCase() + this.slice(1, this.length);
}
String.prototype.isEmpty = function () {
    return (this.length === 0 || !this.trim());
};

var Days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];



function getDayById(day) {
    if (Number.isInteger(day))
        return day;
    var dayI = -1;
    for (var i = 0; i < this.Days.length; i++) {
        if (Days[i] == day) {
            dayI = i;
            break;
        }
    }
    return dayI;
}

function differenceTimeObject(fromTimeObject, toTimeObject, units) {

    if (fromTimeObject.day == null || fromTimeObject.time == null)
        return null;
    if (toTimeObject.day == null || toTimeObject.time == null)
        return null;

    var fromDayI = getDayById(fromTimeObject.day);
    //console.log(fromDayI);
    if (fromDayI == -1) {
        return null;
    }

    var toDayI = getDayById(toTimeObject.day);
    if (toDayI == -1) {
        return null;
    }
    var diffDays = toDayI - fromDayI;
    if (diffDays < 0) {
        diffDays = 7 + diffDays;
    } else {
        diffDays = Math.abs(diffDays);
    }

    var fromDate = new Date("1/" + 1 + "/2012 " + fromTimeObject.time);
    var toDate = new Date("1/" + (1 + diffDays) + "/2012 " + toTimeObject.time);
    return Difference_bwt_date(fromDate, toDate, units);

}

/**
 *    Calculate Difference between two dates
 */
function Difference_bwt_date(fromDate, toDate, units) {

    var one = fromDate;
    var two = toDate;
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var millisecondsPerHour = 1000 * 60 * 60;
    var millisecondsPerMinute = 1000 * 60;
    var millisecondsPerSecond = 1000;
    var diffSec = two.getSeconds() - one.getSeconds();
    var millisBetween = two.getTime() - one.getTime();
    if (millisBetween < 0) {
        millisBetween = (millisecondsPerDay * 7) + millisBetween;
    }


    var result = null;
    switch (units.toLowerCase()) {

        case 'days':
        case 'day':

            result = Math.floor(millisBetween / millisecondsPerDay);
            break;
        case 'hours':
        case 'hours':
        case 'hr':
        case 'hrs':
            result = Math.floor(millisBetween / millisecondsPerHour);
            break;

        case 'minutes':
        case 'minute':
        case 'min':
        case 'mins':
            result = Math.floor(millisBetween / millisecondsPerMinute);
            break;
        case 'seconds':
        case 'second':
        case 'sec':
        case 'secs':
            result = Math.floor(millisBetween / millisecondsPerSecond);
            break;
        default: result = null;

    }
    return result;


}

/**
 *    Calculate Time between two different Times
 */
function calTime(day,time,duration,operation){
var initDate = new Date("1/1/2012 " + time);
	var resultDate = null;
	var diffDays = null;
	switch(operation.toLowerCase()){
	case '+': case 'add': case 'addition': resultDate = dateAdd(initDate,'minute',duration);
	 		
		break;
	case '-': case 'sub': case 'substraction': resultDate = dateSub(initDate,'minute',duration);
		break;
	default : return null;
	}
	var dayI = getDayId(day);
	
	if(dayI == -1){
		return null;
	}
	diffDays = daysBetween(initDate,resultDate);
	//console.log("diffDays " +diffDays);
	var resultObj = {
			day : Days[(dayI+diffDays)%7],
			time: ((resultDate.getHours()<10)?'0':'')+resultDate.getHours() + ":" +((resultDate.getMinutes()<10)?'0':'') + resultDate.getMinutes()
	}
	return resultObj

}

function daysBetween(first, second) {

    // Copy date parts of the timestamps, discarding the time parts.
    var one = new Date(first.getFullYear(), first.getMonth(), first.getDate());
    var two = new Date(second.getFullYear(), second.getMonth(), second.getDate());

    // Do the math.
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var millisBetween = two.getTime() - one.getTime();
    var days = millisBetween / millisecondsPerDay;

    // Round down.
    return Math.floor(days);
}


function dateAdd(date, interval, units) {
	  var ret = new Date(date); //don't change original date
	  switch(interval.toLowerCase()) {
	    case 'year'   :  ret.setFullYear(ret.getFullYear() + units);  break;
	    case 'quarter':  ret.setMonth(ret.getMonth() + 3*units);  break;
	    case 'month'  :  ret.setMonth(ret.getMonth() + units);  break;
	    case 'week'   :  ret.setDate(ret.getDate() + 7*units);  break;
	    case 'day'    :  ret.setDate(ret.getDate() + units);  break;
	    case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
	    case 'minute' :  ret.setTime(ret.getTime() + units*60000);  break;
	    case 'second' :  ret.setTime(ret.getTime() + units*1000);  break;
	    default       :  ret = undefined;  break;
	  }
	  return ret;
	}
function dateSub(date, interval, units) {
	  var ret = new Date(date); //don't change original date
	  switch(interval.toLowerCase()) {
	    case 'year'   :  ret.setFullYear(ret.getFullYear() - units);  break;
	    case 'quarter':  ret.setMonth(ret.getMonth() - 3*units);  break;
	    case 'month'  :  ret.setMonth(ret.getMonth() - units);  break;
	    case 'week'   :  ret.setDate(ret.getDate() - 7*units);  break;
	    case 'day'    :  ret.setDate(ret.getDate() - units);  break;
	    case 'hour'   :  ret.setTime(ret.getTime() - units*3600000);  break;
	    case 'minute' :  ret.setTime(ret.getTime() - units*60000);  break;
	    case 'second' :  ret.setTime(ret.getTime() - units*1000);  break;
	    default       :  ret = undefined;  break;
	  }
	  return ret;
	}

    function calculateDurationBetweenTwoTimes(startTimeObj,endTimeObj)
{
	var endDayValue=getDayId(endTimeObj.endDay);
	var startDayValue=getDayId(startTimeObj.startDay);
	var counter=0;
	if(endDayValue<startDayValue)
		{
			counter = endDayValue-startDayValue;
		}
	else
		{
			for(var i=endDayValue;i<Days.length;i++)
				{
					++counter;
				}
			for(var i=0;i<startDayValue-1;i++)
				{
					++counter;
				}
		}
	return counter;
}


function calDiffBetweenTwoTimes(object)
{
		console.log(object);
	  var departure;
	  var arrival;
	  var startingDayValue,startingTime;
	  var endDayValue,endTime;
	  var diffDayValue;
	  var totalDuration=0;
	 
	  
	  departure = object.startTime.split(':')
	  var depHour = $.trim(departure[0]);
	  var depMin = $.trim(departure[1]);
	  
	  
	  arrival = object.arrival.split(':')
	  var arrHour = $.trim(arrival[0]);
	  var arrMin = $.trim(arrival[1]);
	
	  var departureInMin = parseInt(depHour * 60) + parseInt(depMin);
	  var arrivalInMin = parseInt(arrHour * 60) + parseInt(arrMin);
	  
	  console.log("departureInMin " +departureInMin+"arrivalInMin " +arrivalInMin);
	  if(object.endDay==0)
		  diffDayValue = object.startDay-1;
	  else
		if(object.startDay==0)
			 diffDayValue = 7- object.startDay-1;
		else
			diffDayValue = object.startDay-object.endDay -1;
	  
	  
		console.log("object.endDay " +object.endDay+"object.startDay "+object.startDay);
		
	  console.log("diffDayValue " +diffDayValue);
	  if(diffDayValue>=0)
	  {
		  totalDuration = diffDayValue * 24*60 + 24*60 - departureInMin + arrivalInMin;
	  }
	  else if(diffDayValue==-1)
	  {
		  totalDuration = (departureInMin-arrivalInMin);
	  }
	  else
	  {
		  diffDayValue = Days.length-1-object.startDay+object.endDay;
		  totalDuration = diffDayValue*24*60 + 24*60 - departureInMin+
		  arrivalInMin;
	  }
	
	  return totalDuration;
}
function calDiff(arrivalObject,departureObject)
{
	var startingDayValue, startingTime, startingTimeTest;
	var endDayValue, endTime;
	var diffDayValue;
	var outStationRest;
	var totalDistance = 0;
	var totalDuration = 0;
	var totalOSDuration = 0;

	startingTime = departureObject.departureTime;
	endTime = arrivalObject.arrivalTime;
	/*startingDayValue = getDayId(departureObject.startDay);
	endDayValue = getDayId(arrivalObject.startDay );
	*/
	/*var totalOsSignOnOff = parseInt(departureObject._ref.fromStation.outStationSignOnDuration)
			+ parseInt(arrivalObject._ref.toStation.outStationSignOffDuration);*/
	
	diffDayValue = departureObject.departureDay - arrivalObject.arrivalDay - 1;

	var departureTime = [];
	departureTime = departureObject.departureTime.split(':')
	var hourStarting = $.trim(departureTime[0]);
	var minStarting = $.trim(departureTime[1]);
	var departureInMin = parseInt(hourStarting) * 60
			+ parseInt(minStarting);

	var arrivalTime = [];
	arrivalTime = arrivalObject.arrivalTime.split(':')
	var hourEnd = $.trim(arrivalTime[0]);
	var minEnd = $.trim(arrivalTime[1]);
	var arrivalInMin = parseInt(hourEnd) * 60 + parseInt(minEnd);

	
	if (diffDayValue >= 0 || diffDayValue == -1) {
		
		if(diffDayValue == -1){
			outStationRest = arrivalInMin - departureInMin;
			/*if(outStationRest>=totalOsSignOnOff)
				outStationRest = outStationRest - totalOsSignOnOff;*/
			outStationRest=Math.abs(outStationRest);
			console.log("1 " +outStationRest)
		}
		else
		{
			outStationRest = diffDayValue * 24 * 60 + 24 * 60
					- arrivalInMin + departureInMin;
			console.log("2 " +outStationRest)
		}
	} else {
				if(departureObject.departureDay==0)
							diffDayValue= 7-arrivalObject.arrivalDay-1;
				else if(arrivalObject.arrivalDay==0)
					diffDayValue=departureObject.departureDay;
				else
					diffDayValue = 6- arrivalObject.arrivalDay + departureObject.departureDay;
		//diffDayValue = Days.length - 1 - departureObject.departureDay + arrivalObject.arrivalDay;
		outStationRest = diffDayValue * 24 * 60 + 24 * 60
				- arrivalInMin + departureInMin;
		console.log("3 " +outStationRest)
	}

	return outStationRest;
		
}