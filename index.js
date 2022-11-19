function returnFirstTwoDrivers(drivers) {
    const firstDrivers = drivers.slice(0, 2);    
        return firstDrivers;
}


const returnLastTwoDrivers = (drivers) => {
    const lastDrivers = drivers.slice(2); 
        return lastDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(int) {
  
    const totalPrice = function(fare) {
      return int * fare  
    }
  
    return totalPrice
}


const fareDoubler = fare => fare * 2


const fareTripler = fare => fare * 3


const selectDifferentDrivers = (arrayOfDrivers, inputFunc) => {
  return inputFunc(arrayOfDrivers)
}




    //Code that works, but I don't favor it
// function createFareMultiplier() {
//     return quintifier 
//  }
   
// function quintifier(num) {
//     return num * 5;
// }

// //A function that doubles fares
// function fareDoubler(num) {
//     return num * 2;
// }

// //A function that triples fares
// function fareTripler(num) {
//     return num * 3;
// }

// function selectDifferentDrivers(arrayOfDrivers, inputFunction) {    
//     return inputFunction(arrayOfDrivers);
// }