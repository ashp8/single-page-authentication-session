import Session from 'express-session';
import mongodbStore from 'connect-mongodb-session';

const MongoStore = mongodbStore(Session);

const store = new MongoStore({
    uri: process.env.DB_URI,
    collection: 'mySessions'
}) ;

const session = Session({
    secret:"this is a secret",
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
    store,
    resave:false,
    saveUninitialized: false
});
export {session};