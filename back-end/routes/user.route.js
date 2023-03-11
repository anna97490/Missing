const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const multer = require('../middleware/multer-config');
const userController = require('../controllers/user.controller');

  
// Create user 
router.post('/signup', multer, userController.signUp);

// Login
router.post('/login', userController.login)

// Get user by id
router.get('/:id', auth, userController.getUser);

// Get all users
router.get('/', auth, userController.getAllUsers);

// Update user
router.put('/:id', auth, multer, userController.updateUser);
  
// Delete user
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;