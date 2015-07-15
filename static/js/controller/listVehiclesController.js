app.controller('listVehiclesController', ['$scope','vehiclesService', function ($scope, vehiclesService) {
 
 console.log('chatiiii');
             $scope.vehicles = vehiclesService.vehicles;

vehiclesService.getVehicles();

    $scope.addNewVehicle = function(vehicleName){
    	console.log('addinggg');
        var vehicle = {id: vehicleName};
        vehiclesService.addNewVehicle(vehicle);
    }

}]);