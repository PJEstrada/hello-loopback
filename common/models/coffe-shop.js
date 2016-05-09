module.exports = function(CoffeShop) {
	CoffeShop.status = function(cb){
		var currentDate = new Date();
		var currentHour = currentDate.getHours();
		var OPEN_HOUR = 6;
		var CLOSE_HOUR = 20;
		console.log('Current Hour is '+currentHour);
		var response;
		if(currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR){
			response = 'We are open for business';

		}
		else{
			response = 'Sorry we are closed. Open daily from 6am to 8pm';

		}
		cb(null,response);
  }

  CoffeShop.getName = function(shopId, cb){
    CoffeShop.findById(shopId,function(err,instance){
        response = "Name of coffe shop is: "+instance.name;
        cb(null,response);
        console.log(response);

    });
  }

	CoffeShop.remoteMethod(
		'status',
		{

			http: {path: '/status', verb: 'get'},
			returns: {arg: 'status', type: 'string'}

		}
	);

  CoffeShop.remoteMethod(
    'getName',
    {
      http:{path:'/getname', verb: 'get'},
      accepts: {arg: 'id', type:'number',http:{source:'query'}},
      return: {arg:'name', type:'string'}
    }


  );
};
