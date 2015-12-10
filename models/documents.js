var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var mainSchema = new Schema({
	file: {
		name: String,
		size: Number,
		link: String
	},
	uploaded: Boolean
});

module.exports = mongoose.model('Users', mainSchema, 'documents');