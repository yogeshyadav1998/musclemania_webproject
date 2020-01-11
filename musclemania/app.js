var express = require("express");
var app = express();
var request = require("request");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/musclemania', {useNewUrlParser: true});
app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");



app.get("/",function(req,res){
    res.render("landing");
});

app.get("/chest",function(req,res){
    res.render("chest");
});

app.get("/back",function(req,res){
    res.send("here you get back workout ecercises.")
});

app.get("/biceps",function(req,res){
    res.send("here you get biceps workout ecercises.")
});

app.get("/triceps",function(req,res){
    res.send("here you get triceps workout ecercises.")
});

app.get("/shoulder",function(req,res){
    res.send("here you get shoulder workout ecercises.")
});

app.get("/legs",function(req,res){
    res.send("here you get legs workout ecercises.")
});

var dietplan_reqSchema = new mongoose.Schema({
    name: String,
    age: Number,
    weight: Number,
    height: Number,
    profession: String,
    imgurl: String,
    dietplan: String
});

var dietplan_req = mongoose.model("dietplan_req", dietplan_reqSchema);


app.get("/dietplan_reqs",function(req,res){
    dietplan_req.find({},function(err,dietplan_reqs){
        if(err){
            console.log(err)
        }
        else{
            res.render("dietplan_reqs",{dietplans: dietplan_reqs});
        }
    })
});

app.post("/dietplan_reqs",function(req,res){
    var name = req.body.name;
    var age = req.body.age;
    var weight = req.body.weight;
    var height = req.body.height;
    var profession = req.body.profession;
    var imgurl = req.body.imgurl;
    var dp = "will be updated soon";
    var newdietplan_req = {name: name, age: age, weight: weight, height: height,profession: profession, imgurl:imgurl,dietplan: dp }
    dietplan_req.create(newdietplan_req,
        function(err,dietplan_req){
            if(err){
                console.log(err);
            }
            else{
                res.redirect("/dietplan_reqs")
            }
        });
});

app.get("/dietplan_reqs/newdietplan_req",function(req,res){
    res.render("newdietplan_req.ejs")
});

app.get("/dietplan_reqs/:id",function(req,res){
    dietplan_req.findById(req.params.id,function(err,dietplan_req){
        if(err){
            console.log(err)
        }
        else{
            res.render("dietplan", {dietplan_req: dietplan_req});
        }
    })
});





















app.listen(3000,function(){
    console.log('SERVER HAS BEEN STARTED !!')
});