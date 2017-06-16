// const MongoClient = require('mongodb').MongoClient;
// Object Destructuring:
const { MongoClient, ObjectID } = require('mongodb')


// To generate new id:
// var obj = new ObjectID();
// consolelog(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to the database');
	}

	console.log('Connected to the database..');

	/*
	db.collection('Todos').insertOne({
		text: 'Things to do',
		completed: false
	}, (err, result) => {
		if(err)
			return console.log('Unable to insert into the database: ',err);
		console.log(results.ops);

	});
	*/

	/*
	db.collection('Users').insertOne({
		name: 'Anjali Pandey',
		age: 23,
		location: 'TCS-Mumbai'
	}, (err, result) => {
		if(err)
			return console.log('Unable to insert into the database: ',err);
		console.log(result.ops);

		// To get timestamp from the objectID:
		console.log(result.ops[0]._id.getTimestamp());
	});
	*/


	db.close();
});
