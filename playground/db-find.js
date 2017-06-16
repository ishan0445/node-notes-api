const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to the database');
	}

	console.log('Connected to the database..');

	// db.collection('notes').find({
	// 	_id: new ObjectID('5943eede51533d030659b72b')
	// }).toArray().then((docs) => {
	// 	console.log(JSON.stringify(docs,undefined,2));
	// }, (err) => {
	// 	if(err)
	// 		console.log('Unable to fetch notes');
	// });

	// db.collection('notes').find().count().then((count) => {
	// 	console.log(`Notes count: ${count}`);
	// }, (err) => {
	// 	if(err)
	// 		console.log('Unable to fetch notes');
	// });

	db.collection('users').find({
		name: 'Anjali'
	}).count().then((count) => {
		console.log(`Notes count: ${count}`);
	}, (err) => {
		if(err)
			console.log('Unable to fetch notes');
	});

	// db.close();
});
