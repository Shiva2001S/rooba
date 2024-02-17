const User = require('../models/users');
const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');

module.exports.handleLogin = async function (req, res) {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    console.log(req.body);
    if (user) {
        const tokenPayload = {name : user.name, email: user.email, password: user.password };
        let token = await jwt.sign(tokenPayload, 'secretKey', { expiresIn: '1h' });

        return res.json({
            success: true,
            user, 
            data : token
        })
    } else {
        return res.json({
            success: false
        })
    }
}

module.exports.handleSignUp = async function (req, res) {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.json({
            success: true,
            user: user
        })
    } else {
        const user = await User.create({
            name: req.body.name,
            age: req.body.age,
            country: req.body.country,
            email: req.body.email,
            password: req.body.password,
        });

        return res.json({
            success: true,
            user
        })
    }
}