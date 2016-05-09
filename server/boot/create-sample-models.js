module.exports = function(app){
	app.dataSources.postgres.automigrate('CoffeShop', function(err){
		if(err) throw err;
		
		app.models.CoffeShop.create([
		{name: 'Bel Cafe', city: 'Vancouver'},
		{name: 'Three Bees Coffe House', city: 'San Mateo'},
		{name: 'Caffe Artigano', city: 'Vancouver'},
		], function(err, coffeeShops){
			if(err) throw err;
			
			console.log('Models created: \n', coffeeShops);
		});
	});
};