var parking = function(){
   var levels = [];
   
   var getFreeSpace = function(){
        var j = 0,i = 0,
            position;
        while(position === undefined && j < levels.length){
            while(position === undefined && i < levels[j].spaces.length){
                if(levels[j].spaces[i] === 0){
                    position = i;
                }
                i++;
            }
            j++;
        } 
        return (position !== undefined)? {floor: j, space:position } : null;
    };

    var addVehicles = function(vehicles){
        for (i = 0; i < vehicles.length; ++i) {
          addVehicle(vehicles[i]);
        }
    }

    // we add a vehicle in the parking
   var addVehicle = function(vehicle){
        var freeSpace = getFreeSpace();
        if (freeSpace === null){
            console.log('No free places');
            return false;
        }else{
          console.log(vehicle.id + '- ' + freeSpace.floor + '- ' + freeSpace.space + '*' +vehicle.level);
          if (vehicle.level !== undefined){
            freeSpace.floor = vehicle.level;
            freeSpace.space = vehicle.slot;
          }else{
            vehicle.level = freeSpace.floor;
            vehicle.slot = freeSpace.space;
          }
            levels[freeSpace.floor-1].spaces[freeSpace.space] = vehicle;
            console.log('vehicle added sucessfully');
        }
     
   };

   // we remove a vehicle from the parking
   var removeVehicle = function(level, space){
     console.log(level + '- ' + space + '.'+levels[level].spaces[space] );
        if(level> 0 && space >= 0 && levels[level-1].spaces[space] !== 0){
            levels[level-1].spaces[space] = 0;
            console.log('removed');
        }else{
            console.log('it is not possible to remove the vehicle');
        }

   }

   //add next floor, if the floor added is not the next one, adds one random and call again this function
   var addLevel = function(numLevel, numSpaces){     
        // Check if is there the level that we are trying to add already
        if (!levels[numLevel-1]){
            var level = {};
            
            // we need to check if the level that we are adding is the next one or the first one
            if (numLevel === 1 || (levels[numLevel-2] !== undefined && levels[numLevel-2].floor === numLevel-1 )){
                
                level.floor = numLevel;
                level.spaces = initializeArray(numSpaces);

                levels.push(level);

            }else{
                // if it is not the next one, we create a new random one and we try to add it again

                level.floor = levels.length +1;
                level.spaces = new Array(numSpaces);

                levels.push(level);

                addLevel(numLevel, numSpaces);
            }
        }else{
            console.log('error');
        }
   };

   var initializeArray = function(num){
        var data = [];
        var length = num;

        for(var i = 0; i < length; i++) {
            data.push(0);
        } 

        return data;
   }
   
   //list of 1 level with 20 spaces and 2 level with 30 spaces [{1,20},{2,30}]
   var createParking = function(listLevelSpaces){
        if (listLevelSpaces !== null) {
            listLevelSpaces.map(function(lvl){
                addLevel(lvl.floor, lvl.numSpaces);
                });
        }
   };

   var getVehicles = function(level){
      var listvehicles = [];
      if (level === 0){
        levels.map(function(lvl){
          for(var i= 0; i< lvl.spaces.length; i++){
            if (lvl.spaces[i] != 0 && lvl.spaces[i] != undefined){
              listvehicles.push(lvl.spaces[i]);
            }
          }
        });
      }else{
        listvehicles = levels[level-1].spaces;
      }
      return listvehicles;
   };

   var getLevels = function(){
      var listLevels = [];
       for(var i= 0; i< levels.length; i++){
          listLevels.push(levels[i].floor);
       }
       return listLevels;
   };

   var init = function(){
    createParking([{floor:1, numSpaces:20},{floor:2,numSpaces:30},{floor:3,numSpaces:20}, {floor:4,numSpaces:10}]);
    $.getJSON("/js/data/vehicles.json", function(json) {
      console.log(json); // this will show the info it in firebug console
      parking.AddVehicles(json);
    });
   }()

  


   return {
      RemoveVehicle: removeVehicle,
      AddVehicles: addVehicles,
      AddVehicle: addVehicle,
      CreateParking: createParking,
      GetVehicles: getVehicles,
      GetLevels: getLevels,
      levels: levels
   }
}();