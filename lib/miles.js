module.exports = {
  
  hasEnoughGas: function(car, route){
    var route = route, 
        car = car; 
    return route.miles > car.milesPerGallon * car.gallonsInTank ? false : true;
  }

}