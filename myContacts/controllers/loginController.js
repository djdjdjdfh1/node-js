const asyncHandler = require('express-async-handler');

const getLogin = (req, res) => {
    res.render('home');
}

const loginUser = asyncHandler((req,res) => {
    const {username, password} = req.body;

    if (username === 'admin' && password === '1234') {
        res.redirect('/contacts')
    } else {
        res.send("Login failure");
    }
}) 

module.exports = {getLogin, loginUser};