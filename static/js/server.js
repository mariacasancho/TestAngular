var server = function(document, window){
	var init, generateVehicle, makeid;

	init = function(){
		var list = new Array();
		for (var i = 0; i < 10 ; i++){
			list.push(generateRandomVehicle());
		}
		return list;
	}

	makeid = function(){
	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	    for( var i=0; i < 7; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));

	    return text;
	};

	generateRandomVehicle = function(){
		return vehicle = {
			id: makeid(),
			type: Math.random() > 0.5 ? "Car" : "Motorbike" ,
			level: Math.floor(Math.random() * 4) + 1 ,
			slot: Math.floor(Math.random() * 25) + 1 

		}

	};

	return {
			Init: init
		};

}(document, window);
