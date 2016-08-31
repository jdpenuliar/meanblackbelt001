var mongoose = require("mongoose");
var User = mongoose.model("User");
module.exports = (function(){
	return{
		index:function(req,res){
			User.find({},function(err,data){
				if(err){
					console.log(err);
				}else{
					res.json(data);
				}
			});
		},
		find:function(req,res){
			User.findOne({userName: req.params.userName},function(err,data){
				if(err){
					console.log(err);
				}else{
					res.json(data);
				}
			});
		},
		create:function(req,res){
			var user = new User({userName: req.body.userName, userLoginStatus: "active"});
			User.findOne({userName: req.body.userName},function(err,data){
				if(err){
					console.log(err,{error: "user name already taken"});
					// res.json({error: "user name already taken"});
				}else{
					if(!data){
						user.save(function(err,data){
							if(err){
								console.log("something went wrong",err.message);
								res.json(err);
							}else{
								console.log('successfully added a hahha!\n',data);
								res.json(data);
							}
						});
					}else if(data){
						res.json(data);
					}
				}
			});
		},
		delete:function(req,res){
			User.findOne({_id: req.params.id},function(err,data){
				if(err){
					console.log(err);
				}else{
					User.remove({_id: data._id}, function(err,data){
						if (err){
							console.log(err);
						}else{
							res.json(data);
						}
					});
				}
			});
		}
		,
		logout:function(req,res){
			User.findOne({_id: req.params.id}, function(err,data){
				if (err){
					res.json(err);
				}else{
					User.update({_id: req.params.id},{$set: {userLoginStatus: "inActive"}},function(err,data){
						if (err){
							res.json(err);
						}else{
							res.json(data);
						}
					});
				}
			});
		}
	}
})();