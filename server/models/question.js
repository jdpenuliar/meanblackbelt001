var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
		questionerId: {type: String, required: true},
		questionerName: {type: String, required: true},
		question: {type: String, required: true, minlength: 10},
		questionDescription: {type: String, required: true},
		answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
	}, {timestamps: true });
mongoose.model('Question', QuestionSchema);