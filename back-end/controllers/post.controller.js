const Post = require('../models/Post.model');
const User = require('../models/Post.model');
const fs = require('fs');

// Create post
exports.createPost = async (req, res, next) => {
    try {
        const postObject = JSON.parse(req.body.post);
        delete postObject._id;
        const post = new Post({
        ...postObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
        await post.save();
        res.status(200).json({ message: 'Post created !' });
    } catch (error) {
        res.status(400).json({ error });
    }
};

// Update post
exports.updatePost = async (req, res, next) => {
    try {
        const postObject = req.file ? {
            ...JSON.parse(req.body.post),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };
        
        delete postObject._id;
        const user = await User.findOne({ _id: req.params.id });
        if (user.userId != req.auth.userId) {
            res.status(401).json({ message: 'Not authorized' });
        } else {
            await Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id });
            res.status(200).json({ message: 'Post updated !' });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
};

// Delete post
exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findOne({ _id: req.params.id });
        if (post.userId != req.auth.userId) {
            res.status(401).json({ message: 'Not authorized' });
        } else {
            const filename = post.imageUrl.split('/images/')[1];
            await fs.promises.unlink(`images/${filename}`);
            await Post.deleteOne({ _id: req.params.id });
            res.status(200).json({ message: 'Post deleted !' });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Get all posts
exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ error });
    }
};

// Get one post by id
exports.getPost = async (req, res, next) => {
    try {
        const post = await Post.findOne({ _id: req.params.id });
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ error });
    }
}