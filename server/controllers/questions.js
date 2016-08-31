var mongoose = require("mongoose");
var Question = mongoose.model("Question");
module.exports = (function(){
	return{
		index:function(req,res){
			Question.find({},function(err,data){
				if(err){
					console.log(err);
				}else{
					res.json(data);
				}
			});
		},
		create:function(req,res){
			var question = new Question({questionerId: req.body.activeUser.data._id, questionerName: req.body.activeUser.data.userName, question: req.body.question, questionDescription: req.body.questionDescription});
			question.save(function(err,data){
				if(err){
					console.log("something went wrong",err.message);
					res.json(err);
				}else{
					console.log('successfully added a hahha!\n',data);
					res.json(data);
				}
			});
		},
		delete:function(req,res){
			Question.findOne({_id: req.params.id},function(err,data){
				if(err){
					console.log(err);
				}else{
					Question.remove({_id: data._id}, function(err,data){
						if (err){
							console.log(err);
						}else{
							res.json(data);
						}
					});
				}
			});
		},
		findSpecificQuestion:function(req,res){
			Question.findOne({_id: req.params.id},function(err,data){
				if(err){
					console.log(err);
				}else{
					res.json(data);
				}
			});
		},
	}
})();