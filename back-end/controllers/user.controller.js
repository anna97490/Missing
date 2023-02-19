const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Create user
exports.signUp = async (req, res, next) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            ...req.body,
            // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
            password: hash
        });
        await user.save();
        res.status(201).json({ message: 'User created!' });
    } catch (error) {
        res.status(400).json({ error });   
    }
};

// Login
exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: 'Uncorrect email' });
        }
        const valid = await bcrypt.compare(req.body.password, user.password);
        if (!valid) {
            return res.status(401).json({ message: 'Uncorrect password' });
        }
        res.status(200).json({
            userId: user._id,
            token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h'}
            )
        });
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Get all users
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error });
    }
};

// Get one user by id
exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error });
    }
};

// Update user
exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
          return res.status(404).json({ message: 'User not found!' });
        // } else if(user.imageUrl !== null) {
        //   const filename = user.imageUrl.split('/images/')[1];
        //   fs.unlinkSync(`./images/${filename}`);
        }
        const userObject = req.file ? {
            ...JSON.parse(req.body.user),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };
    
        const updatedUser = await User.findOneAndUpdate({ _id: req.params.id }, userObject, {
            new: true
        });
        res.status(200).json({ message: 'Profile updated!' });
    } catch (error) {
        res.status(500).json({ error: 'Server Error!' });
    }
};

// Delete user
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found!' });  
        } else {
            // const filename = post.imageUrl.split('/images/')[1];
            // await fs.promises.unlink(`images/${filename}`);
            await User.deleteOne({ _id: req.params.id });
            res.status(200).json({ message: 'User deleted !' });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
};






