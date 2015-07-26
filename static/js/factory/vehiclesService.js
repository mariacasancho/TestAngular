app.factory("vehiclesService", function($http){
 
    var _getVehicles = function(lvl){
        var temp = parking.GetVehicles(0);
        if (temp.length < 1){
            return temp;
        }else{
            return parking.GetVehicles(lvl);
        }

        
    };
 
    var _addNewVehicle = function(vehicle){
        //_vehicles.splice(0, 0, vehicle);
        parking.AddVehicle(vehicle);
    };

      var _removeVehicle = function(level, space){
        //_vehicles.splice(0, 0, vehicle);
        parking.RemoveVehicle(level, space);
    };
 
    return{
        getVehicles: _getVehicles,
        addNewVehicle: _addNewVehicle,
        removeVehicle: _removeVehicle
    };
});