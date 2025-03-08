const user = require("../models/user")

module.exports.renderSignupForm =  (req,res) =>{
    res.render("users/signup.ejs");
};


module.exports.signup = async (req, res) =>{
    try{
        let{username, email, password} = req.body;
        const newUser = new user ({email, username});
        const registeredUser = await user.register(newUser, password);
        console.log(registeredUser); 

        req.login(registeredUser, (err) =>{
            if(err){
                next(err);
            }
            req.flash("success", "Welcome to WaderLust");
            res.redirect("/listings");
        }) ;
    } catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};


module.exports.renderLoginForm = (req, res) =>{
    res.render("users/login.ejs");
};

module.exports.login =  async(req, res) =>{
    req.flash("success","WELCOME BACK TO WANDERLUST!");
    let redirectUrl = res.locals.redirectUrl ||"/listings";
    res.redirect(redirectUrl);
};

module.exports.logout =  (req, res, next) =>{
    req.logout((err) =>{
        if(err){
            return next(err);
        }
        req.flash("success", "You are logged out");
        res.redirect("/listings");
    });
};