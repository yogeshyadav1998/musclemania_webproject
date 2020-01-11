var express = require("express");
var request = require("request");
var passport = require("passport");
var bodyparser = require("body-parser");
var passportlocal = require("passport-local");
var passportlocalmongoose = require("passport-local-mongoose");


var app = express();
var user = require('./models/user');
const mongoose = require('mongoose');

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost:27017/trial', {useNewUrlParser: true});


passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
passport.use(new passportlocal(user.authenticate()));
app.use(require("express-session")({
    secret: "my name is yogesh",
    saveUninitialized: false,
    resave: false
}));
app.use(passport.initialize());
app.use(passport.session());



app.get("/",function(req, res){
    res.render("home");
});

app.get("/secret",isLoggedIn, function(req, res){
    res.render("secret")
});

app.get("/register",function(req, res){
    res.render("register")
});

app.get("/login",function(req, res){
    res.render("login")
});

app.get("/logout",function(req, res){
    req.logout();
    res.redirect("/");
})




app.post("/register",function(req, res){

    user.register( new user({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            res.render("register")
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect('/secret');
          });
    });
});

app.post("/login", passport.authenticate("local",{
    successRedirect: "/secret",
    failureRedirect: "/login"
}),function(req, res){  
});



function isLoggedIn(req, res, next){

    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}






app.listen(3000,function(){
    console.log('SERVER HAS BEEN STARTED !!')
});