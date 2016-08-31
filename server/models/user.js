var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
		// userName: {type: String, minlength: 5, required: true}
		userName: {type: String, required: true},
		userLoginStatus: {type: String, required: true}
	}, {timestamps: true });
mongoose.model('User', UserSchema);