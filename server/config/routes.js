var users = require("./../controllers/users.js");
var questions = require("./../controllers/questions.js");
var answers = require("./../controllers/answers.js");
module.exports = function(app) {
	app.get("/users", function(req,res){
		users.index(req,res);
	});
	app.get("/users/:userName", function(req,res){
		users.find(req,res);
	});
	app.post("/users", function(req,res){
		users.create(req,res);
	});
	app.delete("/users/:id", function(req,res){
		users.delete(req,res);
	});
	app.post("/users/:id/logout", function(req,res){
		users.logout(req,res);
	});
	app.get("/questions", function(req,res){
		questions.index(req,res);
	});
	app.get("/questions/:id", function(req,res){
		questions.findSpecificQuestion(req,res);
	});
	app.post("/questions", function(req,res){
		questions.create(req,res);
	});
	app.delete("/questions/:id", function(req,res){
		questions.delete(req,res);
	});
	app.get("/answers/question/:id", function(req,res){
		answers.index(req,res);
	});
	app.post("/answers/question/:id", function(req,res){
		answers.create(req,res);
	});
	app.post("/answers/question/:id/like", function(req,res){
		answers.like(req,res);
	});
}