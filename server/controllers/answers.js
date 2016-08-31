var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = (function(){
	return {
		index: function(req, res){
			var new_comment = new Answer(req.body);
			Question.findOne({_id: req.params.id}, function(err, data){
				if(err){
					res.send('errors');
				}else{
					Answer.find({question: req.params.id}, function(err, data){
						if(err){
							res.send('errors');
						}else{
							res.json(data);
						}
					})
				}
			});
		},
		create: function(req, res){
			Question.findOne({_id: req.params.id}, function(err, question_from_db){
				var new_answer = new Answer({answereeId: req.body.activeUser.data._id, answereeName: req.body.activeUser.data.userName, answer: req.body.answer, answerDescription: req.body.answerDescription, answerLikes: 0, question: req.body.questionId.id});
				question_from_db.answers.push(new_answer);
				new_answer.save(function(err){
					if(err){
						console.log("something went wrong",err.message);
						res.json(err);
					}else{
						question_from_db.save(function(err,data){
							if(err){
								console.log("something went wrong",err.message);
								res.json(err);
							}else{
								console.log('successfully added a hahha!\n',data);
								res.json(data);
							}
						});
					}
					
				});
			});
		},
		like: function(req, res){
			Answer.findOne({_id: req.params.id}, function(err, data){
				if(err){
					res.send('errors');
				}else{
					console.log("---------------------controller\n",data);
					data.answerLikes += 1;
					data.save(function(err,data){
						if(err){
							console.log("something went wrong",err.message);
							res.json(err);
						}else{
							console.log('successfully updated a hahha!\n',data);
							res.json(data);
						}
					});
				}
			});
		}
	}
})();