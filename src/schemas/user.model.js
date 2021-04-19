import {model, Schema} from 'mongoose';

const UserSchema = new Schema({
    username: {
        type: Schema.Types.String,
        unique:true,
    },
    fullName:{
        type: Schema.Types.String,
        unique: false
    },
    email: {
        type: Schema.Types.String,
        unique: true
    },
    password: {
        type: Schema.Types.String
    },
    friends: {
        type: [Schema.Types.ObjectId],
        unique: false,
    }
        
});

const User = model("User", UserSchema);
export {User};