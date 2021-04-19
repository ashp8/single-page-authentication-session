import fs from 'fs';
import {hash, verify} from '#root/config/cryptos';
import {User} from '#root/schemas/user.model';
import {chekifEligibletoCreateAccount} from '#root/config/junk';

const html = fs.readFileSync(__dirname+'/../browser/index.html', 'utf-8');
const HomeControler = (req, res)=>{
    res.send(html);
};

const RegisterController = async (req, res)=>{
    const {username, email, fullName, password} = req.body;
    const hashed = await hash(password);
    const ahi = await chekifEligibletoCreateAccount(User, username, email);
    if(ahi){
        return res.json({message: "User already exists"});
    }
    await User.create({
        username: username,
        email: email,
        fullName: fullName,
        password: hashed
    });
    return res.json({message: "User Created!", red:true});
};

const LoginController = async(req, res)=>{
    const {email, password} = req.body; 
    const user = await User.find({email});
    if(user.length){
        const cu = await verify(password, user[0].password);
        if(cu){
            let usr = {
                friends: user[0].friends,
                _id: user[0]._id,
                username: user[0].usrename,
                fullName: user[0].fullName,
                email:user[0].email,
                _v: user[0]._v,
                loggedIn: true
            };
            req.session.user = usr;
            return res.json(usr);
        }
    }
    return res.json({Message: "Login Failed"});
};
const LogoutController = (req, res)=>{
    req.session.destroy();
    return res.json({loggedIn:false});
}

export {HomeControler, RegisterController, LoginController, LogoutController};