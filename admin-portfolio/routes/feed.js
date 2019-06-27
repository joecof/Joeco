const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

//GET ALL POST
router.get('/posts', feedController.getPosts);

//POST
router.post('/post', feedController.postPost);

//GET SINGLE POST
router.get('/post/:postId', feedController.getPost);

//DELETE SINGLE POST 
router.delete('/post/:postId', feedController.deletePost);

//UPDATE SINGLE POST
router.put('/post/:postId', feedController.updatePost);

module.exports = router; 