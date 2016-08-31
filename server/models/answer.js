var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
		answereeId: {type: String, required: true},
		answereeName: {type: String, required: true},
		answer: {type: String, required: true, minlength: 10},
		answerDescription: {type: String, required: true},
		answerLikes: {type: Number, required: true},
		question: {type: Schema.Types.ObjectId, ref: 'Question'}
	}, {timestamps: true });
mongoose.model('Answer', AnswerSchema);