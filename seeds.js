var mongoose = require("mongoose");
var dietplan_req = require("./models/dietplan_req");
var comment = require("./models/comment");

var data = [
    {
        name: "Yogesh",
        age: "21",
        weight: "75",
        height: "178",
        profession: "student",
        imgurl: "xyz",
        dietplan: "will be updated soon"
    },
    {
        name: "Prakhar",
        age: "21",
        weight: "82",
        height: "177",
        profession: "student",
        imgurl: "xyz",
        dietplan: "will be updated soon"
    },
    {
        name: "Arpit",
        age: "21",
        weight: "78",
        height: "177",
        profession: "student",
        imgurl: "xyz",
        dietplan: "will be updated soon"
    }
]

function seedDB(){
    dietplan_req.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("removed all requests")
        data.forEach(function(seed){
            dietplan_req.create(seed,function(err,data){
                if(err){
                    console.log(err);
                }
                console.log("added request")
                comment.create(
                    {
                        text: "please update dietplan",
                        author: "yogesh"
                    },
                    function(err, comment){
                        if(err){
                            console.log(err);
                        }else{
                            data.comments.push(comment);
                            data.save();
                            console.log("comment is created");
                        }
                    }
                )
            })
        })
    }
)}
module.exports = seedDB;