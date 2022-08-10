function returnFirstTwoDrivers(drivers) {
    const firstDrivers = drivers.slice(0, 2);    
        return firstDrivers;
}


function returnLastTwoDrivers(drivers) {
    const lastDrivers = drivers.slice(2); 
        return lastDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function selectingDrivers() {
//     const a1 = returnFirstTwoDrivers; 
//     console.log(a1);
//     console.log(a1())
//     console.log(a1()[0])
//     const combine = [a1, returnLastTwoDrivers]
//         return combine;
// }


//Next two functions are combined and returned to create a Higher function
function createFareMultiplier() {
    return quintifier 
 }
   
function quintifier(num) {
    return num * 5;
}

//console.log(createFareMultiplier()(7));

//A function that doubles fares
function fareDoubler(num) {
    return num * 2;
}

//A function that triples fares
function fareTripler(num) {
    return num * 3;
}

function selectDifferentDrivers(arrayOfDrivers, inputFunction) {    
    return inputFunction(arrayOfDrivers);
}



function add(x){
    return x + 1;
}

console.log(add());