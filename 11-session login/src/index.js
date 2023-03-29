const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./db')
const MySQLStore = require('express-mysql-session')(session);

const server = express();
server.use(session({
    secret: 'nmadfgkö456nö34k6123n-gkösf2345',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true, httpOnly: true, sameSite: true, maxAge: 1000 * 60 * 60 },
    store: new MySQLStore({
        host: 'localhost',
        user: 'root',
        database: 'rest',
        //port: '3307'
    })
}));

server.use(cookieParser());
server.use(express.urlencoded());
server.use(express.json());

//routs
server.get('/login', (req, res) => {
    res.sendFile(path.resolve('frontend/login.html'))
})
server.get('/dashboard', (req, res) => {
    req.sessionStore.get(req.cookies.session_id, (err, data) => {
        if (err) throw err
        if (data == null) {
            res.redirect('/login')
        }
        res.sendFile(path.resolve('frontend/dashboard.html'))
    })

})
server.get('/', (req, res) => {
    res.sendFile(path.resolve('frontend/index.html'))
})

const user = {
    email: 'chris',
    password: '123'
}
server.post('/api/login', (req, res) => {
    if (user.email == req.body.email) {
        req.session.user = { user: user, loggedIn: true }
        res.cookie('session_id', req.sessionID, { httpOnly: true, secure: true, sameSite: true });
        res.redirect('/dashboard')
    } else {
        res.redirect('back')
    }

})

server.listen(3000, () => {
    console.log('web up')
})