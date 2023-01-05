const getAuthData = require('./auth.service');
const { verify } = require('jsonwebtoken');
const { compare } = require('bcryptjs');
const AdminModel = require('../models/admin');

class AuthController {
    async signup(req, res) {
        try {
            const data = await getAuthData(req.body.password.toLowerCase(), { username: req.body.username });
            const admin = new AdminModel({ 
                ...req.body,
                password: data.passwordHash,
                accessToken: data.token
            });
            await admin.save();

            return res.status(201).json(admin);
        } catch (error) {
            return res.status(404).json({
                msg: 'this username is used.'
            });
        }
    }
    verification(req, res) {
        try {
            const data = verify(req.body.token, process.env.SECRET);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json({ msg: 'token not found.' });
        }
    }
    async signin(req, res) {
        try {
            const customer = await AdminModel.findOne({ username: req.body.username });
            const validation = await compare(req.body.password.toLowerCase(), customer.password);

            if (customer && validation) {
                return res.status(200).json({ token: customer.accessToken });
            }
            return res.status(403).json({ msg: 'username or password not valid.' });
        } catch (error) {
            return res.status(404).json({ msg: 'username or password not valid.' });
        }
    }
};

module.exports = new AuthController();