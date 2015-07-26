app.controller('listVehiclesController', ['$scope','vehiclesService', function ($scope, vehiclesService) {
 
 console.log('chatiiii');
             $scope.vehicles = vehiclesService.getVehicles(0);

    $scope.addNewVehicle = function(vehicleName){
    	console.log('addinggg');
        var vehicle = {id: vehicleName};
        vehiclesService.addNewVehicle(vehicle);
        $scope.vehicles = vehiclesService.getVehicles(0);

    };

    $scope.removeVehicle = function(level,space){
    	console.log('remove' + level + '_' + space);
    	vehiclesService.removeVehicle(level, space);
    	$scope.vehicles = vehiclesService.getVehicles(0);
	};

}]);