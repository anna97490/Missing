const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const multer = require('../middleware/multer-config');
const userController = require('../controllers/user.controller');

  
// Create user (signUp)
router.post('/signup', multer, userController.signUp);

// Update user
router.put('/:id', auth, multer, userController.updateUser);
  
// Delete user
router.delete('/:id', auth, userController.deleteUser);

// Get One user by id
router.get('/:id', auth, userController.getUser);

// Get all users
router.get('/', auth, userController.getAllUsers);

// Login
router.get('/login', userController.login)
   
module.exports = router;