// Code your solution in this file!
function returnFirstTwoDrivers(data){
    return data.slice(0,2);
}

function returnLastTwoDrivers(data){
    return data.slice(data.length-2, data.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    return fare => fare*x;
}

function fareDoubler(fare){
    const fxn =  createFareMultiplier(2);
    return fxn(fare);
}

function fareTripler(fare){
    const fxn =  createFareMultiplier(3);
    return fxn(fare);
}

function selectDifferentDrivers(drivers, fxn){
    return fxn(drivers);
}