const returnFirstTwoDrivers = (drivers)=>{
       return [drivers[0],drivers[1]]
}
const returnLastTwoDrivers=(drivers)=>{
    return [drivers[drivers.length-2],drivers[drivers.length-1]]
}
 const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

 const createFareMultiplier=(fare)=>(
    function(integer){
       return  integer*fare
    }
 )

 const fareDoubler = (createFareMultiplier) => {
   return  createFareMultiplier * 2 
 }
 const fareTripler = (createFareMultiplier) => {
    return  createFareMultiplier * 3
  }

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
}  
