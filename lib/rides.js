module.exports = {
  isTallEnough : function(child, ride){
    var child = child,
        ride = ride;
    return child.height < ride.minHeight ? false : true;
  }
}