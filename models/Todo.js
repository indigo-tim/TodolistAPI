// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var todoSchema = new Schema({
	name: String,
	label: String,
	category: String,
	dueDate: Number,
	status: String,
	notes: String
});

// the schema is useless so far
// we need to create a model using it
var todos = mongoose.model('todos', todoSchema);

// make this available to our users in our Node applications
module.exports = todos;