module.exports = {
  
  hasEnoughGas: function(car, route){
    var route = route, 
        car = car, 
        inRange;
    route.miles > car.milesPerGallon * car.gallonsInTank ? inRange = false : inRange = true;
    return inRange;
  }

}