const chekifEligibletoCreateAccount = async (Model, username, email)=>{
    let a = false, b = false;
    const user = await(Model.find({username}));
    if(user.length) a=true;
    const userb = await(Model.find({email}));
    if(userb.length) b = true;
    return a || b;
}

const verifySessionHome = (req, res, next)=>{
    if(req.session.user){
        return res.redirect('/');
    };
    return next();
}

const verifySessionMiddleware = (req, res, next)=>{
    if(req.session.user){
       return res.json({message: "user already logged in", loggedIn:true});
    };
    return next();
};

const validateSession = (req, res, next)=>{

}

export {chekifEligibletoCreateAccount, verifySessionMiddleware, verifySessionHome};