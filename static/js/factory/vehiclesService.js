app.factory("vehiclesService", function($http){
    var _vehicles = [];
 
    var _getVehicles = function(){
        $http.get("/js/data/vehicles.json")
            .then(function(results){
                //Success
                angular.copy(results.data, _vehicles); //this is the preferred; instead of $scope.movies = result.data
            }, function(results){
                //Error
            })
    }
 
    var _addNewVehicle = function(vehicle){
        _vehicles.splice(0, 0, vehicle);
    }
 
    return{
        vehicles: _vehicles,
        getVehicles: _getVehicles,
        addNewVehicle: _addNewVehicle
    };
});