var mongoose = require("mongoose");

var dietplan_reqSchema = new mongoose.Schema({
    name: String,
    age: Number,
    weight: Number,
    height: Number,
    profession: String,
    imgurl: String,
    dietplan: String,
    comments: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "comment"
        }]
});

module.exports = mongoose.model("dietplan_req", dietplan_reqSchema );